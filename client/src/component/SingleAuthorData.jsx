import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

const SingleAuthorData = ({author}) => {
    //console.log(author)
    return (
        <div className=' p-5 rounded-xl bg-[#fff9f3] mb-6'>
            <div className="flex items-center gap-10">
                <div className=' rounded-full w-full object-cover'>
                  <img src={author?.profile} className=' rounded-full object-cover w-[250px] h-[250px]' alt={author?.fullname} height="250" width="250" />
                </div>
                <div>
                    <div className=''>
                        <p className='font-bold'>{author?.fullname}</p>
                        <p className=' text-sm text-[#002050]'>Founder</p>
                    </div>
                    <div class="text-base text-[#002050] mb-5">Hello! My name is Akash Amrolkar working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</div>
                    <div className='flex gap-5'>
                        <NavLink to='#' className='flex gap-2 items-center'><FaXTwitter />Twitter</NavLink>
                        <NavLink to='#' className='flex gap-2 items-center'><FaFacebook />Facebook</NavLink>
                        <NavLink to='#' className='flex gap-2 items-center'><FaInstagram />Instagram</NavLink>
                    </div>
                    <NavLink to={`/users/${author?._id}`} className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80 mt-6 block w-fit'>View all Posts</NavLink>
    
                </div>
            </div>
            
        </div>
      )
}

export default SingleAuthorData