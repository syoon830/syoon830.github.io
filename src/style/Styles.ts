import styled from "styled-components"

const StyledWrap = styled.div`
  width: 980px;
  max-width: 100%;
  background-color: #fff;
  margin: 0 auto;
`

const StyledContent = styled.div`
  padding: 0 40px;
  @media only screen and (max-width: 720px) {
    padding: 0 20px;
  }
`

const StyledHeader = styled.header`
  border-bottom: 1px solid #e3e3e3;
  padding: 40px 0;
  @media only screen and (max-width: 720px) {
    padding: 20px 0;
  }

  a {
    font-size: 24px;
    letter-spacing: -0.02em;
    font-family: acumin-pro, sans-serif;
  }
`

const StyledPostListWrap = styled.ul`
  padding: 20px 0;
  li {
    margin-bottom: 30px;
  }
  a,
  span {
    display: block;
  }
  .title {
    font-size: 18px;
    padding-bottom: 10px;
  }
  .date {
    font-size: 14px;
    color: #b3aaaa;
  }
`

const StyledPost = styled.div`
  .post-header {
    padding: 40px 0 20px;
    .title {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .date {
      font-size: 14px;
      text-align: right;
    }
  }
`

export {
  StyledWrap,
  StyledContent,
  StyledHeader,
  StyledPostListWrap,
  StyledPost,
}
