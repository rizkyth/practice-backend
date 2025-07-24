const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/products.json");

function readDb() {
  try {
    const content = JSON.parse(fs.readFileSync(filePath, "utf8"));
    return content;
  } catch (error) {
    console.log("failed to read or parse db file", error.message);
    return [];
  }
}
function writeDb(data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (err) {
    console.error("❌ Failed to write DB file:", err.message);
    throw new Error("Could not save data");
  }
}

async function getAllProduct() {
  return readDb();
}
async function addProduct(title, desc, price) {
  const data = readDb();
  const newProduct = {
    id: +Date.now(),
    title,
    desc,
    price,
  };
  data.push(newProduct);
  writeDb(data);
  return newProduct;
}

async function updateProduct(id, product) {
  const data = readDb();
  const indexProduct = data.findIndex((item) => item.id == id);
  if (indexProduct === -1) {
    throw new Error(`Product with ID ${id} not Found`);
  }

  const updateProduct = {
    ...data[indexProduct],
    product,
    id: +id,
  };
  //   data[indexProduct] = {
  //     id,
  //     title,
  //     desc,
  //     price,
  //   };
  data[indexProduct] = updateProduct;
  writeDb(data);
  return updateProduct;
}
async function deletedDataProduct(id) {
  const data = readDb();
  const index = data.findIndex((item) => item.id == id);

  if (index === -1) {
    throw new Error(`product with ID ${id} not Found`);
  }

  const deleted = data[index];
  const filtered = data.filter((data) => data.id !== id);
  writeDb(filtered);
  console.log(deleted);
  return deleted;
}
module.exports = { getAllProduct, addProduct, updateProduct, deletedDataProduct };
