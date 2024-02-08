---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [http/utils/client](/docs/http/utils/client/README) / default

# Variable: default

• **default**: `Object`

## Type declaration

### httpReq

• **httpReq**: (`__namedParameters`) => `Promise`\<`null` \| `ResponseData`\>

Sends a HTTP request.

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters\.addr**: `string`

• **\_\_namedParameters\.body?**: `any`

• **\_\_namedParameters\.headers?**: `Record`\<`string`, `string`\>

• **\_\_namedParameters\.method**: [`SUPPORTED_METHOD_UPPERCASE`](/docs/http/utils/client/type-aliases/SUPPORTED_METHOD_UPPERCASE)

• **\_\_namedParameters\.path**: `string`

#### Returns

`Promise`\<`null` \| `ResponseData`\>

## Source

[src/http/utils/client.ts:52](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/utils/client.ts#L52)
