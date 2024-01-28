import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import {useAuth} from '../store/Auth'
import UpdateProfileForm from './UpdateProfileForm';
import { IoMdClose } from "react-icons/io";


const LoggedInUserData = ({author, title}) => {
  const {userData} = useAuth();
  const [form, setForm] = useState(false)
  const openForm = (e) =>{
    e.preventDefault()
    setForm(true)
  }
  const handleClose = () => {
    setForm(false)
  }
  return (
    <div className=' p-5 rounded-xl bg-[#fff9f3] mb-6'>
        <h2 className=' text-black font-bold text-2xl mb-5'>{title}</h2>
        <div className=' flex gap-5 items-center mb-5'>
            <div>
              <NavLink to={`/profile/${userData?._id}`}><img src={userData?.profile} className=' rounded-full h-[150px] w-[150px] object-cover' alt={userData?.fullname} height="250" width="250" /> </NavLink>
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
        <NavLink to={`/profile/${userData?._id}`} className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80 mt-6 block w-fit' onClick={openForm}>View Profile</NavLink>
        {
          form && 
          <div className='relative'>
          <div className='absolute top-1/2 bg-white shadow-xl px-6 py-10 w-3/5 h-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
            <IoMdClose onClick={handleClose} className='text-black text-2xl absolute right-6 top-6 cursor-pointer' />
            <UpdateProfileForm />
          </div>
          </div>
        }
        
    </div>
  )
}

export default LoggedInUserData