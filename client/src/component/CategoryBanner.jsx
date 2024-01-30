import React from 'react'
import { useParams } from 'react-router-dom'

const CategoryBanner = () => {
    const {category} = useParams()
  return (
    <div className='container'>
        <div className='flex justify-center items-center py-52 bg-[#fff9f3]'>
            <h1 className='font-bold text-5xl capitalize text-center text-[#302D55]'>{category}</h1>
        </div>
    </div>
  )
}

export default CategoryBanner