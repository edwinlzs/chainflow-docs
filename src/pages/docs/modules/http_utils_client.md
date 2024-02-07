---
layout: /src/layouts/docs/DocsLayout.astro
sidebar: true
---

[chainflow](../README) / [Modules](../modules) / http/utils/client

# Module: http/utils/client

## Table of contents

### Type Aliases

- [SUPPORTED\_METHOD\_UPPERCASE](./http_utils_client#supported_method_uppercase)

### Variables

- [default](./http_utils_client#default)
- [defaultHeaders](./http_utils_client#defaultheaders)

## Type Aliases

### SUPPORTED\_METHOD\_UPPERCASE

Ƭ **SUPPORTED\_METHOD\_UPPERCASE**: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"DELETE"`` \| ``"PATCH"`` \| ``"OPTIONS"``

#### Defined in

[src/http/utils/client.ts:4](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/utils/client.ts#L4)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `httpReq` | (`__namedParameters`: \{ `addr`: `string` ; `body?`: `any` ; `headers?`: `Record`\<`string`, `string`\> ; `method`: [`SUPPORTED_METHOD_UPPERCASE`](./http_utils_client#supported_method_uppercase) ; `path`: `string`  }) => `Promise`\<``null`` \| `ResponseData`\> |

#### Defined in

[src/http/utils/client.ts:52](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/utils/client.ts#L52)

___

### defaultHeaders

• `Const` **defaultHeaders**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accept` | `string` |
| `connection` | `string` |
| `content-type` | `string` |

#### Defined in

[src/http/utils/client.ts:6](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/utils/client.ts#L6)
