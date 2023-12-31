import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import registerImg from '../assets/register.jpg'
const Register = () => {

    const nav = useNavigate();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password:''
    })
    const handleChange = (e) =>{
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:8000/api/users/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (response.status === 201) {
            console.log(response)
            console.log('Form data submitted successfully.');
            nav('/login');
          } else {
            console.error('Error submitting form data.', response.statusText);
          }
        } catch (error) {
          console.error(error);
        }
    }
  return (
    <div className=" p-4 h-screen flex items-center justify-center">
    <div className=' grid sm:grid-cols-1 md:grid-cols-2 items-center gap-5'>
      <div className=''>
        <img src={registerImg} alt='' width='100%' height='100%' />
      </div>
      <div className=''>
        <h2 className='text-center text-5xl font-semibold text-black'>Register</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="firstname"
              id='firstname'
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
              Last Name: 
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="lastname"
              id="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              id='email'
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              id='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <Link to={'/login'} className='flex items-center gap-2 font-semibold'>Login <BsArrowRight /></Link>
          </div>
        </form>
      </div>
    </div>
    
  </div>
  )
}

export default Register