import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import { Helmet } from "react-helmet"
import { ProfileCard } from "../components/ProfileCard/ProfileCard";
import { FeaturedCard } from "../components/Card/FeaturedCard";
import { Link } from 'gatsby';

//react-component
//alla componenter under /src/pages blir automatiskt sidor
//sidans namn = namnet på javascript-filen (dock - index.js = sajtens första sida)
//Index-page (first page) for my portfolio
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulStartPage {
        title
        jobTitle
        image {
          title
          gatsbyImageData(width: 500, height: 500)
        }
      }

      contentfulProject {
        image {
          gatsbyImageData(width: 200, height: 200)
        }
      }

      allContentfulProject {
        edges {
          node {
            title
            description {
              description
            }
            technologies
            gitHub
            liveDemo
            image {
              gatsbyImageData(width: 400, height: 200)
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      {/* Added Helmet for SEO Reasons */}
      <Helmet>
        <title>HOME | Kevin Lane</title>
        <meta name="description" content="Home Page" />
      </Helmet>

      <div className='home-blocks'>
        <div style={{ marginBottom: '2rem', marginTop: '2rem' }} className="left-block">
          <h1 id="intro-heading">{data.contentfulStartPage.title}</h1>
          <ul className="job-titles">
            <li id="job-title">Frontend Developer</li>
            <li id="job-title">Web Developer</li>
            <li id="job-title">UX Designer</li>
          </ul>
        </div>
        <div style={{ marginTop: '7rem' }} className="left-block">
          <h2 id="intro-heading">Featured Projects</h2>
          {data.allContentfulProject.edges.map((project) => {
            return(
              <FeaturedCard image={project.node.image[0].gatsbyImageData} title={project.node.title} />
            )
          })}
        </div>
        <Link style={{ textDecoration: 'none' }} to='/portfolio'><button id='more-projects-btn'>More Projects</button></Link>
      </div>
      <div className='home-blocks'>
        <ProfileCard
          image={data.contentfulStartPage.image.gatsbyImageData}
          name="Kevin Lane"
          location="Stockholm"
        />
      </div>
    </Layout>
  )
}
//denna konstant sätter titeln på sidan
export const Head = () => <title>Home Page</title>

export default IndexPage;
