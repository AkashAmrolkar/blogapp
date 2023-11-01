import { Route, Routes } from "react-router-dom"
import Register from "../component/Register"
import Login from "../component/Login"

const PageRoutes = () => {
  return (
    <Routes>
        <Route path="/register" element = {<Register />} />
        <Route path="/login" element = {<Login />} />
    </Routes>
  )
}

export default PageRoutes