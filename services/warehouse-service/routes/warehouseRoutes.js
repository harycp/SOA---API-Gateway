const warehouseController = require("../controllers/warehouseController");
const router = require("express").Router();

router.post("/warehouse", warehouseController.createWarehouse);
router.get("/warehouse", warehouseController.getAllWarehouses);
router.get("/warehouse/:id", warehouseController.getWarehouseById);
router.put("/warehouse/:id", warehouseController.updateWarehouse);
router.delete("/warehouse/:id", warehouseController.deleteWarehouse);

module.exports = router;
