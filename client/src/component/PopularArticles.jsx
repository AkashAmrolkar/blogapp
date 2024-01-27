import React from 'react'
import FormatDate from './FormatDate'
import { NavLink } from 'react-router-dom'

const PopularArticles = ({post}) => {
  return (
    <div className=' mb-8'>
        <div className='flex gap-5 items-center'>
        <NavLink to={`/posts/${post?._id}`}><img src={post?.featured_img} className='rounded-xl' alt={post?.title} height="120" width="120" /></NavLink>
            <div>
            <NavLink to={`/posts/${post?._id}`}><p className='font-bold'>{post?.title}</p></NavLink>
                <p className=' text-sm text-[#002050]'><FormatDate date={post?.createdAt} /></p>
            </div>
        </div>
        
    </div>
  )
}

export default PopularArticles