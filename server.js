const express = require("express");
const cors = require("cors");
const productRouters = require("./routes/product");
const usersRouters = require("./routes/user");
const path = require("path");
const { authenticateToken } = require("./middleware/authenticateToken");
const port = 3000;

const app = express();

const myLogger = function (req, res, next) {
  console.log("logged");
  next();
};

app.use(cors());
app.use(express.json());
// app.use(authenticateToken);
app.use(express.static(path.join(__dirname, "client")));
app.use("/login", usersRouters);
app.use("/product", authenticateToken, productRouters);

app.listen(port, () => {
  console.log(`server berjalan di http://localhost:${port}`);
});
