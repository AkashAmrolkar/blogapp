import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import { useAuth } from "../store/Auth"
const CommentForm = () => {
    const {postId} = useParams()
    const {userId} = useAuth()
    const [text, setText] = useState('')
    //console.log("userID ", userId);
    //console.log("postId", postId)

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const response = await fetch('/api/comments/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                postId,
                text,
                author: userId, // Replace with the actual author ID
              }),
            });
      
            if (!response.ok) {
              throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
      
            const data = await response.json();
            console.log('New comment created:', data);
            // Optionally, you can update the UI or perform other actions.
          } catch (error) {
            console.log(error)
        }
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
            Comment:
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Comment</button>
        </form>
    </div>
  )
}

export default CommentForm