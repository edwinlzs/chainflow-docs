---
layout: /src/layouts/docs/DocsLayout.astro
sidebar: true
---

[chainflow](../README) / [Modules](../modules) / core/utils/source

# Module: core/utils/source

## Table of contents

### Functions

- [source](./core_utils_source#source)
- [sources](./core_utils_source#sources)

## Functions

### source

▸ **source**(`source`, `callback?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | [`SourceNode`](../interfaces/core_sourceNode.SourceNode) |
| `callback?` | (`val`: `any`) => `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `[nodeValueIdentifier]` | [`NodeValue`](../enums/core_inputNode.NodeValue) |
| `callback` | `undefined` \| (`val`: `any`) => `any` |
| `source` | [`SourceNode`](../interfaces/core_sourceNode.SourceNode) |

#### Defined in

[src/core/utils/source.ts:5](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/utils/source.ts#L5)

___

### sources

▸ **sources**(`sources`, `callback?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | [`SourceNode`](../interfaces/core_sourceNode.SourceNode)[] |
| `callback?` | (`val`: `any`) => `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `[nodeValueIdentifier]` | [`NodeValue`](../enums/core_inputNode.NodeValue) |
| `callback` | `undefined` \| (`val`: `any`) => `any` |
| `sources` | [`SourceNode`](../interfaces/core_sourceNode.SourceNode)[] |

#### Defined in

[src/core/utils/source.ts:11](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/utils/source.ts#L11)
