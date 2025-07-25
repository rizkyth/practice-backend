const express = require("express");
const cors = require("cors");
const productRouters = require("./routes/product");
const port = 3000;

const app = express();

const myLogger = function (req, res, next) {
  console.log("logged");
  next();
};

app.use(cors());
app.use(express.json());
app.use(myLogger);
app.use("/product", productRouters);

app.listen(port, () => {
  console.log(`server berjalan di http://localhost:${port}`);
});
