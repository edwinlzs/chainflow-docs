---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [http/endpoint](/docs/http/endpoint/README) / EndpointConfig

# Interface: EndpointConfig

Configurations for the endpoint.

## Properties

### respParser?

• **`optional`** **respParser**: `"arrayBuffer"` \| `"blob"` \| `"json"` \| `"text"`

#### Source

[src/http/endpoint.ts:39](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L39)

***

### respValidator?

• **`optional`** **respValidator**: (`resp`) => `Object`

#### Parameters

• **resp**: `ResponseData`

#### Returns

`Object`

##### msg?

• **`optional`** **msg**: `string`

##### valid

• **valid**: `boolean`

#### Source

[src/http/endpoint.ts:40](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L40)
