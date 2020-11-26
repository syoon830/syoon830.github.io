import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import { SiteHeader, SiteHeaderInner } from './styled';

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
