import { Link } from 'gatsby'
import React from 'react'
import './Navbar.css';
import useNavigation from '../../hooks/useNavigation';
export default function Navbar() {
  const topNav = useNavigation();
  return(
    <nav>
        <ul className='nav-list'>
          {topNav.filter(nav => nav.node.url !== "/404").map(nav => {
            return(
              <li key={nav.node.id} className='nav-list-item'>
               <Link className='nav-links' to={nav.node.url}>{nav.node.pageTitle}</Link>
              </li>
            )
          })}
        </ul>
    </nav>
  )
}
