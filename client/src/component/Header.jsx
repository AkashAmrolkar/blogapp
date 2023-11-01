import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
        <Link to={'/'} className="text-white hover:text-blue-300 text-2xl font-bold">Your Logo</Link>
          <div className="space-x-4">
            <Link to={'/#'} className="text-white font-semibold hover:text-blue-300">Home</Link>
            <Link to={'/#'} className="text-white font-semibold hover:text-blue-300">About</Link>
            <Link to={'/#'} className="text-white font-semibold hover:text-blue-300">Contact</Link>
            <Link to={'/login'} className="text-white font-semibold hover:text-blue-300">Login</Link>
          </div>
        </div>
      </nav>  
    </div>
  )
}

export default Header