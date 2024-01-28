import React, {useState} from 'react'
import { useAuth } from '../store/Auth'

const UpdateProfileForm = () => {
    const {token} = useAuth();
    //console.log("Token: ",token)
    const [profile, setProfile] = useState(null)
    const [bio, setBio] = useState('')
    const [linkedinUrl, setLinkedinUrl] = useState('')
    const [facebookUrl, setfacebookUrl] = useState('')
    const [instagramUrl, setInstagramUrl] = useState('')
    //console.log(profile, bio, linkedinUrl, instagramUrl, facebookUrl)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('profile', profile)
            formData.append('bio', bio)
            formData.append('linkedinUrl', linkedinUrl)
            formData.append('instagramUrl', instagramUrl)            
            formData.append('facebookUrl', facebookUrl)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form className='flex flex-col gap-6 mt-6' onSubmit={handleSubmit}>
                <div className="input_field flex gap-2 flex-col ">
                    <label className='font-semibold text-gray-500' htmlFor='profile'>Profile Photo: </label>
                    <input type='file' id='profile' name='profile' onChange={e=> setProfile(e.target.files)} />
                </div>
                <div className="input_field flex gap-2 flex-col">
                    <label className='font-semibold text-gray-500' htmlFor='bio'>Bio: </label>
                    <textarea id='bio' name='bio' className='border border-gray-200 rounded-xl pl-3' rows="4" cols="50" value={bio} onChange={e=>setBio(e.target.value)} />
                </div>
                <div className="input_field flex gap-2 flex-col">
                    <label className='font-semibold text-gray-500' htmlFor='linkedin'>Linkedin Url: </label>
                    <input type='text' id='linkedin' className='border border-gray-200 h-10 rounded-xl pl-3' name='linkedin' value={linkedinUrl} onChange={e=>setLinkedinUrl(e.target.value)} />
                </div>
                <div className="input_field flex gap-2 flex-col">
                    <label className='font-semibold text-gray-500' htmlFor='instagram'>Instagram Url: </label>
                    <input type='text' id='instagram' className='border border-gray-200 h-10 rounded-xl pl-3' name='instagram' value={instagramUrl} onChange={e=>setInstagramUrl(e.target.value)} />
                </div>
                <div className="input_field flex gap-2 flex-col">
                    <label className='font-semibold text-gray-500' htmlFor='facebook'>Facebook Url: </label>
                    <input type='text' id='facebook' className='border border-gray-200 h-10 rounded-xl pl-3' name='facebook' value={facebookUrl} onChange={e=>setfacebookUrl(e.target.value)} />
                </div>
                <button type="submit" className='text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80'>Update Profile</button>
            </form>
        </div>
    )
}

export default UpdateProfileForm