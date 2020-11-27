import React from "react"
import {Link, graphql} from "gatsby"
import {PageProps} from "gatsby"
import Layout from "../components/layout";
import styled from "styled-components";

type DataType = {
  allContentfulBlogPost: {
    edges: {
      node: {
        title: string;
        slug: string;
        publishedDate: string;
      }
    }[]
  }
}

const Index = ({data}: PageProps<DataType>) => {
  const posts = data.allContentfulBlogPost.edges;
  return (
    <Layout>
      <List>
        {posts.map(post => (
          <ListItem key={post.node.slug}>
            <Link to={post.node.slug} itemProp="url">
              <Title>{post.node.title}</Title>
              <Date>{post.node.publishedDate}</Date>
            </Link>
          </ListItem>
        ))}
      </List>
    </Layout>
  )
}

export default Index;

export const pageQuery = graphql`
    query {
        allContentfulBlogPost {
            edges{
                node{
                    title
                    publishedDate(formatString: "YYYY.MM.DD")
                    slug
                }
            }
        }
    }
`



const List = styled.ul``
const ListItem = styled.li`
  a {
    display: block;
    text-decoration: none;
    color: #333;
    padding: 20px;
    border-bottom: 1px solid #d6d6d6;
  }
`
const Title = styled.span`
  display: block;
  font-size: 22px;
  padding-bottom: 10px;
`
const Date = styled.span`
  display: block;
  font-size: 16px;
  text-align: right;
`