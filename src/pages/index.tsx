import * as React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StyledPost, StyledPostListWrap } from '../style/Styles';
import SEO from '../components/seo';

type DataType = {
  allMarkdownRemark: {
    edges: {
      node: {
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          date: string;
        };
      };
    }[];
  };
};

const Index = ({ data }: PageProps<DataType>): React.ReactNode => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <StyledPostListWrap>
        <SEO title="Home" />
        {posts.map((post) => (
          <li key={post.node.fields.slug}>
            <Link to={`${post.node.fields.slug}`} itemProp="url">
              <span className="title">{post.node.frontmatter.title}</span>
              <span className="date">{post.node.frontmatter.date}</span>
            </Link>
          </li>
        ))}
      </StyledPostListWrap>
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query($category: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      edges {
        node {
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
  }
`;
