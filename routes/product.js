const express = require("express");
const { getAll, createProduct, editProduct, deleteProduct } = require("../controllers/productController");
const router = express.Router();

router.get("/", getAll);

router.post("/", createProduct);

router.put("/:id", editProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
