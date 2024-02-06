import React, { useEffect, useState } from 'react'
import { FaCalendarAlt, FaUser  } from "react-icons/fa";
import FormatDate from '../component/FormatDate';
import CategoryPostCard from '../component/CategoryPostCard';
const AllPosts = () => {
const [posts, setPosts] = useState([])
const [dateOrder, setDateOrder] = useState('')
const [search, setSearch] = useState('')
const handleSearch = (e) => {
  setSearch(e.target.value)
}
console.log("Date Order", dateOrder)
const handleDateOrder = (e) => {
  setDateOrder(e.target.value)
}
  const url = `http://localhost:5000/api/blogs?search=${search}&dateorder=${dateOrder}`
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
  }, [search, dateOrder])

// const postContent = (desc) => {
//   const maxLength = 250
//   return desc.substring(0, maxLength);
// }

  return (
    <div className='container mx-auto mt-12 md:mt-20'>
      <div>
        <input type='text' name="search" className='border border-gray-200 mb-5 rounded-md p-3 focus:outline-none' value={search} placeholder='Type to search posts' onChange={handleSearch}/>
        <select name= 'date_order' value={dateOrder} onChange={handleDateOrder} className='border border-gray-200 rounded-md'>
          <option value='1'>Ascending</option>
          <option value='-1'>Descending</option>
        </select>
      </div>
      <div className="grid md:grid-cols-3 gap-4 text-center">
        {
          posts?.map((post)=>(
            <CategoryPostCard post={post} key={post?._id} />
          ))
        }
      </div>
      
    </div>
  )
}

export default AllPosts