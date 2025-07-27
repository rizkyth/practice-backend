import { getDataFromApi } from "./handlerApi.js";
import { createNodeElement } from "./nodeElement.js";

document.addEventListener("DOMContentLoaded", async () => {
  const data = await getDataFromApi();
  if (data) {
    // const NodeElemet = createNodeElement(data)
    const containerData = document.getElementById("product-table");

    const nodeELement = createNodeElement(data);
    nodeELement.forEach((row) => containerData.appendChild(row));
    // Kamu bisa render data ke tabel di sini juga
  }
});
