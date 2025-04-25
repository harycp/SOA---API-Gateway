const productService = require("../services/productService");

const createProduct = async (req, res) => {
  try {
    const dataProduct = req.body;
    const product = await productService.createProduct(dataProduct);

    res.status(201).json({
      message: "Product created successfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({ message: "Error creating product" });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res
      .status(200)
      .json({ message: "Products retrieved successfully", data: products });
  } catch (error) {
    res.status(500).json({ message: "Error getting products" });
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productService.getProductById(id);
    if (product) {
      res
        .status(200)
        .json({ message: "Product retrieved successfully", data: product });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error getting product" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const product = await productService.updateProduct(id, updatedData);
    if (product) {
      res
        .status(200)
        .json({ message: "Product updated successfully", data: product });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating product" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await productService.deleteProduct(id);
    if (deleted) {
      res
        .status(200)
        .json({ message: "Product deleted successfully", data: true });
    } else {
      res.status(404).json({ message: "Product not found", data: false });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", data: false });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
