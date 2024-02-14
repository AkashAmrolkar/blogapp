import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import FormatDate from './FormatDate';
import { FaComments } from "react-icons/fa";


const PostCard = ({title, category, description, author, featured_img, createdAt, updatedAt, comments, _id}) => {
    const [showComment, setShowComment] = useState(false)

    const postContent = (description) => {
        return description.length > 250 ? description.substring(0, 250) + "..." : description;

    }

    const handleMouseenter = () => {
        setShowComment(!showComment)
    }

    const handleMouseLeave = () => {
        setShowComment(false)
    }
  return (
    
    <div className='grid grid-cols-12 mb-16 md:gap-8'>
        <div className='col-span-12 lg:col-span-4 relative'>
           <NavLink to={`/posts/${_id}`}><img src={featured_img} height='250' width='250' alt={title} className='object-cover w-full shadow-xl hover:opacity-80 hover:scale-105 transition-all delay-200' onMouseEnter={handleMouseenter} onMouseLeave={handleMouseLeave} />           
           { showComment && 
                <div className='flex gap-1 items-center justify-center absolute top-1/2 left-1/2 -translate-x-2/4 z-10'>                
                    <FaComments className='text-white' /> <p className='text-white z-10'>{comments.length} Comments</p>
                </div>
            }
            </NavLink> 
        </div>
        <div className='col-span-12 mt-5 md:mt-0 lg:col-span-8 lg:col-start-5'>
            
            <NavLink to={`/posts/${_id}`}><h1 className='font-bold text-[#302D55] text-lg md:text-xl mb-4 hover:opacity-80'>{title}</h1></NavLink> 
            <div className='flex gap-5 mb-4 items-center'>
                <NavLink to={`/users/${author?._id}`}><img src={author?.profile} className=' rounded-full w-[50px] h-[50px] object-cover shadow-xl'  height='50' width='50' alt={author?.fullname} /></NavLink>
                <NavLink to={`/users/${author?._id}`}><p className='text-transparent bg-clip-text bg-gradient-to-r from-[#FC6668] to-[#E10489] hover:opacity-80'><span className=' text-sm text-[#002050] '>By </span>{author.fullname}</p></NavLink>
                <div className='text-[#4d6385]'><FormatDate date={createdAt} /></div>
            </div>
            <div className='post_excerpt mb-6'>
                <div className='text-[#002050] text-base' dangerouslySetInnerHTML={{ __html: postContent(description) }} />
            </div>            
            <NavLink to={`/posts/${_id}`} className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80'>Read more</NavLink>
        </div>
    </div>
  )
}

export default PostCard