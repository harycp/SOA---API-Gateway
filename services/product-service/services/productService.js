const { Op } = require("sequelize");
const Product = require("../models/Product");

const generateShortSKU = async (productName) => {
  const initials = productName
    .trim()
    .toUpperCase()
    .split(/\s+/)
    .map((word) => word[0])
    .join("");

  const prefix = initials;

  const lastSku = await Product.findOne({
    where: {
      sku: {
        [Op.iLike]: `${prefix}-%`,
      },
    },
    order: [["createdAt", "DESC"]],
  });

  let nextNumber = 1;
  if (lastSku) {
    const match = lastSku.sku.match(/-(\d+)$/);
    if (match) {
      nextNumber = parseInt(match[1]) + 1;
    }
  }

  const sku = `${prefix}-${String(nextNumber).padStart(3, "0")}`;
  return sku;
};

const createProduct = async (dataProduct) => {
  const sku = await generateShortSKU(dataProduct.name);
  const product = await Product.create({ ...dataProduct, sku });

  return product;
};

const getAllProducts = async () => {
  return await Product.findAll();
};

const getProductById = async (id) => {
  return await Product.findByPk(id);
};

const updateProduct = async (id, updatedData) => {
  const product = await Product.findByPk(id);
  if (!product) return null;

  const isNameChanged = updatedData.name && updatedData.name !== product.name;

  if (isNameChanged) {
    const newSKU = await generateShortSKU(updatedData.name);
    updatedData.sku = newSKU;
  }

  await product.update(updatedData);
  return product;
};

const deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) return null;
  await product.destroy();
  return true;
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
