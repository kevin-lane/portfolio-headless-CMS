import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'
import './ProjectPost.css'

export const data = graphql`
  query($title: String!) {
    contentfulCourse(title: { eq: $title }) {
      title
      description {
        description
      }
      image {
         gatsbyImageData(width: 1200, height: 1200)
      }
    }

    allContentfulCourse {
      edges {
        node {
          image {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
`

const ProjectPost = ({ data }) => {
  console.log(data.allContentfulCourse.edges);
  console.log(data.contentfulCourse);
  return (
    <Layout>
      {/* Added Helmet for SEO Reasons */}
      <Helmet>
        <title>{data.contentfulCourse.title} | Kevin Lane</title>
        <meta name="description" content="Project Page" />
      </Helmet>
          {
            <div>
              <div id='info-container' className='post-blocks'>
                <h2 id='info-heading'>{data.contentfulCourse.title}</h2>

                <p id='info-text'>{data.contentfulCourse.description.description}</p>
              </div>

              <div id='image-container' className='post-blocks'>
                <div>
                  {data.contentfulCourse.image.map((img) => {
                      console.log(img.gatsbyImageData);
                      console.log(img);
                      return(
                        <GatsbyImage id='project-images' alt="Kevin" image={img.gatsbyImageData}/>
                      )
                    })}
                  </div>
              </div>
            </div>
          }
    </Layout>
  )
}

export default ProjectPost
