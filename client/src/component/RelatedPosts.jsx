import React, { useEffect, useState } from 'react'
import PopularArticles from '../component/PopularArticles'

const RelatedPosts = ({category}) => {
  const [posts, setPosts] = useState(null)
  useEffect(()=>{
    const fetchData = () =>{
      fetch('/api/blogs',{
        method: "GET"
      }).then((response)=>{
        return response.json()
      }).then((data)=>{
        setPosts(data)
      })
    }

    fetchData();    
  }, [])
  const relatedPost = posts?.blogs.filter((post)=>{
   return post?.category == category
  })
  console.log(relatedPost)
  return (
    <div>
      <h2 className=' text-2xl font-semibold relative mb-8 after:absolute after:content-[""] after:top-1/2 after:bg-gray-200 after:h-[1px] after:w-2/6 after:ml-5 max-w-full'>Related Posts</h2>
      <div className='grid grid-cols-2 gap-5'>
        {
          relatedPost?.map((post)=>(
              <PopularArticles post={post} key={post._id} />
          ))
        }
      </div>
    </div>
  )
}

export default RelatedPosts