import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SearchBox = ({}) => {
    const [searchValue, setSearchValue] = useState('')
    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }
  return (
      <div className='container h-screen box absolute bg-gray-300 z-50'>
        <div className='flex gap-1'>
            <input type='search' className='h-10 rounded-md' value={searchValue} onChange={handleSearch} />
            <NavLink to={``} className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80'>Read more</NavLink>
        </div>
    </div>
  )
}

export default SearchBox