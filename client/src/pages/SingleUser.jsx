import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SingleAuthorData from '../component/SingleAuthorData'
import PostCard from '../component/PostCard'
import Sidebar from '../component/Sidebar'

const SingleUser = () => {
  const {userId} = useParams()

  const [authorData, setAuthorData] = useState(null);
  useEffect(()=>{
    const fetchAuthor =  () => {
      fetch(`https://blogapp-backend-ten.vercel.app/api/users/author/${userId}`,{
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
    <div className='container mx-auto flex flex-col gap-10 mt-12 md:mt-20 py-10'>
      <SingleAuthorData author= {authorData} />        
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-9" id='all-posts'> 
          {
            
            blogs?.map(post =>(
              <>
              <PostCard key={post._id} {...post} />
              </>              
            ))
          }
        </div>
        <Sidebar />
      </div>
    </div>
  )
}

export default SingleUser