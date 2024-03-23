import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatDate from './FormatDate'

const CategoryPostCard = ({post}) => {
  const postContent = (desc) => {
    return desc.length > 250 ? desc.substring(0, 250) + "..." : desc;
  }
  return (
      <div className='flex flex-col gap-5 bg-white shadow-md rounded-b-xl py-5 mb-8'>
        <NavLink to={`/posts/${post?._id}`}><img src={post?.featured_img} className=' shadow-md rounded-t-xl w-full h-[250px] object-cover' alt={post?.title} height='' width='' /></NavLink>
        <div className='px-4 flex flex-col gap-5'>
          <NavLink to={`/posts/${post?._id}`}><h2 className='text-left text-xl lg:text-2xl font-semibold hover:opacity-80 text-[#302D55]'>{post?.title}</h2></NavLink>
          <div className='flex gap-5 items-center justify-center'>
              <NavLink to={`/users/${post?.author._id}`}><img src={post?.author?.profile} className=' rounded-full w-[30px] h-[30px] object-cover shadow-xl'  height='30' width='30' alt={post?.author?.fullname} /></NavLink>
              <NavLink to={`/users/${post?.author._id}`}><p className='text-[#F43676] opacity-80'><span className=' text-sm text-[#002050] '>By </span>{post?.author?.fullname}</p></NavLink>
              <div className='text-[#4d6385]'><FormatDate date={post?.createdAt} /></div>
          </div>
          <div className=' text-left post_excerpt'>
              <div className='text-[#002050] text-base' dangerouslySetInnerHTML={{__html: postContent(post?.description)}} />
          </div>
          <NavLink to={`/posts/${post?._id}`} className='text-white mb-5 font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80 w-fit'>Read more</NavLink>
        </div>
    </div>
  )
}

export default CategoryPostCard