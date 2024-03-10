---
title: Endpoints
description: How to define endpoints in Chainflow.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/endpoints"
sidebar:
  order: 1
---

## Origin Server

Start off by defining an `Origin` instance that represents a server you will be sending requests to by passing it the host and port (protocol is optional, defaults to `http`).

```typescript
import { origin } from "./chainflow";

const backend = origin("127.0.0.1:5000");
```

## Defining an Endpoint

Create `Endpoint` instances from the `Origin` instance by calling the respective HTTP method verb on it and passing a path string.

```typescript
const createUser = backend.post("/user");
const getProfile = backend.get("/user/profile");
```

You can configure HTTP request parameters on endpoint instances by defining their HTTP headers, body, query and path parameters.

### Headers

```typescript
getProfile.headers({
  Authorization: "Bearer abc",
});
```

### Body

```typescript
createUser.body({
  name: "Tom",
  details: {
    age: 42,
  },
});
```

### Query Parameters

```typescript
getProfile.query({
  age: 42,
});
```

This will cause the endpoint to be called with the URL `.../user/profile?age=42`.

### Path Parameters

You can only define path parameters at the creation of the endpoint, using curly braces `{}` to denote the parameter and its key, like below.

```typescript
const getProfile = backend.get("/user/{userId}");
```

The snippet above defines the `getProfile` endpoint with one path parameter which has the key `userId`.

You can still assign values to the path params by calling the `pathParams` method:

```typescript
const getProfile = backend.get("/user/{userId}").pathParams({
  userId: "user123",
});
```

Note that unlike the `headers`, `body` and `query` methods, the `pathParams` method does _not_ create new input nodes (because path param input nodes must be defined in the URL, i.e. `.get('/user/{userId}')` is the action that defines the nodes). Instead, `pathParams` is simply assigning values to the existing nodes. Any irrelevant keys you give to `pathParams` that do not exist in the URL will be ignored.

All of these methods are chainable as per the Builder pattern, e.g.:

```typescript
const createUser = backend
  .post("/user")
  .headers({
    token: "some-value",
  })
  .body({
    name: "Tom",
    details: {
      age: 42,
    },
  });
```
