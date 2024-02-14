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
            await fetch('/api/blogs',{
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
    <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8'>
        {
            data?.map((post, index)=>(
                <>
                    <div className=''>
                        <CategoryPostCard post={post} key={index} />
                    </div>                    
                </>                
            ))
        }
    </div>
  )

}

export default CategoryPosts