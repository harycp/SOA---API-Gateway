const { Op } = require("sequelize");
const Warehouse = require("../models/Warehouse");

const createWarehouse = async (dataWarehouse) => {
  const warehouse = await Warehouse.create({ ...dataWarehouse });
  return warehouse;
};

const getAllWarehouses = async () => {
  return await Warehouse.findAll();
};

const getWarehouseById = async (id) => {
  return await Warehouse.findByPk(id);
};

const updateWarehouse = async (id, updatedData) => {
  const warehouse = await Warehouse.findByPk(id);
  if (!warehouse) return null;
  await warehouse.update(updatedData);
  return warehouse;
};

const deleteWarehouse = async (id) => {
  const warehouse = await Warehouse.findByPk(id);
  if (!warehouse) return null;
  await warehouse.destroy();
  return true;
};

module.exports = {
  createWarehouse,
  getAllWarehouses,
  getWarehouseById,
  updateWarehouse,
  deleteWarehouse,
};
