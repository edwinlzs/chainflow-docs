---
editUrl: false
next: false
prev: false
title: "IEndpoint"
layout: "/src/layouts/DocsLayout.astro"
---

Defines an endpoint that a chainflow can call upon.

## Properties

### call

> **call**: (`sources`, `opts`?) => `Promise`\<[`CallResult`](/api/interfaces/callresult/)\>

#### Parameters

• **sources**: [`SourceValues`](/api/type-aliases/sourcevalues/)

• **opts?**: [`CallOpts`](/api/interfaces/callopts/)

#### Returns

`Promise`\<[`CallResult`](/api/interfaces/callresult/)\>

#### Source

[core/chainflow.ts:21](https://github.com/edwinlzs/chainflow/blob/a565c76/src/core/chainflow.ts#L21)

***

### hash

> **hash**: `string`

#### Source

[core/chainflow.ts:20](https://github.com/edwinlzs/chainflow/blob/a565c76/src/core/chainflow.ts#L20)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
