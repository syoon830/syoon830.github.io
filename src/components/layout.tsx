import * as React from 'react';

import Header from './header';
import GlobalStyles from '../style/GlobalStyles';
import { StyledWrap, StyledContent } from '../style/Styles';

type Props = {
  children: JSX.Element;
};

const Layout: React.FC<Props> = ({ children }: Props) => (
  <StyledWrap>
    <GlobalStyles />
    <StyledContent>
      <Header />
      <div>{children}</div>
    </StyledContent>
  </StyledWrap>
);

export default Layout;
