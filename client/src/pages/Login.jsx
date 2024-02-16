import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { useAuth } from '../store/Auth'
import {toast} from 'react-toastify'
const Login = () => {
  const { storeToken } = useAuth()
  const nav = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('https://blog-app-1lq4.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.status === 200) {
        response.json().then(userInfo => {
          //console.log('userInfo Token: ', userInfo.token)
          storeToken(userInfo.token)
          toast.success("Loggedin Successfully..!");
          nav('/');
        })      
      } 
      else if (response.status === 401) {
          toast.error("Invalid Email Address");
      }
      else if (response.status === 404) {
          toast.error("Password Incorret");
      }
      else {
        console.error('Error while login please check you email and password', response.statusText);
      }


    } catch (error) {
      console.log(error)
    }



  }
  return (
    <div className=' grid grid-cols-1 justify-center items-center gap-5 py-10 mt-12 md:mt-20'>
      <div className=' w-full md:w-2/4 mx-auto'>
        <h1 className="text-center text-5xl font-bold text-[#302D55]">Login</h1>
        <div>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                id='email'
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password*
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                id='password'
                value={data.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80"
                type="submit"
              >
                Login
              </button>
              <Link to={'/register'} className='flex items-center gap-2 font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] bg-clip-text text-transparent'>Register <BsArrowRight className='text-black font-bold' /></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login