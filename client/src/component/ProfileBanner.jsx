import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import { useAuth } from '../store/Auth'
import UpdateProfileForm from './UpdateProfileForm';
import { IoMdClose } from "react-icons/io";

const ProfileBanner = ({ author, title }) => {
  const { userData } = useAuth();
  const [form, setForm] = useState(false)
  const openForm = (e) => {
    e.preventDefault()
    setForm(true)
  }
  const handleClose = () => {
    setForm(false)
  }
  return (
    <div className=' p-5 rounded-xl bg-[#fff9f3] mb-6'>
      <h2 className=' text-black font-bold text-2xl mb-5'>{title}</h2>
      <div className=' md:flex gap-5 items-center mb-5'>
        <div className='flex-1 mb-5'>
          <img src={userData?.profile} className=' rounded-full h-[150px] w-[150px] mx-0 md:mx-auto object-cover mb-5' alt={userData?.fullname} height="250" width="250" />
        </div>
        <div className='flex-1'>
          <p className='font-bold'>{userData?.fullname}</p>
          {
            userData?.bio && <div className="text-base text-[#002050] mb-5">{userData?.bio}</div>
          }
          <div className='flex flex-wrap gap-5'>
            {
              userData?.twitterUrl && <NavLink to={userData?.twitterUrl} className='flex gap-2 items-center'><FaXTwitter />Twitter</NavLink>
            }
            {
              userData?.instagramUrl && <NavLink to={userData?.instagramUrl} className='flex gap-2 items-center'><FaFacebook />Instagram</NavLink>
            }
            {
              userData?.facebookUrl && <NavLink to={userData?.facebookUrl} className='flex gap-2 items-center'><FaInstagram />Facebook</NavLink>
            }
          </div>
          <NavLink to={`/profile/${userData?._id}`} className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80 mt-6 block w-fit' onClick={openForm}>Update Profile</NavLink>
          {
            form &&
            <div className=''>
              <div className='absolute top-1/2 bg-white shadow-xl px-6 py-10 w-3/5 h-auto left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
                <IoMdClose onClick={handleClose} className='text-black text-2xl absolute right-6 top-6 cursor-pointer' />
                <UpdateProfileForm setForm={setForm} />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default ProfileBanner