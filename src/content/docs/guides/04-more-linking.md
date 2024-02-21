---
title: More Linking
description: More ways to link endpoints with each other.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/more-linking"
sidebar:
  order: 4
---

This chapter covers additional ways to link endpoints together and their use cases.

## Transforming Inputs

Sometimes, you might want to apply transformations to data before it is received by an input node. The following methods allow you to specify an optional callback which will take the value from a source node pass its return value to the input node.

### `source`

```typescript {2}
const sendMessage = origin.post('/message').body({
  msg: source(createUser.resp.body.name, createGreeting),
});
```

Use `source` when you want to immediately specify a link at the creation of the input node (`msg` in this example).

### `link`

```typescript {4}
const createGreeting = (username: string) => `Hi, ${username} here!`;

sendMessage.set(({ body: { msg } }) => {
  link(msg, createUser.resp.body.name, createGreeting);
});
```

Otherwise, pass the callback as a 3rd parameter to the `link` method (introduced in Chapter 2) in combination with the `set` method on an endpoint.

## Multiple sources, one input

Should an input node need to take values from multiple sources at the same time, you can use the `linkMerge` utility function to help with that.

### `linkMerge`

```typescript

```