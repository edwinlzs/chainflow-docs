---
title: Response Handling
description: How to configure handling of responses to endpoint calls.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/response-handling"
sidebar:
  order: 7
---

## `config` on Endpoints

Each endpoint has a `config` _method_ that allows you to specify several options for handling the response.

### Parsing the response body

By default, Chainflow parses the response body as a JSON object unless the status code is `204` or the `content-type` header does not contain `application/json` (to avoid errors when parsing an empty body), upon which they will instead parse it as text.

The library uses [undici](https://github.com/nodejs/undici) as its underlying HTTP client, hence you can manually specify the parser as any of 4 formats undici has implemented via the `RESP_PARSER` enum and its variants: `ARRAY_BUFFER`, `BLOB`, `JSON` or `TEXT`.

```typescript {3-4}
import { RESP_PARSER } from "chainflow";

const getUser = origin.get("/user").config({
  respParser: RESP_PARSER.TEXT,
});
```

If you're using JavaScript, you can use the strings `'arrayBuffer'`, `'blob'`, `'json'` or `'text'` in place of the enum.

### Validating a response

By default, Chainflow rejects a response and throws an error if the response has HTTP status code 400 and above. If you'd like to change when the error is thrown and/or provide custom validations of the response payload, you can do so by passing a custom callback to the `respValidator` key using the endpoint's `config` method.

```typescript
const getUser = origin.get("/user").config({
  respValidator: (resp) => {
    if (resp.statusCode !== 201)
      return { valid: false, msg: "Failed to retrieve users." };
    if (!Object.keys(resp.body as Record<string, unknown>).includes("id"))
      return { valid: false, msg: "Response did not provide user ID." };
    return { valid: true };
  },
});
```

Your custom validator should have the return type:

```typescript
{
  valid: boolean; // false if response should be rejected
  msg?: string; // error message
}
```

## `config` utility for `SourceNode`

By default, a source node's value is considered unavailable if it is `undefined` or the path to its value does not exist. When this happens, the linked input node will _not_ take that source node's value.

```typescript {1} {12} {15}
import { config } from 'chainflow';

const getUser = origin.get("/user").query({
  name: "Tom",
});

const addRole = origin.post("/role").body({
  userId: "some-default-id",
  role: "ENGINEER",
});

const getUserId = config(getUser.resp.body.id, { allowUndefined: true });

addRole.set(({ body: { userId } }) => {
  link(userId, getUserId);
});

chainflow().call(getUser).call(addRole).run();
```

Above, if the response to `getUser` does not have a value at `body.id`, the `userId` input node on `addRole` would _normally_ ignore the link with the `getUser.resp.body.id` source node and use the default value of `'some-default-id'`. However, since we have configured the source node with the `config` utility and specified `allowUndefined` as `true`, `addRole` will use the value `undefined` for `userId` instead.
