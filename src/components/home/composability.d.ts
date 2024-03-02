const loginFlow = chainflow().call(createUser).call(addRole);
const createGroupFlow = chainflow().call(createGroup).call(addMember);
const joinGroupFlow = chainflow().call(joinGroup);

const setup = async () => {
  await createGroupFlow.run();
  await joinGroupFlow.run();
};

setup();
