import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const DetailsStyles = styled.p`
  display: flex;
  align-items: center;
  width: 100%;
  margin: ${({ featuredArticles }) => (featuredArticles ? "0" : "20px 0 0")};
  position: relative;
  font-size: 13px !important;
  line-height: normal !important;
  color: var(--text-privacy) !important;

  .logo {
    width: 20px;
    margin-right: 15px;
    background-color: var(--primary);
    height: 20px;
  }

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

  .circle {
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: var(--text-privacy);
    margin: 0 6px 1px 6px;
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

const ArticleDetails = ({
  featuredArticles,
  logo,
  author,
  category,
  date,
  readingTime,
  tag,
}) => (
  <DetailsStyles featuredArticles={featuredArticles}>
    {logo && <span className="logo" />}
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
    {readingTime && <span>{readingTime} min czytania</span>}
    {tag && (
      <Link className="tag" to={`/blog/kategoria/${category}`}>
        {category}
      </Link>
    )}
  </DetailsStyles>
)

export default ArticleDetails
