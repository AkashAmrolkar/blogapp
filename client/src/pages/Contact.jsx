import React from 'react'
import CategoryBanner from '../component/CategoryBanner'
import ContactForm from '../component/ContactForm'

const Contact = () => {
  return (
    <div className='py-10 mt-12 md:mt-20 flex flex-col gap-10 '>
        <CategoryBanner heading={'Contact Us'} />
        <ContactForm />
    </div>
  )
}

export default Contact