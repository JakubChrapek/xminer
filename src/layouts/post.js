import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { formatDate } from "../utils/DateUtils"
import BlogSection from "../components/HeroComponents/HeroSection/BlogSection/BlogSection"
import ArticleDetails from "../components/BlogComponents/BlogHeroSection/ArticleDetails"
import SEO from "../components/SEO"
import useWindowSize from "../utils/UseWindowSize"

const PostStyles = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 0;
  position: relative;
  top: 119px;
  padding: 67px 0 90px;
  max-width: 750px;

  ul {
    margin-top: 16px;
  }

  li {
    list-style-position: inside;
    color: var(--body-text);
  }

  @media only screen and (max-width: 750px) {
    max-width: 100%;
    margin: 0 30px;
  }
  @media only screen and (max-width: 640px) {
    padding: 45px 0 70px;
    align-items: flex-start;
  }

  img {
    max-width: 100%;
    max-height: 600px;
    border-radius: 5px;
  }

  p {
    font-size: 18px;
    line-height: 1.67em;
    font-weight: normal;
    color: var(--body-text);
    @media only screen and (max-width: 640px) {
      font-size: 16px;
    }
    > img {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      margin: 28px 0;
    }
  }

  h1 {
    font-size: 36px;
    line-height: normal;
    font-weight: bold;
    max-width: 500px;
    text-align: center;
    color: var(--headers-color);
    @media only screen and (max-width: 640px) {
      text-align: left;
      font-size: 30px;
      font-weight: 500;
    }
  }

  h2 {
    font-size: 36px;
    font-weight: 600;
    line-height: normal;
    margin-top: 28px;
    color: var(--headers-color);

    + p {
      margin-top: 6px;
      > img {
        margin-top: 32px;
      }
    }

    @media only screen and (max-width: 640px) {
      font-size: 22px;
      font-weight: 500;
    }
  }

  h3 {
    font-size: 28px;
    font-weight: 500;
    line-height: normal;
    margin-top: 12px;
    color: var(--headers-color);
    @media only screen and (max-width: 640px) {
      font-size: 18px;
      font-weight: 500;
      margin-top: 24px;
    }
    + p {
      margin-top: 6px;
      > img {
        margin-top: 26px;
      }
    }
  }

  a {
    color: var(--primary);
    font-weight: 500;
    position: relative;
    text-decoration: none;
    &:after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0px;
      background-color: var(--primary);
      height: 2px;
      width: 100%;
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    &:hover,
    &.active,
    &:focus,
    &:active,
    &[aria-current] {
      outline: none;
      color: var(--secondary);
      &:after {
        transform: scaleX(1);
      }
    }
    &:focus-visible {
      box-shadow: 0 0 0 2px var(--secondary);
      outline: none;
      &:after {
        content: none !important;
      }
    }
  }
`

const FeaturedImage = styled(Img)`
  margin: 25px 0 0;
  width: 100%;
  max-height: 388px;
`

const ExcerptStyles = styled.p`
  margin: 61px 0 38px;
  @media only screen and (max-width: 640px) {
    margin: 46px 0 12px;
  }
`
const Excerpt = ({ content }) => (
  <ExcerptStyles dangerouslySetInnerHTML={{ __html: content }} />
)

const Post = ({ data }) => {
  const {
    post: {
      title,
      excerpt,
      author: { name },
      postCategory: { categoryName },
      contentNode: {
        childMarkdownRemark: { html },
      },
      date,
      readingTime,
      coverImage: { alt, fluid },
    },
    similarPosts: {
      nodes: similarArticles,
      totalCount: similarArticlesTotalCount,
    },
    newestPosts: {
      nodes: newestArticles,
      totalCount: newestArticlesTotalCount,
    },
  } = data
  const width = useWindowSize()
  return (
    <>
      <SEO title={`${title}`} />
      <PostStyles>
        <h1 style={{ marginTop: "0px" }}>{title}</h1>
        <FeaturedImage fluid={fluid} alt={alt} />
        <ArticleDetails
          logo
          author={name}
          category={categoryName}
          date={formatDate(date)}
          readingTime={readingTime}
          tag={width > 740}
        />
        {excerpt && <Excerpt content={excerpt} />}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </PostStyles>
      <BlogSection
        subtitle="Podobne wpisy"
        posts={similarArticlesTotalCount < 2 ? newestArticles : similarArticles}
        totalCount={
          similarArticlesTotalCount < 2
            ? newestArticlesTotalCount
            : similarArticlesTotalCount
        }
        similarPosts
        margin="60px 0 0"
      />
    </>
  )
}

export const postQuery = graphql`
  query ArticleQuery($id: String!, $name: String!) {
    post: datoCmsPost(id: { eq: $id }) {
      title
      excerpt
      author {
        name
      }
      postCategory {
        categoryName
      }
      readingTime
      date
      contentNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        alt
        fluid(maxWidth: 750) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    similarPosts: allDatoCmsPost(
      limit: 3
      filter: { postCategory: { categoryName: { eq: $name } }, id: { ne: $id } }
    ) {
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
    newestPosts: allDatoCmsPost(
      limit: 3
      filter: { id: { ne: $id } }
      sort: { fields: date, order: DESC }
    ) {
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

export default Post
