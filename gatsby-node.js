const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  const posts = result.data.allContentfulBlogPost.edges

  if (posts.length > 0) {
    posts.forEach(edge => {
      createPage({
        component: blogPost,
        path: edge.node.slug,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  }
}
