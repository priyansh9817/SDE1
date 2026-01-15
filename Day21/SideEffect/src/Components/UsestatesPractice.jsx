import { useState } from "react";

function Form (){
    const [user, setUser] = useState({
        name:"",
        age:"",
        email:""
    });
    const [submituser, setsubmituser] = useState(null);

    function handleChange(e) {
        const {name, value} = e.target;
        setUser({...user, [name] : value})
    }

    function handlesubmit(e){
        e.preventDefault();
        console.log(user);
        setsubmituser(user);
    }

    return<>
    <form action="text" onSubmit={handlesubmit}>
        <input type="text" name="name" placeholder="Enter your name " value={user.name} onChange={handleChange}/>
        <input type="text" name="email" placeholder="Email" value={user.email} onChange={handleChange} />
        <input type="text" name="age" placeholder="age" value={user.age} onChange={handleChange} />
        <button type="submit">Update</button>
    </form>
     <p>{user.name}-{user.age}-{user.email}</p>
    {submituser && (
        <p>
          ✅ Updated User: {submituser.name} - {submituser.age} - {submituser.email}
        </p>
    )}
    </>
    
}

export default Form;