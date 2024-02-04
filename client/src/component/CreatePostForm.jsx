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
                setTitle('');
                setExcerpt('');
                setSelect('');
                setThumbnail(null);
            }
        } catch (error) {
            toast.error("Error while creating Post")
        }


    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form_field mb-4 flex flex-col gap-1'>
                <label className=' font-semibold text-black text-lg' htmlFor='postTitle' >Post Title: </label>
                <input id='postTitle' type='text' name="postTitle" className='pl-2 h-8 border border-gray-200 rounded-md' value={title} onChange={(e)=> setTitle(e.target.value)} required/>
            </div>
            <div className='form_field mb-4 flex flex-col gap-1'>
                <label className=' font-semibold text-black text-lg' htmlFor='excerpt' >Post Content: </label>
                <ReactQuill id='excerpt'
                theme="snow"
                value={excerpt}
                modules={{
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline'],
                    ['image', 'code-block']
                ]
                }}
                onChange={setExcerpt} />
            </div>
            <div className='form_field mb-4 flex flex-col gap-1'>
                <label className=' font-semibold text-black text-lg' htmlFor='category' >Select Category: </label>
                <select id='category' className='border-gray-200 border w-fit px-2' value={select} onChange={(e) => setSelect(e.target.value)} required>
                    <option value=''>Select Category</option>
                    <option value='education'>Education</option>
                    <option value='technology'>Technology</option>
                    <option value='fashion'>Fashion</option>
                    <option value='food'>Food</option>
                </select>
            </div>
            <div className="form_field mb-4 flex gap-1">
                <dv className="flex flex-col">
                    <label className=' font-semibold text-black text-lg' htmlFor='thumbnail'>Select Featured Image: </label>
                    <input type='file' className='w-fit' id='thumbnail' onChange={(e)=> setThumbnail(e.target.files[0])} />
                </dv>
            </div>
            <button
                className="text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80 mt-6 block w-fit"
                type="submit"
              >
                Add Post
              </button>
        </form>

    </div>
  )
}

export default CreatePostForm