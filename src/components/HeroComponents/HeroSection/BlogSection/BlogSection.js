import { AnimatePresence, motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import Img from "gatsby-image"

import ButtonText from "../../../ButtonText/ButtonText"
import { formatDate } from "../../../../utils/DateUtils"
import { HiArrowNarrowRight } from "react-icons/hi"
import { DragSlider } from "../../../DragSlider/DragSlider"
import useWindowSize from "../../../../utils/UseWindowSize"

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
  @media only screen and (max-width: 1140px) {
    padding: 62px 30px;
  }
  @media only screen and (max-width: 802px) {
    padding: 46px 30px 33px;
  }
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
    color: var(--primary);
    @media only screen and (max-width: 802px) {
      text-align: left;
      align-self: flex-start;
    }
  }

  h3 {
    font-size: 48px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--headers-color);
    margin-top: 10px;
    @media only screen and (max-width: 1140px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 802px) {
      font-size: 32px;
      text-align: left;
      align-self: flex-start;
    }
    @media only screen and (max-width: 640px) {
      margin-top: 8px;
      font-size: 24px;
    }
    ${({ similarPosts }) =>
      similarPosts &&
      css`
        align-self: flex-start;
        font-size: 24px;
        line-height: 1em;
        color: var(--black);
      `};
  }
`

const ArticlesGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 60px;
  @media only screen and (max-width: 1140px) {
    grid-gap: 50px;
  }

  margin: ${({ similarPosts }) => (similarPosts ? "43px" : "74px")} 0
    ${({ smaller }) => (smaller ? "37px" : "82px")};

  .gatsby-image-wrapper {
    height: 210px;
    border-radius: 5px;
    width: 100%;
    overflow: hidden;
    @media only screen and (max-width: 1140px) {
      height: 190px;
    }
  }
`

const ArticleStyles = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  @media only screen and (max-width: 1140px) {
    width: 343px;
    flex-shrink: 0;
    margin-right: 61px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 660px) {
    margin-right: 51px;
  }
  @media only screen and (max-width: 360px) {
    margin-right: 41px;
  }

  @media only screen and (max-width: 640px) {
    width: 248px;
  }
  @media only screen and (max-width: 360px) {
    width: 248px;
    max-width: 75%;
  }

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
    z-index: 1;
    pointer-events: none;
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

    @media only screen and (max-width: 640px) {
      font-size: 16px;
    }
    &:hover {
      a {
        color: var(--primary);
      }
    }
    a {
      text-decoration: none;
      color: var(--black);
      transition: color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
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

const ImageWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  width: 100%;
  height: 210px;
  border-radius: 5px;
  overflow: hidden;
  @media only screen and (max-width: 640px) {
    height: 150px;
  }

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

const Article = ({ article }) => {
  return (
    <ArticleStyles>
      <ImageWrapper layout style={{ overflow: "hidden" }}>
        <Link to={`/blog/${article.slug}`}>
          <motion.span layout whileHover={{ x: 3 }} whileTap={{ x: 6 }}>
            <HiArrowNarrowRight size="54px" color="var(--light-aqua)" />
          </motion.span>
        </Link>
        <Img fluid={article.coverImage.fluid} alt={article.title} />
      </ImageWrapper>
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

const BlogSection = ({
  margin,
  title,
  subtitle,
  padding,
  smaller,
  posts,
  totalCount,
  similarPosts,
}) => {
  const width = useWindowSize()
  return (
    <AnimatePresence exitBeforeEnter>
      {totalCount > 1 && (
        <WhyStyles>
          <Wrapper
            similarPosts={similarPosts}
            margin={margin}
            padding={padding}
          >
            {title && <h2>{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
            {width > 1140 ? (
              <ArticlesGrid similarPosts={similarPosts} smaller={smaller}>
                {posts.map(article => (
                  <Article key={article.slug} article={article} />
                ))}
              </ArticlesGrid>
            ) : (
              <DragSlider leftAnchor={150} margin="60px 0 90px">
                {posts.map(article => (
                  <Article key={article.slug} article={article} />
                ))}
              </DragSlider>
            )}
            <ButtonText
              smaller
              fontSize="18px"
              fontWeight="600"
              lineHeight="0.89em"
              margin="0px 0 0"
              to="/blog"
              color="var(--primary)"
              textTransform="uppercase"
            >
              Wszystkie wpisy
            </ButtonText>
          </Wrapper>
        </WhyStyles>
      )}
    </AnimatePresence>
  )
}

export default BlogSection
