import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Hero.css'
import HeroImg from './../../assets/hero.png'
import Apple from './../../assets/apple-icon.png'

function Hero() {
  const [Data, setData] = useState([]);
  useEffect(() => {
   axios.get('https://fakestoreapi.com/products/categories').
   then(res => setData(res.data))
 }, []) 
  return (
    <div className='hero '>
      <div className="container flex">
      <div className='hero-sections'>
       <ul>
       {  
        Data?.map((ele,index)=>{
            return(
            <li key={index}>
              <a href={`/${ele}`}>{ele}</a>
            </li>
              )
        })}
       </ul>
      </div>
      <div className="hero-img">
        <div className="hero-slider flex-al-c">
           <div className="hero-slider-left flex-col">
              <div className="apple-icon flex-al-c">
                <img src={Apple} alt="" />
                <p>iPhone 14 Series</p>
              </div>
              <h1>Up to 10% off Voucher</h1>
              <p>
                Shop Now
              </p>
           </div>
           <img src={HeroImg} alt="hero" className='hero-slider-img' />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero