import React, { useEffect, useState } from 'react'

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
    const firstThreeBlogs = posts?.blogs.slice(0, 2);

    console.log(firstThreeBlogs)
  return (
    <div>Hiii</div>
  )
}

export default RecentPost