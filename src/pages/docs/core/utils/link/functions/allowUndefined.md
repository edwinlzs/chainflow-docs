---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [core/utils/link](/docs/core/utils/link/README) / allowUndefined

# Function: allowUndefined()

• **allowUndefined**(`source`): [`SourceNode`](/docs/core/sourceNode/interfaces/SourceNode)

Modifier function that allows a SourceNode to return `undefined` values to an input node.
Note that doing so will make it such that this SourceNode will ALWAYS be used to retrieve
a value for any linked input node, unless there is another SourceNode with higher priority.

## Parameters

• **source**: [`SourceNode`](/docs/core/sourceNode/interfaces/SourceNode)

## Returns

[`SourceNode`](/docs/core/sourceNode/interfaces/SourceNode)

## Source

[src/core/utils/link.ts:34](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/utils/link.ts#L34)
