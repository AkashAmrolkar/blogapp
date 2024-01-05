import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../store/Auth';

const CreatePost = () => {
    const{token} = useAuth()
    console.log(token)

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState(null);
    
    //submit the form
    const submitForm = async (e) =>{
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('images', images);
            formData.append('description', description);
      
            const res = await axios.post('/api/blogs/create-post', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              }
            });
      
            console.log(res.data); // Response with uploaded file paths
            
          } catch (err) {
            console.error(err);
          }
    }
    console.log(images)
  return (
   <>
     <div className="container custom_class">
        <h2 className="signup_title ">CREATE Post</h2>
        <form className=" col-sm-6 offset-3 pt-5 signup_form " encType="multipart/form-data" onSubmit={submitForm}>
            
            <div className="form-outline mb-4">
                <input onChange={(e)=>setTitle(e.target.value)} type="text" id="form4Example1" className="form-control"  value={title}/>
                <label className="form-label" htmlFor="form4Example1">Title</label>
            </div>

            
            <div className="form-outline mb-4">
                <textarea  onChange={(e)=>setDescription(e.target.value)}   type="text" id="form4Example2" className="form-control"  value={description}/>
                <label className="form-label" htmlFor="form4Example2">Description </label>
            </div>

            <div className="form-outline mb-4">
                <input onChange={(e) => setImages(e.target.files[0])}  type="file" id="formupload" name="images" className="form-control"  />
                <label className="form-label" htmlFor="form4Example2">Image</label>
            </div>
            <button  type="submit" className="btn btn-primary btn-block mb-4">Create Post</button>
            
         </form>
    </div> 
   </>
  )
}

export default CreatePost