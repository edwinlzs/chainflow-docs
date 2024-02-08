---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [core/inputNode](/docs/core/inputNode/README) / InputNode

# Class: InputNode

A data node for constructing an input object.

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new InputNode(__namedParameters)

• **new InputNode**(`__namedParameters`): [`InputNode`](/docs/core/inputNode/classes/InputNode)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters\.hash**: `string`

• **\_\_namedParameters\.val**: `any`

#### Returns

[`InputNode`](/docs/core/inputNode/classes/InputNode)

#### Source

[src/core/inputNode.ts:74](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L74)

## Properties

### #default

• **`private`** **#default**: `any`

Default value of this node

#### Source

[src/core/inputNode.ts:62](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L62)

***

### #generator

• **`private`** **#generator**: `undefined` \| () => `any`

Generator function to generate values on demand for this node.

#### Source

[src/core/inputNode.ts:72](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L72)

***

### #required

• **`private`** **#required**: `boolean` = `false`

Whether this node requires a value from a source object.

#### Source

[src/core/inputNode.ts:64](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L64)

***

### #sources

• **`private`** **#sources**: `Object` = `{}`

Stores what source node values can be passed into this node.

#### Index signature

 \[`nodeHash`: `string`\]: `ISource` \| `ISources`

#### Source

[src/core/inputNode.ts:66](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L66)

***

### #valuePool

• **`private`** **#valuePool**: `any`[] = `[]`

Stores possible values this node can take.

#### Source

[src/core/inputNode.ts:68](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L68)

***

### #valuePoolSelect

• **`private`** **#valuePoolSelect**: [`UNIFORM`](/docs/core/inputNode/enumerations/VALUE_POOL_SELECT#uniform) = `VALUE_POOL_SELECT.UNIFORM`

Determines what strategy to select from pool of values

#### Source

[src/core/inputNode.ts:70](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L70)

***

### [nodeHash]

• **[nodeHash]**: `string`

TODO: may not be useful. currently only identifying base object this input node is on.

#### Source

[src/core/inputNode.ts:60](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L60)

## Methods

### #accessSource()

• **`private`** **#accessSource**(`payload`, `path`, `sourceHash`, `undefinedAllowed`?): `any`

Access the source node value in a source object

#### Parameters

• **payload**: `any`

• **path**: `string`[]

• **sourceHash**: `string`

• **undefinedAllowed?**: `boolean`

#### Returns

`any`

#### Source

[src/core/inputNode.ts:228](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L228)

***

### #getMultiSourceNodeValues()

• **`private`** **#getMultiSourceNodeValues**(`sources`, `sourceValues`): `undefined` \| `Object`

Attempts to retrieve values for an input node from multiple source nodes.

#### Parameters

• **sources**: `ISources`

• **sourceValues**: [`SourceValues`](/docs/core/inputNode/type-aliases/SourceValues)

#### Returns

`undefined` \| `Object`

#### Source

[src/core/inputNode.ts:260](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L260)

***

### #getSingleSourceNodeValue()

• **`private`** **#getSingleSourceNodeValue**(`hash`, `path`, `sourceValues`, `undefinedAllowed`?): `any`

Attempts to retrieve values for an input node from a single source node.

#### Parameters

• **hash**: `string`

• **path**: `string`[]

• **sourceValues**: [`SourceValues`](/docs/core/inputNode/type-aliases/SourceValues)

• **undefinedAllowed?**: `boolean`

#### Returns

`any`

#### Source

[src/core/inputNode.ts:247](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L247)

***

### #matchSourceHash()

• **`private`** **#matchSourceHash**(`sourceValues`, `usedSources`): `undefined` \| `string`

Retrieves a matching source hash from this node's sources, if any,
 excluding sources that are already used for the current input.

#### Parameters

• **sourceValues**: [`SourceValues`](/docs/core/inputNode/type-aliases/SourceValues)

• **usedSources**: `string`[]

#### Returns

`undefined` \| `string`

#### Source

[src/core/inputNode.ts:209](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L209)

***

### #selectValue()

• **`private`** **#selectValue**(): `any`

Selects a value from the value pool based on the value pool select strategy.

#### Returns

`any`

#### Source

[src/core/inputNode.ts:272](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L272)

***

### `[getNodeValue]`()

• **[getNodeValue]**(`sourceValues`, `missingValues`, `currentPath`): `any`

Retrieve value of a node.

#### Parameters

• **sourceValues**: [`SourceValues`](/docs/core/inputNode/type-aliases/SourceValues)

• **missingValues**: `string`[][]

• **currentPath**: `string`[]

#### Returns

`any`

#### Source

[src/core/inputNode.ts:157](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L157)

***

### `[setSource]`()

• **[setSource]**(`source`, `callback`?): `void`

Sets a source node for this input node.

#### Parameters

• **source**: [`SourceNode`](/docs/core/sourceNode/interfaces/SourceNode)

• **callback?**

#### Returns

`void`

#### Source

[src/core/inputNode.ts:124](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L124)

***

### `[setSources]`()

• **[setSources]**(`sources`, `callback`): `void`

Sets multiple source nodes to be combined into a single value for this input node

#### Parameters

• **sources**

• **callback**

#### Returns

`void`

#### Source

[src/core/inputNode.ts:133](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L133)

***

### `[setValuePool]`()

• **[setValuePool]**(`valuePool`): `void`

Sets the pool of values for this input node.

#### Parameters

• **valuePool**: `any`[]

#### Returns

`void`

#### Source

[src/core/inputNode.ts:152](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L152)

***

### buildObject()

• **buildObject**(`currentPath`, `missingValues`, `sourceValues`): `any`

Builds a JSON object from input node values and
any available linked sources.

#### Parameters

• **currentPath**: `string`[]

• **missingValues**: `string`[][]

• **sourceValues**: [`SourceValues`](/docs/core/inputNode/type-aliases/SourceValues)

#### Returns

`any`

#### Source

[src/core/inputNode.ts:284](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/inputNode.ts#L284)
