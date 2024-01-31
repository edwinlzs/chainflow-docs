```typescript
const fullFlow = setupGroupFlow
  .extend(sendMessageFlow)
  .extend(teardownFlow)
  .run();
```
