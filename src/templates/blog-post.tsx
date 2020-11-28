import React from "react"
import { graphql } from "gatsby"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import { StyledPost } from "../style/Styles"

type DataType = {
  contentfulBlogPost: {
    publishedDate: string
    title: string
    body: {
      childMarkdownRemark: {
        html: string
      }
    }
  }
}

const BlogPostTemplate = ({ data }: PageProps<DataType>) => {
  const post = data.contentfulBlogPost
  const title = post.title
  const date = post.publishedDate
  const content = post.body.childMarkdownRemark.html
  return (
    <Layout>
      <StyledPost>
        <div className="post-header">
          <div className="title">{title}</div>
          <div className="date">{date}</div>
        </div>
        <div className="markdown-body">
          <section
            dangerouslySetInnerHTML={{ __html: content }}
            itemProp="articleBody"
          />
        </div>
      </StyledPost>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "YYYY.MM.DD")
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
