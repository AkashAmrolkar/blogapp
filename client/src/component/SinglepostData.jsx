import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FormatDate from '../component/FormatDate'
import { FaRegHeart } from "react-icons/fa";
import { useAuth } from '../store/Auth';
import { useParams } from 'react-router-dom'

const SinglepostData = ({post}) => {
    console.log("Posts Data", post)
    const {token , userData} = useAuth()
    const { postId } = useParams();
    const [like, setLike] = useState(false)
    const handleLike = async() => {
        const response = await fetch(`https://blog-app-1lq4.onrender.com/api/blogs/like/${postId}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
        if(response.status === 200){
            //console.log('successfull')
            setLike(!like)
        }
    }
  return (
    <div>
        <div className=' border-b-2 border-gray-100'>
            <img src={post?.featured_img} height='' width='' alt={post?.title} className='w-full h-3/5 object-cover mb-5 shadow-xl' />
            <h1 className='font-bold text-[#302D55] text-xl lg:text-3xl mb-4 text-center'>{post?.title}</h1>
            <div className='flex flex-col md:flex-row gap-5 mb-4 items-center justify-center'>
                <img src={post?.author?.profile} className=' rounded-full h-[50px] w-[50px] object-cover'  height='50' width='50' alt={post?.author?.fullname} />
                <NavLink to={`/users/${post?.author?._id}`}><p className='text-[#F43676] hover:opacity-80'><span className=' text-sm text-[#002050] '>By </span>{post?.author?.fullname}</p></NavLink>
                <div className='text-[#4d6385]'><span className=' font-semibold'>Created At:</span> <FormatDate date={post?.createdAt} /></div>
            </div>
            <div className='post_excerpt mb-6'>
                <div className='text-[#002050] text-base' dangerouslySetInnerHTML={{__html: post?.description}} />
            </div>
            <div>
                <FaRegHeart onClick={handleLike}  style={{ color: like ? 'red' : 'black' }} />
            </div>
        </div>
        <div className='flex justify-between items-center my-5'>
            <div className='capitalize'><span className=' font-semibold text-[#4d6385]'>Category:</span> <NavLink to={`/category/${post?.category}`} className='text-transparent bg-clip-text bg-gradient-to-r from-[#FC6668] to-[#E10489] font-medium'>{post?.category}</NavLink></div>
            <div className='text-[#4d6385]'><span className=' font-semibold'>Last Updated:</span> <FormatDate date={post?.updatedAt} /></div>
        </div>
    </div>
  )
}

export default SinglepostData