---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [core/chainflow](/docs/core/chainflow/README) / Chainflow

# Class: Chainflow

## Constructors

### new Chainflow()

• **new Chainflow**(): [`Chainflow`](/docs/core/chainflow/classes/Chainflow)

#### Returns

[`Chainflow`](/docs/core/chainflow/classes/Chainflow)

## Properties

### #callstack

• **`private`** **#callstack**: `Callstack` = `[]`

#### Source

[src/core/chainflow.ts:56](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/chainflow.ts#L56)

***

### #sources

• **`private`** **#sources**: [`SourceValues`](/docs/core/inputNode/type-aliases/SourceValues)

Stores sources such as the seed or values accumulated from
endpoint calls in the current flow.

#### Source

[src/core/chainflow.ts:53](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/chainflow.ts#L53)

## Methods

### call()

• **call**(`endpoint`, `opts`?): [`Chainflow`](/docs/core/chainflow/classes/Chainflow)

Adds an endpoint call to the callchain.

#### Parameters

• **endpoint**: [`IEndpoint`](/docs/core/chainflow/interfaces/IEndpoint)

• **opts?**: [`CallOpts`](/docs/core/chainflow/interfaces/CallOpts)

#### Returns

[`Chainflow`](/docs/core/chainflow/classes/Chainflow)

#### Source

[src/core/chainflow.ts:87](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/chainflow.ts#L87)

***

### clone()

• **clone**(): [`Chainflow`](/docs/core/chainflow/classes/Chainflow)

Creates a clone of this chainflow and its callstack
 which can be extended and run independently.

#### Returns

[`Chainflow`](/docs/core/chainflow/classes/Chainflow)

#### Source

[src/core/chainflow.ts:99](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/chainflow.ts#L99)

***

### extend()

• **extend**(`cf`): [`Chainflow`](/docs/core/chainflow/classes/Chainflow)

Extends this chainflow's callstack with that of another flow.

#### Parameters

• **cf**: [`Chainflow`](/docs/core/chainflow/classes/Chainflow)

#### Returns

[`Chainflow`](/docs/core/chainflow/classes/Chainflow)

#### Source

[src/core/chainflow.ts:106](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/chainflow.ts#L106)

***

### reset()

• **reset**(): `void`

Resets the chainflow's state by clearing its accumulated sources.

#### Returns

`void`

#### Source

[src/core/chainflow.ts:93](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/chainflow.ts#L93)

***

### run()

• **run**(`opts`?): `Promise`\<[`SourceValues`](/docs/core/inputNode/type-aliases/SourceValues)\>

Run the set up chain

#### Parameters

• **opts?**: [`RunOpts`](/docs/core/chainflow/interfaces/RunOpts)

#### Returns

`Promise`\<[`SourceValues`](/docs/core/inputNode/type-aliases/SourceValues)\>

#### Source

[src/core/chainflow.ts:59](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/chainflow.ts#L59)
