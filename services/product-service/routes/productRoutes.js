const productController = require("../controllers/productController");
const router = require("express").Router();

router.post("/product", productController.createProduct);
router.get("/product", productController.getAllProducts);
router.get("/product/:id", productController.getProductById);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);

module.exports = router;
