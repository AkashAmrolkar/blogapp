import React from 'react'
import {useAuth} from '../store/Auth'
import ProfilePosts from '../component/ProfilePosts';
import ProfileBanner from '../component/ProfileBanner';
import { NavLink } from 'react-router-dom';
const ProfilePage = () => {
    const {token} = useAuth();

  const [userData, setUserData] = useState(null);
  
  useEffect(()=>{
    const fetchData = async()=>{
      await fetch(`https://blogapp-backend-ten.vercel.app/api/users/profile`,{
        method: "GET",
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }).then(response => response.json()).then(data => {
        setUserData(data);
      }).catch(error => console.error('Error fetching user data:', error));
    }
    fetchData()
  },[])
  return (
    <div className='container py-10 mt-12 md:mt-20'>

      <ProfileBanner author={userData} />
        
        {
          userData?.blogs.length > 0 ?
            userData?.blogs?.map((post)=>(
                <ProfilePosts post={post} key={post?._id} />
            )) :
            <h2 className=' text-3xl font-semibold text text-center'>You have not added any post till now <NavLink to='/create-post' className='text-transparent bg-clip-text bg-gradient-to-r from-[#FC6668] to-[#E10489]'>click here</NavLink> to add post </h2>
        }
    </div>
  )
}

export default ProfilePage