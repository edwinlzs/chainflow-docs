---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [core/chainflow](/docs/core/chainflow/README) / IEndpoint

# Interface: IEndpoint

Defines an endpoint that a chainflow can call upon.

## Properties

### call

• **call**: (`sources`, `opts`?) => `Promise`\<[`CallResult`](/docs/core/chainflow/interfaces/CallResult)\>

#### Parameters

• **sources**: [`SourceValues`](/docs/core/inputNode/type-aliases/SourceValues)

• **opts?**: [`CallOpts`](/docs/core/chainflow/interfaces/CallOpts)

#### Returns

`Promise`\<[`CallResult`](/docs/core/chainflow/interfaces/CallResult)\>

#### Source

[src/core/chainflow.ts:21](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/chainflow.ts#L21)

***

### hash

• **hash**: `string`

#### Source

[src/core/chainflow.ts:20](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/chainflow.ts#L20)
