import React, { useState } from 'react'
import './Navbar.css';
import Hamburger from '../Icons/Hamburger';
import NavbarMobileOpen from './NavbarMobileOpen';
import Close from '../Icons/Close';

export default function NavbarMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  /* If statement to open navigation menu when clicking on hamburger bar and
  close when clicking on X when open*/
  if (openMenu === true) {
    document.getElementById('links-mobile').style.visibility = 'visible';
  }
  else {
    if (document.getElementById('links-mobile') !== null) {
      document.getElementById('links-mobile').style.visibility = 'hidden';
    }
  }

  //Short-if used to toggle between Hamburger icon and X icon depending on state
  return (
    <nav>
      <div id='nav-container-mobile'>
        <button id='mobile-menu' type='button' onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <Close /> : <Hamburger />}
        </button>
      </div>
      <NavbarMobileOpen />
    </nav>
  )
}
