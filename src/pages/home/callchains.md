```typescript
import { originServer } from chainflow;

const origin = originServer('127.0.0.1:5000');

const createUser = origin.post('/user').body({
  name: 'Tom',
});

const addRole = origin.post('/role').body({
  userId: createUser.resp.body.id,
  role: 'Engineer',
});
```