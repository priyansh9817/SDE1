import { useContext } from "react";
import { ThemeContext } from "../Context/Theam.jsx";

function Card (){
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div 
            className={`card ${theme}`}
            style={{
                padding: "20px",
                marginTop: "20px",
                background: theme === "light" ? "Red" : "#262",
                color: theme === "light" ? "#000" : "#fff"
            }}
        >
            <h2>Current Theme: {theme}</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}
export default Card;