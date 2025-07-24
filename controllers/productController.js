const { getAllProduct, addProduct, updateProduct, deletedDataProduct } = require("../models/productModel");

async function getAll(req, res) {
  try {
    const product = await getAllProduct();
    res.json(product);
  } catch (error) {
    console.log("error saat mengambil data");
  }
}

async function createProduct(req, res) {
  try {
    const { title, desc, price } = req.body;
    const createProduct = await addProduct(title, desc, price);
    res.status(201).json(createProduct);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
}

async function editProduct(req, res) {
  try {
    const id = parseInt(req.params.id);
    console.log(id);
    const product = req.body;
    console.log(product);
    const updateData = await updateProduct(id, product);
    res.status(201).json(updateData);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
}

async function deleteProduct(req, res) {
  try {
    const id = parseInt(req.params.id);
    const updateProduct = await deletedDataProduct(id);
    res.status(201).json(updateProduct);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      error: error.message,
    });
  }
}
module.exports = { getAll, createProduct, editProduct, deleteProduct };
