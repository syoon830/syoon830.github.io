import styled from "styled-components";

const SiteHeader = styled.header`
  box-shadow: 0 0 5px #333;
  padding: 20px 0;
  font-weight: 700;
`

const SiteHeaderInner = styled.div`
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  a {
    display: block;
    text-decoration: none;
    color: #333;
    font-size: 22px;
  }
`


const Content = styled.section`
  max-width: 720px;
  width: 100%;
  margin: 30px auto;
`

export {
  SiteHeader,
  SiteHeaderInner,
  Content,
}
