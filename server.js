const express = require("express");
const cors = require("cors");
const productRouters = require("./routes/product");
const usersRouters = require("./routes/user");
const path = require("path");
const { authenticateToken } = require("./middleware/authenticateToken");
const registerRouter = require("./routes/regiter");
const port = 3000;

const app = express();

const myLogger = function (req, res, next) {
  console.log("logged");
  next();
};

app.use(cors());
app.use(express.json());
// app.use(authenticateToken);

// untuk menampilkan html dengan directori yang nama foldernya client
app.use(express.static(path.join(__dirname, "client")));

app.use("/register", registerRouter);
// jika usernnya belum ada maka akan di arahkan ke endpoind /login
app.use("/login", usersRouters);

// product menampilkan product jika user mempunnyai token
app.use("/product", authenticateToken, productRouters);

app.listen(port, () => {
  console.log(`server berjalan di http://localhost:${port}`);
});
