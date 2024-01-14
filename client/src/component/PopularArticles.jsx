import React from 'react'

const PopularArticles = () => {
  return (
    <div className=' p-5 rounded-xl bg-[#fff9f3] mb-6'>
        <h2 className=' text-black font-bold text-2xl mb-5'>Popular Articles</h2>
        <div className='flex gap-5 items-center'>
            <img src="https://themes.estudiopatagon.com/wordpress/wavy/wp-content/uploads/2023/10/Untitled-3-150x150.webp" className='rounded-xl' alt="" height="" width="" />
            <div>
                <p className='font-bold'>Modern and colorful style of caricatures created by AI</p>
                <p className=' text-sm text-[#002050]'>Octomber 21, 2023</p>
            </div>
        </div>
        
    </div>
  )
}

export default PopularArticles