---
title: Chainflows
description: How to structure chainflows.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/chainflows"
sidebar:
  order: 3
---

## The Chainflow

A chainflow is where you define a series of endpoints to be called and also run those calls.

Create a new chainflow with the `chainflow` function. Add endpoint calls to a chainflow by passing in endpoints to the `call` method (note that this does _not_ make the actual endpoint request yet, it only adds the endpoint call to the chainflow's queue). Finally, the `run` method will *actually* execute the series of endpoint calls in the order you defined.

```typescript
import { chainflow } from 'chainflow';

chainflow()
  .call(createUser)
  .call(addRole)
  .run();
```

Here, we instruct the chainflow to call `createUser` first, then call `addRole`, and run the flow once.

Let's say we have a server which receives the `createUser` call (at `POST '/user'`), processes the request and generates an `id` for the newly created user, then responds with the body `{ id: 'some-id' }`. Recall that we have created a link from `id` in `createUser` to `userId` in `addRole`. When we execute the next endpoint call at `addRole`, the chainflow will check if there is a response available from `createUser` and take the `id` value from it to create the request body: `{ userId: 'some-id', role: 'engineer' }`.

This is how linked values are passed from a source node to an input node.

## Seed

Outputs from an endpoint are not the only type of source node. Each chainflow can have a `seed` which is another special source node that you can link to an input node.

```typescript {5}
import { seed } from 'chainflow';

const addRole = origin.post('/role').body({
  userId: createUser.resp.body.id,
  role: seed.role,
});
```

As a `SourceNode`, the `seed` works the same way as the `.resp` property on any endpoint - you can write any kind of property access on it. It will track how you did it and pass that path information to the receiving input node. Now the `role` input node knows it should use `.role` to access a value on the seed during a chainflow run.

The actual seed value is an argument you can pass in when executing `run` on a chainflow.

```typescript {5-7}
chainflow()
  .call(createUser)
  .call(addRole)
  .run({
    seed: {
      role: 'admin',
    },
  });
```

In this snippet, we pass to the `run` method a `seed` with the key `role` bearing a value of `admin`. Since we have linked the `role` input node in `addRole` with `seed.role`, during this chainflow run `addRole` will have the body `{ ..., role: 'admin' }`.