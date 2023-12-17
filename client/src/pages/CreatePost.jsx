import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAuth } from '../store/Auth';

const CreatePost = () => {
    const{token} = useAuth()
    console.log(token)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handlePostSubmit = async () => {
    try {
      const response = await fetch('/api/blogs/create-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) {
        console.log('Post created successfully!');
        // Add any additional logic you need after successful post creation
      } else {
        console.error('Failed to create post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create a Post</h2>
      <form>
        <label>Title:</label>
        <input type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label>Content:</label>
        <ReactQuill theme="snow" name="description" value={description} onChange={setDescription} />
        <br />
        <button type="button" onClick={handlePostSubmit}>
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
