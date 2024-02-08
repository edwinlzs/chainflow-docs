---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [core/sourceNode](/docs/core/sourceNode/README) / SourceNodeHandler

# Variable: SourceNodeHandler

• **`const`** **SourceNodeHandler**: `Object`

Generates proxies recursively to handle nested property access of a source signature.

## Type declaration

### get()

#### Parameters

• **obj**: `RawSourceNode`

• **prop**: `any`

#### Returns

`any`

### set()

#### Parameters

• **obj**: `RawSourceNode`

• **prop**: `any`

• **val**: `any`

#### Returns

`any`

## Source

[src/core/sourceNode.ts:25](https://github.com/edwinlzs/chainflow/blob/99ff659/src/core/sourceNode.ts#L25)
