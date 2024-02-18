---
title: Get Started
description: Getting started with Chainflow.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/get-started"
sidebar:
  order: 0
---

Chainflow is an API workflow library written in and for TypeScript. Its aim is to improve the developer experience in managing multiple sets of API calls, where values of the response to one endpoint call can be passed to the request payload of another endpoint further down a workflow.

## Installation

```shell
npm install --save-dev chainflow
```

## The Idea

The concept behind Chainflow comes from "chaining" one API's outputs with another's inputs and running "flows" of API calls.

Let's say a call to a `createUser` endpoint returns a new user's ID which can be passed to the request body of a call to the `addRole` endpoint to assign a role for that user. This represents a _"chain"_ between the two endpoints.

We take advantage of that chain by writing a _"flow"_, where we explicitly instruct a `Chainflow` object to call `createUser` first, then `addRole` after. By ordering the flow in such a manner, we ensure that the user `id` response to `createUser` is dynamically used in the request body of `addRole`.

```typescript
chainflow().call(createUser).call(addRole).run();
```

## Basic Example

Below, we create endpoints for an origin server, define the input nodes on their request body/query parameters, and finally run a flow calling those endpoints.

```typescript
import { originServer, chainflow } from "./chainflow";

const origin = originServer("127.0.0.1:5000");

// define endpoints
const createUser = origin.post("/user").body({
  name: "Tom",
});

const addRole = origin.post("/role").body({
  userId: createUser.body.resp.id,
  role: "Engineer",
});

const getUsersWithRole = origin.get("/user").query({
  role: "Engineer",
});

// define flow
chainflow().call(createUser).call(addRole).call(getUsersWithRole).run();
```
