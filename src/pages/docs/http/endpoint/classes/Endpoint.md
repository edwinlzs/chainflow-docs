---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [http/endpoint](/docs/http/endpoint/README) / Endpoint

# Class: Endpoint

Manages request and response nodes,
as well as calls to that endpoint

## Implements

- [`IEndpoint`](/docs/core/chainflow/interfaces/IEndpoint)

## Constructors

### new Endpoint(__namedParameters)

• **new Endpoint**(`__namedParameters`): [`Endpoint`](/docs/http/endpoint/classes/Endpoint)

#### Parameters

• **\_\_namedParameters**

• **\_\_namedParameters\.addr**: `string`

• **\_\_namedParameters\.method**: `string`

• **\_\_namedParameters\.path**: `string`

#### Returns

[`Endpoint`](/docs/http/endpoint/classes/Endpoint)

#### Source

[src/http/endpoint.ts:69](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L69)

## Properties

### #addr

• **`private`** **#addr**: `string` = `'127.0.0.1'`

#### Source

[src/http/endpoint.ts:59](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L59)

***

### #config

• **`private`** **#config**: [`EndpointConfig`](/docs/http/endpoint/interfaces/EndpointConfig) = `{}`

#### Source

[src/http/endpoint.ts:64](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L64)

***

### #method

• **`private`** **#method**: [`SUPPORTED_METHOD`](/docs/http/utils/constants/type-aliases/SUPPORTED_METHOD)

#### Source

[src/http/endpoint.ts:61](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L61)

***

### #path

• **`private`** **#path**: `string`

#### Source

[src/http/endpoint.ts:60](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L60)

***

### #req

• **`private`** **#req**: [`ReqBuilder`](/docs/http/reqBuilder/classes/ReqBuilder)

#### Source

[src/http/endpoint.ts:62](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L62)

***

### #resp

• **`private`** **#resp**: [`SourceNode`](/docs/core/sourceNode/interfaces/SourceNode)

#### Source

[src/http/endpoint.ts:63](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L63)

***

### #store

• **`private`** **#store**: [`Store`](/docs/core/store/classes/Store)

#### Source

[src/http/endpoint.ts:65](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L65)

***

### hash

• **hash**: `string`

A hash that uniquely identifies this endpoint.

#### Implementation of

[`IEndpoint`](/docs/core/chainflow/interfaces/IEndpoint).[`hash`](/docs/core/chainflow/interfaces/IEndpoint#hash)

#### Source

[src/http/endpoint.ts:67](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L67)

## Accessors

### method

• **`get`** **method**(): [`SUPPORTED_METHOD`](/docs/http/utils/constants/type-aliases/SUPPORTED_METHOD)

#### Returns

[`SUPPORTED_METHOD`](/docs/http/utils/constants/type-aliases/SUPPORTED_METHOD)

#### Source

[src/http/endpoint.ts:82](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L82)

***

### resp

• **`get`** **resp**(): [`SourceNode`](/docs/core/sourceNode/interfaces/SourceNode)

#### Returns

[`SourceNode`](/docs/core/sourceNode/interfaces/SourceNode)

#### Source

[src/http/endpoint.ts:98](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L98)

## Methods

### #extractPathParams()

• **`private`** **#extractPathParams**(): `void`

Extracts Path params from a given path

#### Returns

`void`

#### Source

[src/http/endpoint.ts:194](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L194)

***

### #findMissingValues()

• **`private`** **#findMissingValues**(`missingValues`, `obj`?): `string`[]

Looks for missing values in provided object.

#### Parameters

• **missingValues**: `string`[][]

• **obj?**: `Record`\<`string`, `any`\>

#### Returns

`string`[]

#### Source

[src/http/endpoint.ts:238](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L238)

***

### #insertPathParams()

• **`private`** **#insertPathParams**(`path`, `pathParams`): `string`

Inserts actual path params into path.

#### Parameters

• **path**: `string`

• **pathParams**: `Record`\<`string`, `string`\>

#### Returns

`string`

#### Source

[src/http/endpoint.ts:210](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L210)

***

### #insertQueryParams()

• **`private`** **#insertQueryParams**(`path`, `queryParams`): `string`

Inserts actual query params into path.

#### Parameters

• **path**: `string`

• **queryParams**: `Record`\<`string`, `string`\>

#### Returns

`string`

#### Source

[src/http/endpoint.ts:218](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L218)

***

### #parseResponse()

• **`private`** **#parseResponse**(`body`): `Promise`\<`unknown`\>

Parses a response body according to the endpoint config.

#### Parameters

• **body**: `BodyReadable`

#### Returns

`Promise`\<`unknown`\>

#### Source

[src/http/endpoint.ts:258](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L258)

***

### #validateResp()

• **`private`** **#validateResp**(`resp`): `Object`

Checks that endpoint call succeeded -
request did not throw error,
and status code is not 4xx or 5xx.

#### Parameters

• **resp**: `ResponseData`

#### Returns

`Object`

##### msg?

• **`optional`** **msg**: `string`

##### valid

• **valid**: `boolean`

#### Source

[src/http/endpoint.ts:229](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L229)

***

### baseHeaders()

• **baseHeaders**(`node`): [`Endpoint`](/docs/http/endpoint/classes/Endpoint)

Sets headers provided by the originServer object.

#### Parameters

• **node**: [`InputNode`](/docs/core/inputNode/classes/InputNode)

#### Returns

[`Endpoint`](/docs/http/endpoint/classes/Endpoint)

#### Source

[src/http/endpoint.ts:115](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L115)

***

### body()

• **body**(`payload`): [`Endpoint`](/docs/http/endpoint/classes/Endpoint)

Sets the request body.

#### Parameters

• **payload**: `any`

#### Returns

[`Endpoint`](/docs/http/endpoint/classes/Endpoint)

#### Source

[src/http/endpoint.ts:93](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L93)

***

### call()

• **call**(`responses`, `opts`?): `Promise`\<[`CallResult`](/docs/core/chainflow/interfaces/CallResult)\>

Calls this endpoint with responses provided from earlier requests in the chain.

#### Parameters

• **responses**: [`SourceValues`](/docs/core/inputNode/type-aliases/SourceValues)

• **opts?**: [`CallOpts`](/docs/core/chainflow/interfaces/CallOpts)

#### Returns

`Promise`\<[`CallResult`](/docs/core/chainflow/interfaces/CallResult)\>

#### Implementation of

[`IEndpoint`](/docs/core/chainflow/interfaces/IEndpoint).[`call`](/docs/core/chainflow/interfaces/IEndpoint#call)

#### Source

[src/http/endpoint.ts:127](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L127)

***

### config()

• **config**(`config`): [`Endpoint`](/docs/http/endpoint/classes/Endpoint)

Configures this endpoint.

#### Parameters

• **config**: [`EndpointConfig`](/docs/http/endpoint/interfaces/EndpointConfig)

#### Returns

[`Endpoint`](/docs/http/endpoint/classes/Endpoint)

#### Source

[src/http/endpoint.ts:87](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L87)

***

### headers()

• **headers**(`params`): [`Endpoint`](/docs/http/endpoint/classes/Endpoint)

Sets custom headers for requests.

#### Parameters

• **params**: `Record`\<`string`, `undefined` \| `string` \| [`INodeWithValue`](/docs/http/endpoint/interfaces/INodeWithValue)\>

#### Returns

[`Endpoint`](/docs/http/endpoint/classes/Endpoint)

#### Source

[src/http/endpoint.ts:109](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L109)

***

### query()

• **query**(`params`): [`Endpoint`](/docs/http/endpoint/classes/Endpoint)

Sets the request query parameters.

#### Parameters

• **params**: `any`

#### Returns

[`Endpoint`](/docs/http/endpoint/classes/Endpoint)

#### Source

[src/http/endpoint.ts:103](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L103)

***

### set()

• **set**(`setter`): [`Endpoint`](/docs/http/endpoint/classes/Endpoint)

Configure linking of this Req's input nodes.

#### Parameters

• **setter**

#### Returns

[`Endpoint`](/docs/http/endpoint/classes/Endpoint)

#### Source

[src/http/endpoint.ts:183](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L183)

***

### store()

• **store**(`callback`): [`Endpoint`](/docs/http/endpoint/classes/Endpoint)

Declare values to store from responses to this endpoint.

#### Parameters

• **callback**

#### Returns

[`Endpoint`](/docs/http/endpoint/classes/Endpoint)

#### Source

[src/http/endpoint.ts:121](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/endpoint.ts#L121)
