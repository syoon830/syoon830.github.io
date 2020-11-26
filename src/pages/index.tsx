import React from "react"
import { Link, graphql } from "gatsby"
import { PageProps } from "gatsby"
import Layout from "../components/layout";
import styled from "styled-components";

type DataType = {
  allMarkdownRemark: {
    nodes: {
      excerpt: string;
      fields: {
        slug: string;
      };
      frontmatter: {
        date: string;
        title: string;
      }
    }[]
  }
}

const Index = ({ data }: PageProps<DataType>) => {
  const posts = data.allMarkdownRemark.nodes
 return (
   <Layout>
     <List>
       {posts.map(post => (
         <ListItem key={post.fields.slug}>
           <Link to={post.fields.slug} itemProp="url">
             <Title>{post.frontmatter.title}</Title>
             <Date>{post.frontmatter.date}</Date>
           </Link>
         </ListItem>
       ))}
     </List>
   </Layout>
 )
}

export default Index;



const List = styled.ul`
  
`
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

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
        }
      }
    }
  }
`