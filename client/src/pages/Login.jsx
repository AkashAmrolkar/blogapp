import { useState } from 'react'
import loginImg from '../assets/login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { useAuth } from '../store/Auth'
const Login = () => {
  const{storeToken} = useAuth()
  const nav = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e)=>{
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (response.status === 200) {
        const resData = await response.json();
        console.log('Response Data: ',resData);

        storeToken(resData.token)

        nav('/');
      } else {
        console.error('Error while login please check you email and password', response.statusText);
      }


    } catch (error) {
      console.log(error)
    }
    


  }
  return (
      <div className=' grid sm:grid-cols-1 md:grid-cols-2 h-screen items-center gap-5'>
        <div className=''>
          <img src={loginImg} alt='login image' width='' height='' className=' object-cover' />
        </div>
        <div>
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
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
                Password
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <Link to={'/register'} className='flex items-center gap-2 font-semibold'>Register <BsArrowRight /></Link>
          </div>
          </form>     
        </div>
      </div>
  )
}

export default Login