/**
 * This file handles redirects to page for an individual post
 * when clicking on a post in Portfolio page
 */
exports.createPages = async ({ graphql, actions: { createPage }}) => {
  const results  = await graphql(`
    {
      allContentfulCourse {
      nodes {
        title
      }
    }
        allContentfulProject {
    nodes {
      title
    }
  }
  }
  `
  )
  if (results.errors) {
    console.log(results.errors);
    return
  }
  results.data.allContentfulCourse.nodes.forEach(node => {
    createPage({
      path: `/portfolio/${node.title}`,
      component: require.resolve("./src/templates/ProjectPost.js"),
      context: {
        title: node.title
      }
    })
  });
  results.data.allContentfulProject.nodes.forEach(node => {
    createPage({
      path: `/portfolio/${node.title}`,
      component: require.resolve("./src/templates/ProjectPost.js"),
      context: {
        title: node.title
      }
    })
  });
}
