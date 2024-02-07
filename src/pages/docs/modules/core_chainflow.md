---
layout: /src/layouts/docs/DocsLayout.astro
sidebar: true
---

[chainflow](../README) / [Modules](../modules) / core/chainflow

# Module: core/chainflow

## Table of contents

### Classes

- [Chainflow](../classes/core_chainflow.Chainflow)

### Interfaces

- [CallOpts](../interfaces/core_chainflow.CallOpts)
- [CallResult](../interfaces/core_chainflow.CallResult)
- [IEndpoint](../interfaces/core_chainflow.IEndpoint)
- [RunOpts](../interfaces/core_chainflow.RunOpts)

### Variables

- [seed](./core_chainflow#seed)
- [store](./core_chainflow#store)

### Functions

- [chainflow](./core_chainflow#chainflow)

## Variables

### seed

• `Const` **seed**: [`SourceNode`](../interfaces/core_sourceNode.SourceNode)

Special object used to link an InputNode to a chainflow seed.

#### Defined in

[src/core/chainflow.ts:45](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/chainflow.ts#L45)

___

### store

• `Const` **store**: [`SourceNode`](../interfaces/core_sourceNode.SourceNode)

Special object that acts as a central "gateway" between input and source values.

#### Defined in

[src/core/chainflow.ts:48](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/chainflow.ts#L48)

## Functions

### chainflow

▸ **chainflow**(): [`Chainflow`](../classes/core_chainflow.Chainflow)

#### Returns

[`Chainflow`](../classes/core_chainflow.Chainflow)

#### Defined in

[src/core/chainflow.ts:112](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/chainflow.ts#L112)
