import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Logout from "../pages/Logout"
import CreatePost from "../pages/CreatePost"
import AllPosts from "../pages/AllPosts"
import SinglePost from "../pages/SinglePost"
import SingleUser from '../pages/SingleUser'
import ProfilePage from "../pages/ProfilePage"
import SingleCategoryPage from "../pages/SingleCategoryPage"
import Contact from "../pages/Contact"
import Categories from "../pages/Categories"

const PageRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element = {<Register />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/logout" element = {<Logout />} />
        <Route path="/create-post" element = {<CreatePost />} />
        <Route path="/posts" element= {<AllPosts />} />
        <Route path="/posts/:postId" element= {<SinglePost />} />
        <Route path="/users/:userId" element={<SingleUser />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/category/:category" element={<SingleCategoryPage/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
    </Routes>
  )
}

export default PageRoutes