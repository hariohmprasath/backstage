## API Report File for "@backstage/plugin-auth-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { CatalogApi } from '@backstage/catalog-client';
import { Config } from '@backstage/config';
import { Entity } from '@backstage/catalog-model';
import express from 'express';
import { JSONWebKey } from 'jose';
import { Logger as Logger_2 } from 'winston';
import { PluginDatabaseManager } from '@backstage/backend-common';
import { PluginEndpointDiscovery } from '@backstage/backend-common';
import { Profile } from 'passport';
import { UserEntity } from '@backstage/catalog-model';

// Warning: (ae-missing-release-tag) "AuthProviderFactory" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type AuthProviderFactory = (
  options: AuthProviderFactoryOptions,
) => AuthProviderRouteHandlers;

// Warning: (ae-missing-release-tag) "AuthProviderFactoryOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type AuthProviderFactoryOptions = {
  providerId: string;
  globalConfig: AuthProviderConfig;
  config: Config;
  logger: Logger_2;
  tokenIssuer: TokenIssuer;
  discovery: PluginEndpointDiscovery;
  catalogApi: CatalogApi;
  identityResolver?: ExperimentalIdentityResolver;
};

// Warning: (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
// Warning: (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
// Warning: (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
// Warning: (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
// Warning: (ae-missing-release-tag) "AuthProviderRouteHandlers" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export interface AuthProviderRouteHandlers {
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
  frameHandler(req: express.Request, res: express.Response): Promise<void>;
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
  logout?(req: express.Request, res: express.Response): Promise<void>;
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
  refresh?(req: express.Request, res: express.Response): Promise<void>;
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
  start(req: express.Request, res: express.Response): Promise<void>;
}

// Warning: (ae-missing-release-tag) "AuthResponse" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type AuthResponse<ProviderInfo> = {
  providerInfo: ProviderInfo;
  profile: ProfileInfo;
  backstageIdentity?: BackstageIdentity;
};

// Warning: (ae-missing-release-tag) "BackstageIdentity" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type BackstageIdentity = {
  id: string;
  idToken?: string;
  token?: string;
  entity?: Entity;
};

// Warning: (ae-missing-release-tag) "createGoogleProvider" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const createGoogleProvider: (
  options?: GoogleProviderOptions | undefined,
) => AuthProviderFactory;

// Warning: (ae-missing-release-tag) "createMicrosoftProvider" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const createMicrosoftProvider: (
  options?: MicrosoftProviderOptions | undefined,
) => AuthProviderFactory;

// Warning: (ae-missing-release-tag) "createRouter" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function createRouter({
  logger,
  config,
  discovery,
  database,
  providerFactories,
}: RouterOptions): Promise<express.Router>;

// Warning: (ae-missing-release-tag) "factories" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const defaultAuthProviderFactories: {
  [providerId: string]: AuthProviderFactory;
};

// Warning: (ae-missing-release-tag) "encodeState" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const encodeState: (state: OAuthState) => string;

// Warning: (ae-missing-release-tag) "ensuresXRequestedWith" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const ensuresXRequestedWith: (req: express.Request) => boolean;

// Warning: (ae-forgotten-export) The symbol "SignInResolver" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "googleEmailSignInResolver" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const googleEmailSignInResolver: SignInResolver<OAuthResult>;

// Warning: (ae-missing-release-tag) "GoogleProviderOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type GoogleProviderOptions = {
  authHandler?: AuthHandler<OAuthResult>;
  signIn?: {
    resolver?: SignInResolver<OAuthResult>;
  };
};

// Warning: (ae-missing-release-tag) "IdentityClient" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export class IdentityClient {
  constructor(options: { discovery: PluginEndpointDiscovery; issuer: string });
  authenticate(token: string | undefined): Promise<BackstageIdentity>;
  static getBearerToken(
    authorizationHeader: string | undefined,
  ): string | undefined;
  listPublicKeys(): Promise<{
    keys: JSONWebKey[];
  }>;
}

// Warning: (ae-missing-release-tag) "microsoftEmailSignInResolver" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const microsoftEmailSignInResolver: SignInResolver<OAuthResult>;

// Warning: (ae-missing-release-tag) "MicrosoftProviderOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type MicrosoftProviderOptions = {
  authHandler?: AuthHandler<OAuthResult>;
  signIn?: {
    resolver?: SignInResolver<OAuthResult>;
  };
};

// Warning: (ae-missing-release-tag) "OAuthAdapter" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class OAuthAdapter implements AuthProviderRouteHandlers {
  constructor(handlers: OAuthHandlers, options: Options);
  // (undocumented)
  frameHandler(req: express.Request, res: express.Response): Promise<void>;
  // Warning: (ae-forgotten-export) The symbol "Options" needs to be exported by the entry point index.d.ts
  //
  // (undocumented)
  static fromConfig(
    config: AuthProviderConfig,
    handlers: OAuthHandlers,
    options: Pick<
      Options,
      'providerId' | 'persistScopes' | 'disableRefresh' | 'tokenIssuer'
    >,
  ): OAuthAdapter;
  // (undocumented)
  logout(req: express.Request, res: express.Response): Promise<void>;
  // (undocumented)
  refresh(req: express.Request, res: express.Response): Promise<void>;
  // (undocumented)
  start(req: express.Request, res: express.Response): Promise<void>;
}

// Warning: (ae-missing-release-tag) "OAuthEnvironmentHandler" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class OAuthEnvironmentHandler implements AuthProviderRouteHandlers {
  constructor(handlers: Map<string, AuthProviderRouteHandlers>);
  // (undocumented)
  frameHandler(req: express.Request, res: express.Response): Promise<void>;
  // (undocumented)
  logout(req: express.Request, res: express.Response): Promise<void>;
  // (undocumented)
  static mapConfig(
    config: Config,
    factoryFunc: (envConfig: Config) => AuthProviderRouteHandlers,
  ): OAuthEnvironmentHandler;
  // (undocumented)
  refresh(req: express.Request, res: express.Response): Promise<void>;
  // (undocumented)
  start(req: express.Request, res: express.Response): Promise<void>;
}

// Warning: (ae-missing-release-tag) "OAuthHandlers" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export interface OAuthHandlers {
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
  handler(req: express.Request): Promise<{
    response: AuthResponse<OAuthProviderInfo>;
    refreshToken?: string;
  }>;
  logout?(): Promise<void>;
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
  refresh?(req: OAuthRefreshRequest): Promise<AuthResponse<OAuthProviderInfo>>;
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (tsdoc-param-tag-with-invalid-type) The @param block should not include a JSDoc-style '{type}'
  // Warning: (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
  // Warning: (ae-forgotten-export) The symbol "RedirectInfo" needs to be exported by the entry point index.d.ts
  start(req: OAuthStartRequest): Promise<RedirectInfo>;
}

// Warning: (ae-missing-release-tag) "OAuthProviderInfo" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type OAuthProviderInfo = {
  accessToken: string;
  idToken?: string;
  expiresInSeconds?: number;
  scope: string;
  refreshToken?: string;
};

// Warning: (ae-missing-release-tag) "OAuthProviderOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export type OAuthProviderOptions = {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
};

// Warning: (ae-missing-release-tag) "OAuthRefreshRequest" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type OAuthRefreshRequest = express.Request<{}> & {
  scope: string;
  refreshToken: string;
};

// Warning: (ae-missing-release-tag) "OAuthResponse" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type OAuthResponse = AuthResponse<OAuthProviderInfo>;

// Warning: (ae-missing-release-tag) "OAuthResult" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type OAuthResult = {
  fullProfile: Profile;
  params: {
    id_token?: string;
    scope: string;
    expires_in: number;
  };
  accessToken: string;
  refreshToken?: string;
};

// Warning: (ae-missing-release-tag) "OAuthStartRequest" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type OAuthStartRequest = express.Request<{}> & {
  scope: string;
  state: OAuthState;
};

// Warning: (ae-missing-release-tag) "OAuthState" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type OAuthState = {
  nonce: string;
  env: string;
};

// Warning: (ae-missing-release-tag) "postMessageResponse" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const postMessageResponse: (
  res: express.Response,
  appOrigin: string,
  response: WebMessageResponse,
) => void;

// Warning: (ae-missing-release-tag) "ProfileInfo" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export type ProfileInfo = {
  email?: string;
  displayName?: string;
  picture?: string;
};

// Warning: (ae-missing-release-tag) "readState" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const readState: (stateString: string) => OAuthState;

// Warning: (ae-missing-release-tag) "RouterOptions" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export interface RouterOptions {
  // (undocumented)
  config: Config;
  // (undocumented)
  database: PluginDatabaseManager;
  // (undocumented)
  discovery: PluginEndpointDiscovery;
  // (undocumented)
  logger: Logger_2;
  // Warning: (ae-forgotten-export) The symbol "ProviderFactories" needs to be exported by the entry point index.d.ts
  //
  // (undocumented)
  providerFactories?: ProviderFactories;
}

// Warning: (ae-missing-release-tag) "TokenIssuer" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export type TokenIssuer = {
  issueToken(params: TokenParams): Promise<string>;
  listPublicKeys(): Promise<{
    keys: AnyJWK[];
  }>;
};

// Warning: (ae-missing-release-tag) "verifyNonce" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const verifyNonce: (req: express.Request, providerId: string) => void;

// Warning: (ae-missing-release-tag) "WebMessageResponse" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export type WebMessageResponse =
  | {
      type: 'authorization_response';
      response: AuthResponse<unknown>;
    }
  | {
      type: 'authorization_response';
      error: Error;
    };

// Warnings were encountered during analysis:
//
// src/identity/types.d.ts:25:5 - (ae-forgotten-export) The symbol "TokenParams" needs to be exported by the entry point index.d.ts
// src/identity/types.d.ts:31:9 - (ae-forgotten-export) The symbol "AnyJWK" needs to be exported by the entry point index.d.ts
// src/providers/google/provider.d.ts:36:5 - (ae-forgotten-export) The symbol "AuthHandler" needs to be exported by the entry point index.d.ts
// src/providers/types.d.ts:105:5 - (ae-forgotten-export) The symbol "AuthProviderConfig" needs to be exported by the entry point index.d.ts
// src/providers/types.d.ts:111:5 - (ae-forgotten-export) The symbol "ExperimentalIdentityResolver" needs to be exported by the entry point index.d.ts
// src/providers/types.d.ts:128:8 - (tsdoc-missing-deprecation-message) The @deprecated block must include a deprecation message, e.g. describing the recommended alternative

// (No @packageDocumentation comment for this package)
```
