---
editUrl: false
next: false
prev: false
title: "linkMerge"
layout: "/src/layouts/DocsLayout.astro"
---

## linkMerge(sources, callback)

> **linkMerge**(`sources`, `callback`?): [`MergeSourcesInfo`](/api/interfaces/mergesourcesinfo/)

Links multiple Source nodes to an Input node via a callback.

### Parameters

• **sources**: `SourceNode`[]

an array of source nodes to merge values from.

• **callback?**: (`val`) => `any`

a function to merge the sources into a single source for the dest.

### Returns

[`MergeSourcesInfo`](/api/interfaces/mergesourcesinfo/)

### Source

core/utils/link.d.ts:64

## linkMerge(sources, callback)

> **linkMerge**(`sources`, `callback`?): `void`

Links multiple Source nodes to an Input node via a callback.

### Parameters

• **sources**: `Object`

an object with source nodes to merge values from.

• **callback?**: (`val`) => `any`

a function to merge the sources into a single source for the dest.

### Returns

`void`

### Source

core/utils/link.d.ts:64

## linkMerge(dest, sources, callback)

> **linkMerge**(`dest`, `sources`, `callback`?): `void`

Links multiple Source nodes to an Input node via a callback.

### Parameters

• **dest**: [`InputNode`](/api/classes/inputnode/)

the input node that should take a value from the callback.

• **sources**: `SourceNode`[]

an array of source nodes to merge values from.

• **callback?**: (`val`) => `any`

a function to merge the sources into a single source for the dest.

### Returns

`void`

### Source

core/utils/link.d.ts:64

## linkMerge(dest, sources, callback)

> **linkMerge**(`dest`, `sources`, `callback`?): `void`

Links multiple Source nodes to an Input node via a callback.

### Parameters

• **dest**: [`InputNode`](/api/classes/inputnode/)

the input node that should take a value from the callback.

• **sources**: `Object`

an object with source nodes to merge values from.

• **callback?**: (`val`) => `any`

a function to merge the sources into a single source for the dest.

### Returns

`void`

### Source

core/utils/link.d.ts:64

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
