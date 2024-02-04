import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

const SingleAuthorData = ({author}) => {
    console.log(author)
    return (
        <div className=' px-5 py-10 rounded-xl bg-[#fff9f3] mb-6'>
            <div className="flex flex-col md:flex-row items-center gap-10">
                <div className='flex-1 rounded-full object-cover'>
                  <img src={author?.profile} className=' rounded-full object-cover md:w-[200px] md:mx-auto md:h-[200px] w-[250px] h-[250px]' alt={author?.fullname} height="250" width="250" />
                </div>
                <div className='flex-1'>
                    <div className=''>
                        <p className='font-bold'>{author?.fullname}</p>
                    </div>
                    <div class="text-base text-[#002050] mb-5">
                    {
                        author?.bio && <div className="text-base text-[#002050] mb-5">{author?.bio}</div>
                    } 
                    </div>
                    <div className='flex gap-5'>
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
                    <NavLink to={`/users/${author?._id}/#all-posts`} className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80 mt-6 block w-fit'>View all Posts</NavLink>
    
                </div>
            </div>
            
        </div>
      )
}

export default SingleAuthorData