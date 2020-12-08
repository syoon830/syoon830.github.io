/* eslint-disable */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/blog-post.tsx`)
  const indexPage = path.resolve(`./src/pages/index.tsx`)

  // 데이터 불러와서!
  const result1 = await graphql(
    `
      {
        allMarkdownRemark {
          nodes {
            id
            fields {
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
        allMarkdownRemark {
          group(field: frontmatter___categories) {
            fieldValue
          }
        }
      }
    `
  )
  const posts = result1.data.allMarkdownRemark.nodes
  const categories = result2.data.allMarkdownRemark.group

  // slug(url)에 맞게 페이지 생성)
  posts.forEach(post => {
    createPage({
      component: postTemplate,
      path: post.fields.slug,
      context: {
        id: post.id,
      },
    })
  })

  categories.forEach(category => {
    createPage({
      path: `/category=${category.fieldValue}`,
      component: indexPage,
      context: {
        category: category.fieldValue,
      },
    })
  })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    // /posts/arrow-function
    const value = createFilePath({ node, getNode })

    // md 파일 명 url (ex. arrow.md -> /arrow
    // const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
