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

## Properties

### responses

> **responses**: `Responses`

Stores accumulated responses.

#### Source

core/chainflow.d.ts:27

## Methods

### call()

> **call**\<`T`\>(`endpoint`, `opts`?): `this`

Adds an endpoint call to the callchain.

#### Type parameters

• **T**

#### Parameters

• **endpoint**: [`IEndpoint`](/api/interfaces/iendpoint/)\<`T`\>

• **opts?**: `T`

#### Returns

`this`

#### Source

core/chainflow.d.ts:33

***

### clone()

> **clone**(): [`Chainflow`](/api/classes/chainflow/)

Creates a clone of this chainflow's callqueue and initial sources
 which can be extended and run independently.

#### Returns

[`Chainflow`](/api/classes/chainflow/)

#### Source

core/chainflow.d.ts:38

***

### continuesFrom()

> **continuesFrom**(`cf`): `this`

Causes this chainflow to continue from the state of
sources values of another chainflow.

#### Parameters

• **cf**: [`Chainflow`](/api/classes/chainflow/)

#### Returns

`this`

#### Source

core/chainflow.d.ts:43

***

### extend()

> **extend**(`cf`): `this`

Extends this chainflow's callqueue with that of another flow.

#### Parameters

• **cf**: [`Chainflow`](/api/classes/chainflow/)

#### Returns

`this`

#### Source

core/chainflow.d.ts:40

***

### reset()

> **reset**(): `void`

Resets the chainflow's state by clearing its accumulated sources.

#### Returns

`void`

#### Source

core/chainflow.d.ts:35

***

### run()

> **run**(): `Promise`\<[`Chainflow`](/api/classes/chainflow/)\>

Run the set up chain

#### Returns

`Promise`\<[`Chainflow`](/api/classes/chainflow/)\>

#### Source

core/chainflow.d.ts:29

***

### seed()

> **seed**(`seed`): `this`

Adds a seed to this chainflow.

#### Parameters

• **seed**: `Record`\<`string`, `any`\>

#### Returns

`this`

#### Source

core/chainflow.d.ts:31

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
