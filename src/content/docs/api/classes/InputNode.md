---
editUrl: false
next: false
prev: false
title: "InputNode"
layout: "/src/layouts/DocsLayout.astro"
---

A data node for constructing an input object.

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new InputNode(__namedParameters)

> **new InputNode**(`__namedParameters`): [`InputNode`](/api/classes/inputnode/)

#### Parameters

• **\_\_namedParameters**: `Object`

• **\_\_namedParameters\.hash**: `string`

• **\_\_namedParameters\.val**: `any`

#### Returns

[`InputNode`](/api/classes/inputnode/)

#### Source

[core/inputNode.ts:74](https://github.com/edwinlzs/chainflow/blob/902c18e/src/core/inputNode.ts#L74)

## Properties

### [nodeHash]

> **[nodeHash]**: `string`

TODO: may not be useful. currently only identifying base object this input node is on.

#### Source

[core/inputNode.ts:60](https://github.com/edwinlzs/chainflow/blob/902c18e/src/core/inputNode.ts#L60)

## Methods

### `[getNodeValue]`()

> **[getNodeValue]**(`sourceValues`, `missingValues`, `currentPath`): `any`

Retrieve value of a node.

#### Parameters

• **sourceValues**: [`SourceValues`](/api/type-aliases/sourcevalues/)

• **missingValues**: `string`[][]

• **currentPath**: `string`[]

#### Returns

`any`

#### Source

[core/inputNode.ts:157](https://github.com/edwinlzs/chainflow/blob/902c18e/src/core/inputNode.ts#L157)

***

### `[setSource]`()

> **[setSource]**(`source`, `callback`?): `void`

Sets a source node for this input node.

#### Parameters

• **source**: `SourceNode`

• **callback?**: (`val`) => `any`

#### Returns

`void`

#### Source

[core/inputNode.ts:124](https://github.com/edwinlzs/chainflow/blob/902c18e/src/core/inputNode.ts#L124)

***

### `[setSources]`()

> **[setSources]**(`sources`, `callback`): `void`

Sets multiple source nodes to be combined into a single value for this input node

#### Parameters

• **sources**: `Object`

• **callback**: (`val`) => `any`

#### Returns

`void`

#### Source

[core/inputNode.ts:133](https://github.com/edwinlzs/chainflow/blob/902c18e/src/core/inputNode.ts#L133)

***

### `[setValuePool]`()

> **[setValuePool]**(`valuePool`): `void`

Sets the pool of values for this input node.

#### Parameters

• **valuePool**: `any`[]

#### Returns

`void`

#### Source

[core/inputNode.ts:152](https://github.com/edwinlzs/chainflow/blob/902c18e/src/core/inputNode.ts#L152)

***

### buildObject()

> **buildObject**(`currentPath`, `missingValues`, `sourceValues`): `any`

Builds a JSON object from input node values and
any available linked sources.

#### Parameters

• **currentPath**: `string`[]

• **missingValues**: `string`[][]

• **sourceValues**: [`SourceValues`](/api/type-aliases/sourcevalues/)

#### Returns

`any`

#### Source

[core/inputNode.ts:284](https://github.com/edwinlzs/chainflow/blob/902c18e/src/core/inputNode.ts#L284)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
