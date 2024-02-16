import React, {useState} from 'react'
import { useAuth } from '../store/Auth'
import {toast} from 'react-toastify'

const UpdateProfileForm = ({setForm}) => {
    const {token} = useAuth();
    //console.log("Token: ",token)
    const [profile, setProfile] = useState(null)
    const [bio, setBio] = useState('')
    const [twitterUrl, setTwitterUrl] = useState('')
    const [facebookUrl, setfacebookUrl] = useState('')
    const [instagramUrl, setInstagramUrl] = useState('')
    console.log(profile, bio, twitterUrl, instagramUrl, facebookUrl)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('profile', profile)
            formData.append('bio', bio)
            formData.append('twitterUrl', twitterUrl)
            formData.append('instagramUrl', instagramUrl)            
            formData.append('facebookUrl', facebookUrl)
            const response = await fetch('https://blog-app-1lq4.onrender.com/api/users/update', {
                method: "PUT",
                headers:{
                    'authorization': `Bearer ${token}`
                },
                body: formData
            });
            if (response.status === 200) {
                toast.success("Profile Updated Successfully..!")
                // Clear form fields
                setProfile(null);
                setBio('');
                setTwitterUrl('');
                setInstagramUrl('');
                setfacebookUrl('');
                setForm(false)
            }
            if (response.status === 500) {
                toast.error("Internal Server Error")
            }
            //console.log(response);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form className='flex flex-col gap-6 mt-6' onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="input_field flex gap-2 flex-col ">
                    <label className='font-semibold text-gray-500' htmlFor='profile'>Profile Photo: </label>
                    <input type='file' id='profile' name='profile' onChange={e=> setProfile(e.target.files[0])} />
                </div>
                <div className="input_field flex gap-2 flex-col">
                    <label className='font-semibold text-gray-500' htmlFor='bio'>Bio: </label>
                    <textarea id='bio' name='bio' className='border border-gray-200 rounded-xl pl-3' rows="4" cols="50" value={bio} onChange={e=>setBio(e.target.value)} />
                </div>
                <div className="input_field flex gap-2 flex-col">
                    <label className='font-semibold text-gray-500' htmlFor='twitter'>Twitter Url: </label>
                    <input type='text' id='twitter' className='border border-gray-200 h-10 rounded-xl pl-3' name='linkedin' value={twitterUrl} onChange={e=>setTwitterUrl(e.target.value)} />
                </div>
                <div className="input_field flex gap-2 flex-col">
                    <label className='font-semibold text-gray-500' htmlFor='instagram'>Instagram Url: </label>
                    <input type='text' id='instagram' className='border border-gray-200 h-10 rounded-xl pl-3' name='instagram' value={instagramUrl} onChange={e=>setInstagramUrl(e.target.value)} />
                </div>
                <div className="input_field flex gap-2 flex-col">
                    <label className='font-semibold text-gray-500' htmlFor='facebook'>Facebook Url: </label>
                    <input type='text' id='facebook' className='border border-gray-200 h-10 rounded-xl pl-3' name='facebook' value={facebookUrl} onChange={e=>setfacebookUrl(e.target.value)} />
                </div>
                <button type="submit" className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 w-fit mx-auto rounded-xl hover:opacity-80'>Update Profile</button>
            </form>
        </div>
    )
}

export default UpdateProfileForm