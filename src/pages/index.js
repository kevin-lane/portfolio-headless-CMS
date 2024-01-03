import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout/layout"


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
          url
        }
      }
    }
  `)
  return (
    <Layout>

      <div className='home-blocks'>
        <h1>{data.contentfulStartPage.title}</h1>
        {data.contentfulStartPage.presentationText.presentationText}
      </div>
      <div className='home-blocks'>
        <img id="start-page-img" src={data.contentfulStartPage.image.url} alt="Test pic" width="613px" height="613px" />
      </div>

    </Layout>
  )
}
//denna konstant sätter titeln på sidan
export const Head = () => <title>Home Page</title>

export default IndexPage;
