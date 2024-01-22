import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoggedInUserData from '../component/LoggedInUserData'
import SinglepostData from '../component/SinglepostData'
import CommentForm from '../component/CommentForm'

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

    console.log(post)
    
  return (
    <div>

        <SinglepostData post={post} />
        <LoggedInUserData author={post?.author} title={"About the Author"}/>
        <CommentForm />
    </div>
  )
}

export default SinglePost