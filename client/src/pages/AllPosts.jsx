import React, { useEffect, useState } from 'react'
import { FaCalendarAlt, FaUser  } from "react-icons/fa";
import FormatDate from '../component/FormatDate';
import CategoryPostCard from '../component/CategoryPostCard';
const AllPosts = () => {
const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchAllPosts = async() => {
      await fetch('/api/blogs', {
        method: "GET"
      }).then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data['blogs']);
      });
    }
    fetchAllPosts();
  }, [])

    console.log("All Posts", posts)


const postContent = (desc) => {
  const maxLength = 250
  return desc.substring(0, maxLength);
}

  return (
    <div className='container mx-auto'>
      <div className="grid md:grid-cols-3 gap-4 text-center">
        {
          posts?.map((post)=>(
            <CategoryPostCard post={post} key={post?._id} />
          ))
        }
      </div>
      
    </div>
  )
}

export default AllPosts