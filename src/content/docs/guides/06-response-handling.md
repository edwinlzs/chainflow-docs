---
title: Response Handling
description: How to configure handling of responses to endpoint calls.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/response-handling"
sidebar:
  order: 6
---

## `config` on Endpoints

Each endpoint has a `config` _method_ that allows you to specify several options for handling the response.

### Parsing the response body

By default, Chainflow parses the response body as a JSON object. The library uses [undici](https://github.com/nodejs/undici) as its underlying HTTP client, hence if you need to parse the response in another format you may specify any of 4 formats undici has implemented via the `RESP_PARSER` enum and its variants: `ARRAY_BUFFER`, `BLOB`, `JSON` or `TEXT`.

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

> TODO: allow undefined