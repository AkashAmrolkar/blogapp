import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../store/Auth'

const Logout = () => {
    const {removeToken} = useAuth();
    useEffect(()=>{
        removeToken();
    },)
  return (
    <Navigate to='/' />
  )
}

export default Logout