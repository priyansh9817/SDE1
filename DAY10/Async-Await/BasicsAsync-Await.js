// Async - Await is modern Version of Promise  it is used to write a clean and redable code 
// if i want to get data from user using promise i have to write code in this way 

function getuser() {
    return new Promise  (resolve =>{
        setTimeout(()=>{
            resolve("User Data ")
        },2000)
    })
}

getuser() .then(data => console.log(data));



// If i want any data of user using Async and await code 

async function showUser() {
  let data = await getuser();
  console.log(data);
}

showUser();
