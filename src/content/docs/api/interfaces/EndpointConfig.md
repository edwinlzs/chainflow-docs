---
editUrl: false
next: false
prev: false
title: "EndpointConfig"
layout: "/src/layouts/DocsLayout.astro"
---

Configurations for the endpoint.

## Properties

### respParser?

> **respParser**?: `"arrayBuffer"` \| `"blob"` \| `"json"` \| `"text"`

#### Source

[http/endpoint.ts:39](https://github.com/edwinlzs/chainflow/blob/902c18e/src/http/endpoint.ts#L39)

***

### respValidator?

> **respValidator**?: (`resp`) => `Object`

#### Parameters

• **resp**: `ResponseData`

#### Returns

`Object`

> ##### msg?
>
> > **msg**?: `string`
>
> ##### valid
>
> > **valid**: `boolean`
>

#### Source

[http/endpoint.ts:40](https://github.com/edwinlzs/chainflow/blob/902c18e/src/http/endpoint.ts#L40)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
