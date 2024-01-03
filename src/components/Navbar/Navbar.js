import { Link } from 'gatsby'
import React from 'react'
import './Navbar.css';


export default function Navbar() {
  return (
    <nav>
      <div className='links'>
        <Link className='nav-links' to='/'>Home</Link>
        <Link className='nav-links' to='/about'>About</Link>
        <Link className='nav-links' to='/portfolio'>Portfolio</Link>
        <Link className='nav-links' to='/contact'>Contact</Link>

      </div>
    </nav>
  )
}
