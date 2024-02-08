---
editUrl: false
next: false
prev: false
title: "ReqBuilder"
---

Contains node definitions for a request.

## Constructors

### new ReqBuilder(__namedParameters)

> **new ReqBuilder**(`__namedParameters`): [`ReqBuilder`](/api/http/reqbuilder/classes/reqbuilder/)

#### Parameters

• **\_\_namedParameters**: `Object`

• **\_\_namedParameters\.hash**: `string`

#### Returns

[`ReqBuilder`](/api/http/reqbuilder/classes/reqbuilder/)

#### Source

[chainflow/src/http/reqBuilder.ts:12](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/reqBuilder.ts#L12)

## Properties

### baseHeaders

> **baseHeaders**: [`InputNode`](/api/core/inputnode/classes/inputnode/)

#### Source

[chainflow/src/http/reqBuilder.ts:5](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/reqBuilder.ts#L5)

***

### pathParams

> **pathParams**: [`InputNode`](/api/core/inputnode/classes/inputnode/)

#### Source

[chainflow/src/http/reqBuilder.ts:7](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/reqBuilder.ts#L7)

## Accessors

### body

> **`get`** **body**(): [`InputNode`](/api/core/inputnode/classes/inputnode/)

> **`set`** **body**(`payload`): `void`

#### Parameters

• **payload**: `any`

#### Returns

[`InputNode`](/api/core/inputnode/classes/inputnode/)

#### Source

[chainflow/src/http/reqBuilder.ts:21](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/reqBuilder.ts#L21)

***

### headers

> **`get`** **headers**(): [`InputNode`](/api/core/inputnode/classes/inputnode/)

> **`set`** **headers**(`params`): `void`

#### Parameters

• **params**: `any`

#### Returns

[`InputNode`](/api/core/inputnode/classes/inputnode/)

#### Source

[chainflow/src/http/reqBuilder.ts:43](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/reqBuilder.ts#L43)

***

### query

> **`get`** **query**(): [`InputNode`](/api/core/inputnode/classes/inputnode/)

> **`set`** **query**(`params`): `void`

#### Parameters

• **params**: `any`

#### Returns

[`InputNode`](/api/core/inputnode/classes/inputnode/)

#### Source

[chainflow/src/http/reqBuilder.ts:32](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/reqBuilder.ts#L32)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
