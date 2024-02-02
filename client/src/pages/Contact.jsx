import React from 'react'
import CategoryBanner from '../component/CategoryBanner'
import ContactForm from '../component/ContactForm'

const Contact = () => {
  return (
    <div className=' container py-10 flex flex-col gap-10'>
        <CategoryBanner />
        <ContactForm />
    </div>
  )
}

export default Contact