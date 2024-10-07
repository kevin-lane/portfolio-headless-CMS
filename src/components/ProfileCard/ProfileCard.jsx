import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import LinkedIn from '../Icons/LinkedIn';
import GitHub from '../Icons/GitHub';
import GeoLocation from '../Icons/GeoLocation';
import './ProfileCard.css';
import { Link } from 'gatsby';

export const ProfileCard = (props) => {
  return (
    <div className="profile-card">
      {/* <GatsbyImage className='profile-image' alt={props.imageAlt} image={props.image} /> */}
      <img className='profile-image' src="https://images.ctfassets.net/5gsmyf8fyuzq/3CH8HSGsIAqdvBHgdcHmsF/e78713a80607997f71ca7d96701111e8/kevinlanepicture.jpg?w=500&h=500&fl=progressive&q=50&fm=jpg" alt="Girl in a jacket"  />
      <h1 style={{ textAlign: 'center', fontFamily: 'Kite One' }}>{props.name}</h1>
      <span id='location'>
        <GeoLocation />
        <p >{props.location}</p>
      </span>
      <span id='contact-links'>
        <LinkedIn />
        <GitHub />
      </span>
      <Link style={{ textDecoration: 'none' }} to='/contact'><button id='get-in-touch-btn'>Get in touch</button></Link>
    </div>
  )
}
