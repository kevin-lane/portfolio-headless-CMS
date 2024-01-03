import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout/layout";
import './about.css';


export default function Index() {
  //Using Content Type called About
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        title
        description {
          description
        }
        image {
          url
        }
      }
      contentfulSkills {
        title
        skills
      }
    }
  `)

  return (
    <div>
      <Layout>
        <div className='about-blocks'>
          <h3>{data.contentfulAbout.title}</h3>
          <div>
            {data.contentfulAbout.description.description}
          </div>
        </div>

        <div className='about-blocks'>
          <h3>{data.contentfulSkills.title}</h3>
            <ul id='skill-list'>
              {data.contentfulSkills.skills.map((skill) => {
                console.log(data.contentfulAbout.image);
                return(
                  <li>{skill}</li>
                )
              })}
            </ul>
        </div>

        <div>
            {data.contentfulAbout.image.map((image) => {
              console.log(image.url);
              return(
                <img src={image.url} alt="" height="200px" width="200px" />
              )
            })}
        </div>
      </Layout>
    </div>
  )
}
