import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import { NavLink } from 'react-router-dom'

const SearchBox = ({setSearch}) => {
    const [searchValue, setSearchValue] = useState('')
    
  
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    }
    const closeSearchBox = (e) =>{
      setSearch(false)
    }
    const redirectClick = () => {
      setSearch(false)
    }
  return (
      <div className='h-screen w-full box bg-gray-100 absolute top-1/2 flex flex-col justify-center items-center transform -translate-y-1/2 z-50'>
        <div className='absolute  top-5 right-5'>
          <IoClose onClick={closeSearchBox} className=' text-3xl font-bold' />
        </div>
        <div className='flex gap-1 w-3/4 mx-auto'>
            <input type='text' className='h-10 rounded-md flex-1' value={searchValue} onChange={handleSearchChange} required />
            <NavLink to={`/posts?search=${searchValue}`} className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80' onClick={redirectClick}
            disabled={!searchValue ? true : false}
            >Search</NavLink>
        </div>
    </div>
  )
}

export default SearchBox