import React, { ReactNode } from "react"

import Header from "./header"
import GlobalStyles from "../style/GlobalStyles"
import { StyledWrap, StyledContent } from "../style/Styles"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <StyledWrap>
      <GlobalStyles />
      <StyledContent>
        <Header />
        <div>{children}</div>
      </StyledContent>
    </StyledWrap>
  )
}

export default Layout
