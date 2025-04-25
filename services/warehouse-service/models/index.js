const sequelize = require("../database");
const Warehouse = require("./Warehouse");

const db = {
  sequelize,
  Warehouse,
};
module.exports = db;
