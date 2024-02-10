import React, { useEffect, useState } from 'react'
import PostCard from '../component/PostCard'
import Sidebar from '../component/Sidebar'
import ContentLoader from 'react-content-loader'
import { NavLink } from 'react-router-dom'

const Home = (props) => {

  const [postData, setPostData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    const fetchAllPosts = async () => {
      await fetch('https://blogapp-backend-ten.vercel.app/api/blogs', {
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

  
  return (
    <div className='container mx-auto text-center py-10 mt-12 md:mt-20'>  
        
      <div className="grid grid-cols-12 text-left gap-5">
        <div className="col-span-12 lg:col-span-9"> 
          {
            loading ? <ContentLoader
            viewBox="0 0 400 200"
            width={400}
            height={200}
            title="Loading news..."
            {...props}
          >
            <rect x="42.84" y="9.93" rx="5" ry="5" width="143.55" height="86.59" />
            <rect x="192.84" y="9.67" rx="0" ry="0" width="148.72" height="12.12" />
            <rect x="192.84" y="25.67" rx="0" ry="0" width="89" height="9" />
        
            <rect x="42.84" y="107" rx="5" ry="5" width="143.55" height="86.59" />
            <rect x="192.84" y="107" rx="0" ry="0" width="148.72" height="12.12" />
            <rect x="192.84" y="123" rx="0" ry="0" width="89" height="9" />
          </ContentLoader> :
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