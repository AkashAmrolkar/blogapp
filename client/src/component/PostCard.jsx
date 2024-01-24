import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import FormatDate from './FormatDate';

const PostCard = ({title, category, description, author, featured_img, createdAt, updatedAt, comments, _id}) => {
    const postContent = (desc) => {
        const maxLength = 250
        return desc.substring(0, maxLength);
    }
  return (
    
    <div className='grid grid-cols-12 mb-16 gap-8'>
        <div className=' col-span-4'>
           <NavLink to={`/posts/${_id}`}><img src={featured_img} height='250' width='250' alt={title} className='object-cover w-full h-[250px] shadow-xl hover:-translate-y-4 transition-all delay-75 ease-in-out' /></NavLink> 
        </div>
        <div className=' col-span-8 col-start-5'>
            
            <NavLink to={`/posts/${_id}`}><h1 className='font-bold text-[#302D55] text-3xl mb-4 hover:opacity-80'>{title}</h1></NavLink> 
            <div className='flex gap-5 mb-4 items-center'>
                <NavLink to={`/users/${author._id}`}><img src={author?.profile} className=' rounded-full'  height='35' width='35' alt={author?.fullname} /></NavLink>
                <NavLink to={`/users/${author._id}`}><p className='text-[#F43676] opacity-80'><span className=' text-sm text-[#002050] '>By </span>{author.fullname}</p></NavLink>
                <div className='text-[#4d6385]'><FormatDate date={createdAt} /></div>
            </div>
            <div className='post_excerpt mb-6'>
                <p className='text-[#002050] text-base'> {postContent(description)+'...'} </p>
            </div>            
            <NavLink to={`/posts/${_id}`} className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80'>Read more</NavLink>
        </div>
    </div>
  )
}

export default PostCard