import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import axios from 'axios'
import { useAuth } from '../store/Auth';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('');
    const [images, setImages] = useState(null);
    const [userId, setUserId] = useState(null)
    
    const {token} = useAuth()
    useEffect(()=>{
      if(token){
        fetch('/api/users/user', {
          method:'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setUserId(data._id);
        })
        .catch(error => console.error('Error fetching user data:', error));
      }
    }, [])
    
    //submit the form
    const submitForm = async (e) =>{
        try {
            const formData = new FormData();
            formData.append('title', title);
            formData.append('images', images);
            formData.append('category', category);
            formData.append('description', description);
            formData.append('userId', userId);
      
            const res = await axios.post('/api/blogs/create-post', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              }
            });
          } catch (err) {
            console.error(err);
          }
    }
  return (
   <>
     <div className="container custom_class">
        <h2 className="signup_title ">CREATE Post</h2>
        <form className=" col-sm-6 offset-3 pt-5 signup_form " encType="multipart/form-data" onSubmit={submitForm}>            
            <div className="form-outline mb-4">
                <input onChange={(e)=>setTitle(e.target.value)} type="text" id="form4Example1" className="form-control"  value={title}/>
                <label className="form-label" htmlFor="form4Example1">Title</label>
            </div>
            <div>
              <label htmlFor="mySelect">Select Category:</label>
              <select id="mySelect" value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="">Select an option</option>
                <option value="technology">Technology</option>
                <option value="travel">Travel</option>
                <option value="fashion">Fashion</option>
                <option value="finance">Finance</option>
                <option value="food">Food</option>
                <option value="sports">Sports</option>
                <option value="entertainment">Entertainment</option>
                <option value="science">Science</option>
                <option value="lifestyle">Lifestyle</option>
                {/* Add more options as needed */}
              </select>
            </div>

            
            <div className="form-outline mb-4">
                <ReactQuill theme="snow" value={description} onChange={setDescription} />
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