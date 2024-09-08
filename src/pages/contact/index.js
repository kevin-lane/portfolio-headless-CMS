import React, { useState } from 'react';
import Layout from "../../components/layout/layout.js";
import './contact.css';
import LinkedIn from '../../components/Icons/LinkedIn.js';
import GitHub from '../../components/Icons/GitHub.js';
import { Helmet } from "react-helmet";
import * as contentful from 'contentful-management';
import ContactLink from '../../components/ContactLink/ContactLink.jsx';
import Telephone from '../../components/Icons/Telephone.js';
import EmailIcon from '../../components/Icons/EmailIcon.js';

export default function Index() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFirstName = (event) => setFirstName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleMessage = (event) => setMessage(event.target.value);

  async function submitMessage(){
    alert("Message sent!");
    let client = contentful.createClient({
      accessToken: process.env.CONTENTFUL_ACCESS_CMA_TOKEN || process.env.REACT_APP_CONTENTFUL_ACCESS_CMA_TOKEN
    });

    client.getSpace(process.env.CONTENTFUL_SPACE_ID || process.env.REACT_APP_CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT || process.env.REACT_APP_CONTENTFUL_ENVIRONMENT || 'master'))
    .then((environment) => environment.createEntry('message', {
      fields: {
        email: {
            "en-US": email
        },
        firstName: {
            "en-US": firstName
        },
        lastName: {
            "en-US": lastName
        },
        message: {
            "en-US": message
        }
    }
    }))
    .then((entry) => console.log(entry))
    .catch(console.error)

  };
  return (
    <Layout>
      {/* Added Helmet for SEO Reasons */}
      <Helmet>
        <title>CONTACT | Kevin Lane</title>
        <meta name="description" content="Contact Page" />
      </Helmet>

      <div className='contact-page'>
        <div className='contact-blocks' id='contact-form'>
          <h3 className='contact-headings'>Contact Me</h3>
          <form className="row g-3">
            <div className="col-12">
              <input type="text" className="form-control" onChange={handleFirstName} placeholder="Name" />
            </div>
            <div className="col-12">
              <input type="text" className="form-control" onChange={handleEmail} placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea className="form-control"  rows="5" onChange={handleMessage}  placeholder='Message'></textarea>
            </div>
            <div className="d-grid mx-auto">
              <button id='send-button' type="button" onClick={submitMessage} className="btn btn-dark btn-lg">Send</button>
            </div>
          </form>
        </div>

        <div className='contact-blocks' id='connect-buttons'>
          <ContactLink icon={<Telephone />} text="+46 73 907 64 61" action="tel:+46739076461" />
          <ContactLink icon={<EmailIcon />} text="kevinlane3@hotmail.com" action="mailto:kevinlane3@hotmail.com" />
          <ContactLink icon={<LinkedIn />} text="LinkedIn" action="https://www.linkedin.com/in/kevin-lane-884950a7/" />
          <ContactLink icon={<GitHub />} text="GitHub" action="https://github.com/kevin-lane" />
        </div>
      </div>
    </Layout>
  )
}
