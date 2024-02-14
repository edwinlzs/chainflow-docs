---
editUrl: false
next: false
prev: false
title: "Chainflow"
layout: "/src/layouts/DocsLayout.astro"
---

## Constructors

### new Chainflow()

> **new Chainflow**(): [`Chainflow`](/api/classes/chainflow/)

#### Returns

[`Chainflow`](/api/classes/chainflow/)

## Methods

### call()

> **call**(`endpoint`, `opts`?): [`Chainflow`](/api/classes/chainflow/)

Adds an endpoint call to the callchain.

#### Parameters

• **endpoint**: [`IEndpoint`](/api/interfaces/iendpoint/)

• **opts?**: [`CallOpts`](/api/interfaces/callopts/)

#### Returns

[`Chainflow`](/api/classes/chainflow/)

#### Source

[core/chainflow.ts:87](https://github.com/edwinlzs/chainflow/blob/a565c76/src/core/chainflow.ts#L87)

***

### clone()

> **clone**(): [`Chainflow`](/api/classes/chainflow/)

Creates a clone of this chainflow and its callqueue
 which can be extended and run independently.

#### Returns

[`Chainflow`](/api/classes/chainflow/)

#### Source

[core/chainflow.ts:99](https://github.com/edwinlzs/chainflow/blob/a565c76/src/core/chainflow.ts#L99)

***

### extend()

> **extend**(`cf`): [`Chainflow`](/api/classes/chainflow/)

Extends this chainflow's callqueue with that of another flow.

#### Parameters

• **cf**: [`Chainflow`](/api/classes/chainflow/)

#### Returns

[`Chainflow`](/api/classes/chainflow/)

#### Source

[core/chainflow.ts:106](https://github.com/edwinlzs/chainflow/blob/a565c76/src/core/chainflow.ts#L106)

***

### reset()

> **reset**(): `void`

Resets the chainflow's state by clearing its accumulated sources.

#### Returns

`void`

#### Source

[core/chainflow.ts:93](https://github.com/edwinlzs/chainflow/blob/a565c76/src/core/chainflow.ts#L93)

***

### run()

> **run**(`opts`?): `Promise`\<[`SourceValues`](/api/type-aliases/sourcevalues/)\>

Run the set up chain

#### Parameters

• **opts?**: [`RunOpts`](/api/interfaces/runopts/)

#### Returns

`Promise`\<[`SourceValues`](/api/type-aliases/sourcevalues/)\>

#### Source

[core/chainflow.ts:59](https://github.com/edwinlzs/chainflow/blob/a565c76/src/core/chainflow.ts#L59)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
