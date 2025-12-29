function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    if (email === "devil@.com" && password === "1234") {
      resolve({ success: true, user: "Priyanshu" });
    } else {
      reject({ success: false, message: "Invalid credentials" });
    }
  });
}

async function handleLogin() {
  try {
    let res = await loginUser("devil@.com", "1234");
    console.log(res.user);
  } catch (err) {
    console.log(err.message);
  }
}

handleLogin();
