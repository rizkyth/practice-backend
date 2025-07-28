import { createPostData } from "./postData.js";

const form = document.getElementById("registerForm");
const messageDiv = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = form.username.value.trim();
  const password = form.password.value.trim();

  if (!username || !password) {
    messageDiv.textContent = "Username dan Password wajib diisi!";
    messageDiv.className = "mt-4 text-center text-sm text-red-600";
    return;
  }
  const createData = await createPostData({ username, password });
  // Simulasi sukses
  messageDiv.textContent = `Akun berhasil dibuat untuk @${username}`;
  messageDiv.className = "mt-4 text-center text-sm text-green-600";

  window.location.href = "/client/login.html";
  console.log(createData);
  // Reset form
  form.reset();
});
