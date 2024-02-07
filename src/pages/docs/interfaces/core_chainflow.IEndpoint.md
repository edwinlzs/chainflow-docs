---
layout: /src/layouts/docs/DocsLayout.astro
sidebar: true
---

[chainflow](../README) / [Modules](../modules) / [core/chainflow](../modules/core_chainflow) / IEndpoint

# Interface: IEndpoint

[core/chainflow](../modules/core_chainflow).IEndpoint

Defines an endpoint that a chainflow can call upon.

## Implemented by

- [`Endpoint`](../classes/http_endpoint.Endpoint)

## Table of contents

### Properties

- [call](./core_chainflow.IEndpoint#call)
- [hash](./core_chainflow.IEndpoint#hash)

## Properties

### call

• **call**: (`sources`: [`SourceValues`](../modules/core_inputNode#sourcevalues), `opts?`: [`CallOpts`](./core_chainflow.CallOpts)) => `Promise`\<[`CallResult`](./core_chainflow.CallResult)\>

#### Type declaration

▸ (`sources`, `opts?`): `Promise`\<[`CallResult`](./core_chainflow.CallResult)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `sources` | [`SourceValues`](../modules/core_inputNode#sourcevalues) |
| `opts?` | [`CallOpts`](./core_chainflow.CallOpts) |

##### Returns

`Promise`\<[`CallResult`](./core_chainflow.CallResult)\>

#### Defined in

[src/core/chainflow.ts:21](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/chainflow.ts#L21)

___

### hash

• **hash**: `string`

#### Defined in

[src/core/chainflow.ts:20](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/core/chainflow.ts#L20)
