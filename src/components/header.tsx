import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";

const Header = () => (
  <SiteHeader>
    <StyledHeaderInner>
      <Link
        to="/"
      >
        Yoon can do it!
      </Link>
    </StyledHeaderInner>
  </SiteHeader>
)

const SiteHeader = styled.header`
  box-shadow: 0 0 5px #333;
  padding: 20px 0;
`

const StyledHeaderInner = styled.div`
  width: 720px;
  margin: 0 auto;
  a {
    display: block;
    text-decoration: none;
    color: #333;
    font-size: 22px;
  }
`


export default Header