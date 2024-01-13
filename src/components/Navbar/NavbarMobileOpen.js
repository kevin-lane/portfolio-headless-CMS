import React from 'react'
import { Link } from 'gatsby'

export default function NavbarMobileOpen() {
  return (
    <div id='links-mobile'>
      <ul id='nav-list'>
        <li><Link className='nav-links' to='/'>Home</Link></li>
        <li><Link className='nav-links' to='/about'>About</Link></li>
        <li><Link className='nav-links' to='/portfolio'>Portfolio</Link></li>
        <li><Link className='nav-links' to='/contact'>Contact</Link></li>
      </ul>

    </div>
  )
}
