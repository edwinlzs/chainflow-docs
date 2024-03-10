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

### events

> **events**: `CallEvent`[]

Stores accumulated endpoint call events.

#### Source

core/chainflow.d.ts:28

## Methods

### call()

> **call**\<`CallOpts`, `Req`, `Resp`\>(`endpoint`, `opts`?): `this`

Adds an endpoint call to the callchain.

#### Type parameters

• **CallOpts**

• **Req**

• **Resp**

#### Parameters

• **endpoint**: [`IEndpoint`](/api/interfaces/iendpoint/)\<`CallOpts`, `Req`, `Resp`\>

• **opts?**: `CallOpts`

#### Returns

`this`

#### Source

core/chainflow.d.ts:34

***

### clone()

> **clone**(): [`Chainflow`](/api/classes/chainflow/)

Creates a clone of this chainflow's callqueue and initial sources
 which can be extended and run independently.

#### Returns

[`Chainflow`](/api/classes/chainflow/)

#### Source

core/chainflow.d.ts:39

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

core/chainflow.d.ts:44

***

### extend()

> **extend**(`cf`): `this`

Extends this chainflow's callqueue with that of another flow.

#### Parameters

• **cf**: [`Chainflow`](/api/classes/chainflow/)

#### Returns

`this`

#### Source

core/chainflow.d.ts:41

***

### reset()

> **reset**(): `void`

Resets the chainflow's state by clearing its accumulated sources.

#### Returns

`void`

#### Source

core/chainflow.d.ts:36

***

### run()

> **run**(): `Promise`\<[`Chainflow`](/api/classes/chainflow/)\>

Run the set up chain

#### Returns

`Promise`\<[`Chainflow`](/api/classes/chainflow/)\>

#### Source

core/chainflow.d.ts:30

***

### seed()

> **seed**(`seed`): `this`

Adds a seed to this chainflow.

#### Parameters

• **seed**: `Record`\<`string`, `any`\>

#### Returns

`this`

#### Source

core/chainflow.d.ts:32

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
