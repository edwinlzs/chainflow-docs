import { chainflow, link, originServer } from 'chainflow';

const origin = originServer("127.0.0.1:5000");

const createUser = origin.post("/user").body({
  name: "Tom",
});

const createGroup = origin.post("/group").body({
  creatorId: createUser.resp.body.id,
  groupName: "Code Monkeys",
});

const getRandomFact = origin.get("/fact");

const sendMessage = origin.post("/message").body({
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
