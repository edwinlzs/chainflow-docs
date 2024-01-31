```typescript
import { endpointFactory } from chainflow;

const factory = endpointFactory('127.0.0.1:5000');

const createUser = factory.post('/user').body({
  name: 'Tom',
});

const addRole = factory.post('/role').body({
  userId: createUser.resp.body.id,
  role: 'Engineer',
});
```