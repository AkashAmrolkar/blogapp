import React, { useEffect, useState } from 'react'
import PopularArticles from './PopularArticles'
import { ContentLoader} from 'react-content-loader'

const RecentPost = () => {
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true);
    const limit=3
    useEffect(()=>{
        fetch(`https://blogapp-backend-ten.vercel.app/api/blogs?limit=${limit}`,{
            method: "GET"
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            setPosts(data['blogs'])
            setLoading(false)
        })
    }, [])
    //const recentPosts = posts?.blogs.slice(0, 3);

    //console.log(recentPosts)
  return (

    <>
        {
            loading ? <ContentLoader
            viewBox="0 0 400 200"
            width={400}
            height={200}
            title="Loading news..."
          >
            <rect x="42.84" y="9.93" rx="5" ry="5" width="143.55" height="86.59" />
            <rect x="192.84" y="9.67" rx="0" ry="0" width="148.72" height="100" />
        
            <rect x="42.84" y="107" rx="5" ry="5" width="143.55" height="86.59" />
            <rect x="192.84" y="107" rx="0" ry="0" width="148.72" height="100" />
          </ContentLoader> : 
          <div className=' px-5 py-8 rounded-xl bg-[#fff9f3] mb-6'>
        
          <h2 className=' text-black font-bold text-2xl mb-5'>Recent Posts</h2>
          {
              posts?.map((post)=>(
                  <PopularArticles post={post} key={post._id} title="Recent Posts" />
              ))
          }
      </div>
        }
    </>
    
  )
}

export default RecentPost