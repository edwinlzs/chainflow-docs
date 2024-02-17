---
editUrl: false
next: false
prev: false
title: "allowUndefined"
layout: "/src/layouts/DocsLayout.astro"
---

> **allowUndefined**(`source`): `SourceNode`

Modifier function that allows a SourceNode to return `undefined` values to an input node.
Note that doing so will make it such that this SourceNode will ALWAYS be used to retrieve
a value for any linked input node, unless there is another SourceNode with higher priority.

## Parameters

• **source**: `SourceNode`

## Returns

`SourceNode`

## Source

[core/utils/link.ts:34](https://github.com/edwinlzs/chainflow/blob/022a530/src/core/utils/link.ts#L34)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
