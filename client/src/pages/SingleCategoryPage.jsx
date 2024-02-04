import React from 'react'
import CategoryPosts from '../component/CategoryPosts'
import CategoryBanner from '../component/CategoryBanner'
import { useParams } from 'react-router-dom'

const SingleCategoryPage = () => {
  const {category} = useParams()
  return (
    <div className='flex flex-col gap-14 mt-12 md:mt-20 py-10'>
        <CategoryBanner heading={category} />
        <CategoryPosts />
    </div>
  )
}

export default SingleCategoryPage