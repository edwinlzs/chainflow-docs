---
editUrl: false
next: false
prev: false
title: "linkMerge"
layout: "/src/layouts/DocsLayout.astro"
---

> **linkMerge**(`dest`, `sources`, `callback`?): `void`

Links multiple Source nodes to a Input node via a callback.

## Parameters

• **dest**: [`InputNode`](/api/classes/inputnode/)

the input node that should take a value from the callback.

• **sources**: `SourceNode`[] \| `Object`

an array of source nodes that will be passed into the callback.

• **callback?**: (`val`) => `any`

a function to merge the sources into a single source for the dest.

## Returns

`void`

## Source

core/utils/link.d.ts:16

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)