import React from 'react'
import { IoClose } from "react-icons/io5";
const ModalPopup = ({message, setShowLoginMsg}) => {
    const handleClose = () => {
        setShowLoginMsg(false)
    }
  return (
    <div className='container fixed sm:w-full md:w-1/2 mx-auto bg-white shadow-md py-10 px-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
      <div className='relative'>
        <IoClose onClick={handleClose} className='bold text-right text-3xl mb-4 cursor-pointer absolute -top-12 right-0' />
        <h1 className='text-center text-2xl font-semibold mt-5'>{message}</h1>
      </div>        
    </div>
  )
}

export default ModalPopup