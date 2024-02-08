---
editUrl: false
next: false
prev: false
title: "Endpoint"
---

Manages request and response nodes,
as well as calls to that endpoint

## Implements

- [`IEndpoint`](/api/core/chainflow/interfaces/iendpoint/)

## Constructors

### new Endpoint(__namedParameters)

> **new Endpoint**(`__namedParameters`): [`Endpoint`](/api/http/endpoint/classes/endpoint/)

#### Parameters

• **\_\_namedParameters**: `Object`

• **\_\_namedParameters\.addr**: `string`

• **\_\_namedParameters\.method**: `string`

• **\_\_namedParameters\.path**: `string`

#### Returns

[`Endpoint`](/api/http/endpoint/classes/endpoint/)

#### Source

[chainflow/src/http/endpoint.ts:69](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/endpoint.ts#L69)

## Properties

### hash

> **hash**: `string`

A hash that uniquely identifies this endpoint.

#### Implementation of

[`core/chainflow.IEndpoint.hash`](/api/core/chainflow/interfaces/iendpoint/#hash)

#### Source

[chainflow/src/http/endpoint.ts:67](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/endpoint.ts#L67)

## Accessors

### method

> **`get`** **method**(): [`SUPPORTED_METHOD`](/api/http/utils/constants/type-aliases/supported_method/)

#### Returns

[`SUPPORTED_METHOD`](/api/http/utils/constants/type-aliases/supported_method/)

#### Source

[chainflow/src/http/endpoint.ts:82](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/endpoint.ts#L82)

***

### resp

> **`get`** **resp**(): [`SourceNode`](/api/core/sourcenode/interfaces/sourcenode/)

#### Returns

[`SourceNode`](/api/core/sourcenode/interfaces/sourcenode/)

#### Source

[chainflow/src/http/endpoint.ts:98](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/endpoint.ts#L98)

## Methods

### baseHeaders()

> **baseHeaders**(`node`): [`Endpoint`](/api/http/endpoint/classes/endpoint/)

Sets headers provided by the originServer object.

#### Parameters

• **node**: [`InputNode`](/api/core/inputnode/classes/inputnode/)

#### Returns

[`Endpoint`](/api/http/endpoint/classes/endpoint/)

#### Source

[chainflow/src/http/endpoint.ts:115](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/endpoint.ts#L115)

***

### body()

> **body**(`payload`): [`Endpoint`](/api/http/endpoint/classes/endpoint/)

Sets the request body.

#### Parameters

• **payload**: `any`

#### Returns

[`Endpoint`](/api/http/endpoint/classes/endpoint/)

#### Source

[chainflow/src/http/endpoint.ts:93](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/endpoint.ts#L93)

***

### call()

> **call**(`responses`, `opts`?): `Promise`\<[`CallResult`](/api/core/chainflow/interfaces/callresult/)\>

Calls this endpoint with responses provided from earlier requests in the chain.

#### Parameters

• **responses**: [`SourceValues`](/api/core/inputnode/type-aliases/sourcevalues/)

• **opts?**: [`CallOpts`](/api/core/chainflow/interfaces/callopts/)

#### Returns

`Promise`\<[`CallResult`](/api/core/chainflow/interfaces/callresult/)\>

#### Implementation of

[`core/chainflow.IEndpoint.call`](/api/core/chainflow/interfaces/iendpoint/#call)

#### Source

[chainflow/src/http/endpoint.ts:127](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/endpoint.ts#L127)

***

### config()

> **config**(`config`): [`Endpoint`](/api/http/endpoint/classes/endpoint/)

Configures this endpoint.

#### Parameters

• **config**: [`EndpointConfig`](/api/http/endpoint/interfaces/endpointconfig/)

#### Returns

[`Endpoint`](/api/http/endpoint/classes/endpoint/)

#### Source

[chainflow/src/http/endpoint.ts:87](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/endpoint.ts#L87)

***

### headers()

> **headers**(`params`): [`Endpoint`](/api/http/endpoint/classes/endpoint/)

Sets custom headers for requests.

#### Parameters

• **params**: `Record`\<`string`, `undefined` \| `string` \| [`INodeWithValue`](/api/http/endpoint/interfaces/inodewithvalue/)\>

#### Returns

[`Endpoint`](/api/http/endpoint/classes/endpoint/)

#### Source

[chainflow/src/http/endpoint.ts:109](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/endpoint.ts#L109)

***

### query()

> **query**(`params`): [`Endpoint`](/api/http/endpoint/classes/endpoint/)

Sets the request query parameters.

#### Parameters

• **params**: `any`

#### Returns

[`Endpoint`](/api/http/endpoint/classes/endpoint/)

#### Source

[chainflow/src/http/endpoint.ts:103](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/endpoint.ts#L103)

***

### set()

> **set**(`setter`): [`Endpoint`](/api/http/endpoint/classes/endpoint/)

Configure linking of this Req's input nodes.

#### Parameters

• **setter**: (`nodes`) => `void`

#### Returns

[`Endpoint`](/api/http/endpoint/classes/endpoint/)

#### Source

[chainflow/src/http/endpoint.ts:183](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/endpoint.ts#L183)

***

### store()

> **store**(`callback`): [`Endpoint`](/api/http/endpoint/classes/endpoint/)

Declare values to store from responses to this endpoint.

#### Parameters

• **callback**: (`resp`) => [`IStore`](/api/core/store/interfaces/istore/)\<[`SourceNode`](/api/core/sourcenode/interfaces/sourcenode/)\>

#### Returns

[`Endpoint`](/api/http/endpoint/classes/endpoint/)

#### Source

[chainflow/src/http/endpoint.ts:121](https://github.com/edwinlzs/chainflow/blob/a27a974/src/http/endpoint.ts#L121)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
