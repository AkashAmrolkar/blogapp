import React from 'react'
import { NavLink } from 'react-router-dom'
import FormatDate from './FormatDate'

const ShowComments = ({comments}) => {
  return (
    <div>
        {
            comments?.map((cmt)=>(
                <div key={cmt._id}>
                    <div className='flex gap-6'>
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