import React from 'react';
import './Navbar.css'
import { NavItems } from '../../Data/Data'
import { Link } from "react-router-dom";

export default function NavbarItems({ navClass }) {
  
  const links = NavItems.map((el, idx) => {
      return (
        <li key={idx}>
        <Link to={el.path}>{el.title}</Link>           
        </li>
      );
    });
  return (
  <>
    <ul className='ulNav flex-al-c'>
        {links}
    </ul>
  </>
  )

}
