import React from 'react'
import {useAuth} from '../store/Auth'
import ProfilePosts from '../component/ProfilePosts';
const ProfilePage = () => {
    const {userData} = useAuth();
    console.log("UserData", userData)
  return (
    <div>
        {
            userData?.blogs.map((post)=>(
                <ProfilePosts post={post} />
            ))
        }
    </div>
  )
}

export default ProfilePage