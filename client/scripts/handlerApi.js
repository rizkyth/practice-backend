const token = localStorage.getItem("token");

async function getDataFromApi() {
  const response = await fetch("http://localhost:3000/product", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response);
  if (!response.ok) {
    console.error(`Gagal fetch data: ${response.status}`);
    window.location.href = "/login.html";
  }
  const data = await response.json();
  return data;
}

export { getDataFromApi };
