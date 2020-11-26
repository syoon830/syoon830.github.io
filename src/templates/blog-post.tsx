import React from "react"
import { graphql } from "gatsby"
import { PageProps } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

type DataType = {
  markdownRemark: {
    excerpt: string;
    html: string;
    frontmatter: {
      date: string;
      title: string;
    }
  }
}

const StyledPostWrap = styled.div`
  padding: 20px;
`

const StyledPostHeader = styled.div`
  margin-bottom: 20px;
`

const StyledPostHeaderTitle = styled.span`
  display: block;
  font-size: 26px;
  padding-bottom: 10px;
`
const StyledPostHeaderDate = styled.span`
  display: block;
  text-align: right;
`

const BlogPostTemplate = ({ data }: PageProps<DataType>) => {
  const post = data.markdownRemark;
  const title = post.frontmatter.title
  const date = post.frontmatter.date;
  return (
    <Layout>
      <StyledPostWrap>
        <StyledPostHeader>
          <StyledPostHeaderTitle>{title}</StyledPostHeaderTitle>
          <StyledPostHeaderDate>{date}</StyledPostHeaderDate>
        </StyledPostHeader>
        <div className="markdown-body">
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </div>
      </StyledPostWrap>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`