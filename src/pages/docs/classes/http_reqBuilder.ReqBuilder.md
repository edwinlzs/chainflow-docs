---
layout: /src/layouts/docs/DocsLayout.astro
sidebar: true
---

[chainflow](../README) / [Modules](../modules) / [http/reqBuilder](../modules/http_reqBuilder) / ReqBuilder

# Class: ReqBuilder

[http/reqBuilder](../modules/http_reqBuilder).ReqBuilder

Contains node definitions for a request.

## Table of contents

### Constructors

- [constructor](./http_reqBuilder.ReqBuilder#constructor)

### Properties

- [#body](./http_reqBuilder.ReqBuilder##body)
- [#hash](./http_reqBuilder.ReqBuilder##hash)
- [#headers](./http_reqBuilder.ReqBuilder##headers)
- [#queryParams](./http_reqBuilder.ReqBuilder##queryparams)
- [baseHeaders](./http_reqBuilder.ReqBuilder#baseheaders)
- [pathParams](./http_reqBuilder.ReqBuilder#pathparams)

### Accessors

- [body](./http_reqBuilder.ReqBuilder#body)
- [headers](./http_reqBuilder.ReqBuilder#headers)
- [query](./http_reqBuilder.ReqBuilder#query)

## Constructors

### constructor

• **new ReqBuilder**(`«destructured»`): [`ReqBuilder`](./http_reqBuilder.ReqBuilder)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `hash` | `string` |

#### Returns

[`ReqBuilder`](./http_reqBuilder.ReqBuilder)

#### Defined in

[src/http/reqBuilder.ts:12](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L12)

## Properties

### #body

• `Private` **#body**: [`InputNode`](./core_inputNode.InputNode)

#### Defined in

[src/http/reqBuilder.ts:9](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L9)

___

### #hash

• `Private` **#hash**: `string`

#### Defined in

[src/http/reqBuilder.ts:10](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L10)

___

### #headers

• `Private` **#headers**: [`InputNode`](./core_inputNode.InputNode)

#### Defined in

[src/http/reqBuilder.ts:6](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L6)

___

### #queryParams

• `Private` **#queryParams**: [`InputNode`](./core_inputNode.InputNode)

#### Defined in

[src/http/reqBuilder.ts:8](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L8)

___

### baseHeaders

• **baseHeaders**: [`InputNode`](./core_inputNode.InputNode)

#### Defined in

[src/http/reqBuilder.ts:5](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L5)

___

### pathParams

• **pathParams**: [`InputNode`](./core_inputNode.InputNode)

#### Defined in

[src/http/reqBuilder.ts:7](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L7)

## Accessors

### body

• `get` **body**(): [`InputNode`](./core_inputNode.InputNode)

#### Returns

[`InputNode`](./core_inputNode.InputNode)

#### Defined in

[src/http/reqBuilder.ts:21](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L21)

• `set` **body**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`void`

#### Defined in

[src/http/reqBuilder.ts:25](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L25)

___

### headers

• `get` **headers**(): [`InputNode`](./core_inputNode.InputNode)

#### Returns

[`InputNode`](./core_inputNode.InputNode)

#### Defined in

[src/http/reqBuilder.ts:43](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L43)

• `set` **headers**(`params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`void`

#### Defined in

[src/http/reqBuilder.ts:47](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L47)

___

### query

• `get` **query**(): [`InputNode`](./core_inputNode.InputNode)

#### Returns

[`InputNode`](./core_inputNode.InputNode)

#### Defined in

[src/http/reqBuilder.ts:32](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L32)

• `set` **query**(`params`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`void`

#### Defined in

[src/http/reqBuilder.ts:36](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/reqBuilder.ts#L36)
