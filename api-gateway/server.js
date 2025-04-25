const express = require("express");
const dotenv = require("dotenv");
const { createProxyMiddleware } = require("http-proxy-middleware");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/product-service",
  createProxyMiddleware({
    target: process.env.URL_PRODUCT || "http://localhost:5001",
    changeOrigin: true,
  })
);

app.use(
  "/inventory-service",
  createProxyMiddleware({
    target: process.env.URL_INVENTORY || "http://localhost:5002",
    changeOrigin: true,
  })
);

app.use(
  "/warehouse-service",
  createProxyMiddleware({
    target: process.env.URL_WAREHOUSE || "http://localhost:5003",
    changeOrigin: true,
  })
);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  app.listen(PORT, () =>
    console.log(`API Gateway Server running on port ${PORT}`)
  );
};

startServer();
