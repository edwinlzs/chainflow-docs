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

### new InputNode(val)

> **new InputNode**(`val`): [`InputNode`](/api/classes/inputnode/)

#### Parameters

• **val**: `any`

#### Returns

[`InputNode`](/api/classes/inputnode/)

#### Source

[core/inputNode.ts:75](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/inputNode.ts#L75)

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

[core/inputNode.ts:158](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/inputNode.ts#L158)

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

[core/inputNode.ts:125](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/inputNode.ts#L125)

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

[core/inputNode.ts:134](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/inputNode.ts#L134)

***

### `[setValuePool]`()

> **[setValuePool]**(`valuePool`): `void`

Sets the pool of values for this input node.

#### Parameters

• **valuePool**: `any`[]

#### Returns

`void`

#### Source

[core/inputNode.ts:153](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/inputNode.ts#L153)

***

### buildKvObject()

> **buildKvObject**(`currentPath`, `missingValues`, `sourceValues`): `any`

Builds a key-value object from input node values and
any available linked sources.

#### Parameters

• **currentPath**: `string`[]

• **missingValues**: `string`[][]

• **sourceValues**: [`SourceValues`](/api/type-aliases/sourcevalues/)

#### Returns

`any`

#### Source

[core/inputNode.ts:286](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/inputNode.ts#L286)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
