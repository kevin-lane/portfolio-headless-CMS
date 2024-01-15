import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout/layout.js"
import Card from "../components/Card/Card.js";
import { Helmet } from "react-helmet";

//sidans namn blir portfolio efter namnet på javascript-filen
const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulCourse {
        edges {
          node {
            title
            description {
              description
            }
            image {
              gatsbyImageData(width: 400, height: 200)
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Helmet>
        <title>PORTFOLIO | Kevin Lane</title>
        <meta name="description" content="Portfolio Page" />
      </Helmet>
      <ul>
        {data.allContentfulCourse.edges.map((edge) => {
          console.log(edge.node.image[0].gatsbyImageData);
          return (
            <Link to={`/portfolio/${edge.node.title}`}>
              <Card
                //Have done short-if to handle items with no images
                image={edge.node.image === null ? "" : edge.node.image[0].gatsbyImageData}
                title={edge.node.title}
                description={edge.node.description.description}
              />
            </Link>
          )
        })}
      </ul>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
