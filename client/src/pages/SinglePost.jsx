import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoggedInUserData from '../component/LoggedInUserData'
import SinglepostData from '../component/SinglepostData'

const SinglePost = ({ match }) => {
    const { postId } = useParams();
    //console.log(postId);
    const [post, setPost] = useState(null)
    useEffect(()=>{
        const fetchPost = () => {
            fetch(`/api/blogs/${postId}`,{
            method: 'GET'
            }).then((res)=>{
                return res.json();
            }).then((data)=>{
                setPost(data)
            })
        };
        fetchPost()
    }, [postId])
    
  return (
    <div>

        <SinglepostData post={post} />
        <LoggedInUserData author={post?.author} />
    </div>
  )
}

export default SinglePost