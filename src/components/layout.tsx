import React, {ReactNode} from "react"

import Header from "./header";
import GlobalStyles from "../style/GlobalStyles";
import { Content } from './styled';

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {

  return (
    <>
      <GlobalStyles />
      <Header />
      <Content>
        {children}
      </Content>
    </>
  )
}

export default Layout