---
layout: /src/layouts/docs/DocsLayout.astro
sidebar: true
---

[chainflow](../README) / [Modules](../modules) / core/sourceNode

# Module: core/sourceNode

## Table of contents

### Interfaces

- [SourceNode](../interfaces/core_sourceNode.SourceNode)

### Variables

- [SourceNodeHandler](./core_sourceNode#sourcenodehandler)

### Functions

- [sourceNode](./core_sourceNode#sourcenode)

## Variables

### SourceNodeHandler

• `Const` **SourceNodeHandler**: `Object`

Generates proxies recursively to handle nested property access of a source signature.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `get` | (`obj`: `RawSourceNode`, `prop`: `any`) => `any` |
| `set` | (`obj`: `RawSourceNode`, `prop`: `any`, `val`: `any`) => `any` |

#### Defined in

[src/core/sourceNode.ts:25](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/sourceNode.ts#L25)

## Functions

### sourceNode

▸ **sourceNode**(`hash`): [`SourceNode`](../interfaces/core_sourceNode.SourceNode)

Creates a new Source Node with the given hash.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

[`SourceNode`](../interfaces/core_sourceNode.SourceNode)

#### Defined in

[src/core/sourceNode.ts:5](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/sourceNode.ts#L5)
