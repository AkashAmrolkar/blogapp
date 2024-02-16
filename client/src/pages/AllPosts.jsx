import React, { useEffect, useState } from 'react'
import CategoryPostCard from '../component/CategoryPostCard';
import FilterComponent from '../component/FilterComponent';
import ContentLoader from 'react-content-loader'
const AllPosts = () => {
const [posts, setPosts] = useState([])
const [dateOrder, setDateOrder] = useState('')
const [category, setCategory] = useState('')
const [search, setSearch] = useState('')
const [limit, setLimit] = useState(10)
const [loading, setloading] = useState(true)

  const url = `https://blog-app-1lq4.onrender.com/api/blogs?search=${search}&dateorder=${dateOrder}&category=${category}&limit=${limit}`;

  useEffect(()=>{
    const fetchAllPosts = async() => {
      await fetch(url, {
        method: "GET"
      }).then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data['blogs']);
        setloading(false)
      });
    }
    fetchAllPosts();
  }, [search, dateOrder, category, limit])

  if(loading){
    return <ContentLoader viewBox="0 0 900 507" height={507} width={900} className='w-full h-full'>
    <rect x="30" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="30" y="189" rx="0" ry="0" width="200" height="15" />
    <rect x="30" y="211" rx="0" ry="0" width="140" height="15" />
    <rect x="243" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="243" y="189" rx="0" ry="0" width="200" height="15" />
    <rect x="243" y="211" rx="0" ry="0" width="140" height="15" />
    <rect x="455" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="455" y="189" rx="0" ry="0" width="200" height="15" />
    <rect x="455" y="211" rx="0" ry="0" width="140" height="15" />
    <rect x="667" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="667" y="188" rx="0" ry="0" width="200" height="15" />
    <rect x="667" y="209" rx="0" ry="0" width="140" height="15" />
    <rect x="30" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="30" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="30" y="474" rx="0" ry="0" width="140" height="15" />
    <rect x="243" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="455" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="667" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="243" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="455" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="667" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="243" y="474" rx="0" ry="0" width="140" height="15" />
    <rect x="455" y="474" rx="0" ry="0" width="140" height="15" />
    <rect x="667" y="474" rx="0" ry="0" width="140" height="15" />
  </ContentLoader>
  }

  return (
    <div className='mt-12 md:mt-20'>
      <FilterComponent setLimit={setLimit} setSearch={setSearch} setDateOrder={setDateOrder} setCategory={setCategory} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {
          posts.length > 0 ?
          posts?.map((post)=>(
            <CategoryPostCard post={post} key={post?._id} />
          )) :
          <h2 className='text-center text-4xl font-semibold text-[#302D55]'>No posts found</h2>
        }
      </div>
      
    </div>
  )
}

export default AllPosts