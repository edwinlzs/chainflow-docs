---
title: Input Nodes
description: How to configure input nodes on an endpoint.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/input-nodes"
sidebar:
  order: 2
---

## Initialized Values

### Defaults

In the previous chapter, we defined the following endpoint:

```typescript "token" "name" "details" "age"
const createUser = origin
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

In doing so, `InputNode` instances will be defined for the endpoint. Specifically, this example creates _4_ input nodes: `token` on the request headers and `name`, `details` and `age` on the request body, as marked out above.

The concept of input nodes are important as they determine what values are used in a request. So far, we have only initialized these input nodes with _default values_. For instance, in place of any overriding value (discussed later), the request will use `'some-value'` as the value of the `token` header.

### Generated

In place of default values, an input node can use _generated values_ via Chainflow's `gen` function.

```typescript collapse={3-4} {7}
import { gen } from 'chainflow';

// just some function that returns a random name
const randName = () => ['Tom', 'Josh', 'Git'][Math.floor(Math.random() * 3)];

createUser.body({
  name: gen(randName),
}),
```

The use of `gen` above instructs the `name` input node to call a generator function, in this case `randName`, and use the value it returns for the request body when the endpoint is called.

This is useful when you want your own custom function to generate values for a payload or when paired with data generation libraries such as `faker` (e.g. `gen(faker.person.name)`).

## Required Values

If you want to indicate that an input node exists but don't want to specify any initialized value, you can use the `required` function instead.

```typescript {4}
import { required } from 'chainflow';

createUser.body({
	name: required(),
});
```

A required input node must take a value from elsewhere. There are two possible ways for a required node to receive a value - from a *call value*, or from *linked values*, discussed in the next part.  

## Linked Values

Links are what give chainflows high dynamism by allowing outputs from one endpoint to flow to the inputs of another. Below is the simplest way of creating a link: 

```typescript {2}
const addRole = origin.post('/role').body({
	userId: createUser.resp.body.id,
  role: 'engineer',
});
```

Here, we link the value of `id` in the response body of the `createUser` endpoint to the `userId` input node in the request body of the `addRole` endpoint.

Let's take a deeper look. The `resp` property on an endpoint is a special proxy object whose interface we shall refer to as a `SourceNode`.

The source node tracks how you accessed it and passes that information to the input node to tell it how it should retrieve a value from that source node. Due to the special nature of a source node, you do not have to define any properties on it beforehand - its sole purpose is just to capture the path you took when accessing it.

In the above snippet's context, the source node `createUser.resp` was accessed with `.body.id` by us. This tells the linked `userId` input node to take the path `.body.id` to access a value from the response to `createUser`.

```json
// example JSON response to `createUser`
{
  headers: ...,
  body: {
    // the value of `id` will be passed to `userId` in addRole
    id: 'some-id',
  },
  statusCode: 201,
}
```

Once a link between nodes on two endpoints are established, if the endpoint with a linked output node is called first, the value in its response will be taken and used at the linked input node on the second endpoint when it is called next.

The below snippet shows another way of defining links:

```typescript {8-9}
import { link } from 'chainflow';

const addRole = origin.post('/role').body({
	userId: 'dummy-id',
  role: 'engineer',
});

addRole.set(({ body: { userId }}) => {
	link(userId, createUser.resp.body.id);
});
```

The `set` method exposes the HTTP input nodes on the endpoint (i.e. `headers`, `body`, `query` and `pathParams`) by accepting a callback which takes these input nodes in its parameters. In the above example, we destructure the input nodes (line 8) to access the `userId` input node in the request `body`. We then use the `link` function provided by Chainflow and pass in the `userId` input node and `createUser.resp.body.id` source node to link them together.

A benefit of this method is that the `userId` input node can now use either `id` from `createUser` or fall back to its default value (`'dummy-id'`) if the source node is not available.

Before we go further and discuss the last category of input values (*call values*), let us clarify in the next chapter how endpoint calls work in a *chainflow*.  