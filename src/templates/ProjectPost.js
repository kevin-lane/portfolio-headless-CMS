import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'

export const data = graphql`
query($title: String!) {
  contentfulCourse(title: {eq: $title}) {
    title
    description {
      description
    }
  }
}
`

const ProjectPost = ({ data }) => {
  console.log(data.contentfulCourse);
  return (
    <Layout>
      <h3>{data.contentfulCourse.title}</h3>
      <p>{data.contentfulCourse.description.description}</p>
    </Layout>
  )
}

export default ProjectPost
