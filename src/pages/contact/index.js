import React from 'react';
import Layout from "../../components/layout/layout.js";
import './contact.css';
import LinkedIn from '../../components/Icons/LinkedIn.js';
import GitHub from '../../components/Icons/GitHub.js';
import { Link, graphql, useStaticQuery } from 'gatsby'



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
  console.log(data.allContentfulContactLinks.nodes[0].url);
  return (
    <Layout>

      <div className='contact-blocks' id='contact-form'>
        <h3>Contact Me</h3>
        <form>
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="First name" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" />
            </div>
          </div>
          <div class="row">
            <input type="text" class="form-control" placeholder="Email" />
          </div>
          <div class="row">
            <textarea class="form-control"  rows="3"  placeholder='Message'></textarea>
          </div>
          <div class="row">
            <button id='send-button' type="button" class="btn btn-dark">Send</button>
          </div>
        </form>
      </div>

      <div className='contact-blocks' id='connect-with-me'>
        <h3>Connect with me</h3>
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
