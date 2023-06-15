const fastify = require("fastify")({ logger: true });
const items = require("./Items");

const PORT = 5000;

fastify.get("/items", (request, reply) => {
  reply.send(items);
});

fastify.get("/items/:itemID", (request, reply) => {
  const { itemID } = request.params;
  const record = items.find((item) => item.id === itemID);
  reply.send({ ...record });
});

const start = async () => {
  try {
    await fastify.listen({ port: PORT });
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();
