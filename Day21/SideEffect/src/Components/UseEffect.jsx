// So basically useEffect is directly is not used in ui render it is use to handle to life cycle states 

import { useState,useEffect } from "react";

function Profile(){
    const [user, setUser] = useState([])

    useEffect (()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then (res => res.json())
        .then(data => setUser(data));
    },[])

    return user.map(u=> <p key={u.id}>{u.name}--{u.email}</p>);
}

export default Profile;