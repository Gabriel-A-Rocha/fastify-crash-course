const { getItems, getItem } = require("../controllers/items.controller");

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
  handler: getItems,
};

const getItemOptions = {
  schema: {
    response: {
      200: ItemSchema,
    },
  },
  handler: getItem,
};

function itemsRoutes(fastify, options, done) {
  // get all items
  fastify.get("/items", getItemsOptions);

  // get single item
  fastify.get("/items/:itemID", getItemOptions);

  done();
}

module.exports = itemsRoutes;
