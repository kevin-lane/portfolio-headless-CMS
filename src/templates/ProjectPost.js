import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

// const data = useStaticQuery(graphql`
// query($title: String!) {
//   contentfulCourse(title: {eq: $title}) {
//     title
//     description {
//       description
//     }
//     image {
//       url
//       title
//     }
//   }
//   file(relativePath: {eq: "../images/example.png"}){
//     childImageSharp {
//       fixed(width: 125, height: 125){
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// }
// `)

// export const data = graphql`
//   query($title: String!) {
//     contentfulCourse(title: { eq: $title }) {
//       title
//         image {
//           gatsbyImageData(width: 200)
//         }
//     }
//   }
// `

export const data = graphql`
  query {
    allContentfulCourse {
      edges {
        node {
          image {
            gatsbyImageData(width: 200)
          }
        }
      }
    }
  }
`


const ProjectPost = ({ data }) => {
  console.log(data.allContentfulCourse.edges);

  // const { image, title } = data.contentfulCourse;
  // console.log(image);
  return (
    <Layout>
        <div id='image-container'>
          {
            <div>
            <h2>TEST</h2>
            {/* {data.contentfulCourse.image.map((img) => {
              // const im = getImage(image)
              console.log(img.gatsbyImageData);
              // console.log(img.gatsbyImage.images.sources);
              // console.log(img.gatsbyImage.images.fallback);

              // <GatsbyImage image={getImage(img.gatsbyImage.image)} alt='TEST'/>
               <GatsbyImage  alt="Kevin" image={img.gatsbyImageData}/>
            })} */}

            {data.allContentfulCourse.edges.map(({node}) => (
              <GatsbyImage alt="Kevin" image={node.image[0].gatsbyImageData}/>
            ))}

            </div>
            //If there is no image, render NO otherwise render
            //img tag with reference to Contentful pictures
            // data.contentfulCourse.image === null ? <p>NO</p>:
            // data.contentfulCourse.image.map((image) => {
            //   console.log(image.url);
            //   return(
            //     <div>
            //       <img src={image.url} alt={image.title} width="400px" height="400px"></img>
            //       <Image fixed={data.file.childImageSharp.fixed} />
            //     </div>

            //   )
            // })
          }
        </div>


      {/* <h3>{data.contentfulCourse.title}</h3>
      <p>{data.contentfulCourse.description.description}</p> */}
    </Layout>
  )
}

export default ProjectPost
