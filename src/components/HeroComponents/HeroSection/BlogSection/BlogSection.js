import { motion } from "framer-motion"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import ButtonText from "../../../buttonText/ButtonText"
import { formatDate } from "../../../../utils/DateUtils"

const WhyStyles = styled.section`
  display: flex;
  justify-content: center;
  z-index: 2;
  background-color: var(--white);
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  position: relative;
  z-index: 2;
  padding: ${({ padding }) => (padding ? padding : "62px 122px")};
  margin: ${({ margin }) => (margin ? margin : "")};
  text-align: center;

  .text-no-transform {
    text-transform: none !important;
  }
  h2 {
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--secondary);
  }

  h3 {
    font-size: 48px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #101b56;
    margin-top: 10px;
  }
`

const query = graphql`
  query blogQuery {
    allDatoCmsPost(limit: 3) {
      totalCount
      nodes {
        title
        postCategory {
          categoryName
        }
        date
        readingTime
        id
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

const ArticlesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 60px;
  margin: 74px 0 ${({ smaller }) => (smaller ? "37px" : "82px")};

  .gatsby-image-wrapper {
    height: 210px;
    border-radius: 5px;
    width: 100%;
    overflow: hidden;
  }
`

const ArticleStyles = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  > a {
    width: 100%;
    picture,
    img {
      transform: scale(1);
      transition: transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) !important;
    }

    &:hover {
      img,
      picture {
        transform: scale(1.1);
      }
    }
  }

  .category {
    position: absolute;
    left: 12px;
    top: 12px;
    background-color: var(--light-aqua);
    color: var(--primary);
    font-size: 10px;
    line-height: 1em;
    font-weight: bold;
    text-transform: uppercase;
    padding: 4px 9px;
    margin: 0;
    border-radius: 5px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
    color: var(--black);
    margin: 4px 0 0;
    line-height: 1.3em;
    text-align: left;
    transition: transform 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    &:hover {
      transform: translateX(2px);
    }
    a {
      text-decoration: none;
      color: var(--black);
    }
  }

  .data {
    margin-top: 12px;
    display: inline-flex;
    align-items: center;
    font-size: 13px;
    line-height: 1.3em;
    font-weight: normal;
    color: var(--gray3);
  }

  .dot {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: var(--gray3);
    margin: 0 6px 1px;
  }
`

const Article = ({ article }) => {
  return (
    <ArticleStyles>
      <Link to={`/blog/${article.slug}`}>
        <Img fluid={article.coverImage.fluid} alt={article.title} />
      </Link>
      <p className="category">{article.postCategory.categoryName}</p>
      <p className="data">
        <span>{`${formatDate(article.date)}`}</span>
        <span className="dot" />
        <span>{`${article.readingTime} min czytania`}</span>
      </p>
      <p className="title">
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </p>
    </ArticleStyles>
  )
}

const BlogSection = ({ margin, title, subtitle, padding, smaller }) => {
  const {
    allDatoCmsPost: { nodes },
    allDatoCmsPost: { totalCount },
  } = useStaticQuery(query)
  return (
    <WhyStyles>
      <Wrapper margin={margin} padding={padding}>
        {title && <h2>{title}</h2>}
        {subtitle && <h3>{subtitle}</h3>}
        <ArticlesGrid smaller={smaller}>
          {nodes.map(article => (
            <Article key={article.id} article={article} />
          ))}
        </ArticlesGrid>
        <ButtonText
          smaller
          fontSize="14px"
          fontWeight="bold"
          lineHeight="2.14em"
          margin="0px 0 0"
          to="/blog"
          color="var(--primary)"
        >
          Wszystkie wpisy
        </ButtonText>
      </Wrapper>
    </WhyStyles>
  )
}

export default BlogSection
