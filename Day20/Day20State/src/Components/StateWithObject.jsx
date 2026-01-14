import { useState } from "react";

function UpdateAge(){
    const [user, setuser] = useState({
    name:"Priyanshu",
    age:21,
    email:"Priyanshukumar@gmail.com"
});

function handleUpdateAge(){
    setuser({...user,age:23}) 
}
return(
    <>
    <p>{user.name},{user.age} - {user.email}</p>
    <button onClick={handleUpdateAge}>UpdateAge</button>
    </>
)
}

export default UpdateAge;