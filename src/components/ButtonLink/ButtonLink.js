import React from "react"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"

const ButtonLinkStyles = styled(motion.span)`
  color: ${({ color }) => (color ? color : "var(--white)")};
  background: ${({ bg }) => (bg ? bg : "var(--gradient)")};
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;
  text-align: center;

  &:focus,
  &:active {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 4px;
  }

  ${({ size }) =>
    size === "small"
      ? css`
          font-size: 15px;
          line-height: 1em;
          letter-spacing: 0.75px;
          font-weight: 600;
          padding: 14px 28px;
          min-width: 114px;
        `
      : css`
          font-size: 20px;
          line-height: 1em;
          font-weight: 500;
          padding: 21px 22px;
        `}

  ${({ type }) =>
    type === "outline" &&
    css`
      background: transparent;
      background-image: linear-gradient(
          to right,
          #29abe2,
          rgba(255, 255, 255, 0)
        ),
        linear-gradient(to left, var(--primary), var(--primary));
      color: var(--primary);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: ${({ width }) => (width ? width : "")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  min-width: ${({ minWidth }) => (minWidth ? minWidth : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  &:focus,
  &:active {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 4px;
  }
  ${({ type }) =>
    type === "outline" &&
    css`
      position: relative;
      background: ${({ outlinebg }) => (outlinebg ? outlinebg : "transparent")};
      background-clip: padding-box;
      border: solid 1px transparent;
      border-radius: 8px;
      transition: background 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98);
      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -1px; /* !importanté */
        border-radius: inherit; /* !importanté */
        background: linear-gradient(to right, #29abe2, #2ec5ce);
        ${
          "" /* transition: background 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
          color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98); */
        }
      }

      &:hover {
        ${
          "" /* background: ${({ outlinebg }) => (outlinebg ? "var(--gradient)" : "")};
        &:before {
          background: ${({ outlinebg }) => (outlinebg ? "transparent" : "")};
        } */
        }
      }
    `}
`

const ButtonLink = ({
  children,
  size,
  fill,
  gradient,
  color,
  bg,
  type,
  to,
  width,
  maxWidth,
  minWidth,
  margin,
  outlinebg,
  initial,
  animate,
  exit,
  whileHover,
  whileTap,
  whileFocus,
  className,
}) => (
  <StyledLink
    className={className}
    to={to}
    width={width}
    maxWidth={maxWidth}
    minWidth={minWidth}
    margin={margin}
    type={type}
    outlinebg={outlinebg}
  >
    <ButtonLinkStyles
      initial={initial}
      animate={animate}
      exit={exit}
      whileHover={whileHover}
      whileTap={whileTap}
      whileFocus={whileFocus}
      size={size}
      fill={fill}
      gradient={gradient}
      bg={bg}
      type={type}
      color={color}
    >
      {children}
    </ButtonLinkStyles>
  </StyledLink>
)

export default ButtonLink
