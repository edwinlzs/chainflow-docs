---
editUrl: false
next: false
prev: false
title: "link"
layout: "/src/layouts/DocsLayout.astro"
---

> **link**(`dest`, `source`, `callback`?): `void`

Link a Source node to a Input node.

## Parameters

• **dest**: [`InputNode`](/api/classes/inputnode/)

the input node that should take a value from a source.

• **source**: `SourceNode`

the source node that will provide the value for a input.

• **callback?**: (`val`) => `any`

an optional function that is called on the source source value.

## Returns

`void`

## Source

[core/utils/link.ts:11](https://github.com/edwinlzs/chainflow/blob/a565c76/src/core/utils/link.ts#L11)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
