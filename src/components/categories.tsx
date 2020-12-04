import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StyledCategories } from "../style/Styles"

const Categories = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        group(field: frontmatter___categories) {
          fieldValue
        }
      }
    }
  `)

  const categories = data.allMarkdownRemark.group

  return (
    <StyledCategories>
      <ul>
        {categories.map(category => (
          <li key={category.fieldValue}>
            <Link to={`/category=${category.fieldValue}`}>
              {category.fieldValue}
            </Link>
          </li>
        ))}
      </ul>
    </StyledCategories>
  )
}

export default Categories
