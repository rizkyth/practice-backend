const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/user.json");
// readdb
function readDbUser() {
  try {
    const users = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return users;
  } catch (err) {
    console.log("error dalam membaca db user ", err.message);
    return [];
  }
}
// menulis db untuk data yang baru
function writeDbUser(data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch {
    console.error("❌ Failed to write DB file:", err.message);
    throw new Error("Could not save data");
  }
}
// meminta data user
async function getUsers() {
  return readDbUser();
}
// membuat data user baru
async function createUsers({ username, password }) {
  const user = readDbUser();
  console.log(username);
  const newUser = {
    username,
    password,
  };
  user.push(newUser);
  writeDbUser(user);
  return newUser;
}
module.exports = { getUsers, createUsers };
