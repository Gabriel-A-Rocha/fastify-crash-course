const items = require("../Items");

const ItemSchema = {
  type: "object",
  properties: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
  },
};

const getItemsOptions = {
  schema: {
    response: {
      200: {
        type: "array",
        items: ItemSchema,
      },
    },
  },
};

const getItemOptions = {
  schema: {
    response: {
      200: ItemSchema,
    },
  },
};

function itemsRoutes(fastify, options, done) {
  // get all items
  fastify.get("/items", getItemsOptions, (request, reply) => {
    reply.send(items);
  });

  // get single item
  fastify.get("/items/:itemID", getItemOptions, (request, reply) => {
    const { itemID } = request.params;
    const record = items.find((item) => item.id === itemID);
    reply.send({ ...record });
  });

  done();
}

module.exports = itemsRoutes;
