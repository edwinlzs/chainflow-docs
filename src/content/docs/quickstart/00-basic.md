---
title: Basic
description: A very simple example.
layout: "/src/layouts/DocsLayout.astro"
slug: "quickstart/basic"
sidebar:
  order: 0
---

Useful examples if you can catch things quickly without a guide or need to refresh your memory.

## Defining endpoints

```typescript title="endpoints.js"
import { link, originServer } from 'chainflow';

const origin = originServer('127.0.0.1:3001');

// Defining API signatures
export const createUser = origin.post('/user').body({
  name: 'user-name',
  details: {
    age: 42,
  },
});

export const getUser = origin.get('/user').query({
  age: createUser.resp.body.details.age,
});

// Role
export const createRole = origin.post('/role').body({
  user_id: createUser.resp.body.id,
  type: 'role-type',
});

// Project
export const createProject = origin.post('/project').body({
  creator_id: createUser.resp.body.id,
  details: {
    title: 'project-title',
    type: 'project-type',
  },
});

// Submission
export const createSubmission = origin.post('/submission').body({
  creator_id: createUser.resp.body.id,
  project_id: createProject.resp.body.id,
});

export const getSubmission = origin.get('/submission/{submissionId}');

getSubmission.set(({ pathParams: { submissionId } }) => {
  link(submissionId, createSubmission.resp.body.id);
});
```

## Constructing a Chainflow

```typescript title="index.js"
import { chainflow } from 'chainflow';
import {
  createProject,
  createRole,
  createSubmission,
  createUser,
  getSubmission,
  getUser,
} from './endpoints';

// run the chainflows
const flow = chainflow()
  .call(createUser)
  .call(getUser)
  .call(createRole)
  .call(createProject)
  .call(createSubmission)
  .call(getSubmission);

flow.run();

```