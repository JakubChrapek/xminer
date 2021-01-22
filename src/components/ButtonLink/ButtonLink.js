import React from "react"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../../utils/cursorContext"

const ButtonLinkStyles = styled(motion.span)`
  width: 100%;
  height: 100%;
  transition: color 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
    background-color 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
    background-position 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
    box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);

  &:focus,
  &:active {
    outline: none;
  }
  &:focus-visible {
    outline: none;
  }

  /* ${({ type }) =>
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

    ${({ type }) => type === "tertiary" && css``} */
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  color: var(--white) !important;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  line-height: 1.3em;
  border: none;
  text-decoration: none;
  width: ${({ width }) => (width ? width : "")};
  cursor: ${({ cursor }) => (cursor ? cursor : "")};
  max-width: ${({ maxwidth }) => (maxwidth ? maxwidth : "")};
  min-width: ${({ minwidth }) => (minwidth ? minwidth : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  align-self: ${({ alignself }) => (alignself ? alignself : "")};
  background-image: linear-gradient(0deg, #2ec5ce, #29abe2, #2b7097, #2d1f84);
  background-size: auto 200%;
  background-position: 0 100%;
  transition: color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
    background-color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
    background-position 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
    box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);

  /* &:hover {
    background-position: 0 0;
  } */

  &:after {
    content: none !important;
  }
  /* &.without-padding-right {
    padding: 8px 0 8px 20px !important;
  } */
  border-radius: 8px;
  &:focus,
  &:active {
    outline: none !important;
  }
  &:focus-visible {
    outline: none !important;
    box-shadow: ${({ size }) =>
      size === "small"
        ? "inset 0 0 0 2px var(--faded-aqua) !important"
        : "inset 0 0 0 4px var(--faded-aqua) !important"};
  }

  ${({ size }) =>
    size === "small"
      ? css`
          font-size: 15px;
          letter-spacing: 0.75px;
          font-weight: 600;
          padding: 14px 28px;
          min-width: 114px;
        `
      : css`
          font-size: 20px;
          font-weight: 500;
          padding: 16px 22px;
        `}

  ${({ type }) =>
    type === "outline" &&
    css`
      position: relative;
      background: ${({ outlinebg }) => (outlinebg ? outlinebg : "transparent")};
      background-clip: padding-box;
      border: solid 1px transparent;
      color: var(--primary) !important;
      border-radius: 8px;

      transition: color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        background-color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        background-position 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);
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
        background-image: linear-gradient(
          0deg,
          #2ec5ce,
          #29abe2,
          #2b7097,
          #2d1f84
        );
        background-size: auto 200%;
        background-position: 0 100%;

        transition: color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
          background-color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
          background-position 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
          box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);
      }
      ${"" /* &:hover:before {
        background-position: 0 0;
      } */}

      &:focus-visible {
        outline: none !important;
        box-shadow: ${({ size }) =>
          size === "small"
            ? "inset 0 0 0 1px var(--primary) !important"
            : "inset 0 0 0 3px var(--primary) !important"};
      }
    `}
${({ type }) =>
    type === "onlyOutline" &&
    css`
      position: relative;
      background: transparent;
      border: solid 1px var(--primary);
      color: var(--primary) !important;
      border-radius: 8px;

      transition: color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        background-color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        background-position 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);
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
        background-image: linear-gradient(
          0deg,
          #2ec5ce,
          #2ec5ce,
          #2b7097,
          #2d1f84
        );
        background-size: auto 200%;
        background-position: 0 100%;

        transition: color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
          background-color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
          background-position 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
          box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);
      }
      ${"" /* &:hover:before {
        background-position: 0 0;
      } */}

      &:focus-visible {
        outline: none !important;
        box-shadow: ${({ size }) =>
          size === "small"
            ? "inset 0 0 0 1px var(--primary) !important"
            : "inset 0 0 0 3px var(--primary) !important"};
      }
    `}

    ${({ type }) =>
    type === "tertiary" &&
    css`
      position: relative;
      background-image: none;
      background-color: var(--white);
      color: var(--headers-color) !important;

      transition: color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        background-color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        background-position 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);

      ${
        "" /* &:hover {
        background-color: var(--headers-color) !important;
        color: var(--white) !important;
      } */
      }

      &:focus-visible {
        outline: none !important;
        box-shadow: ${({ size }) =>
          size === "small"
            ? "inset 0 0 0 2px var(--secondary) !important"
            : "inset 0 0 0 4px var(--secondary) !important"};
      }
    `}
`

const SpanStyles = styled(motion.span)`
  align-self: ${({ alignself }) => (alignself ? alignself : "")};
  display: inline-block;
  a {
    span {
      color: ${({ type }) => !type && "var(--white) !important"};
    }
  }
`

const ButtonLink = ({
  children,
  size,
  fill,
  gradient,
  color,
  cursor,
  bg,
  layout,
  type,
  border,
  padding,
  to,
  width,
  maxwidth,
  alignself,
  minwidth,
  margin,
  outlinebg,
  initial,
  animate,
  exit,
  whileHover,
  whileTap,
  whileFocus,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
}) => {
  const dispatch = useGlobalDispatchContext()

  return (
    <SpanStyles
      whileHover={whileHover ? whileHover : { scale: 1.02 }}
      whileTap={whileTap ? whileTap : { scale: 0.98 }}
      type={type}
      onMouseEnter={() => {
        dispatch({ type: "TOGGLE_CURSOR", cursorShow: true })
        dispatch({
          type: "CHANGE_CURSOR_TYPE",
          cursorType:
            type !== "outline" && type !== "onlyOutline" ? "outline" : "full",
        })
        dispatch({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: size === "small" ? "small" : "big",
        })
      }}
      onMouseLeave={() => {
        dispatch({ type: "TOGGLE_CURSOR", cursorShow: false })
      }}
      alignself={alignself}
      layout={layout ? true : false}
    >
      <StyledLink
        className={className}
        to={to}
        cursor={cursor}
        alignself={alignself}
        width={width}
        maxwidth={maxwidth}
        minwidth={minwidth}
        margin={margin}
        padding={padding}
        type={type}
        outlinebg={outlinebg}
        border={border}
        size={size}
        fill={fill}
        gradient={gradient}
        bg={bg}
        type={type}
        color={color}
        layout={layout ? true : false}
      >
        <ButtonLinkStyles
          initial={initial}
          animate={animate}
          onClick={onClick}
          exit={exit}
          layout={layout ? true : false}
        >
          {children}
        </ButtonLinkStyles>
      </StyledLink>
    </SpanStyles>
  )
}

export default ButtonLink
