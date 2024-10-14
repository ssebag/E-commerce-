import React from 'react'
import Logo from './../../assets/Logo.png'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-up'>
      <div className="footer-col flex-col">
          <p className='footer-title'>Exclusive</p>
          <p className='footer-details'>Subscribe</p>
          <p className='footer-details'>Get 10% off your first order</p>
          <input type="email" name="email" id="email" placeholder='enter your email' />
       </div>
       <div className="footer-col flex-col">
          <p className='footer-title'>Support</p>
          <p className='footer-details'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
          <p className='footer-details'>exclusive@gmail.com</p>
          <p className='footer-details'>+88015-88888-9999</p>
       </div>
       <div className="footer-col flex-col">
       <p className='footer-title'>Account</p>
          <p className='footer-details'>My Account</p>
          <p className='footer-details'>Login / Register</p>
          <p className='footer-details'>Cart</p>
          <p className='footer-details'>Wishlist</p>
          <p className='footer-details'>Shop</p>
       </div>
       <div className="footer-col flex-col">
       <p className='footer-title'>Quick Link</p>
          <p className='footer-details'>Privacy Policy</p>
          <p className='footer-details'>Terms Of Use</p>
          <p className='footer-details'>FAQ</p>
          <p className='footer-details'>Contact</p>
       </div>
      </div>
      <hr />
       <div className="footer-down">
            <p className="">Ⓒ Copyright Rimel 2022. All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer