const express = require("express");
const { getAll, createProduct, editProduct, deleteProduct } = require("../controllers/productController");
const { validateData } = require("../middleware/validateData");
const { authenticateToken } = require("../middleware/authenticateToken");
const router = express.Router();

router.get("/", authenticateToken, getAll);

router.post("/", validateData, createProduct);

router.put("/:id", validateData, editProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
