const sequelize = require("../database");
const Product = require("./Product");

const db = {
  sequelize,
  Product,
};
module.exports = db;
