import React from 'react'
import CategoryPosts from '../component/CategoryPosts'
import CategoryBanner from '../component/CategoryBanner'
import { useParams } from 'react-router-dom'

const SingleCategoryPage = () => {
  const {category} = useParams()
  return (
    <div className='flex flex-col gap-14'>
        <CategoryBanner heading={category} />
        <CategoryPosts />
    </div>
  )
}

export default SingleCategoryPage