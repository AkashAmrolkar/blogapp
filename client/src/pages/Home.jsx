import React, { useEffect, useState } from 'react'
import PostCard from '../component/PostCard'
import { blogs } from '../blogs'

const Home = () => {

  const [postData, setPostData] = useState(null)
  useEffect(()=>{
    fetch('/api/blogs', {
      method:"GET"
    }).then((res)=>{
      return res.json();
    })
    .then((data) => {
      setPostData(data['blogs']);
    });
  }, [])
  console.log(postData)
  return (
    <div>
      {
        postData?.map((post, index)=>(
          <PostCard key={index} post={post} />
        ))
      }
    </div>
  )
}

export default Home