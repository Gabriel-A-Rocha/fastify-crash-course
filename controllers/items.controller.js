const items = require("../Items");

const getItems = (request, reply) => {
  reply.send(items);
};

const getItem = (request, reply) => {
  const { itemID } = request.params;
  const record = items.find((item) => item.id === itemID);
  reply.send({ ...record });
};

module.exports = { getItem, getItems };
