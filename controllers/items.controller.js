const { v4: uuidV4 } = require("uuid");

let items = require("../Items");

const getItems = (request, reply) => {
  reply.send(items);
};

const getItem = (request, reply) => {
  const { itemID } = request.params;
  const record = items.find((item) => item.id === itemID);
  reply.send({ ...record });
};

const addItem = (request, reply) => {
  const { name } = request.body;
  const newItem = { id: uuidV4(), name };
  items.push(newItem);
  reply.code(201).send(newItem);
};

const deleteItem = (request, reply) => {
  const { itemID } = request.params;
  items = items.filter((item) => item.id !== itemID);
  reply.code(200).send({ message: `Item ${itemID} deleted successfully` });
};

const updateItem = (request, reply) => {
  const { itemID } = request.params;
  const { name } = request.body;
  const updatedItem = {
    id: itemID,
    name,
  };
  items = items.map((item) => {
    if (item.id === itemID) {
      return updatedItem;
    }
    return item;
  });
  reply.code(200).send(updatedItem);
};

module.exports = { getItem, getItems, addItem, deleteItem, updateItem };
