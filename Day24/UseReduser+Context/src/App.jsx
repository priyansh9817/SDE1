import '../src/App.css'
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { useContext } from "react";
import { AuthContext } from "../src/Components/AuthContext";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      {!isLoggedIn ? <Login /> : <Dashboard />}
    </>
  );
}

export default App;
