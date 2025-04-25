const sequelize = require("../database");
const inventory = require("./inventory");

const db = {
  sequelize,
  inventory,
};
module.exports = db;
