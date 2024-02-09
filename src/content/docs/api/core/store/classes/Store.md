---
editUrl: false
next: false
prev: false
title: "Store"
layout: "/src/layouts/DocsLayout.astro"
---

Manages the storing of values for an endpoint.

## Constructors

### new Store()

> **new Store**(): [`Store`](/api/core/store/classes/store/)

#### Returns

[`Store`](/api/core/store/classes/store/)

## Properties

### def

> **def**: [`IStore`](/api/core/store/interfaces/istore/)\<[`SourceNode`](/api/core/sourcenode/interfaces/sourcenode/)\> = `{}`

Definition of values to be stored from responses to this endpoint.

#### Source

[chainflow/src/core/store.ts:13](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/store.ts#L13)

## Methods

### storeValues()

> **storeValues**(`resp`): [`CallResult`](/api/core/chainflow/interfaces/callresult/)

Assigns values to be put in the chainflow's store.

#### Parameters

• **resp**: `unknown`

#### Returns

[`CallResult`](/api/core/chainflow/interfaces/callresult/)

#### Source

[chainflow/src/core/store.ts:18](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/store.ts#L18)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
