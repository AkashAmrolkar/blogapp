import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import {useAuth} from '../store/Auth'

const LoggedInUserData = ({author, title}) => {
  const {userData} = useAuth();
  return (
    <div className=' p-5 rounded-xl bg-[#fff9f3] mb-6'>
        <h2 className=' text-black font-bold text-2xl mb-5'>{title}</h2>
        <div className=' flex gap-5 items-center mb-5'>
            <div>
              <NavLink to={`/profile/${userData?._id}`}><img src={userData?.profile} className=' rounded-full h-[250px] w-[250px] object-cover' alt={userData?.fullname} height="250" width="250" /> </NavLink>
            </div>
            <div className=''>
              <NavLink to={`/profile/${userData?._id}`}><p className='font-bold'>{userData?.fullname}</p></NavLink>  
              <p className=' text-sm text-[#002050]'>Founder</p>
            </div>
        </div>
        <div className="text-base text-[#002050] mb-5">Hello! My name is Akash Amrolkar working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</div>
        <div className='flex flex-wrap gap-5'>
          <NavLink to='#' className='flex gap-2 items-center'><FaXTwitter />Twitter</NavLink>
          <NavLink to='#' className='flex gap-2 items-center'><FaFacebook />Facebook</NavLink>
          <NavLink to='#' className='flex gap-2 items-center'><FaInstagram />Instagram</NavLink>
        </div>
        <NavLink to={`/profile/${userData?._id}`} className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80 mt-6 block w-fit'>View Profile</NavLink>

    </div>
  )
}

export default LoggedInUserData