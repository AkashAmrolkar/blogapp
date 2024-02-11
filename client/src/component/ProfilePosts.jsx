import React from 'react'
import FormatDate from './FormatDate'

const ProfilePosts = ({post}) => {
    const handleDelete = async ()=> {
        try {
            const response = await fetch(`https://blogapp-backend-ten.vercel.app/api/blogs/${post?._id}`, {
                method: "DELETE"
            }) 
            if(response.ok){
                console.log("Post Deleted")
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
            else{
                console.log("Post not deleted")
            }
        } catch (error) {
            console.log(error)
        }
        
    }
  return (
    <div className=' mb-8'>
        <div className='flex flex-wrap gap-5 items-center'>
            <img src={post?.featured_img} className='rounded-xl' alt={post?.title} height="120" width="120" />
            <div>
                <p className='font-bold'>{post?.title}</p>
                <p className=' text-sm text-[#002050]'><FormatDate date={post?.createdAt} /></p>
            </div>
            <button className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80' onClick={handleDelete}>Delete Post</button>
        </div>
        
    </div>
  )
}

export default ProfilePosts