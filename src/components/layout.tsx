import React, {ReactNode} from "react"
import { Helmet } from "react-helmet";

import Header from "./header";
import GlobalStyles from "../style/GlobalStyles";
import styled from "styled-components";

type Props = {
  children: ReactNode
}

const StyledContent = styled.section`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
`

const Layout = ({ children }: Props) => {

  return (
    <>
      <GlobalStyles />
      <Header />
      <StyledContent>
        {children}
      </StyledContent>
    </>
  )
}

export default Layout