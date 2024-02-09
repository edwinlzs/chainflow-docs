---
title: Endpoints
description: How to define endpoints in Chainflow.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/endpoints"
sidebar:
  order: 1
---

## Origin Server

Start off by defining an `OriginServer` instance you will be sending requests to by passing it a string with the server's host and port.

```typescript
import { originServer } from './chainflow';

const origin = originServer('127.0.0.1:5000');
```

## Defining an Endpoint

Create `Endpoint` instances from the origin server instance by calling the respective HTTP method verb on it and passing a path string.

```typescript
const createUser = origin.post('/user');
const getProfile = origin.get('/user/profile');
```

You can configure HTTP request parameters on endpoint instances by defining their HTTP headers, body, query and path parameters.

### Headers

```typescript
getProfile.headers({
  Authorization: 'Bearer abc',
});
```

### Body

```typescript
createUser.body({
  name: 'Tom',
  age: 42,
});
```

### Query Parameters

```typescript
getProfile.query({
  age: 42,
});
```

### Path Parameters

You can only define path parameters at the creation of the endpoint, using curly braces `{}` to denote the parameter and its key, like below.

```typescript
const getProfile = origin.get('/user/{userId}');
```

The snippet above defines the `getProfile` endpoint with one path parameter which has the key `userId`.

All of these methods are chainable as per the Builder pattern, e.g.:

```typescript
const createUser = origin
  .post('/user')
  .headers({
    token: 'some-token',
  })
  .body({
    name: 'Tom',
  });
```

Defining the inputs as shown above will create and store `InputNode` instances in the endpoint definition. For example, the snippet creates the `token` input node on the endpoint's request headers, and the `name` input node on the request body.

Right now, we have only initialized these input nodes with _default values_. The next chapter will cover how we can make inputs more flexible and dynamic!