import React, { useState } from 'react'

const ContactForm = () => {
    const [data, setData] = useState([
        {
            fullname: '',
            email: '',
            message: ''
        }
    ])
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = () => {
        

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='flex gap-5 mb-5'>
                <div className="form_field flex flex-col gap-2 w-1/2">
                    <label className='font-semibold'>Full Name: </label>
                    <input type='text' className='h-8 border border-gray-200 rounded-md pl-2 focus:outline-none' name='fullname' value={data.fullname} onChange={handleChange} placeholder='John Doe' required />
                </div>
                <div className="form_field flex flex-col gap-2 w-1/2">
                    <label className='font-semibold'>Email: </label>
                    <input type='email' className='h-8 border border-gray-200 rounded-md pl-2 focus:outline-none' name='email' value={data.email} onChange={handleChange} placeholder='johndoe@gmail.com' required />
                </div>
            </div>            
            <div className="form_field flex flex-col gap-2">
                <label className='font-semibold'>Message: </label>
                <textarea name='message' value={data.message} onChange={handleChange} placeholder='Message' className='border border-gray-200 rounded-md pl-2 focus:outline-none' rows='6' required />
            </div>
            <button className="text-white font-semibold bg-gradient-to-r from-[#FC6668] to-[#E10489] px-6 py-2 rounded-xl hover:opacity-80 mt-6 block w-fit" type="submit">
                Submit
            </button>
        </form>
    </div>
  )
}

export default ContactForm