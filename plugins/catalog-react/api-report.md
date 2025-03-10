## API Report File for "@backstage/plugin-catalog-react"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { ApiRef } from '@backstage/core-plugin-api';
import { AsyncState } from 'react-use/lib/useAsync';
import { CATALOG_FILTER_EXISTS } from '@backstage/catalog-client';
import { CatalogApi } from '@backstage/catalog-client';
import { ComponentEntity } from '@backstage/catalog-model';
import { Context } from 'react';
import { Entity } from '@backstage/catalog-model';
import { EntityName } from '@backstage/catalog-model';
import { LinkProps } from '@backstage/core-components';
import { PropsWithChildren } from 'react';
import { default as React_2 } from 'react';
import { ReactNode } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';
import { ScmIntegrationRegistry } from '@backstage/integration';
import { SystemEntity } from '@backstage/catalog-model';
import { TableColumn } from '@backstage/core-components';
import { UserEntity } from '@backstage/catalog-model';

export { CATALOG_FILTER_EXISTS };

export { CatalogApi };

// Warning: (ae-missing-release-tag) "catalogApiRef" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const catalogApiRef: ApiRef<CatalogApi>;

// Warning: (ae-missing-release-tag) "catalogRouteRef" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const catalogRouteRef: RouteRef<undefined>;

// Warning: (ae-missing-release-tag) "createDomainColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createDomainColumn<T extends Entity>(): TableColumn<T>;

// Warning: (ae-missing-release-tag) "createEntityRefColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createEntityRefColumn<T extends Entity>({
  defaultKind,
}: {
  defaultKind?: string;
}): TableColumn<T>;

// Warning: (ae-missing-release-tag) "createEntityRelationColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createEntityRelationColumn<T extends Entity>({
  title,
  relation,
  defaultKind,
  filter: entityFilter,
}: {
  title: string;
  relation: string;
  defaultKind?: string;
  filter?: {
    kind: string;
  };
}): TableColumn<T>;

// Warning: (ae-missing-release-tag) "createMetadataDescriptionColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createMetadataDescriptionColumn<T extends Entity>(): TableColumn<T>;

// Warning: (ae-missing-release-tag) "createOwnerColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createOwnerColumn<T extends Entity>(): TableColumn<T>;

// Warning: (ae-missing-release-tag) "createSpecLifecycleColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createSpecLifecycleColumn<T extends Entity>(): TableColumn<T>;

// Warning: (ae-missing-release-tag) "createSpecTypeColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createSpecTypeColumn<T extends Entity>(): TableColumn<T>;

// Warning: (ae-missing-release-tag) "createSystemColumn" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
function createSystemColumn<T extends Entity>(): TableColumn<T>;

// Warning: (ae-missing-release-tag) "DefaultEntityFilters" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type DefaultEntityFilters = {
  kind?: EntityKindFilter;
  type?: EntityTypeFilter;
  user?: UserListFilter;
  owners?: EntityOwnerFilter;
  lifecycles?: EntityLifecycleFilter;
  tags?: EntityTagFilter;
  text?: EntityTextFilter;
};

// Warning: (ae-forgotten-export) The symbol "EntityLoadingStatus" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "EntityContext" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityContext: Context<EntityLoadingStatus>;

// Warning: (ae-missing-release-tag) "EntityFilter" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type EntityFilter = {
  getCatalogFilters?: () => Record<string, string | string[]>;
  filterEntity?: (entity: Entity) => boolean;
  toQueryValue?: () => string | string[];
};

// Warning: (ae-missing-release-tag) "EntityKindFilter" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class EntityKindFilter implements EntityFilter {
  constructor(value: string);
  // (undocumented)
  getCatalogFilters(): Record<string, string | string[]>;
  // (undocumented)
  toQueryValue(): string;
  // (undocumented)
  readonly value: string;
}

// Warning: (ae-forgotten-export) The symbol "EntityKindFilterProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "EntityKindPicker" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityKindPicker: ({
  initialFilter,
  hidden,
}: EntityKindFilterProps) => JSX.Element | null;

// Warning: (ae-missing-release-tag) "EntityLifecycleFilter" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class EntityLifecycleFilter implements EntityFilter {
  constructor(values: string[]);
  // (undocumented)
  filterEntity(entity: Entity): boolean;
  // (undocumented)
  toQueryValue(): string[];
  // (undocumented)
  readonly values: string[];
}

// Warning: (ae-missing-release-tag) "EntityLifecyclePicker" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityLifecyclePicker: () => JSX.Element | null;

// Warning: (ae-forgotten-export) The symbol "EntityListContextProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "EntityListContext" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityListContext: React_2.Context<
  EntityListContextProps<any> | undefined
>;

// Warning: (ae-missing-release-tag) "EntityListProvider" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityListProvider: <EntityFilters extends DefaultEntityFilters>({
  children,
}: PropsWithChildren<{}>) => JSX.Element;

// Warning: (ae-missing-release-tag) "EntityOwnerFilter" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class EntityOwnerFilter implements EntityFilter {
  constructor(values: string[]);
  // (undocumented)
  filterEntity(entity: Entity): boolean;
  // (undocumented)
  toQueryValue(): string[];
  // (undocumented)
  readonly values: string[];
}

// Warning: (ae-missing-release-tag) "EntityOwnerPicker" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityOwnerPicker: () => JSX.Element | null;

// Warning: (ae-forgotten-export) The symbol "EntityProviderProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "EntityProvider" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityProvider: ({
  entity,
  children,
}: EntityProviderProps) => JSX.Element;

// Warning: (ae-forgotten-export) The symbol "EntityRefLinkProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "EntityRefLink" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityRefLink: React_2.ForwardRefExoticComponent<
  Pick<
    EntityRefLinkProps,
    | 'replace'
    | 'media'
    | 'hidden'
    | 'dir'
    | 'slot'
    | 'style'
    | 'title'
    | 'color'
    | 'underline'
    | 'display'
    | 'translate'
    | 'prefix'
    | 'children'
    | 'key'
    | 'id'
    | 'classes'
    | 'defaultChecked'
    | 'defaultValue'
    | 'suppressContentEditableWarning'
    | 'suppressHydrationWarning'
    | 'accessKey'
    | 'className'
    | 'contentEditable'
    | 'contextMenu'
    | 'draggable'
    | 'lang'
    | 'placeholder'
    | 'spellCheck'
    | 'tabIndex'
    | 'radioGroup'
    | 'role'
    | 'about'
    | 'datatype'
    | 'inlist'
    | 'property'
    | 'resource'
    | 'typeof'
    | 'vocab'
    | 'autoCapitalize'
    | 'autoCorrect'
    | 'autoSave'
    | 'itemProp'
    | 'itemScope'
    | 'itemType'
    | 'itemID'
    | 'itemRef'
    | 'results'
    | 'security'
    | 'unselectable'
    | 'inputMode'
    | 'is'
    | 'aria-activedescendant'
    | 'aria-atomic'
    | 'aria-autocomplete'
    | 'aria-busy'
    | 'aria-checked'
    | 'aria-colcount'
    | 'aria-colindex'
    | 'aria-colspan'
    | 'aria-controls'
    | 'aria-current'
    | 'aria-describedby'
    | 'aria-details'
    | 'aria-disabled'
    | 'aria-dropeffect'
    | 'aria-errormessage'
    | 'aria-expanded'
    | 'aria-flowto'
    | 'aria-grabbed'
    | 'aria-haspopup'
    | 'aria-hidden'
    | 'aria-invalid'
    | 'aria-keyshortcuts'
    | 'aria-label'
    | 'aria-labelledby'
    | 'aria-level'
    | 'aria-live'
    | 'aria-modal'
    | 'aria-multiline'
    | 'aria-multiselectable'
    | 'aria-orientation'
    | 'aria-owns'
    | 'aria-placeholder'
    | 'aria-posinset'
    | 'aria-pressed'
    | 'aria-readonly'
    | 'aria-relevant'
    | 'aria-required'
    | 'aria-roledescription'
    | 'aria-rowcount'
    | 'aria-rowindex'
    | 'aria-rowspan'
    | 'aria-selected'
    | 'aria-setsize'
    | 'aria-sort'
    | 'aria-valuemax'
    | 'aria-valuemin'
    | 'aria-valuenow'
    | 'aria-valuetext'
    | 'dangerouslySetInnerHTML'
    | 'onCopy'
    | 'onCopyCapture'
    | 'onCut'
    | 'onCutCapture'
    | 'onPaste'
    | 'onPasteCapture'
    | 'onCompositionEnd'
    | 'onCompositionEndCapture'
    | 'onCompositionStart'
    | 'onCompositionStartCapture'
    | 'onCompositionUpdate'
    | 'onCompositionUpdateCapture'
    | 'onFocus'
    | 'onFocusCapture'
    | 'onBlur'
    | 'onBlurCapture'
    | 'onChange'
    | 'onChangeCapture'
    | 'onBeforeInput'
    | 'onBeforeInputCapture'
    | 'onInput'
    | 'onInputCapture'
    | 'onReset'
    | 'onResetCapture'
    | 'onSubmit'
    | 'onSubmitCapture'
    | 'onInvalid'
    | 'onInvalidCapture'
    | 'onLoad'
    | 'onLoadCapture'
    | 'onError'
    | 'onErrorCapture'
    | 'onKeyDown'
    | 'onKeyDownCapture'
    | 'onKeyPress'
    | 'onKeyPressCapture'
    | 'onKeyUp'
    | 'onKeyUpCapture'
    | 'onAbort'
    | 'onAbortCapture'
    | 'onCanPlay'
    | 'onCanPlayCapture'
    | 'onCanPlayThrough'
    | 'onCanPlayThroughCapture'
    | 'onDurationChange'
    | 'onDurationChangeCapture'
    | 'onEmptied'
    | 'onEmptiedCapture'
    | 'onEncrypted'
    | 'onEncryptedCapture'
    | 'onEnded'
    | 'onEndedCapture'
    | 'onLoadedData'
    | 'onLoadedDataCapture'
    | 'onLoadedMetadata'
    | 'onLoadedMetadataCapture'
    | 'onLoadStart'
    | 'onLoadStartCapture'
    | 'onPause'
    | 'onPauseCapture'
    | 'onPlay'
    | 'onPlayCapture'
    | 'onPlaying'
    | 'onPlayingCapture'
    | 'onProgress'
    | 'onProgressCapture'
    | 'onRateChange'
    | 'onRateChangeCapture'
    | 'onSeeked'
    | 'onSeekedCapture'
    | 'onSeeking'
    | 'onSeekingCapture'
    | 'onStalled'
    | 'onStalledCapture'
    | 'onSuspend'
    | 'onSuspendCapture'
    | 'onTimeUpdate'
    | 'onTimeUpdateCapture'
    | 'onVolumeChange'
    | 'onVolumeChangeCapture'
    | 'onWaiting'
    | 'onWaitingCapture'
    | 'onAuxClick'
    | 'onAuxClickCapture'
    | 'onClick'
    | 'onClickCapture'
    | 'onContextMenu'
    | 'onContextMenuCapture'
    | 'onDoubleClick'
    | 'onDoubleClickCapture'
    | 'onDrag'
    | 'onDragCapture'
    | 'onDragEnd'
    | 'onDragEndCapture'
    | 'onDragEnter'
    | 'onDragEnterCapture'
    | 'onDragExit'
    | 'onDragExitCapture'
    | 'onDragLeave'
    | 'onDragLeaveCapture'
    | 'onDragOver'
    | 'onDragOverCapture'
    | 'onDragStart'
    | 'onDragStartCapture'
    | 'onDrop'
    | 'onDropCapture'
    | 'onMouseDown'
    | 'onMouseDownCapture'
    | 'onMouseEnter'
    | 'onMouseLeave'
    | 'onMouseMove'
    | 'onMouseMoveCapture'
    | 'onMouseOut'
    | 'onMouseOutCapture'
    | 'onMouseOver'
    | 'onMouseOverCapture'
    | 'onMouseUp'
    | 'onMouseUpCapture'
    | 'onSelect'
    | 'onSelectCapture'
    | 'onTouchCancel'
    | 'onTouchCancelCapture'
    | 'onTouchEnd'
    | 'onTouchEndCapture'
    | 'onTouchMove'
    | 'onTouchMoveCapture'
    | 'onTouchStart'
    | 'onTouchStartCapture'
    | 'onPointerDown'
    | 'onPointerDownCapture'
    | 'onPointerMove'
    | 'onPointerMoveCapture'
    | 'onPointerUp'
    | 'onPointerUpCapture'
    | 'onPointerCancel'
    | 'onPointerCancelCapture'
    | 'onPointerEnter'
    | 'onPointerEnterCapture'
    | 'onPointerLeave'
    | 'onPointerLeaveCapture'
    | 'onPointerOver'
    | 'onPointerOverCapture'
    | 'onPointerOut'
    | 'onPointerOutCapture'
    | 'onGotPointerCapture'
    | 'onGotPointerCaptureCapture'
    | 'onLostPointerCapture'
    | 'onLostPointerCaptureCapture'
    | 'onScroll'
    | 'onScrollCapture'
    | 'onWheel'
    | 'onWheelCapture'
    | 'onAnimationStart'
    | 'onAnimationStartCapture'
    | 'onAnimationEnd'
    | 'onAnimationEndCapture'
    | 'onAnimationIteration'
    | 'onAnimationIterationCapture'
    | 'onTransitionEnd'
    | 'onTransitionEndCapture'
    | 'component'
    | 'variant'
    | 'innerRef'
    | 'download'
    | 'href'
    | 'hrefLang'
    | 'ping'
    | 'rel'
    | 'target'
    | 'type'
    | 'referrerPolicy'
    | 'noWrap'
    | 'gutterBottom'
    | 'paragraph'
    | 'align'
    | 'variantMapping'
    | 'state'
    | 'TypographyClasses'
    | 'entityRef'
    | 'defaultKind'
  > &
    React_2.RefAttributes<any>
>;

// Warning: (ae-forgotten-export) The symbol "EntityRefLinksProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "EntityRefLinks" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityRefLinks: ({
  entityRefs,
  defaultKind,
  ...linkProps
}: EntityRefLinksProps) => JSX.Element;

// Warning: (ae-missing-release-tag) "entityRoute" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const entityRoute: RouteRef<{
  name: string;
  kind: string;
  namespace: string;
}>;

// Warning: (ae-missing-release-tag) "entityRouteParams" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function entityRouteParams(entity: Entity): {
  readonly kind: string;
  readonly namespace: string;
  readonly name: string;
};

// Warning: (ae-missing-release-tag) "entityRouteRef" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const entityRouteRef: RouteRef<{
  name: string;
  kind: string;
  namespace: string;
}>;

// Warning: (ae-missing-release-tag) "EntitySearchBar" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntitySearchBar: () => JSX.Element;

// Warning: (ae-missing-release-tag) "EntitySourceLocation" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type EntitySourceLocation = {
  locationTargetUrl: string;
  integrationType?: string;
};

// Warning: (ae-forgotten-export) The symbol "Props" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "EntityTable" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
// Warning: (ae-missing-release-tag) "EntityTable" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function EntityTable<T extends Entity>({
  entities,
  title,
  emptyContent,
  variant,
  columns,
}: Props<T>): JSX.Element;

// @public (undocumented)
export namespace EntityTable {
  var // Warning: (ae-forgotten-export) The symbol "columnFactories" needs to be exported by the entry point index.d.ts
    //
    // (undocumented)
    columns: typeof columnFactories;
  var // (undocumented)
    systemEntityColumns: TableColumn<SystemEntity>[];
  var // (undocumented)
    componentEntityColumns: TableColumn<ComponentEntity>[];
}

// Warning: (ae-missing-release-tag) "EntityTagFilter" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class EntityTagFilter implements EntityFilter {
  constructor(values: string[]);
  // (undocumented)
  filterEntity(entity: Entity): boolean;
  // (undocumented)
  toQueryValue(): string[];
  // (undocumented)
  readonly values: string[];
}

// Warning: (ae-missing-release-tag) "EntityTagPicker" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityTagPicker: () => JSX.Element | null;

// Warning: (ae-missing-release-tag) "EntityTextFilter" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class EntityTextFilter implements EntityFilter {
  constructor(value: string);
  // (undocumented)
  filterEntity(entity: Entity): boolean;
  // (undocumented)
  readonly value: string;
}

// Warning: (ae-missing-release-tag) "EntityTypeFilter" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class EntityTypeFilter implements EntityFilter {
  constructor(value: string | string[]);
  // (undocumented)
  getCatalogFilters(): Record<string, string | string[]>;
  // (undocumented)
  getTypes(): string[];
  // (undocumented)
  toQueryValue(): string[];
  // (undocumented)
  readonly value: string | string[];
}

// Warning: (ae-missing-release-tag) "EntityTypePicker" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const EntityTypePicker: () => JSX.Element | null;

// Warning: (ae-missing-release-tag) "formatEntityRefTitle" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function formatEntityRefTitle(
  entityRef: Entity | EntityName,
  opts?: {
    defaultKind?: string;
  },
): string;

// Warning: (ae-missing-release-tag) "getEntityMetadataEditUrl" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function getEntityMetadataEditUrl(entity: Entity): string | undefined;

// Warning: (ae-missing-release-tag) "getEntityMetadataViewUrl" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function getEntityMetadataViewUrl(entity: Entity): string | undefined;

// Warning: (ae-missing-release-tag) "getEntityRelations" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function getEntityRelations(
  entity: Entity | undefined,
  relationType: string,
  filter?: {
    kind: string;
  },
): EntityName[];

// Warning: (ae-missing-release-tag) "getEntitySourceLocation" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function getEntitySourceLocation(
  entity: Entity,
  scmIntegrationsApi: ScmIntegrationRegistry,
): EntitySourceLocation | undefined;

// Warning: (ae-missing-release-tag) "isOwnerOf" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function isOwnerOf(owner: Entity, owned: Entity): boolean;

// Warning: (ae-missing-release-tag) "MockEntityListContextProvider" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const MockEntityListContextProvider: ({
  children,
  value,
}: React_2.PropsWithChildren<{
  value: Partial<EntityListContextProps>;
}>) => JSX.Element;

// Warning: (ae-missing-release-tag) "reduceCatalogFilters" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function reduceCatalogFilters(
  filters: EntityFilter[],
): Record<string, string | string[]>;

// Warning: (ae-missing-release-tag) "reduceEntityFilters" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function reduceEntityFilters(
  filters: EntityFilter[],
): (entity: Entity) => boolean;

// Warning: (ae-missing-release-tag) "rootRoute" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const rootRoute: RouteRef<undefined>;

// Warning: (ae-missing-release-tag) "useEntity" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function useEntity<T extends Entity = Entity>(): {
  entity: T;
  loading: boolean;
  error: Error | undefined;
  refresh: VoidFunction | undefined;
};

// Warning: (ae-missing-release-tag) "useEntityCompoundName" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export const useEntityCompoundName: () => {
  kind: string;
  namespace: string;
  name: string;
};

// Warning: (ae-missing-release-tag) "useEntityFromUrl" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const useEntityFromUrl: () => EntityLoadingStatus;

// Warning: (ae-missing-release-tag) "useEntityListProvider" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function useEntityListProvider<
  EntityFilters extends DefaultEntityFilters = DefaultEntityFilters,
>(): EntityListContextProps<EntityFilters>;

// Warning: (ae-missing-release-tag) "useEntityOwnership" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function useEntityOwnership(): {
  loading: boolean;
  isOwnedEntity: (entity: Entity | EntityName) => boolean;
};

// Warning: (ae-forgotten-export) The symbol "EntityTypeReturn" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "useEntityTypeFilter" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function useEntityTypeFilter(): EntityTypeReturn;

// Warning: (ae-missing-release-tag) "useOwnUser" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public
export function useOwnUser(): AsyncState<UserEntity | undefined>;

// Warning: (ae-missing-release-tag) "useRelatedEntities" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function useRelatedEntities(
  entity: Entity,
  {
    type,
    kind,
  }: {
    type?: string;
    kind?: string;
  },
): {
  entities: Entity[] | undefined;
  loading: boolean;
  error: Error | undefined;
};

// Warning: (ae-missing-release-tag) "UserListFilter" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export class UserListFilter implements EntityFilter {
  constructor(
    value: UserListFilterKind,
    isOwnedEntity: (entity: Entity) => boolean,
    isStarredEntity: (entity: Entity) => boolean,
  );
  // (undocumented)
  filterEntity(entity: Entity): boolean;
  // (undocumented)
  readonly isOwnedEntity: (entity: Entity) => boolean;
  // (undocumented)
  readonly isStarredEntity: (entity: Entity) => boolean;
  // (undocumented)
  toQueryValue(): string;
  // (undocumented)
  readonly value: UserListFilterKind;
}

// Warning: (ae-missing-release-tag) "UserListFilterKind" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type UserListFilterKind = 'owned' | 'starred' | 'all';

// Warning: (ae-forgotten-export) The symbol "UserListPickerProps" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "UserListPicker" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const UserListPicker: ({
  initialFilter,
  availableFilters,
}: UserListPickerProps) => JSX.Element;

// Warning: (ae-missing-release-tag) "useStarredEntities" is exported by the package, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const useStarredEntities: () => {
  starredEntities: Set<string>;
  toggleStarredEntity: (entity: Entity) => void;
  isStarredEntity: (entity: Entity) => boolean;
};

// Warnings were encountered during analysis:
//
// src/types.d.ts:6:49 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
// src/types.d.ts:6:10 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
// src/types.d.ts:7:75 - (tsdoc-escape-right-brace) The "}" character should be escaped using a backslash to avoid confusion with a TSDoc inline tag
// src/types.d.ts:7:10 - (tsdoc-malformed-inline-tag) Expecting a TSDoc tag starting with "{@"
// src/types.d.ts:15:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
// src/types.d.ts:16:8 - (tsdoc-param-tag-missing-hyphen) The @param block should be followed by a parameter name and then a hyphen
// src/types.d.ts:22:68 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag
// src/types.d.ts:22:88 - (tsdoc-escape-greater-than) The ">" character should be escaped using a backslash to avoid confusion with an HTML tag

// (No @packageDocumentation comment for this package)
```
