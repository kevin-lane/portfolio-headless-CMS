import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

///Content Type Navigation used here
function useNavigation() {
  const { allContentfulNavigation } = useStaticQuery(graphql`
  query {
    allContentfulNavigation(sort: {url: ASC}) {
      edges {
        node {
          pageTitle
          url
          id
        }
        }
      }
    }
  `)
  return allContentfulNavigation.edges
}

export default useNavigation
