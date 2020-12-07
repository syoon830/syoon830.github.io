import React from "react"
import { graphql } from "gatsby"
import { PageProps } from "gatsby"
import Layout from "../components/layout"
import { StyledPost } from "../style/Styles"
import Utterances from "../components/utterances"

type DataType = {
  markdownRemark: {
    frontmatter: {
      title: string
      date: string
    }
    html: string
  }
}

const BlogPostTemplate = ({ data }: PageProps<DataType>) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const content = post.html
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
        <Utterances repo="syoon830/syoon830.github.io" />
      </StyledPost>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
      }
    }
  }
`
