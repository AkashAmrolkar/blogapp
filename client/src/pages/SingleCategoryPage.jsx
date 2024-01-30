import React from 'react'
import CategoryPosts from '../component/CategoryPosts'
import CategoryBanner from '../component/CategoryBanner'

const SingleCategoryPage = () => {
  return (
    <div className='flex flex-col gap-14'>
        <CategoryBanner />
        <CategoryPosts />
    </div>
  )
}

export default SingleCategoryPage