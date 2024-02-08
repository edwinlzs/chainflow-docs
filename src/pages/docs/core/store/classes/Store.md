---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [core/store](/docs/core/store/README) / Store

# Class: Store

Manages the storing of values for an endpoint.

## Constructors

### new Store()

• **new Store**(): [`Store`](/docs/core/store/classes/Store)

#### Returns

[`Store`](/docs/core/store/classes/Store)

## Properties

### #store

• **`private`** **#store**: [`IStore`](/docs/core/store/interfaces/IStore)\<`unknown`\> = `{}`

Actual store of values received

#### Source

[src/core/store.ts:15](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/store.ts#L15)

***

### def

• **def**: [`IStore`](/docs/core/store/interfaces/IStore)\<[`SourceNode`](/docs/core/sourceNode/interfaces/SourceNode)\> = `{}`

Definition of values to be stored from responses to this endpoint.

#### Source

[src/core/store.ts:13](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/store.ts#L13)

## Methods

### #accessRespValue()

• **`private`** **#accessRespValue**(`resp`, `storePath`, `source`): `Object` \| `Object`

Use a storeDef's defined path to search for a value in the response object.

#### Parameters

• **resp**: `unknown`

• **storePath**: `string`[]

• **source**: [`SourceNode`](/docs/core/sourceNode/interfaces/SourceNode)

#### Returns

`Object` \| `Object`

#### Source

[src/core/store.ts:54](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/store.ts#L54)

***

### #getStoreValue()

• **`private`** **#getStoreValue**(`resp`, `currentPath`, `storeDef`): `void`

Looks for a value defined in the store definition.

#### Parameters

• **resp**: `unknown`

• **currentPath**: `string`[]

• **storeDef**: [`IStore`](/docs/core/store/interfaces/IStore)\<[`SourceNode`](/docs/core/sourceNode/interfaces/SourceNode)\>

#### Returns

`void`

#### Source

[src/core/store.ts:36](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/store.ts#L36)

***

### #putInStore()

• **`private`** **#putInStore**(`storePath`, `value`): `void`

Places the found response value in the store according to the store path defined.

#### Parameters

• **storePath**: `string`[]

• **value**: `unknown`

#### Returns

`void`

#### Source

[src/core/store.ts:74](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/store.ts#L74)

***

### storeValues()

• **storeValues**(`resp`): [`CallResult`](/docs/core/chainflow/interfaces/CallResult)

Assigns values to be put in the chainflow's store.

#### Parameters

• **resp**: `unknown`

#### Returns

[`CallResult`](/docs/core/chainflow/interfaces/CallResult)

#### Source

[src/core/store.ts:18](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/store.ts#L18)
