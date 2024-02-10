import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import { useAuth } from '../store/Auth'
import ContentLoader from "react-content-loader"


const LoggedInUserData = ({ author, title }) => {
  const { token } = useAuth();

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://blogapp-backend-ten.vercel.app/api/users/profile`, {
        method: "GET",
        headers: {
          'authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }).then(response => response.json()).then(data => {
        setUserData(data);
        setLoading(false)
      }).catch(error => console.error('Error fetching user data:', error));
    }
    fetchData()
  }, [])

  const postContent = (data) => {
    const maxLength = 200
    return data.substring(0, maxLength)
  }
  return (
    <>
      {
        loading ? <ContentLoader
          speed={2}
          width={476}
          height={124}
          viewBox="0 0 476 124"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
          <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
          <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
          <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
          <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
          <circle cx="20" cy="20" r="20" />
        </ContentLoader> :
          <div className=' p-5 rounded-xl bg-[#fff9f3] mb-6'>
            <h2 className=' text-black font-bold text-2xl mb-5'>{title}</h2>
            <div className=' flex gap-5 items-center mb-5'>
              <div>
                <NavLink to={`/profile/${userData?._id}`}><img src={userData?.profile} className=' rounded-full h-[150px] w-[150px] object-cover' alt={userData?.fullname} height="250" width="250" /> </NavLink>
              </div>
              <div className=''>
                <NavLink to={`/profile/${userData?._id}`}><p className='font-bold'>{userData?.fullname}</p></NavLink>
                <p className=' text-sm text-[#002050]'>Founder</p>
              </div>
            </div>
            {
              userData?.bio && <div className="text-base text-[#002050] mb-5">{postContent(userData?.bio)}..</div>
            }

            <div className='flex flex-wrap gap-5'>
              {
                userData?.twitterUrl && <NavLink to={userData?.twitterUrl} className='flex gap-2 items-center'><FaXTwitter />Twitter</NavLink>
              }
              {
                userData?.instagramUrl && <NavLink to={userData?.instagramUrl} className='flex gap-2 items-center'><FaFacebook />Instagram</NavLink>
              }
              {
                userData?.facebookUrl && <NavLink to={userData?.facebookUrl} className='flex gap-2 items-center'><FaInstagram />Facebook</NavLink>
              }

            </div>
            <NavLink to={`/profile/${userData?._id}`} className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80 mt-6 block w-fit'>View Profile</NavLink>


          </div>
      }
    </>

  )
}

export default LoggedInUserData