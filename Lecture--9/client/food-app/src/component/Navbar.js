import React from 'react'

import navbar from './Navbar.module.css';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={navbar.nav1}>
        <ul className={navbar.ul1}> 
         <li><Link to='/food'>Food</Link></li> 
         <li><Link to='/profile'>Profile</Link></li> 
         <li><Link to='/login'>login/logout</Link></li> 
        </ul>
    </nav>
  )
}

export default Navbar