const DataTypes = require("sequelize");
const sequelize = require("../database");

const Inventory = sequelize.define(
  "Inventory",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Products",
        key: "id",
      },
    },
    warehouseId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Warehouses",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Inventory;
