---
editUrl: false
next: false
prev: false
title: "Endpoint"
layout: "/src/layouts/DocsLayout.astro"
---

Manages request and response nodes,
as well as calls to that endpoint

## Implements

- [`IEndpoint`](/api/interfaces/iendpoint/)\<[`HTTPCallOpts`](/api/interfaces/httpcallopts/), `IHttpReq`, `ParsedHttpResp`\>

## Constructors

### new Endpoint(__namedParameters)

> **new Endpoint**(`__namedParameters`): [`Endpoint`](/api/classes/endpoint/)

#### Parameters

• **\_\_namedParameters**: `Object`

• **\_\_namedParameters\.method**: `SUPPORTED_METHOD`

• **\_\_namedParameters\.url**: `string`

#### Returns

[`Endpoint`](/api/classes/endpoint/)

#### Source

http/endpoint.d.ts:43

## Properties

### id

> **id**: `string`

Uniquely identifies this endpoint.

#### Implementation of

[`IEndpoint.id`](/api/interfaces/iendpoint/#id)

#### Source

http/endpoint.d.ts:40

***

### method

> **method**: `SUPPORTED_METHOD`

#### Source

http/endpoint.d.ts:42

***

### url

> **url**: `string`

#### Source

http/endpoint.d.ts:41

## Accessors

### details

> **`get`** **details**(): `string`

#### Todo

Update this when there is a better implementation of id.

#### Returns

`string`

#### Source

http/endpoint.d.ts:48

***

### resp

> **`get`** **resp**(): `SourceNode`

#### Returns

`SourceNode`

#### Source

http/endpoint.d.ts:53

## Methods

### baseHeaders()

> **baseHeaders**(`node`): `this`

Sets headers provided by the originServer object.

#### Parameters

• **node**: [`InputNode`](/api/classes/inputnode/)

#### Returns

`this`

#### Source

http/endpoint.d.ts:61

***

### body()

> **body**(`payload`): `this`

Sets the request body.

#### Parameters

• **payload**: `any`

#### Returns

`this`

#### Source

http/endpoint.d.ts:52

***

### call()

> **call**(`responses`, `opts`?): `Promise`\<[`CallResult`](/api/interfaces/callresult/)\<`IHttpReq`, `ParsedHttpResp`\>\>

Calls this endpoint with responses provided from earlier requests in the chain.

#### Parameters

• **responses**: [`SourceValues`](/api/type-aliases/sourcevalues/)

• **opts?**: [`HTTPCallOpts`](/api/interfaces/httpcallopts/)

#### Returns

`Promise`\<[`CallResult`](/api/interfaces/callresult/)\<`IHttpReq`, `ParsedHttpResp`\>\>

#### Implementation of

[`IEndpoint.call`](/api/interfaces/iendpoint/#call)

#### Source

http/endpoint.d.ts:65

***

### config()

> **config**(`config`): `this`

Configures this endpoint.

#### Parameters

• **config**: [`EndpointConfig`](/api/interfaces/endpointconfig/)

#### Returns

`this`

#### Source

http/endpoint.d.ts:50

***

### headers()

> **headers**(`params`): `this`

Sets custom headers for requests.

#### Parameters

• **params**: `Record`\<`string`, `undefined` \| `string` \| [`INodeWithValue`](/api/interfaces/inodewithvalue/)\>

#### Returns

`this`

#### Source

http/endpoint.d.ts:57

***

### pathParams()

> **pathParams**(`params`): `this`

Sets the path params (if they exist in the URL).

#### Parameters

• **params**: `Record`\<`string`, `string` \| `SourceNode` \| [`SourceInfo`](/api/interfaces/sourceinfo/) \| [`MergeSourcesInfo`](/api/interfaces/mergesourcesinfo/)\>

#### Returns

`this`

#### Source

http/endpoint.d.ts:59

***

### query()

> **query**(`params`): `this`

Sets the request query parameters.

#### Parameters

• **params**: `any`

#### Returns

`this`

#### Source

http/endpoint.d.ts:55

***

### set()

> **set**(`setter`): `this`

Passes the request input nodes of this endpoint to a callback.

#### Parameters

• **setter**: (`nodes`) => `void`

#### Returns

`this`

#### Source

http/endpoint.d.ts:67

***

### store()

> **store**(`callback`): `this`

Declare values to store from responses to this endpoint.

#### Parameters

• **callback**: (`resp`) => `IStore`\<`SourceNode`\>

#### Returns

`this`

#### Source

http/endpoint.d.ts:63

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
