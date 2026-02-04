import { createContext, useReducer } from "react";

// Initial state for authentication

const InitialState = {
    isLoggedIn: false,
    user : null,
}

// reducer function to handle login and logout actions

function authreducer (state, action){
    switch(action.type){
        case "LOGIN":
            return{
                ...state,
                isLoggedIn: true,
                user: action.payload,
            }
        case "LOGOUT":
            return{
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
}
// Create AuthContext
export const AuthContext = createContext();

// provide AuthContext to children components

export function AuthProvider({children}){
    const [state, dispatch] = useReducer(authreducer, InitialState);
    function login(user){
        dispatch({type: "LOGIN", payload: user});
    }
    function logout(){
        dispatch({type: "LOGOUT"});
    }
    return(
        <AuthContext.Provider value={{...state, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}