const express = require("express");
const cors = require("cors");
const productRouters = require("./routes/product");
const port = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/product", productRouters);

app.listen(port, () => {
  console.log(`server berjalan di http://localhost:${port}`);
});
