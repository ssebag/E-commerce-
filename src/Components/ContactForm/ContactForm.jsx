import React from 'react'
import './ContactForm.css'
function ContactForm() {
  return (
    <div className="form-contact flex-col">
    <div className='flex-bw'>
       <input type="text" name="name" id="name" placeholder='Your Name' required/>
       <input type="email" name="email" id="email" placeholder='Your Email' required/>
       <input type="text" name="phone" id="phone" placeholder='Your Phone' required/>
    </div>
    <textarea name="message" id="message"  placeholder='Your Message'></textarea>
    <button className='main-buttons'>Send Massage</button>
 </div>
  )
}

export default ContactForm