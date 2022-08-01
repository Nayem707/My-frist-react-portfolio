import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './navbar.css';


const Navbar = () => {
  return (
    <nav className='navbar-main'>
        <ul>
          <li>
            <Link to="/" className='nav-item'>Home</Link>
          </li>
          <li>
            <Link to="/about" className='nav-item'>About</Link>
          </li>
          <li>
            <Link to="/contact" className='nav-item'>Contact</Link>
          </li>
        </ul>
        <Outlet />
    </nav>
  )
}

export default Navbar