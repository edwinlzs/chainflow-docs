---
editUrl: false
next: false
prev: false
title: "IEndpoint"
layout: "/src/layouts/DocsLayout.astro"
---

Defines an endpoint that a chainflow can call upon.

## Type parameters

• **T**

## Properties

### call

> **call**: (`sources`, `opts`?) => `Promise`\<[`CallResult`](/api/interfaces/callresult/)\>

#### Parameters

• **sources**: [`SourceValues`](/api/type-aliases/sourcevalues/)

• **opts?**: `T`

#### Returns

`Promise`\<[`CallResult`](/api/interfaces/callresult/)\>

#### Source

core/chainflow.d.ts:13

***

### details

> **details**: `string`

A string with info describing the endpoint.

#### Source

core/chainflow.d.ts:12

***

### id

> **id**: `string`

A value that uniquely identifies this endpoint.

#### Source

core/chainflow.d.ts:10

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
