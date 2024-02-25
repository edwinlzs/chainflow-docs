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
const getProfile = origin.get('/user/{userId}');
```

The snippet above defines the `getProfile` endpoint with one path parameter which has the key `userId`.

You can still assign values to the path params by calling the `pathParams` method:

```typescript
const getProfile = origin.get('/user/{userId}').pathParams({
  userId: 'user123',
});
```

Note that unlike the `headers`, `body` and `query` methods, the `pathParams` method does _not_ create new input nodes (because path param input nodes must be defined in the URL, i.e. `.get('/user/{userId}')` is the action that defines the nodes). Instead, `pathParams` is simply assigning values to the existing nodes. Any irrelevant keys you give to `pathParams` that do not exist in the URL will be ignored.

All of these methods are chainable as per the Builder pattern, e.g.:

```typescript
const createUser = origin
  .post('/user')
  .headers({
    token: 'some-value',
  })
  .body({
    name: 'Tom',
    details: {
      age: 42,
    },
  });
```

## Shared headers

Sometimes, you may want to share some common headers across multiple endpoints (e.g. for data such as login tokens). An easy way to do this is with the `headers` method on an `OriginServer` itself (instead of on an endpoint which is covered earlier). This will make every endpoint created thereafter from that origin server bear those common headers.

```typescript {7-9}
const origin = originServer('127.0.0.1:5000');

const login = origin.post('/login').body({
  name: 'admin',
});

origin.headers({
  Authorization: login.resp.body.token,
});

const createGroup = loggedInOrigin.post('/group');
const sendMessage = loggedInOrigin.post('/message');

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
  'content-type': 'text/plain',
});

// sendMessage headers will have:
// {
//   'Authorization': 'send-message-token',
//   'Accept': '*/*',
// }
sendMessage.headers({
  'Authorization': 'send-message-token',
  'Accept': '*/*',
});
```

