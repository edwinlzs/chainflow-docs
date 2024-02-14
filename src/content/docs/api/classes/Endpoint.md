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

- [`IEndpoint`](/api/interfaces/iendpoint/)

## Constructors

### new Endpoint(__namedParameters)

> **new Endpoint**(`__namedParameters`): [`Endpoint`](/api/classes/endpoint/)

#### Parameters

• **\_\_namedParameters**: `Object`

• **\_\_namedParameters\.addr**: `string`

• **\_\_namedParameters\.method**: `string`

• **\_\_namedParameters\.path**: `string`

#### Returns

[`Endpoint`](/api/classes/endpoint/)

#### Source

[http/endpoint.ts:69](https://github.com/edwinlzs/chainflow/blob/a565c76/src/http/endpoint.ts#L69)

## Properties

### hash

> **hash**: `string`

A hash that uniquely identifies this endpoint.

#### Implementation of

[`IEndpoint.hash`](/api/interfaces/iendpoint/#hash)

#### Source

[http/endpoint.ts:67](https://github.com/edwinlzs/chainflow/blob/a565c76/src/http/endpoint.ts#L67)

## Accessors

### method

> **`get`** **method**(): `SUPPORTED_METHOD`

#### Returns

`SUPPORTED_METHOD`

#### Source

[http/endpoint.ts:83](https://github.com/edwinlzs/chainflow/blob/a565c76/src/http/endpoint.ts#L83)

***

### resp

> **`get`** **resp**(): `SourceNode`

#### Returns

`SourceNode`

#### Source

[http/endpoint.ts:99](https://github.com/edwinlzs/chainflow/blob/a565c76/src/http/endpoint.ts#L99)

## Methods

### baseHeaders()

> **baseHeaders**(`node`): [`Endpoint`](/api/classes/endpoint/)

Sets headers provided by the originServer object.

#### Parameters

• **node**: [`InputNode`](/api/classes/inputnode/)

#### Returns

[`Endpoint`](/api/classes/endpoint/)

#### Source

[http/endpoint.ts:116](https://github.com/edwinlzs/chainflow/blob/a565c76/src/http/endpoint.ts#L116)

***

### body()

> **body**(`payload`): [`Endpoint`](/api/classes/endpoint/)

Sets the request body.

#### Parameters

• **payload**: `any`

#### Returns

[`Endpoint`](/api/classes/endpoint/)

#### Source

[http/endpoint.ts:94](https://github.com/edwinlzs/chainflow/blob/a565c76/src/http/endpoint.ts#L94)

***

### call()

> **call**(`responses`, `opts`?): `Promise`\<[`CallResult`](/api/interfaces/callresult/)\>

Calls this endpoint with responses provided from earlier requests in the chain.

#### Parameters

• **responses**: [`SourceValues`](/api/type-aliases/sourcevalues/)

• **opts?**: [`CallOpts`](/api/interfaces/callopts/)

#### Returns

`Promise`\<[`CallResult`](/api/interfaces/callresult/)\>

#### Implementation of

[`IEndpoint.call`](/api/interfaces/iendpoint/#call)

#### Source

[http/endpoint.ts:128](https://github.com/edwinlzs/chainflow/blob/a565c76/src/http/endpoint.ts#L128)

***

### config()

> **config**(`config`): [`Endpoint`](/api/classes/endpoint/)

Configures this endpoint.

#### Parameters

• **config**: [`EndpointConfig`](/api/interfaces/endpointconfig/)

#### Returns

[`Endpoint`](/api/classes/endpoint/)

#### Source

[http/endpoint.ts:88](https://github.com/edwinlzs/chainflow/blob/a565c76/src/http/endpoint.ts#L88)

***

### headers()

> **headers**(`params`): [`Endpoint`](/api/classes/endpoint/)

Sets custom headers for requests.

#### Parameters

• **params**: `Record`\<`string`, `undefined` \| `string` \| [`INodeWithValue`](/api/interfaces/inodewithvalue/)\>

#### Returns

[`Endpoint`](/api/classes/endpoint/)

#### Source

[http/endpoint.ts:110](https://github.com/edwinlzs/chainflow/blob/a565c76/src/http/endpoint.ts#L110)

***

### query()

> **query**(`params`): [`Endpoint`](/api/classes/endpoint/)

Sets the request query parameters.

#### Parameters

• **params**: `any`

#### Returns

[`Endpoint`](/api/classes/endpoint/)

#### Source

[http/endpoint.ts:104](https://github.com/edwinlzs/chainflow/blob/a565c76/src/http/endpoint.ts#L104)

***

### set()

> **set**(`setter`): [`Endpoint`](/api/classes/endpoint/)

Passes the request input nodes of this endpoint to a callback.

#### Parameters

• **setter**: (`nodes`) => `void`

#### Returns

[`Endpoint`](/api/classes/endpoint/)

#### Source

[http/endpoint.ts:184](https://github.com/edwinlzs/chainflow/blob/a565c76/src/http/endpoint.ts#L184)

***

### store()

> **store**(`callback`): [`Endpoint`](/api/classes/endpoint/)

Declare values to store from responses to this endpoint.

#### Parameters

• **callback**: (`resp`) => `IStore`\<`SourceNode`\>

#### Returns

[`Endpoint`](/api/classes/endpoint/)

#### Source

[http/endpoint.ts:122](https://github.com/edwinlzs/chainflow/blob/a565c76/src/http/endpoint.ts#L122)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
