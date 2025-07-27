async function submitButton({ username, password }) {
  // console.log(username);
  const response = await fetch("http://localhost:3000/login", {
    method: "POST", // sudah diperbaiki
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  console.log(response);
  if (response.status !== 201) throw new Error("Login gagal!");
  const result = await response.json();
  // console.log(result);

  return result;
  // Redirect ke halaman utama
}

export { submitButton };
