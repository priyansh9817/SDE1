// Create Context
// Provide Value / Context
// Consume Context

import {createContext, useState } from "react";
export const ThemeContext = createContext();

export const Themeprovider = function({children}) {
    const [theme , setTheme] = useState("light");


function toggleTheme(){
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
}

return (
    <ThemeContext.Provider value={{theme , toggleTheme}}>
        {children}
    </ThemeContext.Provider>
);
}
