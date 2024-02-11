import React, { useEffect, useState } from 'react'
import CategoryPostCard from '../component/CategoryPostCard';
import FilterComponent from '../component/FilterComponent';
const AllPosts = () => {
const [posts, setPosts] = useState([])
const [dateOrder, setDateOrder] = useState('')
const [category, setCategory] = useState('')
const [search, setSearch] = useState('')
const [limit, setLimit] = useState(10)

  const url = `/api/blogs?search=${search}&dateorder=${dateOrder}&category=${category}&limit=${limit}`;

  useEffect(()=>{
    const fetchAllPosts = async() => {
      await fetch(url, {
        method: "GET"
      }).then((res) => {
        return res.json();
      })
      .then((data) => {
        setPosts(data['blogs']);
      });
    }
    fetchAllPosts();
  }, [search, dateOrder, category, limit])

// const postContent = (desc) => {
//   const maxLength = 250
//   return desc.substring(0, maxLength);
// }

  return (
    <div className='mt-12 md:mt-20'>
      <FilterComponent setLimit={setLimit} setSearch={setSearch} setDateOrder={setDateOrder} setCategory={setCategory} />
      <div className="grid md:grid-cols-3 gap-4 text-center">
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