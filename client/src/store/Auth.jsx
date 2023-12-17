import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) =>{
    
    const [token, setToken] = useState(localStorage.getItem('token'))
    const isLoggedIn = !!token

    const storeToken = (serverToken) =>{
        localStorage.setItem('token', serverToken)
    }

    const removeToken = ()=>{
        setToken('');
        localStorage.removeItem('token')
    }
    return(
        <AuthContext.Provider value={{ isLoggedIn,token, storeToken, removeToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return(
        useContext(AuthContext)
    );
}