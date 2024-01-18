import React from 'react';
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import './about.css';
import { Helmet } from "react-helmet"

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
          gatsbyImageData(width: 1200, height: 800, layout: CONSTRAINED)
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
        {/* Added Helmet for SEO Reasons */}
      <Helmet>
        <title>ABOUT | Kevin Lane</title>
        <meta name="description" content="About Page" />
      </Helmet>
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
                return(
                  <li>{skill}</li>
                )
              })}
            </ul>
        </div>
        <div>
          {data.contentfulAbout.image.map((image) => {
            return(
              <GatsbyImage class='img-holder' layout="constrained" alt="test" image={image.gatsbyImageData} />
            )
          })}
        </div>
      </Layout>
    </div>
  )
}
