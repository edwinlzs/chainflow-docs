---
editUrl: false
next: false
prev: false
title: "default"
---

> **default**: `Object`

## Type declaration

### httpReq

> **httpReq**: (`__namedParameters`) => `Promise`\<`null` \| `ResponseData`\>

Sends a HTTP request.

#### Parameters

• **\_\_namedParameters**: `Object`

• **\_\_namedParameters\.addr**: `string`

• **\_\_namedParameters\.body?**: `any`

• **\_\_namedParameters\.headers?**: `Record`\<`string`, `string`\>

• **\_\_namedParameters\.method**: [`SUPPORTED_METHOD_UPPERCASE`](/api/http/utils/client/type-aliases/supported_method_uppercase/)

• **\_\_namedParameters\.path**: `string`

#### Returns

`Promise`\<`null` \| `ResponseData`\>

## Source

[chainflow/src/http/utils/client.ts:52](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/utils/client.ts#L52)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
