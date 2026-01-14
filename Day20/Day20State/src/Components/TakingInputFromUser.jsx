import { useState } from "react";

function Form (){
    const [user,setUsers] = useState({
        name : "",
        age :"",
        email:""
    });
    const [submittedUser, setSubmittedUser] = useState(null);
    function handleChange (e){
        const {name,value} = e.target;
        setUsers ({...user, [name]:value});
    }

    function handlesubmit(e){
        e.preventDefault();
        console.log(user);
        setSubmittedUser(user);
    }

    return (
    <>
    <h2>Form Using states</h2>
    <form action="text" onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder="Enter your name " value={user.name} onChange={handleChange}/>
        <input type="number" name="age" placeholder="Age" value = {user.age} onChange={handleChange}/>
        <input type="text" name="email" placeholder="email" value={user.email} onChange={handleChange}/>
        <button type="submit">Update</button>
    </form>

    <p>{user.name}-{user.age}-{user.email}</p>
    {submittedUser && (
        <p>
          ✅ Updated User: {submittedUser.name} - {submittedUser.age} - {submittedUser.email}
        </p>
      )}
    </>
    )
}

export default Form;