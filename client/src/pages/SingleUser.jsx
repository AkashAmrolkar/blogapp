import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleAuthorData from '../component/SingleAuthorData'
import PostCard from '../component/PostCard'

const SingleUser = () => {
  const {userId} = useParams()

  const [authorData, setAuthorData] = useState(null);
  useEffect(()=>{
    const fetchAuthor =  () => {
      fetch(`/api/users/author/${userId}`,{
        method: "GET"
      }).then((res)=>{
        return res.json()
      }).then((data)=>{
        console.log(data)
        setAuthorData(data);
      })
    }
    fetchAuthor();
    
  }, [userId])

  const blogs = authorData?.blogs
  return (
    <div className='container mx-auto'>
      <SingleAuthorData author= {authorData} />
  
      {
        
        blogs?.map(post =>(
          <>
          console.log(...post)
          <PostCard key={post._id} {...post} />
          </>
          
        ))
      }
    </div>
  )
}

export default SingleUser