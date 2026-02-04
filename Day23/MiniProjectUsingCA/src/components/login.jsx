import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin() {
    login();
    navigate("/dashboard");
  }

  return (
    <>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

export default Login;
