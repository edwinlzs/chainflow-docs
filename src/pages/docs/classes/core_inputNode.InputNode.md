---
layout: /src/layouts/docs/DocsLayout.astro
sidebar: true
---

[chainflow](../README) / [Modules](../modules) / [core/inputNode](../modules/core_inputNode) / InputNode

# Class: InputNode

[core/inputNode](../modules/core_inputNode).InputNode

A data node for constructing an input object.

## Indexable

▪ [key: `string`]: `any`

Key-values under this node, if this node represents an object.

## Table of contents

### Constructors

- [constructor](./core_inputNode.InputNode#constructor)

### Properties

- [#default](./core_inputNode.InputNode##default)
- [#generator](./core_inputNode.InputNode##generator)
- [#required](./core_inputNode.InputNode##required)
- [#sources](./core_inputNode.InputNode##sources)
- [#valuePool](./core_inputNode.InputNode##valuepool)
- [#valuePoolSelect](./core_inputNode.InputNode##valuepoolselect)
- [[nodeHash]](core_inputNode.InputNode#[nodehash])

### Methods

- [#accessSource](./core_inputNode.InputNode##accesssource)
- [#getMultiSourceNodeValues](./core_inputNode.InputNode##getmultisourcenodevalues)
- [#getSingleSourceNodeValue](./core_inputNode.InputNode##getsinglesourcenodevalue)
- [#matchSourceHash](./core_inputNode.InputNode##matchsourcehash)
- [#selectValue](./core_inputNode.InputNode##selectvalue)
- [[getNodeValue]](core_inputNode.InputNode#[getnodevalue])
- [[setSource]](core_inputNode.InputNode#[setsource])
- [[setSources]](core_inputNode.InputNode#[setsources])
- [[setValuePool]](core_inputNode.InputNode#[setvaluepool])
- [buildObject](./core_inputNode.InputNode#buildobject)

## Constructors

### constructor

• **new InputNode**(`«destructured»`): [`InputNode`](./core_inputNode.InputNode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `hash` | `string` |
| › `val` | `any` |

#### Returns

[`InputNode`](./core_inputNode.InputNode)

#### Defined in

[src/core/inputNode.ts:74](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L74)

## Properties

### #default

• `Private` **#default**: `any`

Default value of this node

#### Defined in

[src/core/inputNode.ts:62](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L62)

___

### #generator

• `Private` **#generator**: `undefined` \| () => `any`

Generator function to generate values on demand for this node.

#### Defined in

[src/core/inputNode.ts:72](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L72)

___

### #required

• `Private` **#required**: `boolean` = `false`

Whether this node requires a value from a source object.

#### Defined in

[src/core/inputNode.ts:64](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L64)

___

### #sources

• `Private` **#sources**: `Object` = `{}`

Stores what source node values can be passed into this node.

#### Index signature

▪ [nodeHash: `string`]: `ISource` \| `ISources`

#### Defined in

[src/core/inputNode.ts:66](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L66)

___

### #valuePool

• `Private` **#valuePool**: `any`[] = `[]`

Stores possible values this node can take.

#### Defined in

[src/core/inputNode.ts:68](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L68)

___

### #valuePoolSelect

• `Private` **#valuePoolSelect**: [`UNIFORM`](../enums/core_inputNode.VALUE_POOL_SELECT#uniform) = `VALUE_POOL_SELECT.UNIFORM`

Determines what strategy to select from pool of values

#### Defined in

[src/core/inputNode.ts:70](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L70)

___

### [nodeHash]

• **[nodeHash]**: `string`

TODO: may not be useful. currently only identifying base object this input node is on.

#### Defined in

[src/core/inputNode.ts:60](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L60)

## Methods

### #accessSource

▸ **#accessSource**(`payload`, `path`, `sourceHash`, `undefinedAllowed?`): `any`

Access the source node value in a source object

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |
| `path` | `string`[] |
| `sourceHash` | `string` |
| `undefinedAllowed?` | `boolean` |

#### Returns

`any`

#### Defined in

[src/core/inputNode.ts:228](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L228)

___

### #getMultiSourceNodeValues

▸ **#getMultiSourceNodeValues**(`sources`, `sourceValues`): `undefined` \| \{ `[key: string]`: `any`;  }

Attempts to retrieve values for an input node from multiple source nodes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | `ISources` |
| `sourceValues` | [`SourceValues`](../modules/core_inputNode#sourcevalues) |

#### Returns

`undefined` \| \{ `[key: string]`: `any`;  }

#### Defined in

[src/core/inputNode.ts:260](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L260)

___

### #getSingleSourceNodeValue

▸ **#getSingleSourceNodeValue**(`hash`, `path`, `sourceValues`, `undefinedAllowed?`): `any`

Attempts to retrieve values for an input node from a single source node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |
| `path` | `string`[] |
| `sourceValues` | [`SourceValues`](../modules/core_inputNode#sourcevalues) |
| `undefinedAllowed?` | `boolean` |

#### Returns

`any`

#### Defined in

[src/core/inputNode.ts:247](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L247)

___

### #matchSourceHash

▸ **#matchSourceHash**(`sourceValues`, `usedSources`): `undefined` \| `string`

Retrieves a matching source hash from this node's sources, if any,
 excluding sources that are already used for the current input.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceValues` | [`SourceValues`](../modules/core_inputNode#sourcevalues) |
| `usedSources` | `string`[] |

#### Returns

`undefined` \| `string`

#### Defined in

[src/core/inputNode.ts:209](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L209)

___

### #selectValue

▸ **#selectValue**(): `any`

Selects a value from the value pool based on the value pool select strategy.

#### Returns

`any`

#### Defined in

[src/core/inputNode.ts:272](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L272)

___

### [getNodeValue]

▸ **[getNodeValue]**(`sourceValues`, `missingValues`, `currentPath`): `any`

Retrieve value of a node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceValues` | [`SourceValues`](../modules/core_inputNode#sourcevalues) |
| `missingValues` | `string`[][] |
| `currentPath` | `string`[] |

#### Returns

`any`

#### Defined in

[src/core/inputNode.ts:157](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L157)

___

### [setSource]

▸ **[setSource]**(`source`, `callback?`): `void`

Sets a source node for this input node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SourceNode`](../interfaces/core_sourceNode.SourceNode) |
| `callback?` | (`val`: `any`) => `any` |

#### Returns

`void`

#### Defined in

[src/core/inputNode.ts:124](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L124)

___

### [setSources]

▸ **[setSources]**(`sources`, `callback`): `void`

Sets multiple source nodes to be combined into a single value for this input node

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | `Object` |
| `callback` | (`val`: `any`) => `any` |

#### Returns

`void`

#### Defined in

[src/core/inputNode.ts:133](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L133)

___

### [setValuePool]

▸ **[setValuePool]**(`valuePool`): `void`

Sets the pool of values for this input node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `valuePool` | `any`[] |

#### Returns

`void`

#### Defined in

[src/core/inputNode.ts:152](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L152)

___

### buildObject

▸ **buildObject**(`currentPath`, `missingValues`, `sourceValues`): `any`

Builds a JSON object from input node values and
any available linked sources.

#### Parameters

| Name | Type |
| :------ | :------ |
| `currentPath` | `string`[] |
| `missingValues` | `string`[][] |
| `sourceValues` | [`SourceValues`](../modules/core_inputNode#sourcevalues) |

#### Returns

`any`

#### Defined in

[src/core/inputNode.ts:284](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/inputNode.ts#L284)
