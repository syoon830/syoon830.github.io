import React from "react"
import { graphql } from "gatsby"
import { PageProps } from "gatsby";
import Layout from "../components/layout";
import {StyledPostHeader, StyledPostHeaderDate, StyledPostHeaderTitle, StyledPostWrap} from "./styled";

type DataType = {
  contentfulBlogPost: {
    publishedDate: string;
    title: string;
    body: {
      childMarkdownRemark: {
        html: string;
      }
    }
  }
}

const BlogPostTemplate = ({ data }: PageProps<DataType>) => {
  const post = data.contentfulBlogPost;
  const title = post.title
  const date = post.publishedDate;
  const content = post.body.childMarkdownRemark.html;
  return (
    <Layout>
      <StyledPostWrap>
        <StyledPostHeader>
          <StyledPostHeaderTitle>{title}</StyledPostHeaderTitle>
          <StyledPostHeaderDate>{date}</StyledPostHeaderDate>
        </StyledPostHeader>
        <div className="markdown-body">
          <section
            dangerouslySetInnerHTML={{ __html: content }}
            itemProp="articleBody"
          />
        </div>
      </StyledPostWrap>
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