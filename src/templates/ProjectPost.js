import React, { useRef } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import { GatsbyImage } from "gatsby-plugin-image"
import { Helmet } from 'react-helmet'
import './ProjectPost.css';
import { Link } from 'gatsby';


export const data = graphql`
  query($title: String!) {
    contentfulCourse(title: { eq: $title }) {
      title
      description {
        description
      }
      image {
         gatsbyImageData(width: 600, height: 500)
      }
    }

    contentfulProject(title: {eq: $title}) {
      title
      description {
        description
      }
      image {
        gatsbyImageData(width: 600, height: 500)
      }
      gitHub
      liveDemo
      technologies
    }
  }
`
const ProjectPost = ({ data }) => {
  const project = useRef(data.contentfulProject);
  const course = useRef(data.contentfulCourse);


  return (
    <Layout>
      {/* Added Helmet for SEO Reasons */}
      <Helmet>
        <title>{project.current !== null ? project.current.title : course.current.title} | Kevin Lane</title>
        <meta name="description" content="Project Page" />
      </Helmet>
        <div id='project-post'>
          <div id='image-container' className='post-blocks'>
              {project.current !== null ? project.current.image.map((img) => {
                return(
                  <GatsbyImage id='project-images' alt="Kevin" image={img.gatsbyImageData} />
                )
              })
              :
              course.current.image.map((img) => {
                return(
                  <GatsbyImage id='project-images' alt="Kevin" image={img.gatsbyImageData} />
                )
              })}
            <h2 className='left-texts' id='info-heading'>{project.current !== null ? project.current.title : course.current.title}</h2>
            <p className='left-texts' id='info-text'>{project.current !== null ? project.current.description.description : course.current.description.description}</p>
          </div>

          <div id='info-container' className='post-blocks'>
            {/* This section will only be shown when the category is a project */}
            {project.current !== null &&
            <>
              <div id='project-btns' className='right-section'>
                <Link style={{ textDecoration: 'none' }} to={project.current.liveDemo}><button id='live-btn'>Live</button></Link>
                <Link style={{ textDecoration: 'none' }} to={project.current.gitHub}><button id='github-btn'>GitHub</button></Link>
              </div>
              <div id='tech-cards' className='right-section'>
                <h3 id='tech-heading'>Technologies used</h3>
                <ul id='tech-card-items'>
                {project.current !== null && project.current.technologies.map((tech)=> {
                  return <li id='technology-card'>{tech}</li>
                })}
                </ul>
              </div>
            </>
            }
          </div>
        </div>
    </Layout>
  )
}

export default ProjectPost
