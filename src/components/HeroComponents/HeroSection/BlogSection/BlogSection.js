import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import ButtonText from "../../../buttonText/ButtonText"

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
        category
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
  margin: 74px 0 82px;

  .gatsby-image-wrapper {
    height: 210px;
    border-radius: 5px;
    width: 100%;
  }
`

const ArticleStyles = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

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
  const [year, month, day] = article.date.split("-")
  const monthMap = {
    1: "stycznia",
    2: "lutego",
    3: "marca",
    4: "kwietnia",
    5: "maja",
    6: "czerwca",
    7: "lipca",
    8: "sierpnia",
    9: "września",
    10: "paźdzernika",
    11: "listopada",
    12: "grudnia",
  }
  const parseDay = day => (day[0] === "0" ? day.slice(1) : day)

  return (
    <ArticleStyles>
      <Img fluid={article.coverImage.fluid} alt={article.title} />
      <p className="category">{article.category}</p>
      <p className="data">
        <span>{`${parseDay(day)} ${monthMap[month]} ${year}`}</span>
        <span className="dot" />
        <span>{`${article.readingTime} min czytania`}</span>
      </p>
      <p className="title">{article.title}</p>
    </ArticleStyles>
  )
}

const BlogSection = ({ title, subtitle, padding }) => {
  const {
    allDatoCmsPost: { nodes },
    allDatoCmsPost: { totalCount },
  } = useStaticQuery(query)
  return (
    <WhyStyles>
      <Wrapper padding={padding}>
        {title && <h2>{title}</h2>}
        {subtitle && <h3>{subtitle}</h3>}
        <ArticlesGrid>
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
