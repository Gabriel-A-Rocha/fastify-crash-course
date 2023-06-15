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
  handler: (request, reply) => {
    reply.send(items);
  },
};

const getItemOptions = {
  schema: {
    response: {
      200: ItemSchema,
    },
  },
  handler: (request, reply) => {
    const { itemID } = request.params;
    const record = items.find((item) => item.id === itemID);
    reply.send({ ...record });
  },
};

function itemsRoutes(fastify, options, done) {
  // get all items
  fastify.get("/items", getItemsOptions);

  // get single item
  fastify.get("/items/:itemID", getItemOptions);

  done();
}

module.exports = itemsRoutes;
