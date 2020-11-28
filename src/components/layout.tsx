import React, { ReactNode } from "react"

import Header from "./header"
import GlobalStyles from "../style/GlobalStyles"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div>{children}</div>
    </>
  )
}

export default Layout
