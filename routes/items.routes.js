const {
  getItems,
  getItem,
  addItem,
  deleteItem,
  updateItem,
} = require("../controllers/items.controller");

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

const addItemOptions = {
  schema: {
    body: {
      type: "object",
      required: ["name"],
      properties: {
        name: {
          type: "string",
        },
      },
    },
    response: {
      200: ItemSchema,
    },
  },
  handler: addItem,
};

const deleteItemOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
        },
      },
    },
  },
  handler: deleteItem,
};

const updateItemOptions = {
  schema: {
    response: {
      200: ItemSchema,
    },
  },
  handler: updateItem,
};

function itemsRoutes(fastify, options, done) {
  // get all items
  fastify.get("/items", getItemsOptions);

  // get single item
  fastify.get("/items/:itemID", getItemOptions);

  // add item
  fastify.post("/items", addItemOptions);

  // delete item
  fastify.delete("/items/:itemID", deleteItemOptions);

  // update item
  fastify.patch("/items/:itemID", updateItemOptions);

  done();
}

module.exports = itemsRoutes;
