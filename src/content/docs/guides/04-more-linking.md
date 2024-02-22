---
title: More Linking
description: More ways to link endpoints with each other.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/more-linking"
sidebar:
  order: 4
---

This chapter covers additional ways to link endpoints together and their use cases.

## `link` with callback

Sometimes, you might want to apply transformations to data before it is received by an input node. The `link` function actually takes an optional callback which will parses the source value and outputs a final value for the input node.

### with `set`

Pass the callback (`createGreeting` in this snippet) as the third argument when using `link` with the `set` method.

```typescript {4}
const createGreeting = (username: string) => `Hi, ${username} here!`;

sendMessage.set(({ body: { msg } }) => {
  link(msg, createUser.resp.body.name, createGreeting);
});
```

### at input node creation

Alternatively, the `link` function has an overload allowing you to use it directly at the point of creation with a callback of an input node like below:

```typescript {2}
const sendMessage = origin.post('/message').body({
  msg: link(createUser.resp.body.name, createGreeting),
});
```

## `linkMerge`

Should an input node need to take values from multiple sources at the same time, you can use the `linkMerge` utility function to help with that.

### Array of Source Nodes

```typescript
// note the callback has an array parameter
const mergeValues = ([name, favAnimal]: [string, string]) =>
  `${name} likes ${favAnimal}.`;

const createMessage = origin.post('message').body({
  msg: linkMerge(
    // array of source nodes
    [getUser.resp.body.name, getFavAnimal.resp.body.favAnimal],
    mergeValues,
  );
});
```

In this first snippet, we pass an array of source nodes to `linkMerge` followed by an optional callback. Note the callback's parameter takes an array of expected source values similar to how we defined the array of source nodes.

`linkMerge` has multiple other function signatures covered below.

### Object with Source Nodes

Instead of using an array, you can define an object with named keys and source nodes as the values:

```typescript
// note the callback has an object parameter
const mergeValues = ({
  userName,
  favAnimal,
}: {
  userName: string;
  favAnimal: string;
}) => `${userName} likes ${favAnimal}.`;


const createMessage = origin.post('message').body({
  msg: linkMerge(
    // object of source nodes
    {
      userName: getUser.resp.body.name,
      favAnimal: getFavAnimal.resp.body.favAnimal,
    },
    mergeValues,
  );
});
```

Note that the callback used should have its parameter adjusted accordingly, like above.

### Array of Source Nodes + `set`

You can also use `linkMerge` with `set`:

```typescript
createMessage.set(({ body: { msg } }) => {
  linkMerge(
    msg, // the input node
    [getUser.resp.body.name, getFavAnimal.resp.body.favAnimal],
    mergeValues,
  );
});
```

### Object with Source Nodes + `set`

```typescript
createMessage.set(({ body: { msg } }) => {
  linkMerge(
    msg, // the input node
    {
      userName: getUser.resp.body.name,
      favAnimal: getFavAnimal.resp.body.favAnimal,
    },
    mergeValues,
  );
});
```