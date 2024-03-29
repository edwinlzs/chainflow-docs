---
title: Get Started
description: Getting started with Chainflow.
layout: "/src/layouts/DocsLayout.astro"
slug: "guides/get-started"
sidebar:
  order: 0
---

Chainflow is an API workflow library written in and for TypeScript. Its aim is to improve the developer experience in managing multiple sets of API calls, where values of the response to one endpoint call can be passed to the request payload of another endpoint further down a workflow.

## The Idea

The concept behind Chainflow comes from "chaining" one API's outputs with another's inputs and running "flows" of API calls.

Let's say a call to a `createUser` endpoint returns the user's `id` which can be passed to the request body of a call to the `addRole` endpoint to assign a role for that user. This represents one link that makes up the _"chain"_ between endpoints.

We take advantage of links in a chain by writing a _"flow"_, where we explicitly instruct a `Chainflow` object to call `createUser` first, then `addRole` after. By ordering the flow in such a manner, we ensure that the user `id` response to `createUser` is dynamically used in the request body of `addRole`.

```typescript
chainflow().call(createUser).call(addRole).run();
```

## Installation

```shell
npm install --save-dev chainflow
```

## Basic Example

Below, we create endpoints from our backend origin, define the input nodes on their request body/query parameters, and finally run a flow calling those endpoints.

```typescript
import { origin, chainflow } from "./chainflow";

const backend = origin("127.0.0.1:5000");

// define endpoints
const createUser = backend.post("/user").body({
  name: "Tom",
});

const addRole = backend.post("/role").body({
  userId: createUser.body.resp.id,
  role: "Engineer",
});

const getUsersWithRole = backend.get("/user").query({
  role: "Engineer",
});

// define flow
chainflow().call(createUser).call(addRole).call(getUsersWithRole).run();
```

## Logging

Enable logging of the requests/responses being made by setting `ENABLE_CHAINFLOW_LOGS=true` in your `.env` file, or by running this function:

```typescript
import { enableLogs } from 'chainflow';

enableLogs();
```