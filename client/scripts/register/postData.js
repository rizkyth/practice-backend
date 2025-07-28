async function createPostData({ username, password }) {
  const response = await fetch("http://localhost:3000/register/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (response.status !== 201) {
    console.log("Error tidak dapat fetching data");
  }
  const data = response.json();
  console.log(data);
  return data;
}

export { createPostData };
