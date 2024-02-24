---
title: The Store
description: Using the chainflow store to centralize links.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/the-store"
sidebar:
  order: 5
---

## Many-to-Many links

The store is an object on a Chainflow you can use to manage passing values between source nodes and input nodes.

It is useful when you have a endpoint with an input node that can take values from many other source nodes, and/or you have a response that needs to pass its value to many other input nodes.

### Placing values in the store

Call the `store` _method_ on an endpoint to define how to store a source node from a response.

```typescript {6} {9}
const createUser = origin
  .post("/user")
  .body({
    name: "Tom",
  })
  .store((resp) => ({
    // after making a request this endpoint will store `id`
    // from a response to the `newUserId` key in the chainflow store
    newUserId: resp.body.id,
  }));
```

Above, we specify that the value of `id` in the response body to `createUser` should be stored under the `newUserId` key of a chainflow store.

### Retrieving values from the store

Next, import the special `store` _source node object_ from chainflow and link it to an input node.

```typescript {5}
import { store } from "chainflow";

const addRole = origin.post("/role").body({
  // `userId` will take the value of `newUserId` from the store, if available
  userId: store.newUserId,
  role: "Engineer",
});

// the value of `id` in the response body to `createUser`
// will be passed to `userId` in the request body of `addRole`
chainflow().call(createUser).call(addRole).run();
```

Above, we pass the `store` source node with an accessor path of `newUserId` to the `userId` input node on `addRole`. This tells `addRole` to look for a value under the `newUserId` key in a chainflow store when the endpoint is making a request.

Think of the chainflow store as a way to centralize values and thereby simplify many-to-many links (similar to how an API Gateway facilitates requests and responses between clients and services).