const btn = document.getElementById("Loadbtn");
const userList = document.getElementById("userList");
const status = document.getElementById("status");

btn.addEventListener('click', async ()=>{
    status.innertext = "loading...";
    userList.innerHTML = "";

try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const users = await response.json();

    users.forEach(user => {
      const li = document.createElement("li");
      li.innerText = `${user.name} (${user.email})`;
      userList.appendChild(li);
    });

    status.innerText = "Users loaded successfully";
  } catch (error) {
    status.innerText = "Error: " + error.message;
  }
});