import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import { SiteHeader, SiteHeaderInner } from './styled';
import {Helmet} from "react-helmet";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
  `);

  return (
    <SiteHeader>
      <SiteHeaderInner>
        <Helmet />
        <Link
          to="/"
        >
          {data.site.siteMetadata.title}
        </Link>
      </SiteHeaderInner>
    </SiteHeader>
  )
}

export default Header
