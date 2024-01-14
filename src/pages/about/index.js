import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout/layout";
import { GatsbyImage } from "gatsby-plugin-image";
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
          gatsbyImageData(width: 300, height: 300)
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
          <h3 className='about-headings'>{data.contentfulAbout.title}</h3>
          <div>
            <p className='about-text'>{data.contentfulAbout.description.description}</p>
          </div>
        </div>

        <div className='about-blocks'>
          <h3 className='about-headings'>{data.contentfulSkills.title}</h3>
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
              return(
                <GatsbyImage alt="test" image={image.gatsbyImageData} />
              )
            })}
        </div>
      </Layout>
    </div>
  )
}
