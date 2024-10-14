import React from 'react'
import AboutImg from './../../assets/about-img.png'
import './OurHistory.css'
function OurHistory() {
  return (
    <div className='ourHistory '>
   <div className="container flex-bw">
   <div className="our-hestory-description flex-col">
            <h1>
              Our Story
            </h1>
            <p>
             Launced in 2015, Exclusive is South Asia’s
             premier online shopping makterplace with an
             active presense in Bangladesh. Supported by wide range 
             of tailored marketing, data and service solutions,
             Exclusive has 10,500 sallers and 
             300 brands and serves 3 millioons customers across the region. 
            </p>
            <p>
             Exclusive has more than 1 Million products to offer, growing at a very fast. 
             Exclusive offers a diverse assotment in categories ranging  from consumer.
            </p>
        </div>
        <div className="our-hestory-img">
            <img src={AboutImg} alt="" />
        </div>
   </div>
    </div>
  )
}

export default OurHistory