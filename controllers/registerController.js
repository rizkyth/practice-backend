const { createUsers } = require("../models/usersModels");

async function createUsernameData(req, res) {
  const data = req.body;

  const newUser = {
    username: data.username,
    password: data.password,
  };
  try {
    const sendData = await createUsers(newUser);
    console.log(!sendData);
    if (!sendData) {
      return res.status(401).json({ message: "Data tidak dapat di tambahkan" });
    }
    return res.status(201).json(sendData);
  } catch (errr) {
    console.log("error dari create username");
  }
}

module.exports = { createUsernameData };
