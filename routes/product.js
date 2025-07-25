const express = require("express");
const { getAll, createProduct, editProduct, deleteProduct } = require("../controllers/productController");
const { validateData } = require("../middleware/validateData");
const router = express.Router();

router.get("/", getAll);

router.post("/", validateData, createProduct);

router.put("/:id", validateData, editProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
