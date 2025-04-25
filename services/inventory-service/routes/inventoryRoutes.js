const inventoryController = require("../controllers/inventoryController");

const router = require("express").Router();

router.post("/inventory", inventoryController.createInventory);
router.get("/inventory", inventoryController.getAllInventories);
router.get("/inventory/:id", inventoryController.getInventoryById);
router.put("/inventory/:id", inventoryController.updateInventory);
router.delete("/inventory/:id", inventoryController.deleteInventory);

module.exports = router;
