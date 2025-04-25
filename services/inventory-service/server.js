// src/server.js
const express = require("express");
const dotenv = require("dotenv");

const db = require("./models");

const inventoryRoutes = require("./routes/inventoryRoutes");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", inventoryRoutes);

const PORT = process.env.PORT || 5003;

const startServer = async () => {
  try {
    await db.sequelize.sync({ alter: true });
    console.log("Database connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};

startServer();
