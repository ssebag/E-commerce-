import React from 'react'
import './Contact.css'
import ContactInfo from './../../Components/ContactInfo/ContactInfo'
import ContactForm from './../../Components/ContactForm/ContactForm'
function Contact() {
  return (
    <div className='contact'>
      <div className="container flex-bw">
         <ContactInfo />
         <ContactForm />
      </div>
    </div>
  )
}

export default Contact