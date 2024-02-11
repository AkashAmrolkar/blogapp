import React from 'react'

const CategoryBanner = ({heading}) => {
  return (
    <div className=''>
        <div className='flex justify-center items-center py-36 lg:py-44 bg-[#fff9f3]'>
            <h1 className='font-bold text-3xl md:text-5xl capitalize text-center text-[#302D55]'>{heading}</h1>
        </div>
    </div>
  )
}

export default CategoryBanner