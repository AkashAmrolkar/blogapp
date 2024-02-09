import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryPostCard from './CategoryPostCard';

const CategoryPosts = () => {
    const {category} = useParams();
    console.log(category)
    const [posts, setPosts] = useState(null);
    const [categoryposts, setCategoryPosts] = useState(null);

    useEffect(()=>{
        const fetchPosts = async() => {
            await fetch('https://blogapp-backend-ten.vercel.app/api/blogs',{
                method: "GET"
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                setPosts(data['blogs'])
            })
        }
        fetchPosts();

    }, [category])
    const data = posts?.filter(post => post.category === category);
    //console.log(data)
  return (
    <div>
        {
            data?.map((post, index)=>(
                <>
                    <div className='grid grid-cols-3 gap-4 mb-8'>
                        <CategoryPostCard post={post} key={index} />
                    </div>                    
                </>                
            ))
        }
    </div>
  )

}

export default CategoryPosts