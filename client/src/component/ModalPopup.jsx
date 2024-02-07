import React from 'react'
import { IoClose } from "react-icons/io5";
const ModalPopup = ({message, setShowLoginMsg}) => {
    const handleClose = () => {
        setShowLoginMsg(false)
    }
  return (
    <div className='container fixed w-full mx-auto bg-slate-300 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10'>
        <IoClose onClick={handleClose} className='bold text-right text-3xl mb-6 mt-6 cursor-pointer' />
        <h1 className='text-center text-2xl font-semibold'>{message}</h1>
    </div>
  )
}

export default ModalPopup