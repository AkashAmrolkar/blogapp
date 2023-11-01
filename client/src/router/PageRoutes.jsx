import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Home from "../pages/Home"

const PageRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element = {<Register />} />
        <Route path="/login" element = {<Login />} />
    </Routes>
  )
}

export default PageRoutes