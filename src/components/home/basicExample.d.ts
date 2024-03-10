import { chainflow, link, origin } from 'chainflow';

const backend = origin("127.0.0.1:5000");

const createUser = backend.post("/user").body({
  name: "Tom",
});

const createGroup = backend.post("/group").body({
  creatorId: createUser.resp.body.id,
  groupName: "Code Monkeys",
});

const getRandomFact = backend.get("/fact");

const sendMessage = backend.post("/message").body({
  sender: createUser.resp.body.id,
  groupId: createGroup.resp.body.id,
  message: link(
    getRandomFact.resp.body.fact,
    (fact: string) => `Hello! Today's random fact is: ${fact}`
  ),
});

const sendMessageFlow = chainflow()
  .call(createUser)
  .call(createGroup)
  .call(getRandomFact)
  .call(sendMessage);

sendMessageFlow.run();
