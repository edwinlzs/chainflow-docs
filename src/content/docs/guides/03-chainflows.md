---
title: Chainflows
description: How to structure chainflows.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/chainflows"
sidebar:
  order: 3
---

## The Chainflow

A chainflow is where you define and run a series of endpoint calls.

Create a new chainflow with the `chainflow` function. Add endpoint calls to a chainflow by passing in endpoints to the `call` method (note that this does _not_ make the actual endpoint request yet, it only adds the endpoint call to the chainflow's queue). Finally, the `run` method will _actually_ execute the series of endpoint calls in the order you defined.

```typescript
import { chainflow } from "chainflow";

chainflow().call(createUser).call(addRole).run();
```

Here, we instruct the chainflow to call `createUser` first, then call `addRole`, and run the flow once.

Let's say we have a server which receives the `createUser` call (at `POST '/user'`), processes the request and generates an `id` for the newly created user, then responds with the body `{ id: 'some-id' }`. Recall that we have created a link from `id` in `createUser` to `userId` in `addRole`. When we execute the next endpoint call at `addRole`, the chainflow will check if there is a response available from `createUser` and take the `id` value from it to create the request body: `{ userId: 'some-id', role: 'engineer' }`.

This is how linked values are passed from a source node to an input node.

## Seed

Outputs from an endpoint are not the only type of source node. Each chainflow can have a `seed` which is another special source node that you can link to an input node.

```typescript {5}
import { seed } from "chainflow";

const addRole = origin.post("/role").body({
  userId: createUser.resp.body.id,
  role: seed.role,
});
```

As a `SourceNode`, the `seed` works the same way as the `.resp` property on any endpoint - you can write any kind of property access on it. It will track how you did it and pass that path information to the receiving input node. Now the `role` input node knows it should use `.role` to access a value on the seed during a chainflow run.

The actual seed value is an argument you can pass in when executing `run` on a chainflow.

```typescript {5}
chainflow()
  .call(createUser)
  .call(addRole)
  .seed({
    role: "admin",
  })
  .run();
```

In this snippet, we call the `seed` method on a chainflow and pass in a value of `admin` for the `role` key. Since we have linked the `role` input node in `addRole` with `seed.role`, during this chainflow run `addRole` will have the body `{ ..., role: 'admin' }`.

## Call Options

You can directly declare input values for an endpoint on a chainflow by passing a second argument to the `call` method.

```typescript
const createUser = origin.post("/user").body({
  name: "Tom",
});

chainflow()
  .call(createUser, { body: { name: "Harry" } })
  .run();
```

Values passed this way have the highest priority and will override any defaults (in this case `Tom`) or linked values for affected input node.

## Viewing Responses

After running a chainflow, you can access the collected responses via the `responses` property on that chainflow.

```typescript
const flow = chainflow().call(getUser).call(addRole).run();

const responses = flow.responses;
```

The responses will look something like:

```typescript
[
  {
    details: '[GET] /user' // identifies the endpoint called
    val: { // the response to getUser
      statusCode: 200, // HTTP status code
      body: ...,
      headers: ...,
      ...
    }
  },
  {
    details: '[POST] /roles'
    val: { // the response to addRole
      statusCode: 200,
      body: ...,
      headers: ...,
      ...
    }
  }
]
```

Responses in the array follow the order in which the respective endpoints are called.

## Composability

> 👋 _Looking for feedback on this section - are the method names clear or too confusing?_

There are several methods to help you build complex chainflows composed of simpler ones.

### `clone`

The `clone` method creates a new chainflow with the same callqueue. This clone can be independently modified with further calls to create a more complex chainflow.

```typescript {5} {11}
const createUserFlow = chainflow().call(createUser).call(addRole);

// this calls: createUser, addRole, createGroup and sendMessage
const sendGroupMessageFlow = createUserFlow
  .clone()
  .call(createGroup)
  .call(sendMessage);

// this calls: createUser, addRole, joinGroup and getMessages
const receiveGroupMessageFlow = createUserFlow
  .clone()
  .call(joinGroup)
  .call(getMessages);
```

The above snippet shows that we can create two independent flows that both use the `createUserFlow` as a starting template via the `clone` method, and added on their own calls.

### `extend`

The `extend` method adds to the callqueue of a chainflow with the callqueue from another chainflow passed in as the argument.

```typescript {4, 7}
const deleteUserFlow = chainflow().call(removeRole).call(deleteUser);

// this calls: endpoints in sendGroupMessageFlow + removeRole and deleteUser
sendGroupMessageFlow.extend(deleteUserFlow);

// this calls: endpoints in receiveGroupMessageFlow + removeRole and deleteUser
receiveGroupMessageFlow.extend(deleteUserFlow);
```

In the snippet above, we used `extend` to add on to the chainflows we made earlier with the calls defined in `deleteUserFlow`.

### `continuesFrom`

After a run, each chainflow temporarily retains the responses accumulated from calling endpoints until its next run. Another chainflow can use the `continuesFrom` method to copy those accumulated responses into itself before making its own run.

```typescript collapse={1-9} {20}
const login = origin.post("/user").body({
  username: "admin",
});

const createGroup = origin
  .post("/group")
  .headers({
    Authorization: login.resp.body.authToken,
  })
  .body({
    groupName: seed.groupName,
  });

// loggedInFlow now holds a response from the login call
// containing the user's auth token
const loggedInFlow = chainflow().call(login).run();

// createGroupFlow will copy the response that
// loggedInFlow received and use the auth token in its own calls
const createGroupFlow = chainflow()
  .continuesFrom(loggedInFlow)
  .call(createGroup);

const groupNames = ["RapGPT", "Averageexpedition", "Shaky Osmosis"];
for (const groupName in groupNames) {
  createGroupFlow.seed({ groupName }).run();
}
```

We run a chainflow that calls `login` to get a response from the login endpoint and save that flow to the `loggedInFlow` variable.

Using the `continuesFrom` method, `createGroupFlow` will copy the state of source values (i.e. responses) from `loggedInFlow`. This means `createGroupFlow` will now have the logged in user's `authToken` received from calling `login`, and will use it when calling `createGroup` thrice for each group name in the `groupNames` array.
