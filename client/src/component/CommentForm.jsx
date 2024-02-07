import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { useAuth } from "../store/Auth"
const CommentForm = ({setShowLoginMsg}) => {
    const {postId} = useParams()
    const {token} = useAuth()
    const [text, setText] = useState('')
    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await fetch('/api/comments/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
              },
              body: JSON.stringify({
                postId,
                text,
                //author: userId, // Replace with the actual author ID
              }),
            });
      
            if (response.status===401) {
              setShowLoginMsg(true)
            }
            if(response.ok){
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
          } catch (error) {
            console.log(error)
        }
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className="form_field flex flex-col gap-2 mb-4">
            <label htmlFor='comment' className=' text-2xl font-semibold relative'>
              <h2 className=' text-2xl font-semibold relative mb-5 after:absolute after:content-[""] after:top-1/2 after:bg-gray-200 after:h-[1px] after:w-2/6 after:ml-5 max-w-full'>Leave a Reply</h2>
            </label>
            <textarea id='comment' className='border border-gray-200 rounded-xl shadow-sm focus:no-underline' rows="5" value={text} onChange={(e) => setText(e.target.value)} />
          </div>        
        <button type="submit" className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80'>Add Comment</button>
        </form>
    </div>
  )
}

export default CommentForm