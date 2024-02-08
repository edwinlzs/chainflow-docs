---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [core/utils/link](/docs/core/utils/link/README) / linkMany

# Function: linkMany()

• **linkMany**(`dest`, `sources`, `callback`): `void`

Links multiple Source nodes to a Input node via a callback.

## Parameters

• **dest**: [`InputNode`](/docs/core/inputNode/classes/InputNode)

the input node that should take a value from the callback.

• **sources**

an array of source nodes that will be passed into the callback.

• **callback**

a function to merge the sources into a single source for the dest.

## Returns

`void`

## Source

[src/core/utils/link.ts:21](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/utils/link.ts#L21)
