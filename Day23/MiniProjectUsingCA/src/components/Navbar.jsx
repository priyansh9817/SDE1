import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Context/Theam.jsx";
import { AuthContext } from "../Context/Authcontext.jsx";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav
      style={{
        padding: "10px",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff"
      }}
    >
     <Link to="/">Home</Link>{" "}
      <Link to="/dashboard">Dashboard</Link>{" "}
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
      <span>Theme: {theme}</span>
      <button onClick={toggleTheme} style={{ marginLeft: "10px" }}>
        Toggle Theme
      </button>
    </nav>
  );
}

export default Navbar;
