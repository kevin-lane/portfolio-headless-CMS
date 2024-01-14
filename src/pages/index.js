import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"
import { GatsbyImage } from "gatsby-plugin-image"

//react-component
//alla componenter under /src/pages blir automatiskt sidor
//sidans namn = namnet på javascript-filen (dock - index.js = sajtens första sida)
//Index-page (first page) for my portfolio
const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulStartPage {
        title
        presentationText {
          presentationText
        }
        image {
          title
          gatsbyImageData(width: 700, height: 700)
        }
      }
    }
  `)
  console.log(data.contentfulStartPage.image);
  return (
    <Layout>
      <div className='home-blocks'>
        <h1 id="intro-heading">{data.contentfulStartPage.title}</h1>
        <p id="intro-text">{data.contentfulStartPage.presentationText.presentationText}</p>
      </div>
      <div className='home-blocks'>
        <GatsbyImage alt={data.contentfulStartPage.image.title} image={data.contentfulStartPage.image.gatsbyImageData} />
      </div>
    </Layout>
  )
}
//denna konstant sätter titeln på sidan
export const Head = () => <title>Home Page</title>

export default IndexPage;
