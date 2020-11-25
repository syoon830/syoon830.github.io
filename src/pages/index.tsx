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
        description: string;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
    color: #333;
    font-size: 24px;
    padding: 20px 0;
  }
`

const Title = styled.span``

const Date = styled.span`
  font-size: 18px;
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
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`