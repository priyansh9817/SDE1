// fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data =>{
//     console.log(data)
// })
// .catch=(error)=>{
//     console.log(error)
// }



async function getProfile() {
    try{
        let response = await fetch ("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

getProfile();