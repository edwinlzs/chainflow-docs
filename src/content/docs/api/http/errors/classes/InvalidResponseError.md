---
editUrl: false
next: false
prev: false
title: "InvalidResponseError"
layout: "/src/layouts/DocsLayout.astro"
---

## Extends

- `Error`

## Constructors

### new InvalidResponseError(msg)

> **new InvalidResponseError**(`msg`?): [`InvalidResponseError`](/api/http/errors/classes/invalidresponseerror/)

#### Parameters

• **msg?**: `string`

#### Returns

[`InvalidResponseError`](/api/http/errors/classes/invalidresponseerror/)

#### Overrides

`Error.constructor`

#### Source

[chainflow/src/http/errors.ts:22](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/errors.ts#L22)

## Properties

### cause?

> **cause**?: `unknown`

#### Inherited from

`Error.cause`

#### Source

chainflow-docs-v2/node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

#### Source

chainflow-docs-v2/node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

#### Source

chainflow-docs-v2/node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es5.d.ts:1075

***

### stack?

> **stack**?: `string`

#### Inherited from

`Error.stack`

#### Source

chainflow-docs-v2/node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### prepareStackTrace?

> **`static`** **prepareStackTrace**?: (`err`, `stackTraces`) => `any`

Optional override for formatting stack traces

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

Optional override for formatting stack traces

#### Parameters

• **err**: `Error`

• **stackTraces**: `CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

`Error.prepareStackTrace`

#### Source

chainflow/node\_modules/.pnpm/@types+node@20.11.16/node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

> **`static`** **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Source

chainflow/node\_modules/.pnpm/@types+node@20.11.16/node\_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace()

> **`static`** **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Source

chainflow/node\_modules/.pnpm/@types+node@20.11.16/node\_modules/@types/node/globals.d.ts:21

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
