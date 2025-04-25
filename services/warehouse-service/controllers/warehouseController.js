const warehouseService = require("../services/warehouseService");

const createWarehouse = async (req, res) => {
  try {
    const dataWarehouse = req.body;
    const newWarehouse = await warehouseService.createWarehouse(dataWarehouse);
    res
      .status(201)
      .json({ message: "Warehouse created successfully", data: newWarehouse });
  } catch (error) {
    res.status(500).json({ message: "Error creating warehouse" });
  }
};

const getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await warehouseService.getAllWarehouses();
    res
      .status(200)
      .json({ message: "Warehouses retrieved successfully", data: warehouses });
  } catch (error) {
    res.status(500).json({ message: "Error getting warehouses" });
  }
};

const getWarehouseById = async (req, res) => {
  try {
    const id = req.params.id;
    const warehouse = await warehouseService.getWarehouseById(id);
    if (warehouse) {
      res
        .status(200)
        .json({ message: "Warehouse retrieved successfully", data: warehouse });
    } else {
      res.status(404).json({ message: "Warehouse not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error getting warehouse" });
  }
};

const updateWarehouse = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const warehouse = await warehouseService.updateWarehouse(id, updatedData);
    if (warehouse) {
      res
        .status(200)
        .json({ message: "Warehouse updated successfully", data: warehouse });
    } else {
      res.status(404).json({ message: "Warehouse not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating warehouse" });
  }
};

const deleteWarehouse = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await warehouseService.deleteWarehouse(id);
    if (deleted) {
      res
        .status(200)
        .json({ message: "Warehouse deleted successfully", data: true });
    } else {
      res.status(404).json({ message: "Warehouse not found", data: false });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting warehouse", data: false });
  }
};

module.exports = {
  createWarehouse,
  getAllWarehouses,
  getWarehouseById,
  updateWarehouse,
  deleteWarehouse,
};
