---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [core/utils/link](/docs/core/utils/link/README) / link

# Function: link()

• **link**(`dest`, `source`, `callback`?): `void`

Link a Source node to a Input node.

## Parameters

• **dest**: [`InputNode`](/docs/core/inputNode/classes/InputNode)

the input node that should take a value from a source.

• **source**: [`SourceNode`](/docs/core/sourceNode/interfaces/SourceNode)

the source node that will provide the value for a input.

• **callback?**

an optional function that is called on the source source value.

## Returns

`void`

## Source

[src/core/utils/link.ts:11](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/utils/link.ts#L11)
