import { useContext } from "react";
import { AuthContext } from "../Components/AuthContext"

function Navbar() {
    const {isLoggedIn, user, logout, login} = useContext (AuthContext);

    return (
        <nav>
            {isLoggedIn ? (
                <>
                <span>Welcome, {user.name}</span>
                <button onClick={logout}>Logout</button>
                </>
            ) : (
                <button onClick={login}>Login</button>
            )}
        </nav>
    )
}
export default Navbar;