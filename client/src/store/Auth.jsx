import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) =>{
    
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [userId, setUserId] = useState(null)
    const isLoggedIn = !!token

    const storeToken = (serverToken) =>{
        setToken(serverToken)
        localStorage.setItem('token', serverToken)
    }

    useEffect(()=>{
        if(token){
          fetch('/api/users/user', {
            method:'GET',
            headers: {
              'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        })
          .then(response => response.json())
          .then(data => {
            setUserId(data._id);
          })
          .catch(error => console.error('Error fetching user data:', error));
        }
      }, [])

    const removeToken = ()=>{
        setToken('');
        localStorage.removeItem('token')
    }
    return(
        <AuthContext.Provider value={{ isLoggedIn,token, storeToken, userId, removeToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return(
        useContext(AuthContext)
    );
}