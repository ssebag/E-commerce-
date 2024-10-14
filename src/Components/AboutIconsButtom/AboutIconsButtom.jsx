import React from 'react'
import './../AboutIcons/AboutIcons.css'
import Card from '../CardCategory/CardCategory'
import About1 from './../../assets/about-icon-buttom1.png'
import About2 from './../../assets/about-icon-buttom2.png'
import About3 from './../../assets/about-icon-buttom3.png'


function AboutIconsButtom() {
  return (
    <div className='aboutIcons'>
      <div className="container">
        <Card img={About1} title="10.5k" description="Sallers active our site" />
        <Card img={About2} title="45.5k" description="Customer active in our site" />
        <Card img={About3} title="25k" description="Anual gross sale in our site" />
      </div>   
    </div>
  )
}

export default AboutIconsButtom