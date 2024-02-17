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

[http/reqBuilder.ts:11](https://github.com/edwinlzs/chainflow/blob/022a530/src/http/reqBuilder.ts#L11)

## Properties

### baseHeaders

> **baseHeaders**: [`InputNode`](/api/classes/inputnode/)

#### Source

[http/reqBuilder.ts:5](https://github.com/edwinlzs/chainflow/blob/022a530/src/http/reqBuilder.ts#L5)

***

### pathParams

> **pathParams**: [`InputNode`](/api/classes/inputnode/)

#### Source

[http/reqBuilder.ts:7](https://github.com/edwinlzs/chainflow/blob/022a530/src/http/reqBuilder.ts#L7)

## Accessors

### body

> **`get`** **body**(): [`InputNode`](/api/classes/inputnode/)

> **`set`** **body**(`payload`): `void`

#### Parameters

• **payload**: `any`

#### Returns

[`InputNode`](/api/classes/inputnode/)

#### Source

[http/reqBuilder.ts:19](https://github.com/edwinlzs/chainflow/blob/022a530/src/http/reqBuilder.ts#L19)

***

### headers

> **`get`** **headers**(): [`InputNode`](/api/classes/inputnode/)

> **`set`** **headers**(`params`): `void`

#### Parameters

• **params**: `any`

#### Returns

[`InputNode`](/api/classes/inputnode/)

#### Source

[http/reqBuilder.ts:35](https://github.com/edwinlzs/chainflow/blob/022a530/src/http/reqBuilder.ts#L35)

***

### query

> **`get`** **query**(): [`InputNode`](/api/classes/inputnode/)

> **`set`** **query**(`params`): `void`

#### Parameters

• **params**: `any`

#### Returns

[`InputNode`](/api/classes/inputnode/)

#### Source

[http/reqBuilder.ts:27](https://github.com/edwinlzs/chainflow/blob/022a530/src/http/reqBuilder.ts#L27)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
