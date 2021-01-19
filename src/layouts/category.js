import { graphql } from "gatsby"
import React, { useState } from "react"
import styled from "styled-components"
import CategoriesSections from "../components/BlogComponents/BlogHeroSection/CategoriesSection/CategoriesSections"
import Flex from "../components/Flex/Flex"
import SEO from "../components/SEO/SEO"
import Text from "../components/Text/Text"

const CategoryStyles = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 186px 0 0;
  > div {
    max-width: 1440px;
    margin: 0 102px;
  }
  @media only screen and (max-width: 1182px) {
    padding: 150px 0 0;
    > div {
      margin: 0 60px;
    }
  }
  @media only screen and (max-width: 820px) {
    > div {
      margin: 0;
      padding: 0 30px;
    }
  }
`

const CategoryLayout = ({ data, pageContext }) => {
  const [defaultActiveCategory, setDefaultActiveCategory] = useState(
    pageContext.categoryName.toLowerCase()
  )
  return (
    <>
      <SEO title={`Xminer Blog | ${defaultActiveCategory}`} />
      <CategoryStyles>
        <Flex width="100%">
          <Flex width="100%" direction="column" flex="2">
            <Text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              fontSize="10px"
              letterSpacing="1px"
              fontWeight="400"
              textTransform="uppercase"
              color="var(--headers-color)"
            >
              Przeglądasz
            </Text>
            <Text
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              as="h1"
              fontSize="36px"
              fontWeight="600"
              lineHeight="normal"
              color="var(--headers-color)"
            >
              Blog{" "}
              {defaultActiveCategory !== "wszystkie" &&
                `/ ${defaultActiveCategory}`}
            </Text>
          </Flex>
        </Flex>
      </CategoryStyles>
      <CategoriesSections
        categories={data.categories.nodes}
        defaultActiveCategory={defaultActiveCategory}
        setDefaultActiveCategory={setDefaultActiveCategory}
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
