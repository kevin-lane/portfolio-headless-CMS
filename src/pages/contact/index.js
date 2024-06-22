import React, { useState } from 'react';
import Layout from "../../components/layout/layout.js";
import './contact.css';
import LinkedIn from '../../components/Icons/LinkedIn.js';
import GitHub from '../../components/Icons/GitHub.js';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Helmet } from "react-helmet";
import * as contentful from 'contentful-management';

export default function Index() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const data = useStaticQuery(graphql`
    query{
      allContentfulContactLinks {
        nodes {
          url
        }
      }
    }
  `);
  console.log(data);
  const handleFirstName = (event) => setFirstName(event.target.value);
  const handleLastName = (event) => setLastName(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);
  const handleMessage = (event) => setMessage(event.target.value);

  async function submitMessage(){
    alert("Message sent!");

    let client = contentful.createClient({
      accessToken: process.env.CONTENTFUL_ACCESS_CMA_TOKEN
    });

    client.getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT || 'master'))
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

      <div className='contact-blocks' id='contact-form'>
        <h3 className='contact-headings'>Contact Me</h3>
        <form className="row g-3">
          <div className="col-md-6">
            <input type="text" className="form-control" onChange={handleFirstName} placeholder="First name" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" onChange={handleLastName} placeholder="Last name" />
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

      <div className='contact-blocks' id='connect-with-me'>
        <h3 className='contact-headings'>Connect with me</h3>
        <div id='connection-links'>
          <Link to={data.allContentfulContactLinks.nodes[1].url}>
            <LinkedIn />
          </Link>
          <Link to={data.allContentfulContactLinks.nodes[0].url}>
            <GitHub />
          </Link>
        </div>
      </div>
    </Layout>
  )
}
