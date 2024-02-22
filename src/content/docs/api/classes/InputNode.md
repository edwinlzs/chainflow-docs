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

core/inputNode.d.ts:19

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

core/inputNode.d.ts:27

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

core/inputNode.d.ts:21

***

### `[setSources]`()

> **[setSources]**(`sources`, `callback`?): `void`

Sets multiple source nodes to be combined into a single value for this input node

#### Parameters

• **sources**: `SourceNode`[] \| `Object`

• **callback?**: (`val`) => `any`

#### Returns

`void`

#### Source

core/inputNode.d.ts:23

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

core/inputNode.d.ts:32

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
