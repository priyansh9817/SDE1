import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Login (){
    const {login} = useContext (AuthContext);
    
    function handleLogin (){
        const user = {name: "Priyanshu", email: "Priyanshukumar1234tu@gmail.com" , role : "admin"};
        login(user);
    }
    return <button onClick={handleLogin}>Login</button>;
}

export default Login;