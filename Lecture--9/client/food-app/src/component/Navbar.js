import React from 'react'
import Navcss from './Navbar.css'
const Navbar = () => {
  return (
    <nav className={Navcss.nav}>
        <ul>
            <li>Food</li>
            <li>cart</li>
            <li>Profile</li>
            <li>login/logout</li>
        </ul>
    </nav>
  )
}

export default Navbar