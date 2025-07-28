import { submitButton } from "./handler.js";

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("btn di pencet");
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    // ketika button di klik lalu memanggil function submit dengan mengirim parameter username, dan passwor
    const data = await submitButton({ username, password });

    // lalu jika data berhasil maka data akan menyimpan data token yang dikirim dari backend.
    // lalu token tersebut di simpan di lokal storage dengan nama token.
    localStorage.setItem("token", data.token);
    // lalu secara otomatis akan memindahkan ke halaman dasboard atau index.html
    window.location.href = "./index.html";
  } catch (error) {
    // jika error maka akan mengeluarkan error
    console.log("error di depan");
    // alert(error.message);
  }
});
