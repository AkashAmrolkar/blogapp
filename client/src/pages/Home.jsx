import React, { useEffect, useState } from 'react'
import PostCard from '../component/PostCard'

const Home = () => {

  const [postData, setPostData] = useState(null)
  useEffect(()=>{
    const fetchAllPosts = async () => {
      fetch('/api/blogs', {
        method:"GET"
      }).then((res)=>{
        return res.json();
      })
      .then((data) => {
        setPostData(data['blogs']);
      });
    }
    fetchAllPosts();
    
  }, [])
  return (
    <div>
      {
        postData?.map(post =>(
          <PostCard key={post._id} {...post} />
        ))
      }
    </div>
  )
}

export default Home