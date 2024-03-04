---
title: More Headers
description: More ways to specify common headers.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/more-headers"
sidebar:
  order: 5
---

## Shared headers

Sometimes, you may want to share some common headers across multiple endpoints (e.g. for data such as login tokens). An easy way to do this is with the `headers` method on an `OriginServer` itself (instead of on an endpoint which is covered earlier). This will make every endpoint created thereafter from that origin server bear those common headers.

```typescript {7-9}
const origin = originServer("127.0.0.1:5000");

const login = origin.post("/login").body({
  name: "admin",
});

origin.headers({
  Authorization: login.resp.body.token,
});

const createGroup = loggedInOrigin.post("/group");
const sendMessage = loggedInOrigin.post("/message");

chainflow().call(login).call(createGroup).call(sendMessage);
```

In this snippet, we initially create a `login` endpoint from `origin`. After doing so, we define a set of headers on `origin` that takes a value from `login.resp.body.token`, then proceed to define the `createGroup` and `sendMessage` endpoints. These two endpoints will _both_ have the `Authorization` header that takes the token from the response to `login`.

You can still define other headers on each individual endpoint - the shared headers and those headers defined on the endpoint will be deep merged together (with endpoint-defined headers overriding shared headers if there are conflicts).

```typescript
// createGroup headers will have:
// {
//   'Authorization': [value from login.resp.body.token]
//   'content-type': 'text/plain',
// }
createGroup.headers({
  "content-type": "text/plain",
});

// sendMessage headers will have:
// {
//   'Authorization': 'send-message-token',
//   'Accept': '*/*',
// }
sendMessage.headers({
  Authorization: "send-message-token",
  Accept: "*/*",
});
```

## Default Headers

There is a set of headers attached to all requests made in Chainflow with these values:

```typescript
'content-type': 'application/json',
'User-Agent': 'Chainflow/[major.minor version number e.g. 0.1]',
```

To change this, call the `defaultHeaders` util with your desired defaults:

```typescript
import { defaultHeaders } from "chainflow";

defaultHeaders({ "content-type": "application/xml" });
```

The example above only overwrites the `content-type` default header and keeps `User-Agent`. Pass `true` as the second argument if you wish to replace the entire set of default headers.
