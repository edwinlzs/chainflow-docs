---
layout: /src/layouts/docs/DocsLayout.astro
sidebar: true
---

[chainflow](../README) / [Modules](../modules) / http/originServer

# Module: http/originServer

## Table of contents

### Type Aliases

- [Origin](./http_originServer#origin)

### Functions

- [originServer](./http_originServer#originserver)

## Type Aliases

### Origin

Ƭ **Origin**: `OriginBase` & \{ `delete`: `MakeEndpoint` ; `get`: `MakeEndpoint` ; `options`: `MakeEndpoint` ; `patch`: `MakeEndpoint` ; `post`: `MakeEndpoint` ; `put`: `MakeEndpoint`  }

#### Defined in

[src/http/originServer.ts:11](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/originServer.ts#L11)

## Functions

### originServer

▸ **originServer**(`addr?`): [`Origin`](./http_originServer#origin)

Convenience function for creating an endpoint builder with supported methods defined on it.

#### Parameters

| Name | Type |
| :------ | :------ |
| `addr?` | `string` |

#### Returns

[`Origin`](./http_originServer#origin)

#### Defined in

[src/http/originServer.ts:6](https://github.com/edwinlzs/chainflow/blob/b0b3282/src/http/originServer.ts#L6)
