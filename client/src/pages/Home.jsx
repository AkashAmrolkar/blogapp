import React, { useEffect, useState } from 'react'
import PostCard from '../component/PostCard'
import Sidebar from '../component/Sidebar'
import ContentLoader, { Facebook } from 'react-content-loader'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const [postData, setPostData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const fetchAllPosts = async () => {
      fetch('/api/blogs', {
        method:"GET"
      }).then((res)=>{
        return res.json();
      })
      .then((data) => {
        setPostData(data['blogs']);
        setLoading(false)
      });
    }
    fetchAllPosts();
    
  }, [])

  if (loading) {
    return <ContentLoader>
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>;
  }
  return (
    <div className='container mx-auto text-center py-10 mt-12 md:mt-20'>  
        
      <div className="grid grid-cols-12 text-left gap-5">
        <div className="col-span-12 lg:col-span-9"> 
          {
            postData?.map(post =>(
              <PostCard key={post._id} {...post} />
            ))
          }
        </div>
        <Sidebar />
      </div>
      <NavLink to={`/posts/`} className='text-white mx-auto mb-5 font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80 w-fit'>View All Posts</NavLink>
    </div>
  )
}

export default Home