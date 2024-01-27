import React from 'react'
import {useAuth} from '../store/Auth'
import ProfilePosts from '../component/ProfilePosts';
import LoggedInUserData from '../component/LoggedInUserData';
const ProfilePage = () => {
    const {userData} = useAuth();
    console.log("UserData", userData)
  return (
    <div>

      <LoggedInUserData author={userData} />
        
        {
            userData?.blogs?.map((post)=>(
                <ProfilePosts post={post} key={post?._id} />
            ))
        }
    </div>
  )
}

export default ProfilePage