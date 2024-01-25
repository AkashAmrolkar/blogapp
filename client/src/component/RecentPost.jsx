import React, { useEffect, useState } from 'react'
import PopularArticles from './PopularArticles'

const RecentPost = () => {
    const [posts, setPosts] = useState(null)
    useEffect(()=>{
        fetch('/api/blogs',{
            method: "GET"
        }).then((res)=>{
            return res.json()
        }).then((data)=>{
            setPosts(data)
        })
    }, [])
    const recentPosts = posts?.blogs.slice(0, 3);

    console.log(recentPosts)
  return (
    <div className=' px-5 py-8 rounded-xl bg-[#fff9f3] mb-6'>
        
        <h2 className=' text-black font-bold text-2xl mb-5'>Recent Posts</h2>
        {
            recentPosts?.map((post)=>(
                <PopularArticles post={post} key={post._id} title="Recent Posts" />
            ))
        }
    </div>
  )
}

export default RecentPost