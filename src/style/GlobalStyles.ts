import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalStyles = createGlobalStyle`
  ${reset}
  body {
    overflow-y: scroll;
    background-color: #f5f5f5;
  }
  body, .markdown-body {
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
    color: #333;
    text-decoration: none;
  }
`

export default GlobalStyles
