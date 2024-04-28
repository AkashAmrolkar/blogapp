import React from 'react'

const Pagination = ({page, limit, setPage, total}) => {
    const totalPages = Math.ceil(total/limit)
  return (
    <div className='container text-center'>
        <div>
            {
                totalPages>0 && [...Array(totalPages)].map((index, value)=>{
                    <button>
                        {index+1}
                    </button>
                })
            }
        </div>
    </div>
  )
}

export default Pagination