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

http/endpoint.d.ts:21

***

### respValidator?

> **respValidator**?: (`resp`) => `Object`

#### Parameters

• **resp**: `ParsedHttpResp`

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

http/endpoint.d.ts:22

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
