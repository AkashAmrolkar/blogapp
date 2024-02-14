import React from 'react'
import FormatDate from './FormatDate'
import { NavLink } from 'react-router-dom'

const PopularArticles = ({post}) => {
  const postTitle = (desc) => {
    return desc.length > 150 ? desc.substring(0, 150) + "..." : desc;
    
}
  return (
    <div className=' last:mb-0 mb-8'>
        <div className='flex flex-col xl:flex-row gap-5 lg:items-start items-center'>
          <NavLink to={`/posts/${post?._id}`}><img src={post?.featured_img} className='rounded-xl flex-1 lg:w-full xl:w-[100px] h-[100px] object-cover hover:opacity-80 hover:scale-105 transition-all delay-200' alt={post?.title} height="120" width="120" /></NavLink>
          <div className='flex-1'>
          <NavLink to={`/posts/${post?._id}`}><p className='font-bold hover:opacity-70 text-[#302D55]'>{postTitle(post?.title)}</p></NavLink>
              <p className=' text-sm text-[#002050]'><FormatDate date={post?.createdAt} /></p>
          </div>
        </div>
        
    </div>
  )
}

export default PopularArticles