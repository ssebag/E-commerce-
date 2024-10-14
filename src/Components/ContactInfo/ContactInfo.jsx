import React from 'react'
import './ContactInfo.css'
function ContactInfo() {
  return (
    <div className="call-me flex-col">
        <div className="call-to-us flex-col">
        <div className="call-header flex-al-c">
            <i className="fa fa-phone"></i>
            <p className="call-header-title">Call To Us</p>
        </div>
        <p>We are available 24/7, 7 days a week.</p>
        <p>Phone: +8801611112222</p>
        </div>
        <hr />
        <div className="call-to-us flex-col">
            <div className="call-header flex-al-c">
                <i className="fa fa-envelope"></i>
                <p className="call-header-title">Write To US</p>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
        </div>
    </div>
  )
}

export default ContactInfo