import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";


import Layout from "../components/layout/layout.js"
import Card from "../components/Card/Card.js";

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
              url
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <h1>Portfolio Page</h1>
      <ul>
        {data.allContentfulCourse.edges.map((edge) => {
          console.log(edge.node.image === null ? "" : edge.node.image[0].url);
          console.log(edge.node.title);

          return (
            <Link to={`/portfolio/${edge.node.title}`}>
              <Card
                //Have done short-if to handle items with no images
                image={edge.node.image === null ? "" : edge.node.image[0].url}
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
