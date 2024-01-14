import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import FormatDate from '../component/FormatDate'

const SinglePost = () => {
    const postID = useParams()
    const [post, setPost] = useState(null)
    useEffect(()=>{
        const fetchPost = () => {
            fetch(`/api/blogs/${postID.id}`,{
            method: 'GET'
            }).then((res)=>{
                return res.json();
            }).then((data)=>{
                setPost(data.blog)
            })
            console.log(post)
            typeof(post)
        };
      
          fetchPost();
        
    }, [postID])
    
    const postCreatedDate = () => {

    }
  return (
    <div>
        <div className=' border-b-2 border-gray-100'>
            <img src={post?.images} height='' width='' alt={post?.title} className='w-full h-3/5 object-cover mb-5 shadow-xl' />
            <h1 className='font-bold text-[#302D55] text-3xl mb-4 hover:opacity-80 text-center'>{post?.title}</h1>
            <div className='flex gap-5 mb-4 items-center justify-center'>
                <img src='https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/12/avatar-1.webp' className=' rounded-full'  height='35' width='35' alt={post?.author} />
                <NavLink to={`/post/${post?.authorId}`}><p className='text-[#F43676] hover:opacity-80'><span className=' text-sm text-[#002050] '>By </span>{post?.author}</p></NavLink>
                <div className='text-[#4d6385]'><span className=' font-semibold'>Created At:</span> <FormatDate date={post?.createdAt} /></div>
            </div>
            <div className='post_excerpt mb-6'>
                <p className='text-[#002050] text-base'> {post?.description} </p>
            </div>
        </div>
        <div className='flex justify-between items-center mt-5'>
            <div><span className=' font-semibold'>Category:</span> {post?.category}</div>
            <div className='text-[#4d6385]'><span className=' font-semibold'>Last Updated:</span> <FormatDate date={post?.updatedAt} /></div>
        </div>
    </div>
  )
}

export default SinglePost