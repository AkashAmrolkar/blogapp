import React from 'react'
import {categories} from '../categories'
import {NavLink} from 'react-router-dom'
import CategoryBanner from '../component/CategoryBanner'
const Categories = () => {
  return (
    <div className=' flex flex-col sm:gap-8 md:gap-10'>
        <CategoryBanner heading='Categories' />
        <div className='grid sm:grid-cols-1 md:grid-cols-4 items-center gap-5'>
            {
                categories.map((category, index)=>(
                    <NavLink to={`/category/${category.slug}`} className='bg-white shadow-md '>
                        <img src={category?.image} alt={category.name} height='300' width='300' className='w-full h-full' />
                        <p className=' font-bold text-lg text-[#302D55] p-3'>{category.name}</p>
                    </NavLink>
                ))
            }
        </div>        
    </div>
  )
}

export default Categories