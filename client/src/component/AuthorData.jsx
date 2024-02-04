import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

const AuthorData = ({author, title}) => {
  return (
    <div className=' p-5 rounded-xl bg-[#fff9f3]'>
        <h2 className=' text-black relative font-bold text-2xl mb-5 after:absolute after:content-[""] after:top-1/2 after:bg-gray-200 after:h-[1px] after-w-0 md:after:w-2/6 after:ml-5 max-w-full'>{title}</h2>
        <div className="flex flex-col lg:flex-row flex-1 items-center gap-10">
            <div className=' rounded-full object-cover'>
              <NavLink to={`/users/${author?._id}`}><img src={author?.profile} className=' rounded-full object-cover w-[200px] h-[200px] mx-auto' alt={author?.fullname} height="200" width="200" /> </NavLink>
            </div>
            <div className='flex-1'>
                <div className=''>
                    <NavLink to={`/users/${author?._id}`}><p className='font-bold'>{author?.fullname}</p></NavLink>  
                </div>
                <div className="text-base text-[#002050] mb-5">Hello! My name is Akash Amrolkar working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</div>
                <div className='flex flex-wrap gap-5'>
                {
                  author?.twitterUrl && <NavLink to={author?.twitterUrl} className='flex gap-2 items-center'><FaXTwitter />Twitter</NavLink>
                }
                {
                  author?.instagramUrl && <NavLink to={author?.instagramUrl} className='flex gap-2 items-center'><FaFacebook />Instagram</NavLink>
                }
                {
                  author?.facebookUrl && <NavLink to={author?.facebookUrl} className='flex gap-2 items-center'><FaInstagram />Facebook</NavLink>
                }   
                </div>
                <NavLink to={`/users/${author?._id}`} className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80 mt-6 block w-max'>View all Posts</NavLink>

            </div>
        </div>
        
    </div>
  )
}

export default AuthorData