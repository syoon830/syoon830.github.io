import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import { StyledHeader } from "../style/Styles"
import Categories from "./categories"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledHeader>
      <Helmet />
      <h1>
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </h1>
      {/*<Categories />*/}
    </StyledHeader>
  )
}

export default Header
