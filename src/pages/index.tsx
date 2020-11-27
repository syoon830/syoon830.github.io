import React from "react"
import {Link, graphql} from "gatsby"
import {PageProps} from "gatsby"
import Layout from "../components/layout";
import {List, ListItem, Title, Date} from "./styled";

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