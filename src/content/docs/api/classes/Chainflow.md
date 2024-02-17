---
editUrl: false
next: false
prev: false
title: "Chainflow"
layout: "/src/layouts/DocsLayout.astro"
---

## Constructors

### new Chainflow()

> **new Chainflow**(): [`Chainflow`](/api/classes/chainflow/)

#### Returns

[`Chainflow`](/api/classes/chainflow/)

## Methods

### call()

> **call**(`endpoint`, `opts`?): [`Chainflow`](/api/classes/chainflow/)

Adds an endpoint call to the callchain.

#### Parameters

• **endpoint**: [`IEndpoint`](/api/interfaces/iendpoint/)

• **opts?**: [`CallOpts`](/api/interfaces/callopts/)

#### Returns

[`Chainflow`](/api/classes/chainflow/)

#### Source

[core/chainflow.ts:85](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/chainflow.ts#L85)

***

### clone()

> **clone**(): [`Chainflow`](/api/classes/chainflow/)

Creates a clone of this chainflow with its state and callqueue
 which can be extended and run independently.

#### Returns

[`Chainflow`](/api/classes/chainflow/)

#### Source

[core/chainflow.ts:97](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/chainflow.ts#L97)

***

### continuesFrom()

> **continuesFrom**(`cf`): [`Chainflow`](/api/classes/chainflow/)

Causes this chainflow to continue from the state of
sources values of another chainflow.

#### Parameters

• **cf**: [`Chainflow`](/api/classes/chainflow/)

#### Returns

[`Chainflow`](/api/classes/chainflow/)

#### Source

[core/chainflow.ts:112](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/chainflow.ts#L112)

***

### extend()

> **extend**(`cf`): [`Chainflow`](/api/classes/chainflow/)

Extends this chainflow's callqueue with that of another flow.

#### Parameters

• **cf**: [`Chainflow`](/api/classes/chainflow/)

#### Returns

[`Chainflow`](/api/classes/chainflow/)

#### Source

[core/chainflow.ts:105](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/chainflow.ts#L105)

***

### reset()

> **reset**(): `void`

Resets the chainflow's state by clearing its accumulated sources.

#### Returns

`void`

#### Source

[core/chainflow.ts:91](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/chainflow.ts#L91)

***

### responses()

> **responses**(): `void`

#### Returns

`void`

#### Todo

Returns the accumulated responses of this chainflow.

#### Source

[core/chainflow.ts:117](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/chainflow.ts#L117)

***

### run()

> **run**(): `Promise`\<[`Chainflow`](/api/classes/chainflow/)\>

Run the set up chain

#### Returns

`Promise`\<[`Chainflow`](/api/classes/chainflow/)\>

#### Source

[core/chainflow.ts:54](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/chainflow.ts#L54)

***

### seed()

> **seed**(`seed`): [`Chainflow`](/api/classes/chainflow/)

Adds a seed to this chainflow.

#### Parameters

• **seed**: `Record`\<`string`, `any`\>

#### Returns

[`Chainflow`](/api/classes/chainflow/)

#### Source

[core/chainflow.ts:79](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/chainflow.ts#L79)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
