import React from 'react';
import './ContactLink.css';

function ContactLink(props) {
  return (
    <a id='link-text' href={props.action} target='_blank'>
    <div className='contact-link-card'>
      <p id='icon-holder'>{props.icon}</p>
      <p id='text-holder'>{props.text}</p>
    </div>
    </a>
  )
}

export default ContactLink
