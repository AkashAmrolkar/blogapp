import React, { useEffect, useState } from 'react'
import CategoryPostCard from '../component/CategoryPostCard';
import {categories} from '../categories'
const AllPosts = () => {
const [posts, setPosts] = useState([])
const [dateOrder, setDateOrder] = useState('')
const [category, setCategory] = useState('')
const [search, setSearch] = useState('')
const [limit, setLimit] = useState(10)

const handleSearch = (e) => {
  setSearch(e.target.value)
}
// console.log("Date Order", dateOrder)
const handleDateOrder = (e) => {
  setDateOrder(e.target.value)
}

const handleCategory = (e) => {
  setCategory(e.target.value)
}

const handleLimit = (e) => {
  setLimit(e.target.value)
}
  const url = `http://localhost:5000/api/blogs?search=${search}&dateorder=${dateOrder}&category=${category}&limit=${limit}`
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
    <div className='container mx-auto mt-12 md:mt-20'>
      <div className='flex items-center gap-5 mb-5'>
        <div className="flex flex-3 flex-col gap-4">
          <label htmlFor='' className=''>Search posts by type: </label>
          <input type='text' name="search" className='border border-gray-200 rounded-md py-2 px-3 focus:outline-none' value={search} placeholder='Type to search posts' onChange={handleSearch}/>
        </div>
        <div className="flex flex-3 flex-col gap-4">
          <label htmlFor='' className=''>Select Date Order: </label>
          <select name= 'date_order' value={dateOrder} onChange={handleDateOrder} className='border border-gray-200 rounded-md py-2 px-3'>
            <option value='1'>Ascending</option>
            <option value='-1'>Descending</option>
          </select>
        </div>
        <div className="flex flex-3 flex-col gap-4">
          <label htmlFor='' className=''>Select Posts by categories: </label>
          <select name= 'category' value={category} onChange={handleCategory} className='border border-gray-200 rounded-md py-2 px-3'>
          <option selected value=''>All</option>
            {
              categories.map((cat, index)=>(
                <option key={index} value={cat.slug}>{cat.name}</option>
              ))
            }
          </select>
        </div>
        <div className="flex flex-3 flex-col gap-4">
          <label htmlFor='' className=''>Number of posts per page you want to show:  </label>
          <select name= 'limit' value={limit} onChange={handleLimit} className='border border-gray-200 rounded-md py-2 px-3'>
            <option selected value='6'>6</option>
            <option value='9'>9</option>
            <option value='12'>12</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
            <option value='50'>50</option>            
          </select>
        </div>
        
      </div>
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