import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"

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
    <div>
      <div>
        <Helmet />
        <Link to="/">{data.site.siteMetadata.title}</Link>
      </div>
    </div>
  )
}

export default Header
