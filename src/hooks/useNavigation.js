import { graphql, useStaticQuery } from 'gatsby'

///Content Type Navigation used here for this hook
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
