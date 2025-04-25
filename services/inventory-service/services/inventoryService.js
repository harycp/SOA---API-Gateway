const axios = require("axios");
const Inventory = require("../models/inventory");

const getProductById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5001/api/product/${id}`);
    return response.data.data;
  } catch (error) {
    return null;
  }
};

const getWarehouseById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:5003/api/warehouse/${id}`
    );

    return response.data.data;
  } catch (error) {
    return null;
  }
};

const createInventory = async (dataInventory) => {
  const { productId, warehouseId } = dataInventory;

  const product = await getProductById(productId);
  const warehouse = await getWarehouseById(warehouseId);

  if (!product || !warehouse) {
    return null;
  }

  const inventory = await Inventory.create({
    ...dataInventory,
    productId: product.id,
    warehouseId: warehouse.id,
  });

  return inventory;
};

const getAllInventories = async () => {
  return await Inventory.findAll();
};

const getInventoryById = async (id) => {
  return await Inventory.findByPk(id);
};

const updateInventory = async (id, dataInventory) => {
  const inventory = await Inventory.findByPk(id);

  if (!inventory) {
    return null;
  }

  const { productId, warehouseId } = dataInventory;

  const product = await getProductById(productId);
  const warehouse = await getWarehouseById(warehouseId);

  if (!product || !warehouse) {
    return null;
  }

  await inventory.update({
    ...dataInventory,
    productId: product.id,
    warehouseId: warehouse.id,
  });

  return inventory;
};

const deleteInventory = async (id) => {
  const inventory = await Inventory.findByPk(id);

  if (!inventory) {
    return null;
  }

  await inventory.destroy();

  return true;
};

module.exports = {
  createInventory,
  getAllInventories,
  getInventoryById,
  updateInventory,
  deleteInventory,
};
