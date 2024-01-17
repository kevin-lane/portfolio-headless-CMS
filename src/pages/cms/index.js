import React from 'react';
import { graphql, useStaticQuery } from "gatsby";




export default function Index() {

  const data = useStaticQuery(graphql`
  query {
    allContentfulCmsTechnologies {
      edges {
        node {
          title
          description {
            description
          }
          category
        }
      }
    }
  }
  `)

  return (
    <div>
      <ul>
      {data.allContentfulCmsTechnologies.edges.map(({node}) => {
        console.log(node.title);
        return(
          <li>{node.title}</li>
        )
      })}
      </ul>
    </div>
  )
}
