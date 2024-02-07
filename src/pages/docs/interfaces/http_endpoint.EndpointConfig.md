---
layout: /src/layouts/docs/DocsLayout.astro
sidebar: true
---

[chainflow](../README) / [Modules](../modules) / [http/endpoint](../modules/http_endpoint) / EndpointConfig

# Interface: EndpointConfig

[http/endpoint](../modules/http_endpoint).EndpointConfig

Configurations for the endpoint.

## Table of contents

### Properties

- [respParser](./http_endpoint.EndpointConfig#respparser)
- [respValidator](./http_endpoint.EndpointConfig#respvalidator)

## Properties

### respParser

• `Optional` **respParser**: ``"arrayBuffer"`` \| ``"blob"`` \| ``"json"`` \| ``"text"``

#### Defined in

[src/http/endpoint.ts:39](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L39)

___

### respValidator

• `Optional` **respValidator**: (`resp`: `ResponseData`) => \{ `msg?`: `string` ; `valid`: `boolean`  }

#### Type declaration

▸ (`resp`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `resp` | `ResponseData` |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `msg?` | `string` |
| `valid` | `boolean` |

#### Defined in

[src/http/endpoint.ts:40](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L40)
