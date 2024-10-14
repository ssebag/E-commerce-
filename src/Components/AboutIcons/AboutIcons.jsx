import React from 'react'
import './AboutIcons.css'
import Card from './../CardCategory/CardCategory'
import About1 from './../../assets/about-icon1.png'
import About3 from './../../assets/about-icon3.png'
import About4 from './../../assets/about-icon4.png'


function AboutIcons() {
  return (
    <div className='aboutIcons'>
      <div className="container">
        <Card img={About1} title="10.5k" description="Sallers active our site" />
        <Card img={About3} title="45.5k" description="Customer active in our site" />
        <Card img={About4} title="25k" description="Anual gross sale in our site" />
      </div>   
    </div>
  )
}

export default AboutIcons