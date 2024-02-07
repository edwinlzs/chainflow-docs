---
layout: /src/layouts/docs/DocsLayout.astro
sidebar: true
---

[chainflow](../README) / [Modules](../modules) / [core/store](../modules/core_store) / Store

# Class: Store

[core/store](../modules/core_store).Store

Manages the storing of values for an endpoint.

## Table of contents

### Constructors

- [constructor](./core_store.Store#constructor)

### Properties

- [#store](./core_store.Store##store)
- [def](./core_store.Store#def)

### Methods

- [#accessRespValue](./core_store.Store##accessrespvalue)
- [#getStoreValue](./core_store.Store##getstorevalue)
- [#putInStore](./core_store.Store##putinstore)
- [storeValues](./core_store.Store#storevalues)

## Constructors

### constructor

• **new Store**(): [`Store`](./core_store.Store)

#### Returns

[`Store`](./core_store.Store)

## Properties

### #store

• `Private` **#store**: [`IStore`](../interfaces/core_store.IStore)\<`unknown`\> = `{}`

Actual store of values received

#### Defined in

[src/core/store.ts:15](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/store.ts#L15)

___

### def

• **def**: [`IStore`](../interfaces/core_store.IStore)\<[`SourceNode`](../interfaces/core_sourceNode.SourceNode)\> = `{}`

Definition of values to be stored from responses to this endpoint.

#### Defined in

[src/core/store.ts:13](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/store.ts#L13)

## Methods

### #accessRespValue

▸ **#accessRespValue**(`resp`, `storePath`, `source`): \{ `found`: `boolean` = true; `storePath`: `string`[] ; `value`: `unknown` = sourceVal } \| \{ `found`: `boolean` = false; `storePath`: `undefined` ; `value?`: `undefined` = sourceVal }

Use a storeDef's defined path to search for a value in the response object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `resp` | `unknown` |
| `storePath` | `string`[] |
| `source` | [`SourceNode`](../interfaces/core_sourceNode.SourceNode) |

#### Returns

\{ `found`: `boolean` = true; `storePath`: `string`[] ; `value`: `unknown` = sourceVal } \| \{ `found`: `boolean` = false; `storePath`: `undefined` ; `value?`: `undefined` = sourceVal }

#### Defined in

[src/core/store.ts:54](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/store.ts#L54)

___

### #getStoreValue

▸ **#getStoreValue**(`resp`, `currentPath`, `storeDef`): `void`

Looks for a value defined in the store definition.

#### Parameters

| Name | Type |
| :------ | :------ |
| `resp` | `unknown` |
| `currentPath` | `string`[] |
| `storeDef` | [`IStore`](../interfaces/core_store.IStore)\<[`SourceNode`](../interfaces/core_sourceNode.SourceNode)\> |

#### Returns

`void`

#### Defined in

[src/core/store.ts:36](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/store.ts#L36)

___

### #putInStore

▸ **#putInStore**(`storePath`, `value`): `void`

Places the found response value in the store according to the store path defined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `storePath` | `string`[] |
| `value` | `unknown` |

#### Returns

`void`

#### Defined in

[src/core/store.ts:74](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/store.ts#L74)

___

### storeValues

▸ **storeValues**(`resp`): [`CallResult`](../interfaces/core_chainflow.CallResult)

Assigns values to be put in the chainflow's store.

#### Parameters

| Name | Type |
| :------ | :------ |
| `resp` | `unknown` |

#### Returns

[`CallResult`](../interfaces/core_chainflow.CallResult)

#### Defined in

[src/core/store.ts:18](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/store.ts#L18)
