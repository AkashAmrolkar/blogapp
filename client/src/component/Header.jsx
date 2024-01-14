import { Link } from "react-router-dom"
import { useAuth } from "../store/Auth"

const Header = () => {
  const {isLoggedIn} = useAuth();
  console.log("Is LoggedIn", isLoggedIn)
  return (
    <div className="bg-blue-500 p-4">
      <nav className="container mx-auto">
        <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-white hover:text-blue-300 text-2xl font-bold">Your Logo</Link>
          <div className="space-x-4">
            <Link to={'/#'} className="nav-link text-white font-semibold hover:text-blue-300">Home</Link>
            <Link to={'/posts'} className="nav-link text-white font-semibold hover:text-blue-300">Posts</Link>
            <Link to={'/#'} className="nav-link text-white font-semibold hover:text-blue-300">Contact</Link>
            {
              isLoggedIn && <><Link to={'/create-post'} className="nav-link text-white font-semibold hover:text-blue-300">Create Post</Link> <Link to={'/logout'} className="nav-link text-white font-semibold hover:text-blue-300">Logout</Link></>

            }
            {
              !isLoggedIn && <><Link to={'/register'} className="nav-link text-white font-semibold hover:text-blue-300">Register</Link><Link to={'/login'} className="nav-link text-white font-semibold hover:text-blue-300">Login</Link></>
            }
          </div>
        </div>
      </nav>  
    </div>
  )
}

export default Header