const items = require("../Items");

function itemsRoutes(fastify, options, done) {
  fastify.get("/items", (request, reply) => {
    reply.send(items);
  });

  fastify.get("/items/:itemID", (request, reply) => {
    const { itemID } = request.params;
    const record = items.find((item) => item.id === itemID);
    reply.send({ ...record });
  });

  done();
}

module.exports = itemsRoutes;
