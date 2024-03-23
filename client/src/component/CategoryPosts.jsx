import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CategoryPostCard from './CategoryPostCard';
import ContentLoader from 'react-content-loader';

const CategoryPosts = () => {
    const {category} = useParams();
    console.log(category)
    const [posts, setPosts] = useState(null);
    const [categoryposts, setCategoryPosts] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const fetchPosts = async() => {
            await fetch('/api/blogs',{
                method: "GET"
            }).then((response)=>{ 
                return response.json();
            }).then((data)=>{
                setPosts(data['blogs'])
                setLoading(false)
            })
        }
        fetchPosts();

    }, [category])
    
  if(loading){
    return <ContentLoader viewBox="0 0 900 507" height={507} width={900} className='w-full h-full'>
    <rect x="30" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="30" y="189" rx="0" ry="0" width="200" height="15" />
    <rect x="30" y="211" rx="0" ry="0" width="140" height="15" />
    <rect x="243" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="243" y="189" rx="0" ry="0" width="200" height="15" />
    <rect x="243" y="211" rx="0" ry="0" width="140" height="15" />
    <rect x="455" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="455" y="189" rx="0" ry="0" width="200" height="15" />
    <rect x="455" y="211" rx="0" ry="0" width="140" height="15" />
    <rect x="667" y="60" rx="0" ry="0" width="200" height="120" />
    <rect x="667" y="188" rx="0" ry="0" width="200" height="15" />
    <rect x="667" y="209" rx="0" ry="0" width="140" height="15" />
    <rect x="30" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="30" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="30" y="474" rx="0" ry="0" width="140" height="15" />
    <rect x="243" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="455" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="667" y="320" rx="0" ry="0" width="200" height="120" />
    <rect x="243" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="455" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="667" y="450" rx="0" ry="0" width="200" height="15" />
    <rect x="243" y="474" rx="0" ry="0" width="140" height="15" />
    <rect x="455" y="474" rx="0" ry="0" width="140" height="15" />
    <rect x="667" y="474" rx="0" ry="0" width="140" height="15" />
  </ContentLoader>
  }
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