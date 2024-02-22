---
editUrl: false
next: false
prev: false
title: "link"
layout: "/src/layouts/DocsLayout.astro"
---

## link(source, callback)

> **link**(`source`, `callback`?): `SourceInfo`

Link a Source node to an Input node.

### Parameters

• **source**: `SourceNode`

the source node that will provide the value for an input.

• **callback?**: (`val`) => `any`

an optional function that is called on the source source value.

### Returns

`SourceInfo`

### Source

core/utils/link.d.ts:25

## link(dest, source, callback)

> **link**(`dest`, `source`, `callback`?): `void`

Link a Source node to an Input node.

### Parameters

• **dest**: [`InputNode`](/api/classes/inputnode/)

the input node that should take a value from a source.

• **source**: `SourceNode`

the source node that will provide the value for an input.

• **callback?**: (`val`) => `any`

an optional function that is called on the source source value.

### Returns

`void`

### Source

core/utils/link.d.ts:25

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
