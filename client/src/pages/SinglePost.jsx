import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SinglepostData from '../component/SinglepostData'
import CommentForm from '../component/CommentForm'
import AuthorData from '../component/AuthorData'
import ShowComments from '../component/ShowComments'
import RelatedPosts from '../component/RelatedPosts'
import Sidebar from '../component/Sidebar'

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
    <div className='container mx-auto mt-12 md:mt-20 py-10'>      
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-9 gap-10"> 
                <div className='flex flex-col gap-10'>
                    <SinglepostData post={post} />
                    <AuthorData author={post?.author} title={"About the Author"}/>
                    <ShowComments comments = {post?.comments} />
                    <CommentForm />
                    <RelatedPosts category={post?.category} />
                </div>                
            </div>
            <Sidebar />
        </div>            
    </div>
  )
}

export default SinglePost