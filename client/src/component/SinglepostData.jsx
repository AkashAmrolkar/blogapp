import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatDate from '../component/FormatDate'
const SinglepostData = ({post}) => {
  return (
    <div>
        <div className=' border-b-2 border-gray-100'>
            <img src={post?.images} height='' width='' alt={post?.title} className='w-full h-3/5 object-cover mb-5 shadow-xl' />
            <h1 className='font-bold text-[#302D55] text-3xl mb-4 hover:opacity-80 text-center'>{post?.title}</h1>
            <div className='flex gap-5 mb-4 items-center justify-center'>
                <img src='https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/avatar-1.webp' className=' rounded-full'  height='35' width='35' alt={post?.author} />
                <NavLink to={`/users/${post?.author._id}`}><p className='text-[#F43676] hover:opacity-80'><span className=' text-sm text-[#002050] '>By </span>{post?.author.firstname}</p></NavLink>
                <div className='text-[#4d6385]'><span className=' font-semibold'>Created At:</span> <FormatDate date={post?.createdAt} /></div>
            </div>
            <div className='post_excerpt mb-6'>
                <p className='text-[#002050] text-base'> {post?.description} </p>
            </div>
        </div>
        <div className='flex justify-between items-center my-5'>
            <div className='capitalize'><span className=' font-semibold'>Category:</span> {post?.category}</div>
            <div className='text-[#4d6385]'><span className=' font-semibold'>Last Updated:</span> <FormatDate date={post?.updatedAt} /></div>
        </div>
    </div>
  )
}

export default SinglepostData