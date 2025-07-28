const expres = require("express");
const { createUsernameData } = require("../controllers/registerController");
const router = expres.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/register.html"));
});

router.post("/", createUsernameData);

module.exports = router;
