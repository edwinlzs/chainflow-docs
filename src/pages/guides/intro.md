---
layout: ../../layouts/docs/DocsLayout.astro
title: Introduction
---

**Chainflow** is a library that enables managing dynamic and flexible API callchains via **links** between **input** and **output** nodes defined on **endpoints**.  
<br/>

## Defining Endpoints
Start by specifying a host (e.g. `127.0.0.1:5000`) on an `endpointFactory`. You can then call methods named after supported HTTP methods and pass in the path (e.g. `factory.post(‘/user’)`) to create an endpoint under the factory’s host (in this case, a HTTP `POST` endpoint `127.0.0.1:5000/user`).

```typescript
import { endpointFactory } from ‘chainflow’;

const factory = endpointFactory(‘127.0.0.1:5000’);

const createUser = factory.post(‘/user’);
```
<br/>

## Creating Input Nodes
You can create **input nodes** on an endpoint by defining its request body, headers, query or path parameters. **Path parameters** are defined at endpoint creation by wrapping parts of the path in curly braces `{}` (e.g. `factory.get(/user/{userId})`). The other input nodes can be defined by calling the `body`, `headers` and `query` methods on an endpoint.

```typescript
createUser.body({
	name: ‘Tom’,
	details: {
		age: 42,
	},
}).headers({
	token: ‘some token’,
}).query({
	status: ‘active’,
});
```
This creates **5** input nodes in total - 3 in the request body (`name`, `details` and `age`) and one each in the header and query (`token` and `status`), respectively.  
<br/>

## Input Node Values
### Defaults
The previous snippet creates input nodes with *default values*. For example, `createUser`’s `body` has an input node named `key` with a default value of `‘Tom’`. When the `createUser` endpoint is called, in the absence of any overriding value (discussed later), the request will use the defaults as-is (i.e. the body will be `{ name: ‘Tom’, details: { age: 42 }}`).
### Generated
In place of default values, you can set *generated values* for an input node. Currently, there are two ways to set a generated value. The first is to call the `gen` function with a callback that generates the value.

`gen`
```typescript
import { gen } from ‘chainflow’;

const randName = () => [‘Tom’, ‘Josh’, ‘Git’][Math.floor(Math.random() * 3)];

createUser.body({
	name: gen(randName),
});
```

The use of `gen` above instructs the `name` input node to call a generator function, in this case `randName`, and use the value it returns to build a request body when calling the endpoint.

This is useful when you want your own custom function to generate values for a payload or when paired with data generation libraries such as `faker` (e.g. `gen(faker.person.name)`).

`pool`
```typescript
import { pool } from ‘chainflow’;

createUser.body({
	name: pool([‘Tom’, ‘Josh’, ‘Git’]),
});
```

The second way to define a generated value is by passing an array of values to the `pool`  function. This gives the endpoint a pool of values that it will randomly choose from when called.

Currently, the default behaviour with pools is that the randomness is uniform and values in a pool are ‘non-consumable’, meaning values can be re-used and multiple calls to the same endpoint may take the same value. This means that the above snippet effectively has the same behaviour as the earlier snippet on the use of `gen`, and is really just a convenience function.
### Required

If you want to indicate that an input node exists but don’t want to specify any default nor generated values, use the `required` function instead.

```typescript
import { required } from ‘chainflow’;

createUser.body({
	name: required(),
});
```

A required input node must take a value from elsewhere. There are two possible ways for a required node to receive a value - from a *call value*, or from *linked values*, discussed in the next part.  
<br/>  
  
## Links

Links are what give chainflows high dynamism by allowing the values of one endpoint to flow to another.

To establish links, you call the `set` method on an endpoint to expose its input nodes, then call the `link` function by passing in the input node of one endpoint and the output node (explained soon) of another endpoint.

```typescript
import { link } from ‘chainflow’;

const sendMessage = factory.post(‘/message’).body({
	userId: required(),
	message: ‘hello world!’,
});

sendMessage.set(({ body: { userId }}) => {
	link(userId, createUser.resp.id);
});
```

The `set` method on an endpoint exposes its input nodes to a callback that you pass in. Recall that an endpoint can have input nodes at/within four possible locations: the `body`, `headers`, `query` and `pathParams`.

Here, we defined a second endpoint `sendMessage` at `POST` to `’/message’` with two input nodes. Then, we call the `set` method and access the input node at `userId` by destructuring its body. In the callback, we use the `link` function to link the `userId` input node with the `id` output node in the response of `createUser`.
### Output Nodes
The `resp` property on an endpoint is a special object that tracks how you accessed it and passes that information to an input node when you call `link`. For example, calling `link(userId, createUser.resp.id)` tells the input node `userId` that it can access an output node in the response body of `createUser` by accessing the `id` property.

Due to the special nature of the `resp` object, you can safely access it (and any nested subobjects e.g. `createUser.resp.details.status`)  without having to define the properties beforehand - its sole purpose is just to capture the path you took when accessing it.

Once a link between nodes on two endpoints are established, if the endpoint with a linked output node is called first, the value in its response will be taken and used at the linked input node when calling the second endpoint.

Before we go further and discuss the last category of input values (*call values*), let us clarify how endpoint calls work in a *chainflow*.  
<br/>

## The Chainflow

Create a new chainflow with the `chainflow` function. Add endpoint calls to a chainflow by passing in endpoints to the `call` method (note that this does not actually make the endpoint call yet, it only adds the endpoint call to the chainflow’s queue). Finally, the `run` method will *actually* execute the series of endpoint calls in the order you defined.

```typescript
import { chainflow } from ‘chainflow’;

chainflow().call(createUser).call(sendMessage).run();

```
Here, we instruct the chainflow to call `createUser` first then call `sendMessage`, and run the flow once.

Let’s say we have a server which receives the `createUser` call (at `POST ‘/user’`), processes the request and generates an `id` for the newly created user, then responds with the body `{ id: ‘some-id’ }`. Recall that we have created a link from `id` in `createUser` to `userId` in `sendMessage`. When we execute the next endpoint call at `sendMessage`, the chainflow will check if there is a response available from `createUser` and take the `id` value from it to create the request body: `{ userId: ‘some-id’, message: ‘hello world!’ }`.

This is how linked values are passed from a source (an output node) to a destination (an input node).
### Seed
There is a special type of source you can use in linked values called a chainflow’s **seed**. To do this, link an input node to a special `seed` object.

```typescript
import { link, seed } from ‘chainflow’;

sendMessage.set(({ body: { message }}) => {
	link(message, seed.msg);
})
```

Similar to how you would freely access a property on an endpoint call’s response output node, you can freely access any property on the special `seed` object.

Next, you can pass in the actual seed value as an argument when calling `run` on a chainflow.

```typescript
chainflow().call(createUser).call(sendMessage).run({ seed: { msg: ‘wassup!’ }});
```

In this snippet, we pass a `seed` with the key `msg` bearing a value of `‘wassup!`. Since we have linked the `message` input node in `sendMessage` with `seed.msg`, during this chainflow run `sendMessage` will have the body `{ userId: ‘some-id’, message: ‘wassup!’ }`.

Earlier, we mentioned that *default values* can be overriden. In this case, the default value ( `‘hello world!’`) given to the `message` input node, was overriden by a *linked value*.
### Call Values
Call values are simply any values you passed in right where you instructed the chainflow to make an endpoint call. For example:

```typescript
chainflow().call(createUser).call(sendMessage, { body: { message: ‘I am here!’, broadcast: true }}).run();
```

Here we instructed the chainflow to use call values of `{ message: ‘I am here!’, broadcast: ‘true’ }`.

The resulting request body will be:
```json
{
	"userId": "some-id",
	"message": "I am here!",
	"broadcast": true,
}
```

There are 3 points to note here:
1. *Call values* can also override default values. The default value for `message` is overridden here.
2. You can add new values that weren’t defined as input nodes before, such as `broadcast`.
3. By default, the chainflow performs a *deep merge* between the call values and the defined input nodes. This means that any input node not mentioned in the call values (i.e. `userId`) are still retained when making the endpoint call.  
<br/>  
  

## Value Priority

We’ve talked a bit about overriding values. The hierarchy to that is as follows, in descending order of priority:
1. Call values
2. Linked values
3. Initialized (*default/generated*) values

This means that generated values (defined using `gen` or `pool`) can also be overridden by linked values (when a source value is available) or call values passed into a chainflow. Call values have the highest priority and will always be used if provided.  
<br/>

## Remarks

That’s it! These are the basics of creating dynamic API callchains with your own chainflows. There are more features for greater flexibility which can be found in the **documentation**, or in the **advanced guide**.

Thanks for checking out my work and I’m looking forward to hearing the creative ways you use it in your own development. I welcome any feedback or discussion of other features you’d like to see!