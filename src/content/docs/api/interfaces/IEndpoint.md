---
editUrl: false
next: false
prev: false
title: "IEndpoint"
layout: "/src/layouts/DocsLayout.astro"
---

Defines an endpoint that a chainflow can call upon.

## Type parameters

• **CallOpts**

• **Req**

• **Resp**

## Properties

### call

> **call**: (`sources`, `opts`?) => `Promise`\<[`CallResult`](/api/interfaces/callresult/)\<`Req`, `Resp`\>\>

#### Parameters

• **sources**: [`SourceValues`](/api/type-aliases/sourcevalues/)

• **opts?**: `CallOpts`

#### Returns

`Promise`\<[`CallResult`](/api/interfaces/callresult/)\<`Req`, `Resp`\>\>

#### Source

core/chainflow.d.ts:14

***

### details

> **details**: `string`

Describes the endpoint.

#### Source

core/chainflow.d.ts:13

***

### id

> **id**: `string`

Uniquely identifies this endpoint.

#### Source

core/chainflow.d.ts:11

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
