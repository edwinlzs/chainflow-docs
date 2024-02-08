---
layout: /src/layouts/docs/DocsLayout.astro
---

**chainflow** • [Readme](/docs/README) \| [API](/docs/modules)

***

[chainflow](/docs/README) / [http/errors](/docs/http/errors/README) / RequiredValuesNotFoundError

# Class: RequiredValuesNotFoundError

When there is no value available for a required input node.

## Extends

- `Error`

## Constructors

### new RequiredValuesNotFoundError(hash, missingValues)

• **new RequiredValuesNotFoundError**(`hash`, `missingValues`): [`RequiredValuesNotFoundError`](/docs/http/errors/classes/RequiredValuesNotFoundError)

#### Parameters

• **hash**: `string`

• **missingValues**: `string`[]

#### Returns

[`RequiredValuesNotFoundError`](/docs/http/errors/classes/RequiredValuesNotFoundError)

#### Overrides

`Error.constructor`

#### Source

[src/http/errors.ts:11](https://github.com/edwinlzs/chainflow/blob/99ff659/src/http/errors.ts#L11)

## Properties

### cause?

• **`optional`** **cause**: `unknown`

#### Inherited from

`Error.cause`

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:24

***

### message

• **message**: `string`

#### Inherited from

`Error.message`

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

***

### name

• **name**: `string`

#### Inherited from

`Error.name`

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es5.d.ts:1075

***

### stack?

• **`optional`** **stack**: `string`

#### Inherited from

`Error.stack`

#### Source

node\_modules/.pnpm/typescript@5.3.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

***

### prepareStackTrace?

• **`static`** **`optional`** **prepareStackTrace**: (`err`, `stackTraces`) => `any`

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

node\_modules/.pnpm/@types+node@20.11.16/node\_modules/@types/node/globals.d.ts:28

***

### stackTraceLimit

• **`static`** **stackTraceLimit**: `number`

#### Inherited from

`Error.stackTraceLimit`

#### Source

node\_modules/.pnpm/@types+node@20.11.16/node\_modules/@types/node/globals.d.ts:30

## Methods

### captureStackTrace()

• **`static`** **captureStackTrace**(`targetObject`, `constructorOpt`?): `void`

Create .stack property on a target object

#### Parameters

• **targetObject**: `object`

• **constructorOpt?**: `Function`

#### Returns

`void`

#### Inherited from

`Error.captureStackTrace`

#### Source

node\_modules/.pnpm/@types+node@20.11.16/node\_modules/@types/node/globals.d.ts:21
