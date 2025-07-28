// memengambil token di local strorage dengan nama token
const token = localStorage.getItem("token");
// mengambil data dari api dengan method get dan header berupa authorization : Bearer dan tokennya
async function getDataFromApi() {
  const response = await fetch("http://localhost:3000/product", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  // jika response nya gagal maka akan mengirim kode di bawah dan akan di pindahkan ke login html
  if (!response.ok) {
    console.error(`Gagal fetch data: ${response.status}`);
    window.location.href = "../login.html";
  }
  // jika berhasil maka akan di keluarkan datanya
  const data = await response.json();
  return data;
}

export { getDataFromApi };
