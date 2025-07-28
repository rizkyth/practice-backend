const { getDataFromCache, setDataToCache, delDataFromCache } = require("../middleware/cache");
const { getAllProduct, addProduct, updateProduct, deletedDataProduct } = require("../models/productModel");
const path = require("path");

// nama lokasi cache
const keyCache = "product";

// get data product
async function getAll(req, res) {
  // di arahkan ke index html untuk tampilan
  res.sendFile(path.join(__dirname, "client", "index.html"));
  // mengambil data dari cache
  const cachedData = getDataFromCache(keyCache);
  // jika data nya ada di cache maka datanya akan di ambil di cache
  if (cachedData) {
    console.log("data dari cached");
    return res.json(cachedData);
  }
  try {
    // jika tidak maka akan ambil di api product

    const product = await getAllProduct();
    // lalu data akan di simpan di cache dengan keyCache nama tempatnya, lalu productnya yang berupa data json
    setDataToCache(keyCache, product);
    console.log(product);
    return res.json(product);
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
