import React, { useState } from "react"
import NavItems from './NavbarItem'
import './Navbar.css'
import Logo from './../../assets/Logo.png'
import { Link } from 'react-router-dom'


export default function NavBar() {
  // ===================== Hook ============================
  const [open, setOpen] = useState(false)
  // ===================== Handle Functions ================
 
  const Toggle =()=>{
   setOpen(!open);
   console.log(open)
  }
  
  
  return (
    <nav className='navBar flex-bw'>
      <Link to={'/'}>
        <img className='logo' src={Logo}  />
      </Link>
      <div className={`navMainDiv flex-bw ${open === true ? 'toggle' : ''} `}>
       <a className='close-mark' onClick={Toggle}>
         <i className='fa-solid fa-xmark'></i>
       </a>  
        <NavItems navClass={"nav-items"}/>
        <Link to={"/dashboard"}>
           <button className='main-buttons'>Dashboard</button>
        </Link>
      </div>

        <a className='toggle-menu' onClick={Toggle}>
          <i className='fa-solid fa-bars'></i>
        </a>
     
    </nav>
  )
}
