const { getDataFromCache, setDataToCache, delDataFromCache } = require("../middleware/cache");
const { getAllProduct, addProduct, updateProduct, deletedDataProduct } = require("../models/productModel");

const keyCache = "product";

async function getAll(req, res) {
  const cachedData = getDataFromCache(keyCache);
  if (cachedData) {
    console.log("data dari cached");
    return res.json(cachedData);
  }
  try {
    const product = await getAllProduct();
    setDataToCache(keyCache, product);
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
    delDataFromCache(keyCache);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
}

async function editProduct(req, res) {
  try {
    const id = parseInt(req.params.id);
    const product = req.body;
    const updateData = await updateProduct(id, product);
    delDataFromCache(keyCache);
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
    delDataFromCache(keyCache);
    res.status(201).json(updateProduct);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      error: error.message,
    });
  }
}
module.exports = { getAll, createProduct, editProduct, deleteProduct };
