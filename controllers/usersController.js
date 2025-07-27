require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const { getUsers } = require("../models/usersModels");
const jwt = require("jsonwebtoken");

async function createUsersToken(req, res) {
  try {
    const { username, password } = req.body;
    const user = await getUsers();
    const checked = user.find((u) => u.username === username);
    if (!checked) {
      res.status(401).json({ message: "user tidak di temukan" });
    }
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(201).json({ token });
  } catch (err) {
    console.log("error di middle ware?");
  }
}

module.exports = { createUsersToken };
