function createNodeElement(data) {
  return data.map((element) => {
    const row = document.createElement("tr");
    row.setAttribute("id", element.id);
    row.innerHTML = `
      <td class="py-3 px-6 border-b">${element.title}</td>
      <td class="py-3 px-6 border-b">${element.desc}</td>
      <td class="py-3 px-6 border-b">Rp ${element.price}</td>
    `;
    return row;
  });
}

export { createNodeElement };
