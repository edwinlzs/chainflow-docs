---
editUrl: false
next: false
prev: false
title: "Chainflow"
---

## Constructors

### new Chainflow()

> **new Chainflow**(): [`Chainflow`](/api/core/chainflow/classes/chainflow/)

#### Returns

[`Chainflow`](/api/core/chainflow/classes/chainflow/)

## Methods

### call()

> **call**(`endpoint`, `opts`?): [`Chainflow`](/api/core/chainflow/classes/chainflow/)

Adds an endpoint call to the callchain.

#### Parameters

• **endpoint**: [`IEndpoint`](/api/core/chainflow/interfaces/iendpoint/)

• **opts?**: [`CallOpts`](/api/core/chainflow/interfaces/callopts/)

#### Returns

[`Chainflow`](/api/core/chainflow/classes/chainflow/)

#### Source

[chainflow/src/core/chainflow.ts:87](https://github.com/edwinlzs/chainflow/blob/a27a974/src/core/chainflow.ts#L87)

***

### clone()

> **clone**(): [`Chainflow`](/api/core/chainflow/classes/chainflow/)

Creates a clone of this chainflow and its callstack
 which can be extended and run independently.

#### Returns

[`Chainflow`](/api/core/chainflow/classes/chainflow/)

#### Source

[chainflow/src/core/chainflow.ts:99](https://github.com/edwinlzs/chainflow/blob/a27a974/src/core/chainflow.ts#L99)

***

### extend()

> **extend**(`cf`): [`Chainflow`](/api/core/chainflow/classes/chainflow/)

Extends this chainflow's callstack with that of another flow.

#### Parameters

• **cf**: [`Chainflow`](/api/core/chainflow/classes/chainflow/)

#### Returns

[`Chainflow`](/api/core/chainflow/classes/chainflow/)

#### Source

[chainflow/src/core/chainflow.ts:106](https://github.com/edwinlzs/chainflow/blob/a27a974/src/core/chainflow.ts#L106)

***

### reset()

> **reset**(): `void`

Resets the chainflow's state by clearing its accumulated sources.

#### Returns

`void`

#### Source

[chainflow/src/core/chainflow.ts:93](https://github.com/edwinlzs/chainflow/blob/a27a974/src/core/chainflow.ts#L93)

***

### run()

> **run**(`opts`?): `Promise`\<[`SourceValues`](/api/core/inputnode/type-aliases/sourcevalues/)\>

Run the set up chain

#### Parameters

• **opts?**: [`RunOpts`](/api/core/chainflow/interfaces/runopts/)

#### Returns

`Promise`\<[`SourceValues`](/api/core/inputnode/type-aliases/sourcevalues/)\>

#### Source

[chainflow/src/core/chainflow.ts:59](https://github.com/edwinlzs/chainflow/blob/a27a974/src/core/chainflow.ts#L59)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
