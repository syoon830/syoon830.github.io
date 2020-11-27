import styled from "styled-components";

const List = styled.ul``
const ListItem = styled.li`
  a {
    display: block;
    text-decoration: none;
    color: #333;
    padding: 20px;
    border-bottom: 1px solid #d6d6d6;
  }
`
const Title = styled.span`
  display: block;
  font-size: 22px;
  padding-bottom: 10px;
`
const Date = styled.span`
  display: block;
  font-size: 16px;
  text-align: right;
`

export { List, ListItem, Title, Date }