async function submitButton({ username, password }) {
  // console.log(username);

  // fetch api jika user hit button submit akan di arahkan ke http login
  const response = await fetch("http://localhost:3000/login", {
    method: "POST", // sudah diperbaiki
    // isi header nya berupa json
    headers: {
      "Content-Type": "application/json",
    },
    // dengan isi body username dan password
    body: JSON.stringify({ username, password }),
  });

  console.log(response);
  // jika response status nya bukan 201 maka akan mengeluarkan error login gagal
  if (response.status !== 201) throw new Error("Login gagal!");
  // jika response OK atau berhasil maka result menyimpan hasil dari response json
  const result = await response.json();
  // console.log(result);

  // lalu resul dikirimkan kedepan
  return result;
  // Redirect ke halaman utama
}

export { submitButton };
