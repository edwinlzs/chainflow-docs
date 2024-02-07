---
layout: /src/layouts/docs/DocsLayout.astro
sidebar: true
---

[chainflow](../README) / [Modules](../modules) / [http/endpoint](../modules/http_endpoint) / Endpoint

# Class: Endpoint

[http/endpoint](../modules/http_endpoint).Endpoint

Manages request and response nodes,
as well as calls to that endpoint

## Implements

- [`IEndpoint`](../interfaces/core_chainflow.IEndpoint)

## Table of contents

### Constructors

- [constructor](./http_endpoint.Endpoint#constructor)

### Properties

- [#addr](./http_endpoint.Endpoint##addr)
- [#config](./http_endpoint.Endpoint##config)
- [#method](./http_endpoint.Endpoint##method)
- [#path](./http_endpoint.Endpoint##path)
- [#req](./http_endpoint.Endpoint##req)
- [#resp](./http_endpoint.Endpoint##resp)
- [#store](./http_endpoint.Endpoint##store)
- [hash](./http_endpoint.Endpoint#hash)

### Accessors

- [method](./http_endpoint.Endpoint#method)
- [resp](./http_endpoint.Endpoint#resp)

### Methods

- [#extractPathParams](./http_endpoint.Endpoint##extractpathparams)
- [#findMissingValues](./http_endpoint.Endpoint##findmissingvalues)
- [#insertPathParams](./http_endpoint.Endpoint##insertpathparams)
- [#insertQueryParams](./http_endpoint.Endpoint##insertqueryparams)
- [#parseResponse](./http_endpoint.Endpoint##parseresponse)
- [#validateResp](./http_endpoint.Endpoint##validateresp)
- [baseHeaders](./http_endpoint.Endpoint#baseheaders)
- [body](./http_endpoint.Endpoint#body)
- [call](./http_endpoint.Endpoint#call)
- [config](./http_endpoint.Endpoint#config)
- [headers](./http_endpoint.Endpoint#headers)
- [query](./http_endpoint.Endpoint#query)
- [set](./http_endpoint.Endpoint#set)
- [store](./http_endpoint.Endpoint#store)

## Constructors

### constructor

• **new Endpoint**(`«destructured»`): [`Endpoint`](./http_endpoint.Endpoint)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `addr` | `string` |
| › `method` | `string` |
| › `path` | `string` |

#### Returns

[`Endpoint`](./http_endpoint.Endpoint)

#### Defined in

[src/http/endpoint.ts:69](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L69)

## Properties

### #addr

• `Private` **#addr**: `string` = `'127.0.0.1'`

#### Defined in

[src/http/endpoint.ts:59](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L59)

___

### #config

• `Private` **#config**: [`EndpointConfig`](../interfaces/http_endpoint.EndpointConfig) = `{}`

#### Defined in

[src/http/endpoint.ts:64](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L64)

___

### #method

• `Private` **#method**: [`SUPPORTED_METHOD`](../modules/http_utils_constants#supported_method)

#### Defined in

[src/http/endpoint.ts:61](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L61)

___

### #path

• `Private` **#path**: `string`

#### Defined in

[src/http/endpoint.ts:60](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L60)

___

### #req

• `Private` **#req**: [`ReqBuilder`](./http_reqBuilder.ReqBuilder)

#### Defined in

[src/http/endpoint.ts:62](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L62)

___

### #resp

• `Private` **#resp**: [`SourceNode`](../interfaces/core_sourceNode.SourceNode)

#### Defined in

[src/http/endpoint.ts:63](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L63)

___

### #store

• `Private` **#store**: [`Store`](./core_store.Store)

#### Defined in

[src/http/endpoint.ts:65](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L65)

___

### hash

• **hash**: `string`

A hash that uniquely identifies this endpoint.

#### Implementation of

[IEndpoint](../interfaces/core_chainflow.IEndpoint).[hash](../interfaces/core_chainflow.IEndpoint#hash)

#### Defined in

[src/http/endpoint.ts:67](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L67)

## Accessors

### method

• `get` **method**(): [`SUPPORTED_METHOD`](../modules/http_utils_constants#supported_method)

#### Returns

[`SUPPORTED_METHOD`](../modules/http_utils_constants#supported_method)

#### Defined in

[src/http/endpoint.ts:82](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L82)

___

### resp

• `get` **resp**(): [`SourceNode`](../interfaces/core_sourceNode.SourceNode)

#### Returns

[`SourceNode`](../interfaces/core_sourceNode.SourceNode)

#### Defined in

[src/http/endpoint.ts:98](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L98)

## Methods

### #extractPathParams

▸ **#extractPathParams**(): `void`

Extracts Path params from a given path

#### Returns

`void`

#### Defined in

[src/http/endpoint.ts:194](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L194)

___

### #findMissingValues

▸ **#findMissingValues**(`missingValues`, `obj?`): `string`[]

Looks for missing values in provided object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `missingValues` | `string`[][] |
| `obj?` | `Record`\<`string`, `any`\> |

#### Returns

`string`[]

#### Defined in

[src/http/endpoint.ts:238](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L238)

___

### #insertPathParams

▸ **#insertPathParams**(`path`, `pathParams`): `string`

Inserts actual path params into path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `pathParams` | `Record`\<`string`, `string`\> |

#### Returns

`string`

#### Defined in

[src/http/endpoint.ts:210](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L210)

___

### #insertQueryParams

▸ **#insertQueryParams**(`path`, `queryParams`): `string`

Inserts actual query params into path.

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `queryParams` | `Record`\<`string`, `string`\> |

#### Returns

`string`

#### Defined in

[src/http/endpoint.ts:218](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L218)

___

### #parseResponse

▸ **#parseResponse**(`body`): `Promise`\<`unknown`\>

Parses a response body according to the endpoint config.

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `BodyReadable` |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[src/http/endpoint.ts:258](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L258)

___

### #validateResp

▸ **#validateResp**(`resp`): `Object`

Checks that endpoint call succeeded -
request did not throw error,
and status code is not 4xx or 5xx.

#### Parameters

| Name | Type |
| :------ | :------ |
| `resp` | `ResponseData` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `msg?` | `string` |
| `valid` | `boolean` |

#### Defined in

[src/http/endpoint.ts:229](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L229)

___

### baseHeaders

▸ **baseHeaders**(`node`): [`Endpoint`](./http_endpoint.Endpoint)

Sets headers provided by the originServer object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`InputNode`](./core_inputNode.InputNode) |

#### Returns

[`Endpoint`](./http_endpoint.Endpoint)

#### Defined in

[src/http/endpoint.ts:115](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L115)

___

### body

▸ **body**(`payload`): [`Endpoint`](./http_endpoint.Endpoint)

Sets the request body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

[`Endpoint`](./http_endpoint.Endpoint)

#### Defined in

[src/http/endpoint.ts:93](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L93)

___

### call

▸ **call**(`responses`, `opts?`): `Promise`\<[`CallResult`](../interfaces/core_chainflow.CallResult)\>

Calls this endpoint with responses provided from earlier requests in the chain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `responses` | [`SourceValues`](../modules/core_inputNode#sourcevalues) |
| `opts?` | [`CallOpts`](../interfaces/core_chainflow.CallOpts) |

#### Returns

`Promise`\<[`CallResult`](../interfaces/core_chainflow.CallResult)\>

#### Implementation of

[IEndpoint](../interfaces/core_chainflow.IEndpoint).[call](../interfaces/core_chainflow.IEndpoint#call)

#### Defined in

[src/http/endpoint.ts:127](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L127)

___

### config

▸ **config**(`config`): [`Endpoint`](./http_endpoint.Endpoint)

Configures this endpoint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`EndpointConfig`](../interfaces/http_endpoint.EndpointConfig) |

#### Returns

[`Endpoint`](./http_endpoint.Endpoint)

#### Defined in

[src/http/endpoint.ts:87](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L87)

___

### headers

▸ **headers**(`params`): [`Endpoint`](./http_endpoint.Endpoint)

Sets custom headers for requests.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `Record`\<`string`, `undefined` \| `string` \| [`INodeWithValue`](../interfaces/http_endpoint.INodeWithValue)\> |

#### Returns

[`Endpoint`](./http_endpoint.Endpoint)

#### Defined in

[src/http/endpoint.ts:109](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L109)

___

### query

▸ **query**(`params`): [`Endpoint`](./http_endpoint.Endpoint)

Sets the request query parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

[`Endpoint`](./http_endpoint.Endpoint)

#### Defined in

[src/http/endpoint.ts:103](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L103)

___

### set

▸ **set**(`setter`): [`Endpoint`](./http_endpoint.Endpoint)

Configure linking of this Req's input nodes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `setter` | (`nodes`: [`HttpInputNodes`](../interfaces/http_endpoint.HttpInputNodes)) => `void` |

#### Returns

[`Endpoint`](./http_endpoint.Endpoint)

#### Defined in

[src/http/endpoint.ts:183](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L183)

___

### store

▸ **store**(`callback`): [`Endpoint`](./http_endpoint.Endpoint)

Declare values to store from responses to this endpoint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`resp`: [`SourceNode`](../interfaces/core_sourceNode.SourceNode)) => [`IStore`](../interfaces/core_store.IStore)\<[`SourceNode`](../interfaces/core_sourceNode.SourceNode)\> |

#### Returns

[`Endpoint`](./http_endpoint.Endpoint)

#### Defined in

[src/http/endpoint.ts:121](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/endpoint.ts#L121)
