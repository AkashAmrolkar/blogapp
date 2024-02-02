import React from 'react'
import {useAuth} from '../store/Auth'
import ProfilePosts from '../component/ProfilePosts';
import ProfileBanner from '../component/ProfileBanner';
const ProfilePage = () => {
    const {userData} = useAuth();
    console.log("UserData", userData)
  return (
    <div>

      <ProfileBanner author={userData} />
        
        {
            userData?.blogs?.map((post)=>(
                <ProfilePosts post={post} key={post?._id} />
            ))
        }
    </div>
  )
}

export default ProfilePage