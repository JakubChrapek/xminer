import { graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import CategoriesSections from "../components/BlogComponents/BlogHeroSection/CategoriesSection/CategoriesSections"
import Flex from "../components/Flex/Flex"
import SEO from "../components/SEO/SEO"
import Text from "../components/Text/Text"

const CategoryStyles = styled.section`
  display: flex;
  justify-content: center;
  margin: 119px auto 0;
  padding: 67px 0 0;
  > div {
    max-width: 1440px;
    margin: 0 102px;
  }
`

const CategoryLayout = ({ data, pageContext }) => {
  return (
    <>
      <SEO title={`Xminer Blog | ${pageContext.categoryName}`} />
      <CategoryStyles>
        <Flex width="100%">
          <Flex width="100%" direction="column" flex="2">
            <Text as="h1" fontSize="36px" fontWeight="600" lineHeight="normal">
              Blog > {pageContext.categoryName}
            </Text>
          </Flex>
        </Flex>
      </CategoryStyles>
      <CategoriesSections
        categories={data.categories.nodes}
        defaultActiveCategory={pageContext.categoryName.toLowerCase()}
        articles={data.posts.nodes}
        margin="0 auto"
      />
    </>
  )
}

export const postQuery = graphql`
  query CategoryPostsQuery {
    categories: allDatoCmsCategory {
      nodes {
        categoryName
        categoryIcon {
          fluid {
            src
          }
        }
        id
      }
    }
    posts: allDatoCmsPost(sort: { fields: date, order: DESC }) {
      totalCount
      nodes {
        title
        postCategory {
          categoryName
        }
        readingTime
        date
        slug
        coverImage {
          fluid(maxWidth: 360) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

export default CategoryLayout
