---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [http/reqBuilder](/docs/http/reqBuilder/README) / ReqBuilder

# Class: ReqBuilder

Contains node definitions for a request.

## Constructors

### new ReqBuilder(__namedParameters)

• **new ReqBuilder**(`__namedParameters`): [`ReqBuilder`](/docs/http/reqBuilder/classes/ReqBuilder)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters\.hash**: `string`

#### Returns

[`ReqBuilder`](/docs/http/reqBuilder/classes/ReqBuilder)

#### Source

[src/http/reqBuilder.ts:12](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/reqBuilder.ts#L12)

## Properties

### #body

• **`private`** **#body**: [`InputNode`](/docs/core/inputNode/classes/InputNode)

#### Source

[src/http/reqBuilder.ts:9](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/reqBuilder.ts#L9)

***

### #hash

• **`private`** **#hash**: `string`

#### Source

[src/http/reqBuilder.ts:10](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/reqBuilder.ts#L10)

***

### #headers

• **`private`** **#headers**: [`InputNode`](/docs/core/inputNode/classes/InputNode)

#### Source

[src/http/reqBuilder.ts:6](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/reqBuilder.ts#L6)

***

### #queryParams

• **`private`** **#queryParams**: [`InputNode`](/docs/core/inputNode/classes/InputNode)

#### Source

[src/http/reqBuilder.ts:8](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/reqBuilder.ts#L8)

***

### baseHeaders

• **baseHeaders**: [`InputNode`](/docs/core/inputNode/classes/InputNode)

#### Source

[src/http/reqBuilder.ts:5](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/reqBuilder.ts#L5)

***

### pathParams

• **pathParams**: [`InputNode`](/docs/core/inputNode/classes/InputNode)

#### Source

[src/http/reqBuilder.ts:7](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/reqBuilder.ts#L7)

## Accessors

### body

• **`get`** **body**(): [`InputNode`](/docs/core/inputNode/classes/InputNode)

• **`set`** **body**(`payload`): `void`

#### Parameters

• **payload**: `any`

#### Returns

[`InputNode`](/docs/core/inputNode/classes/InputNode)

#### Source

[src/http/reqBuilder.ts:21](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/reqBuilder.ts#L21)

***

### headers

• **`get`** **headers**(): [`InputNode`](/docs/core/inputNode/classes/InputNode)

• **`set`** **headers**(`params`): `void`

#### Parameters

• **params**: `any`

#### Returns

[`InputNode`](/docs/core/inputNode/classes/InputNode)

#### Source

[src/http/reqBuilder.ts:43](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/reqBuilder.ts#L43)

***

### query

• **`get`** **query**(): [`InputNode`](/docs/core/inputNode/classes/InputNode)

• **`set`** **query**(`params`): `void`

#### Parameters

• **params**: `any`

#### Returns

[`InputNode`](/docs/core/inputNode/classes/InputNode)

#### Source

[src/http/reqBuilder.ts:32](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/reqBuilder.ts#L32)
