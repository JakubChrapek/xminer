import { motion } from "framer-motion"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import XminerLogo from "../../../images/xminer-logo-poly.svg"

const DetailsStyles = styled(motion.div)`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  width: 100%;
  margin: ${({ featuredArticles, margin }) =>
    featuredArticles ? "0" : margin ? margin : "20px 0 0"};
  position: relative;
  font-size: 13px !important;

  > p {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  @media only screen and (max-width: 992px) {
    font-size: 12px !important;
    margin: ${({ featuredArticles, margin }) =>
      featuredArticles ? "0" : margin ? margin : "27px 0 0"};
  }
  @media only screen and (max-width: 640px) {
    font-size: ${({ featuredArticles, smaller }) =>
      (smaller || featuredArticles) && "11px !important"};
  }
  line-height: normal !important;
  color: var(--text-privacy) !important;

  a {
    text-decoration: none;
  }

  .bold {
    font-weight: ${({ featuredArticles }) =>
      featuredArticles ? "600" : "bold"};
  }

  .primary {
    color: ${({ featuredArticles }) =>
      featuredArticles ? "var(--text-privacy)" : "var(--primary)"};
    text-transform: capitalize;
    position: relative;
    margin: 0 0 0 ${({ featuredArticles }) => (featuredArticles ? "0" : "5px")};
    transition: color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    &:after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0px;
      background-color: var(--secondary);
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

  .circle {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: var(--text-privacy);
    margin: 0 6px 1px 6px;
    @media only screen and (max-width: 540px) {
      margin: 0 4px 1px 4px;
    }
    &:first-of-type {
      display: ${({ dateWithoutDot }) => dateWithoutDot && "none"};
    }
  }

  .tag {
    position: absolute;
    right: 0;
    top: -1px;
    border-radius: 5px;
    background-color: var(--light-aqua);
    padding: 4px 9px;
    color: var(--primary);
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    &:after {
      content: none;
    }
    &:hover {
      transform: scale(1.05);
    }
    &:focus {
      transform: scale(0.95);
    }
  }
`

const LogoStyles = styled.svg`
  width: 32px;
  height: 32px;
  min-width: 32px;
  margin-right: 8px;
`

const ArticleDetails = ({
  featuredArticles,
  logo,
  author,
  category,
  date,
  dateWithoutDot,
  readingTime,
  tag,
  margin,
  layout,
  smaller,
}) => (
  <DetailsStyles
    margin={margin}
    layout={layout ? true : false}
    dateWithoutDot={dateWithoutDot}
    featuredArticles={featuredArticles}
    smaller={smaller}
  >
    {logo && (
      <LogoStyles
        xmlns="http://www.w3.org/2000/svg"
        width="214"
        height="190"
        fill="none"
        viewBox="0 0 214 190"
      >
        <path
          fill="url(#paint0_linear)"
          d="M152.152 0h-90.89c-5.65 0-10.87 3.01-13.7 7.91L2.123 86.62c-2.83 4.89-2.83 10.92 0 15.82l45.44 78.71c2.83 4.89 8.05 7.91 13.7 7.91h90.89c5.65 0 10.871-3.01 13.701-7.91l45.439-78.71c2.83-4.89 2.83-10.92 0-15.82l-45.45-78.71c-2.82-4.9-8.04-7.91-13.69-7.91z"
        />
        <path
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="7"
          d="M91.132 57.86l15.52 19.99 16.41-21.5h23.21l-28.15 36.9 41.54 54.66H51.272V57.95"
        />
        <path
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="7"
          d="M162.132 119.36l.11-79.91H53.862l41.53 54.65-28.15 36.91h23.22l16.41-21.51 14.89 19.73"
        />
        <path
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="7"
          d="M60.873 70.76l-9.46-14.23-8.71 14.23"
        />
        <path
          stroke="#fff"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M162.292 128.97c2.762 0 5-2.239 5-5s-2.238-5-5-5c-2.761 0-5 2.239-5 5s2.239 5 5 5zM88.272 59.95c2.762 0 5-2.239 5-5s-2.238-5-5-5c-2.761 0-5 2.239-5 5s2.239 5 5 5zM124.283 137.98c2.761 0 5-2.239 5-5s-2.239-5-5-5c-2.762 0-5 2.239-5 5s2.238 5 5 5z"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="179.966"
            x2="33.445"
            y1="21.265"
            y2="167.787"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#29ABE2" />
            <stop offset=".994" stopColor="#1FADAD" />
          </linearGradient>
        </defs>
      </LogoStyles>
    )}
    <p>
      {author && (
        <span className="author">
          Autor <span className="bold">{author}</span> w
        </span>
      )}
      {category && (
        <Link to={`/blog/kategoria/${category}`} className="bold primary">
          {category}
        </Link>
      )}
      <span className="circle" />
      {date && <span>{date}</span>}
      <span className="circle" />
      {readingTime && <span>{readingTime} min</span>}
      {tag && (
        <Link className="tag" to={`/blog/kategoria/${category}`}>
          {category}
        </Link>
      )}
    </p>
  </DetailsStyles>
)

export default ArticleDetails
