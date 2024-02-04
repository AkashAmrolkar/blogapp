import { Link } from "react-router-dom"
import { useAuth } from "../store/Auth"
import { IoMenu, IoClose } from "react-icons/io5";
import { FaUser  } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const {isLoggedIn, userData} = useAuth();
  //console.log("Is LoggedIn", isLoggedIn)

  const [openMenu, setOpenMenu] = useState(true);
  const [profile, setProfile] = useState(false);

  const handleMenu = () =>{
    setOpenMenu(!handleMenu);
  }
  const handleCloseMenu = () =>{
    setOpenMenu(true);
  }
  const handleHover = () =>{
    setProfile(!profile)
  }
  const removeProfile = () =>{
    setProfile(!profile)
  }
  return (
    <div className=" bg-transparent shadow-md p-4 fixed top-0 w-full bg-white z-10">
      <nav className="container p-0 mx-auto">
        <div className="flex justify-between items-center relative">
          <Link to={'/'} className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC6668] to-[#E10489] font-semibold text-3xl leading-10">Logo</Link>
          <div className="space-x-4 hidden md:flex justify-between items-center">
            <Link to={'/#'} className="nav-link text-[#302D55] font-semibold hover:opacity-80">Home</Link>
            <Link to={'/posts'} className="nav-link text-[#302D55] font-semibold hover:opacity-80">Posts</Link>
            <Link to={'/contact'} className="nav-link text-[#302D55] font-semibold hover:opacity-80">Contact</Link>
            {
              isLoggedIn && <><Link to={'/create-post'} className="nav-link text-[#302D55] font-semibold">Create Post</Link> <Link to={'/logout'} className="nav-link text-white bg-gradient-to-r from-[#FC6668] to-[#E10489] font-semibold px-6 py-2 rounded-xl hover:opacity-80">Logout</Link></>

            }
            {
              !isLoggedIn && <><Link to={'/register'} className="nav-link text-[#302D55] font-semibold">Register</Link><Link to={'/login'} className="nav-link text-white bg-gradient-to-r from-[#FC6668] to-[#E10489] font-semibold px-6 py-2 rounded-xl hover:opacity-80">Login</Link></>
            }
          </div>
          <div className="flex justify-between items-center md:hidden gap-4 ">
            <FaUser className="border rounded-full h-4 w-4 text-5xl" onClick={handleHover} />
            {
              profile &&
              <div className="flex flex-col gap-4 bg-white shadow-md absolute top-20 w-fit right-0 transition-all delay-300 ease-in-out p-5 z-10" onClick={removeProfile}>
                {
                  isLoggedIn && <><Link to={`/profile/${userData?._id}`} className="nav-link text-[#302D55] font-semibold">View Profile</Link> <Link to={'/logout'} className="nav-link text-white bg-gradient-to-r from-[#FC6668] to-[#E10489] font-semibold px-6 py-2 rounded-xl hover:opacity-80 w-fit">Logout</Link></>

                }
                {
                  !isLoggedIn && <><Link to={'/register'} className="nav-link text-[#302D55] font-semibold w-fit">Register</Link><Link to={'/login'} className="nav-link text-white bg-gradient-to-r from-[#FC6668] to-[#E10489] font-semibold px-6 py-2 rounded-xl hover:opacity-80 w-fit">Login</Link></>
                }
              </div>
            }
            {
              openMenu ? <IoMenu className="text-3xl" onClick={handleMenu} /> : <IoClose className={`text-3xl `}  onClick={handleCloseMenu} />
            }
            {
              !openMenu &&
              <div className="flex flex-col gap-4 bg-white shadow-md absolute top-16 w-full transition-all delay-500 translate-x-0 ease-in-out right-0 p-5 z-10">
                <Link to={'/#'} className="nav-link text-[#302D55] font-semibold hover:opacity-80">Home</Link>
                <Link to={'/posts'} className="nav-link text-[#302D55] font-semibold hover:opacity-80">Posts</Link>
                <Link to={'/contact'} className="nav-link text-[#302D55] font-semibold hover:opacity-80">Contact</Link>
                {
                  isLoggedIn && <><Link to={'/create-post'} className="nav-link text-[#302D55] font-semibold">Create Post</Link> <Link to={'/logout'} className="nav-link text-white bg-gradient-to-r from-[#FC6668] to-[#E10489] font-semibold px-6 py-2 rounded-xl hover:opacity-80 w-fit">Logout</Link></>

                }
                {
                  !isLoggedIn && <><Link to={'/register'} className="nav-link text-[#302D55] font-semibold w-fit">Register</Link><Link to={'/login'} className="nav-link text-white bg-gradient-to-r from-[#FC6668] to-[#E10489] font-semibold px-6 py-2 rounded-xl hover:opacity-80 w-fit">Login</Link></>
                }
              </div>
            }
          </div>
        </div>
      </nav>  
    </div>
  )
}

export default Header