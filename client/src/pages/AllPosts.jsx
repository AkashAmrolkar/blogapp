import React, { useEffect, useState } from 'react'
import { FaCalendarAlt, FaUser  } from "react-icons/fa";

const AllPosts = () => {
const [posts, setPosts] = useState([])
useEffect(()=>{
  fetch('/api/blogs').then((res) => {
    return res.json();
  })
  .then((data) => {
    setPosts(data['blogs']);
  });
},[])

const postContent = (desc) => {
  const maxLength = 250
  return desc.substring(0, maxLength);
}

const postCreatedDate = (date) =>{
 const newDate = new Date(date)
 const yyyy = newDate.getFullYear();
 let mm = newDate.getMonth() + 1; // Months start at 0!
 if(mm<10){
  mm = '0'+mm
 }
 let dd = newDate.getDate();
 if(dd<10){
  dd = '0'+dd
 }
 return `${yyyy}-${mm}-${dd}`;
}
  return (
    <div className='container mx-auto'>
      <div className="grid md:grid-cols-4 gap-4 text-center">
        {
          posts.map((post, index)=>(
            <div key={index} className=' bg-white rounded-2xl shadow-md mb-4  xs:mx-4 sm:mx-4'>
              <img src={post.images} alt="" height='auto' width='auto' className=' object-cover w-full h-[250px] rounded-t-2xl rounded-tr-2xl' />
              <div className=' p-4'> 
                <h2 className=' text-lg font-semibold text-center mb-4'>{post.title}</h2>
                <div className='text-center'> {postContent(post.description)+'...'} </div>
                <div className='flex justify-between'>
                  <div className='flex gap-3 my-3'> 
                    <FaCalendarAlt FaUser />
                    <p className='text-gray-500 text-sm font-medium'>{postCreatedDate(post.createdAt)}</p>
                  </div>  

                  <div className='flex gap-3 my-3'> 
                    <FaUser />
                    <p className='text-gray-500 text-sm font-medium'>{postCreatedDate(post.createdAt)}</p>
                  </div>  
                </div>
              </div>
              
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default AllPosts