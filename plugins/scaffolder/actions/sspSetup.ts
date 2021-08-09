/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createTemplateAction } from '@backstage/plugin-scaffolder-backend';
import fs from 'fs-extra';
import { InputError } from '@backstage/errors';
import {
  GithubCredentialsProvider,
  ScmIntegrationRegistry,
} from '@backstage/integration';
import { resolveSafeChildPath, Git } from '@backstage/backend-common';
import { JsonObject, Config } from '@backstage/config';

export type SspActionInput = {
  targetPath: string;
  values: JsonObject;
};

export function createSsp(options: {
  integrations: ScmIntegrationRegistry;
  config: Config;
}) {
  const { integrations, config } = options;

  // Get SSP configuration from app-config.yaml
  const repo = config.getString('ssp.repo');
  const repoOwner = config.getString('ssp.owner');

  const credentialsProviders = new Map(
    integrations.github.list().map(integration => {
      const provider = GithubCredentialsProvider.create(integration.config);
      return [integration.config.host, provider];
    }),
  );

  return createTemplateAction<SspActionInput>({
    id: 'fs:ssp',
    description: 'Action to provision services using EKS SSP',
    schema: {
      input: {
        required: ['values', 'targetPath'],
        type: 'object',
        properties: {
          values: {
            title: 'Template Values',
            description: 'Values to pass on to cookiecutter for templating',
            type: 'object',
          },
          targetPath: {
            type: 'string',
            title: 'Subdirectory in workspace',
            description: 'Target directory to copy files to',
          },
        },
      },
    },
    async handler(ctx) {
      const targetpath = resolveSafeChildPath(
        ctx.workspacePath,
        ctx.input.targetPath,
      );
      const owner = ctx.input.values.owner;
      const env = ctx.input.values.environment;
      const k8sDeploymentName = ctx.input.values.k8sDeploymentName;
      const k8sServiceName = ctx.input.values.k8sServiceName;

      const host = 'github.com';
      const remoteUrl = `https://${host}/${repoOwner}/${repo}.git`;

      const credentialsProvider = credentialsProviders.get(host);
      const integrationConfig = integrations.github.byHost(host);

      if (!credentialsProvider || !integrationConfig) {
        throw new InputError(
          `No matching integration configuration for host ${host}, please check your integrations config`,
        );
      }

      // Get Git token
      const { token } = await credentialsProvider.getCredentials({
        url: `https://${host}/${encodeURIComponent(
          repoOwner,
        )}/${encodeURIComponent(repo)}`,
      });

      if (!token) {
        throw new InputError(
          `No token available for host: ${host}, with owner ${owner}, and repo ${repo}`,
        );
      }

      try {
        const sourcePath = `${ctx.workspacePath}/${ctx.input.targetPath}`;
        const auth = {
          username: 'x-access-token',
          password: token,
        };

        // Auth git
        const git = Git.fromAuth({
          username: auth.username,
          password: auth.password,
          logger: ctx.logger,
        });

        // Git clone - SSP repository
        await git.clone({
          url: remoteUrl,
          dir: sourcePath,
        });

        // Add new k8s service and deployments with cookiecutter
        // envs/${env}/templates/team-${owner}.yaml
        const envPath = `${targetpath}/envs/${env}/templates`;
        fs.mkdirSync(envPath, { recursive: true });
        fs.copySync(
          `${ctx.workspacePath}/codebase/ssp-templates/team-x.yaml`,
          `${envPath}/team-${owner}.yaml`,
        );

        // teams/team-burnham/dev/guestbook-ui-deployment.yaml
        const k8sArtifactPath = `${targetpath}/teams/team-${owner}/${env}`;
        fs.mkdirSync(k8sArtifactPath, { recursive: true });
        fs.copySync(
          `${ctx.workspacePath}/codebase/ssp-templates/deployment.yaml`,
          `${k8sArtifactPath}/${k8sDeploymentName}-deployment.yaml`,
        );
        fs.copySync(
          `${ctx.workspacePath}/codebase/ssp-templates/service.yaml`,
          `${k8sArtifactPath}/${k8sServiceName}-service.yaml`,
        );

        // Git add
        await git.add({
          dir: sourcePath,
          filepath: `envs/${env}/templates/team-${owner}.yaml`,
        });
        await git.add({
          dir: sourcePath,
          filepath: `teams/team-${owner}/${env}/${k8sDeploymentName}-deployment.yaml`,
        });
        await git.add({
          dir: sourcePath,
          filepath: `teams/team-${owner}/${env}/${k8sServiceName}-service.yaml`,
        });

        const authorInfo = {
          name: !repoOwner ? 'Scaffolder' : repoOwner,
          email: !repoOwner
            ? 'scaffolder@backstage.io'
            : `${repoOwner}@aws.com`,
        };

        // Git commit
        await git.commit({
          dir: sourcePath,
          message: `${k8sDeploymentName} deployment with ${k8sServiceName} added to ${owner} team`,
          author: authorInfo,
          committer: authorInfo,
        });

        // Git push
        await git.push({
          dir: sourcePath,
          remote: 'origin',
        });

        // Cleanup local ssp git repo
        fs.removeSync(sourcePath);

        ctx.logger.info(
          `Successfully created SSP for ${k8sServiceName} with ${k8sDeploymentName}`,
        );
      } catch (err) {
        ctx.logger.error(`Failed to copy file`, err);
        throw err;
      }
    },
  });
}
