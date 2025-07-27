import { submitButton } from "./handler.js";

const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log("btn di pencet");
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const data = await submitButton({ username, password });
    console.log(data.token);
    localStorage.setItem("token", data.token);
    window.location.href = "./index.html";
  } catch (error) {
    console.log("error di depan");
    // alert(error.message);
  }
});
