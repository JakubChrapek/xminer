import React from "react"
import Text from "../../../components/Text/Text"
import Flex from "../../../components/Flex/Flex"
import styled from "styled-components"
import Img from "gatsby-image"
import ArticleDetails from "./ArticleDetails"
import { formatDate } from "../../../utils/DateUtils"
import { Link } from "gatsby"
import { HiArrowNarrowRight } from "react-icons/hi"

const HeroStyles = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 auto 0;
  position: relative;
  top: 119px;
  padding: 67px 0 0;
  > div {
    max-width: 1440px;
    margin: 0 102px;
  }
`

const FeaturedArticleStyles = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 29px;
  position: relative;

  .gatsby-image-wrapper {
    max-width: 750px;
    max-height: 388px;
    border-radius: 5px;
  }

  > a {
    text-decoration: none;

    &:focus-visible {
      h2 {
        outline: 2px solid var(--primary);
        outline-offset: 6px;
      }
    }

    &:hover {
      h2 {
        color: var(--primary);
        &:after {
          transform: scaleX(1);
        }
      }
    }
    h2 {
      position: relative;
      display: inline-block;

      &:after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: -2px;
        background-color: var(--primary);
        height: 2px;
        width: calc(100%);
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: 750px;
  max-height: 388px;
  border-radius: 5px;
  overflow: hidden;

  > a {
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    opacity: 0;
    background: linear-gradient(
        93.11deg,
        #29abe2 2.72%,
        rgba(255, 255, 255, 0) 99.67%
      ),
      #2ec5ce;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .gatsby-image-wrapper {
    opacity: 1;
    z-index: 1;
    width: 100%;
  }
`

const FeaturedArticle = ({
  title,
  image,
  imageAlt,
  excerpt,
  author,
  category,
  date,
  readingTime,
  slug,
}) => {
  return (
    <FeaturedArticleStyles>
      <ImageWrapper>
        <Link to={`/blog/${slug}`}>
          <HiArrowNarrowRight size="74px" color="var(--light-aqua)" />
        </Link>

        <Img fluid={image} alt={imageAlt || ""} />
      </ImageWrapper>
      <Link to={`/blog/${slug}`}>
        <Text
          fontSize="28px"
          fontWeight="bold"
          lineHeight="normal"
          maxwidth="407px"
          as="h2"
          margin="16px 0 0"
        >
          {title}
        </Text>
      </Link>
      <Text
        color="var(--gray3)"
        fontSize="14px"
        lineHeight="normal"
        margin="16px 0 0 "
        maxwidth="628px"
      >{`${excerpt.substring(0, 180)}${
        excerpt.length > 180 ? "..." : ""
      }`}</Text>
      <ArticleDetails
        author={author}
        category={category}
        date={formatDate(date)}
        readingTime={readingTime}
        logo
      />
    </FeaturedArticleStyles>
  )
}

const RecommendedArticlesStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--light-blue);
  border-radius: 5px;
  padding: 25px 18px 33px 20px;

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  li {
    margin: 11px 0 0;
    padding: 13px 0 0;
    border-top: 1px solid var(--light-blue);
    width: 100%;
    &:first-of-type {
      padding: 25px 0 0;
    }
    > a {
      text-decoration: none;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 0px;
        bottom: -2px;
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
        color: var(--primary);
        &:after {
          transform: scaleX(1);
        }
      }
      &:focus-visible {
        outline: 2px solid var(--primary);
        outline-offset: 6px;
      }
      &:hover p {
        color: var(--primary);
      }
      p {
        display: inline-block;
        transition: color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      }
    }
  }
`

const RecommendedArticles = ({ articles }) => {
  return (
    <RecommendedArticlesStyles>
      <Text fontSize="18px" lineHeight="normal" fontWeight="600">
        Polecane wpisy
      </Text>
      <ul>
        {articles.map(article => (
          <li key={article.slug}>
            <ArticleDetails
              featuredArticles
              category={article.postCategory.categoryName}
              date={article.date}
              readingTime={article.readingTime}
            />
            <Link to={`/blog/${article.slug}`}>
              <Text
                fontSize="16px"
                fontWeight="bold"
                lineHeight="normal"
                margin="12px 0 0"
              >
                {article.title}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </RecommendedArticlesStyles>
  )
}

const BlogHeroSection = ({
  allArticles,
  featuredArticles,
  newestArticle,
  categories,
}) => {
  return (
    <HeroStyles>
      <Flex width="100%">
        <Flex width="100%" direction="column" flex="2">
          <Text as="h1" fontSize="36px" fontWeight="600" lineHeight="normal">
            Blog
          </Text>
          <FeaturedArticle
            title={newestArticle[0].title}
            category={newestArticle[0].postCategory.categoryName}
            excerpt={newestArticle[0].excerpt}
            date={newestArticle[0].date}
            readingTime={newestArticle[0].readingTime}
            image={newestArticle[0].coverImage.fluid}
            imageAlt={newestArticle[0].coverImage.alt}
            author={newestArticle[0].author.name}
            slug={newestArticle[0].slug}
          />
        </Flex>
        <Flex margin="84px 0 0 0" direction="column" flex="1">
          <RecommendedArticles articles={featuredArticles} />
        </Flex>
      </Flex>
    </HeroStyles>
  )
}

export default BlogHeroSection
