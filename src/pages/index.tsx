import React from "react"
import { Link, graphql } from "gatsby"
import { PageProps } from "gatsby"
import Layout from "../components/layout"

type DataType = {
  allContentfulBlogPost: {
    edges: {
      node: {
        title: string
        slug: string
        publishedDate: string
      }
    }[]
  }
}

const Index = ({ data }: PageProps<DataType>) => {
  const posts = data.allContentfulBlogPost.edges
  return (
    <Layout>
      <ul>
        {posts.map(post => (
          <li key={post.node.slug}>
            <Link to={post.node.slug} itemProp="url">
              <span>{post.node.title}</span>
              <span>{post.node.publishedDate}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          publishedDate(formatString: "YYYY.MM.DD")
          slug
        }
      }
    }
  }
`
