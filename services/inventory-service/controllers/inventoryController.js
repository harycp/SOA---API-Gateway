const inventoryService = require("../services/inventoryService");

const createInventory = async (req, res) => {
  try {
    const inventory = await inventoryService.createInventory(req.body);
    res
      .status(201)
      .json({ message: "Inventory created successfully", data: inventory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllInventories = async (req, res) => {
  try {
    const inventories = await inventoryService.getAllInventories();
    res.status(200).json({
      message: "Inventories retrieved successfully",
      data: inventories,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getInventoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const inventory = await inventoryService.getInventoryById(id);
    if (inventory) {
      res
        .status(200)
        .json({ message: "Inventory retrieved successfully", data: inventory });
    } else {
      res.status(404).json({ message: "Inventory not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateInventory = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const inventory = await inventoryService.updateInventory(id, updatedData);
    if (inventory) {
      res
        .status(200)
        .json({ message: "Inventory updated successfully", data: inventory });
    } else {
      res.status(404).json({ message: "Inventory not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteInventory = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await inventoryService.deleteInventory(id);
    if (deleted) {
      res
        .status(200)
        .json({ message: "Inventory deleted successfully", data: true });
    } else {
      res.status(404).json({ message: "Inventory not found", data: false });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createInventory,
  getAllInventories,
  getInventoryById,
  updateInventory,
  deleteInventory,
};
