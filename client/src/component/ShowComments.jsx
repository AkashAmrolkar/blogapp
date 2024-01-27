import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatDate from './FormatDate'

const ShowComments = ({comments}) => {
  return (
    <div className='relative'>
        <h2 className=' text-2xl font-semibold relative mb-8 after:absolute after:content-[""] after:top-1/2 after:bg-gray-200 after:h-[1px] after:w-full after:ml-5 max-w-full'>Comments</h2>
        {
            comments?.map((cmt)=>(
                <div key={cmt._id} className='mb-8'>
                    <div className='flex items-center gap-6'>
                        <img src={cmt?.user?.profile} height='60' width='60' className='rounded-full' alt={cmt?.user?.fullname} />  
                        <div> 
                            <p><NavLink to={`/users/${cmt?.user?._id}`} className='text-[#F43676] hover:opacity-80'>{cmt?.user?.fullname}</NavLink> on <FormatDate date={cmt?.createdAt} /></p>
                            <p>{cmt.comment}</p>
                        </div>  
                     </div>
                </div>
            ))
        }
    </div>
  )
}

export default ShowComments