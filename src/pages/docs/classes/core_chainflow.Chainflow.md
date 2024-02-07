---
layout: /src/layouts/docs/DocsLayout.astro
sidebar: true
---

[chainflow](../README) / [Modules](../modules) / [core/chainflow](../modules/core_chainflow) / Chainflow

# Class: Chainflow

[core/chainflow](../modules/core_chainflow).Chainflow

## Table of contents

### Constructors

- [constructor](./core_chainflow.Chainflow#constructor)

### Properties

- [#callstack](./core_chainflow.Chainflow##callstack)
- [#sources](./core_chainflow.Chainflow##sources)

### Methods

- [call](./core_chainflow.Chainflow#call)
- [clone](./core_chainflow.Chainflow#clone)
- [extend](./core_chainflow.Chainflow#extend)
- [reset](./core_chainflow.Chainflow#reset)
- [run](./core_chainflow.Chainflow#run)

## Constructors

### constructor

• **new Chainflow**(): [`Chainflow`](./core_chainflow.Chainflow)

#### Returns

[`Chainflow`](./core_chainflow.Chainflow)

## Properties

### #callstack

• `Private` **#callstack**: `Callstack` = `[]`

#### Defined in

[src/core/chainflow.ts:56](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/chainflow.ts#L56)

___

### #sources

• `Private` **#sources**: [`SourceValues`](../modules/core_inputNode#sourcevalues)

Stores sources such as the seed or values accumulated from
endpoint calls in the current flow.

#### Defined in

[src/core/chainflow.ts:53](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/chainflow.ts#L53)

## Methods

### call

▸ **call**(`endpoint`, `opts?`): [`Chainflow`](./core_chainflow.Chainflow)

Adds an endpoint call to the callchain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `endpoint` | [`IEndpoint`](../interfaces/core_chainflow.IEndpoint) |
| `opts?` | [`CallOpts`](../interfaces/core_chainflow.CallOpts) |

#### Returns

[`Chainflow`](./core_chainflow.Chainflow)

#### Defined in

[src/core/chainflow.ts:87](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/chainflow.ts#L87)

___

### clone

▸ **clone**(): [`Chainflow`](./core_chainflow.Chainflow)

Creates a clone of this chainflow and its callstack
 which can be extended and run independently.

#### Returns

[`Chainflow`](./core_chainflow.Chainflow)

#### Defined in

[src/core/chainflow.ts:99](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/chainflow.ts#L99)

___

### extend

▸ **extend**(`cf`): [`Chainflow`](./core_chainflow.Chainflow)

Extends this chainflow's callstack with that of another flow.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cf` | [`Chainflow`](./core_chainflow.Chainflow) |

#### Returns

[`Chainflow`](./core_chainflow.Chainflow)

#### Defined in

[src/core/chainflow.ts:106](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/chainflow.ts#L106)

___

### reset

▸ **reset**(): `void`

Resets the chainflow's state by clearing its accumulated sources.

#### Returns

`void`

#### Defined in

[src/core/chainflow.ts:93](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/chainflow.ts#L93)

___

### run

▸ **run**(`opts?`): `Promise`\<[`SourceValues`](../modules/core_inputNode#sourcevalues)\>

Run the set up chain

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`RunOpts`](../interfaces/core_chainflow.RunOpts) |

#### Returns

`Promise`\<[`SourceValues`](../modules/core_inputNode#sourcevalues)\>

#### Defined in

[src/core/chainflow.ts:59](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/chainflow.ts#L59)
