import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { StyledCategories } from "../style/Styles"

const Categories = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        group(field: categories) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const categories = data.allContentfulBlogPost.group

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
