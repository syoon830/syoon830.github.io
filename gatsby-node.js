const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.tsx`)
  const indexPage = path.resolve(`./src/pages/index.tsx`)

  const result1 = await graphql(
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

  const result2 = await graphql(
    `
      {
        allContentfulBlogPost {
          group(field: categories) {
            fieldValue
          }
        }
      }
    `
  )
  const posts = result1.data.allContentfulBlogPost.edges
  const categories = result2.data.allContentfulBlogPost.group

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

  if (categories.length > 0) {
    categories.forEach(category => {
      createPage({
        path: `/category=${category.fieldValue}`,
        component: indexPage,
        context: {
          categories: category.fieldValue,
        },
      })
    })
  }
}
