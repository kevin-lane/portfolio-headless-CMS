import * as React from "react"
import { useEffect } from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout/layout.js"
import Card from "../components/Card/Card.js";
import { Helmet } from "react-helmet";
import Search from "../components/Search/Search.js";
import { useState } from "react";


//sidans namn blir portfolio efter namnet på javascript-filen
const SecondPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filtered, setFiltered] = useState(false);

  //Function that only shows the searched items when user clicks on search button and sets filtered to true
  function handleSearch(event){
    setFilteredItems(allItems.filter((edge) => {
      return edge.node.title.toLowerCase().includes(searchQuery);
    }));
    setFiltered(true);
  }

  const data = useStaticQuery(graphql`
    query {
  allContentfulCourse {
    edges {
      node {
        title
        description {
          description
        }
        category
        image {
          gatsbyImageData(width: 400, height: 200)
        }
      }
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
        category
        image {
          gatsbyImageData(width: 400, height: 200)
        }
      }
    }
  }
    }
  `)

  //Populating all the items on render using hook useEffect
  useEffect(() => {
    setAllItems([...data.allContentfulProject.edges, ...data.allContentfulCourse.edges]);
  }, [])

  return (
    <Layout>
      <Helmet>
        <title>PORTFOLIO | Kevin Lane</title>
        <meta name="description" content="Portfolio Page" />
      </Helmet>

      {/* Search bar to search thorugh Portfolio Items(VG) */}
      <Search
        placeholder="Search"
        changeQuery={(e) => setSearchQuery(e.target.value)}
        searchClick={handleSearch}
      />

      <ul>
        {/* Search function that filters through the array and only show what string is typed in search field (VG) */}
        {filtered ?
          filteredItems.map((edge) => {
            return (
              <Link to={`/portfolio/${edge.node.title}`}>
                <Card
                  //Have done short-if to handle items with no images
                  image={edge.node.image === null ? "" : edge.node.image[0].gatsbyImageData}
                  title={edge.node.title}
                  description={edge.node.description.description}
                  category={edge.node.category[0]}
                />
              </Link>
            )
          })
          :
          allItems.map((edge) => {
            return(
              <Link to={`/portfolio/${edge.node.title}`}>
                <Card
                  //Have done short-if to handle items with no images
                  image={edge.node.image === null ? "" : edge.node.image[0].gatsbyImageData}
                  title={edge.node.title}
                  description={edge.node.description.description}
                  category={edge.node.category[0]}
                />
              </Link>
            )
          })
        }
      </ul>
    </Layout>
  )
}

export const Head = () => <title>Portfolio Page</title>

export default SecondPage
