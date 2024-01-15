import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

const LoggedInUserData = ({author}) => {
  return (
    <div className=' p-5 rounded-xl bg-[#fff9f3] mb-6'>
        <h2 className=' text-black font-bold text-2xl mb-5'>About Me</h2>
        <div className=' flex gap-5 items-center mb-5'>
            <div>
              <NavLink to={`/authors/${author?._id}`}><img src='https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/avatar-1.webp' className=' rounded-full h-[100px] w-[100px]' alt="" height="" width="" /> </NavLink>
            </div>
            <div className=''>
              <NavLink to={`/authors/${author?._id}`}><p className='font-bold'>{author?.firstname}</p></NavLink>  
              <p className=' text-sm text-[#002050]'>Founder</p>
            </div>
        </div>
        <div class="text-base text-[#002050] mb-5">Hello! My name is Adriana Martins working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</div>
        <div className='flex gap-5'>
        <NavLink to='#' className='flex gap-2 items-center'><FaXTwitter />Twitter</NavLink>
        <NavLink to='#' className='flex gap-2 items-center'><FaFacebook />Facebook</NavLink>
        <NavLink to='#' className='flex gap-2 items-center'><FaInstagram />Instagram</NavLink>
        </div>
    </div>
  )
}

export default LoggedInUserData