import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
import { StyledHeader } from "../style/Styles"

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
      <Link to="/">{data.site.siteMetadata.title}</Link>
    </StyledHeader>
  )
}

export default Header
