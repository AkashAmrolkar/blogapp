import React from 'react'
import FormatDate from './FormatDate'

const ProfilePosts = ({post}) => {
  return (
    <div className=' mb-8'>
        <div className='flex flex-wrap gap-5 items-center'>
            <img src={post?.featured_img} className='rounded-xl' alt={post?.title} height="120" width="120" />
            <div>
                <p className='font-bold'>{post?.title}</p>
                <p className=' text-sm text-[#002050]'><FormatDate date={post?.createdAt} /></p>
            </div>
        </div>
        
    </div>
  )
}

export default ProfilePosts