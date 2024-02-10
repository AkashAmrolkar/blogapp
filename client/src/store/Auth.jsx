import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) =>{
    
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [userData, setUserData] = useState(null)
    const isLoggedIn = !!token

    const storeToken = (serverToken) =>{
        setToken(serverToken)
        localStorage.setItem('token', serverToken)
    }

    useEffect(()=>{
        if(token){
          const fetchProfileData = async() => {
            fetch('https://blogapp-backend-ten.vercel.app/api/users/profile', {
              method:'GET',
              headers: {
                'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          })
            .then(response => response.json())
            .then(data => {
              setUserData(data);
            })
            .catch(error => console.error('Error fetching user data:', error));

          }
          fetchProfileData();
        }
      }, [token])

    const removeToken = ()=>{
        setToken('');
        localStorage.removeItem('token')
    }
    return(
        <AuthContext.Provider value={{ isLoggedIn,token, storeToken, userData, removeToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return(
        useContext(AuthContext)
    );
}