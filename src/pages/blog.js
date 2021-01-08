import React from "react"
import BlogHeroSection from "../components/BlogComponents/BlogHeroSection/BlogHeroSection"
import CategoriesSections from "../components/BlogComponents/BlogHeroSection/CategoriesSection/CategoriesSections"

import SEO from "../components/SEO/SEO"
const Blog = ({ data }) => {
  return (
    <>
      <SEO title="Blog" />
      <BlogHeroSection
        allArticles={data.allArticles.nodes}
        featuredArticles={data.featuredArticles.nodes}
        newestArticle={data.newestArticle.nodes}
        categories={data.categories.nodes}
      />
      <CategoriesSections
        categories={data.categories.nodes}
        articles={data.allArticles.nodes}
      />
    </>
  )
}

export const BlogHeroArticlesQuery = graphql`
  query blogArticlesQuery {
    categories: allDatoCmsCategory {
      nodes {
        categoryName
        id
      }
    }
    newestArticle: allDatoCmsPost(
      limit: 1
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title
        author {
          name
        }
        excerpt
        postCategory {
          categoryName
        }
        date
        readingTime
        id
        slug
        coverImage {
          alt
          fluid(maxWidth: 750) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    featuredArticles: allDatoCmsPost(
      skip: 1
      limit: 3
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        title
        postCategory {
          categoryName
        }
        date
        readingTime
        id
        slug
      }
    }
    allArticles: allDatoCmsPost(sort: { fields: date, order: DESC }) {
      nodes {
        title
        postCategory {
          categoryName
        }
        date
        id
        slug
        readingTime
        coverImage {
          alt
          fluid(maxWidth: 358) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

export default Blog
