import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {toast} from 'react-toastify'

import { useAuth } from "../store/Auth"
const CreatePostForm = () => {
    const {token} = useAuth()
    const [title, setTitle] = useState('')
    const [excerpt, setExcerpt] = useState('')
    const [select, setSelect] = useState('')    
    const [thumbnail, setThumbnail] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData()
            formData.append('postTitle', title);
            formData.append('Excerpt', excerpt)
            formData.append('category', select)
            formData.append('thumbnail', thumbnail)
            const respose = await fetch('/api/blogs/create-post', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            })
            if(respose.status === 200){
                toast.success("Post Created Successfully..!")
            }
        } catch (error) {
            toast.error("Error while creating Post")
        }


    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form_field'>
                <label htmlFor='postTitle' >Post Title: </label>
                <input id='postTitle' type='text' name="postTitle" value={title} onChange={(e)=> setTitle(e.target.value)} required/>
            </div>
            <div className='form_field'>
                <label htmlFor='excerpt' >Post Content</label>
                <ReactQuill id='excerpt' theme="snow" value={excerpt} onChange={setExcerpt} />
            </div>
            <div className='form_field'>
                <label htmlFor='category' >Select Category: </label>
                <select id='category' value={select} onChange={(e) => setSelect(e.target.value)} required>
                    <option value=''>Select Category</option>
                    <option value='education'>Education</option>
                    <option value='technology'>Technology</option>
                    <option value='fashion'>Fashion</option>
                    <option value='food'>Food</option>
                </select>
            </div>
            <div className="form_field">
                <label htmlFor='thumbnail'>Post featured image</label>
                <input type='file' id='thumbnail' onChange={(e)=> setThumbnail(e.target.files[0])} />
            </div>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Post
              </button>
        </form>

    </div>
  )
}

export default CreatePostForm