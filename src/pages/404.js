import * as React from "react"
import Layout from "../components/layout/layout.js"
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Search from "../components/Search/Search.js";

//i dev mode overridas denna sida av en inbyggd 404-sida
//Used the bootstrap class "row"
const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404 - Page not found | Kevin Lane</title>
      <meta name="description" content="About Page" />
    </Helmet>
    <div class="row">
      <Search placeholder="Check out my work" />
    </div>
    <div class="row">
      <h1 style={{textAlign: 'center'}}>Sorry, this page does not exist!</h1>
    </div>
    <div class="row">
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
      </svg>
    </div>

    <div id="btn-container" class="row">
      <div id="btn-holder">
        <Link to='/'>
          <button type="button" class="btn btn-dark">Please take me home!</button>
        </Link>
      </div>

    </div>

  </Layout>
)

export const Head = () => <title>Portfolio Page</title>

export default NotFoundPage
