require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const { getUsers } = require("../models/usersModels");
const jwt = require("jsonwebtoken");

async function createUsersToken(req, res) {
  // function ini memiliki 2 parameter bawaan dari expres yang pertama request dan ke dua response
  try {
    // mengambil data body yang dikirim dari frontend dengan berisi username dan password
    const { username, password } = req.body;

    // mengambil user yang ada di db dengan memanggil async function getUser()
    const user = await getUsers();
    //  lalu checeked mencek apakah user yang ada di db sama dengan user yang dikirim dari frontend
    const checked = user.find((u) => u.username === username);
    // jika false atau undifined || null maka akan mengirim code error yaitu 401
    if (!checked) {
      res.status(401).json({ message: "user tidak di temukan" });
    }
    // jika ada maka akan membuat token dengan function jwt.sign yang berisi username yang isinya username dari frondend,
    // lalu JWT_SECRET dari .env
    // dan expiresIN atau kadaluarsa dalam waktu 1 jam
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    // lalu mengirim statust 201 dan mengirim token dalam berupa json
    res.status(201).json({ token });
  } catch (err) {
    // jika gagal akan mengeluarkan error
    console.log("error di middle ware?");
  }
}

module.exports = { createUsersToken };
