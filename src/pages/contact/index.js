import React from 'react';
import Layout from "../../components/layout/layout.js";
import './contact.css';
import LinkedIn from '../../components/Icons/LinkedIn.js';
import GitHub from '../../components/Icons/GitHub.js';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Helmet } from "react-helmet";

export default function Index() {
  const data = useStaticQuery(graphql`
    query{
      allContentfulContactLinks {
        nodes {
          url
        }
      }
    }
  `)
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
            <input type="text" className="form-control" placeholder="First name" />
          </div>
          <div className="col-md-6">
            <input type="text" className="form-control" placeholder="Last name" />
          </div>
          <div className="col-12">
            <input type="text" className="form-control" placeholder="Email" />
          </div>
          <div className="col-12">
            <textarea className="form-control"  rows="3"  placeholder='Message'></textarea>
          </div>
          <div className="d-grid mx-auto">
            <button id='send-button' type="button" className="btn btn-dark btn-lg">Send</button>
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
