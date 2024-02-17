---
editUrl: false
next: false
prev: false
title: "ReqBuilder"
layout: "/src/layouts/DocsLayout.astro"
---

Contains node definitions for a request.

## Constructors

### new ReqBuilder()

> **new ReqBuilder**(): [`ReqBuilder`](/api/classes/reqbuilder/)

#### Returns

[`ReqBuilder`](/api/classes/reqbuilder/)

#### Source

http/reqBuilder.d.ts:7

## Properties

### baseHeaders

> **baseHeaders**: [`InputNode`](/api/classes/inputnode/)

#### Source

http/reqBuilder.d.ts:5

***

### pathParams

> **pathParams**: [`InputNode`](/api/classes/inputnode/)

#### Source

http/reqBuilder.d.ts:6

## Accessors

### body

> **`get`** **body**(): [`InputNode`](/api/classes/inputnode/)

> **`set`** **body**(`payload`): `void`

#### Parameters

• **payload**: `any`

#### Returns

[`InputNode`](/api/classes/inputnode/)

#### Source

http/reqBuilder.d.ts:8

***

### headers

> **`get`** **headers**(): [`InputNode`](/api/classes/inputnode/)

> **`set`** **headers**(`params`): `void`

#### Parameters

• **params**: `any`

#### Returns

[`InputNode`](/api/classes/inputnode/)

#### Source

http/reqBuilder.d.ts:12

***

### query

> **`get`** **query**(): [`InputNode`](/api/classes/inputnode/)

> **`set`** **query**(`params`): `void`

#### Parameters

• **params**: `any`

#### Returns

[`InputNode`](/api/classes/inputnode/)

#### Source

http/reqBuilder.d.ts:10

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
