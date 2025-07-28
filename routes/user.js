const express = require("express");
const { createUsersToken } = require("../controllers/usersController");
const router = express.Router();
const path = require("path");

// menerima request post dari frontend lalu akan mengeksekusi functuion createUserToken
router.post("/", createUsersToken);
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/login.html"));
});

module.exports = router;
