import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { BsArrowRight } from "react-icons/bs"
import { useGlobalDispatchContext } from "../../utils/cursorContext"

const ButtonTextStyles = styled(motion.span)`
  color: ${({ color }) => (color ? color : "var(--secondary)")};
  width: 100%;
  text-align: center;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "600")};
  font-stretch: normal;
  border-radius: 8px;
  font-style: normal;
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "0.89")};
  letter-spacing: normal;
  text-transform: ${({ smaller }) => (smaller ? "normal" : "uppercase")};
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : ""};
  display: flex;
  align-items: center;

  &:focus,
  &:active {
    outline: none;
  }
  &:focus-visible {
    outline: none !important;
  }

  &:hover {
    svg {
      transform: translateX(4px) scale(1.1);
    }
  }

  svg {
    margin-left: 8px;
    transition: transform 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98);
  }
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 8px;
  width: ${({ width }) => (width ? width : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  margin-left: -8px;
  padding: 4px 8px;
  transition: box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);
  &:focus,
  &:active {
    outline: none;
  }
  &:focus-visible {
    outline: none !important;
    box-shadow: ${({ size }) =>
      size === "small"
        ? "inset 0 0 0 2px var(--secondary) !important"
        : "inset 0 0 0 3px var(--secondary) !important"};
  }
`

const ButtonText = ({
  children,
  size,
  fontSize,
  fill,
  gradient,
  color,
  type,
  to,
  margin,
  width,
  outlinebg,
  icon,
  className,
  smaller,
  textTransform,
}) => {
  const dispatch = useGlobalDispatchContext()

  return (
    <StyledLink
      margin={margin}
      to={to}
      width={width}
      type={type}
      outlinebg={outlinebg}
      onMouseEnter={() => {
        dispatch({ type: "TOGGLE_CURSOR", cursorShow: true })
        dispatch({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: "outline",
        })
        dispatch({
          type: "CHANGE_CURSOR_SIZE",
          cursorSize: size === "small" ? "small" : "big",
        })
      }}
      onMouseLeave={() => {
        dispatch({ type: "TOGGLE_CURSOR", cursorShow: false })
      }}
      onClick={() => {
        dispatch({ type: "TOGGLE_CURSOR", cursorShow: false })
        dispatch({
          type: "CHANGE_CURSOR_TYPE",
          cursorType: "full",
        })
      }}
    >
      <ButtonTextStyles
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1 }}
        size={size}
        fontSize={fontSize}
        fill={fill}
        gradient={gradient}
        type={type}
        color={color}
        className={className}
        smaller={smaller}
        textTransform={textTransform}
      >
        {children}
        <BsArrowRight size="26px" color={color} />
      </ButtonTextStyles>
    </StyledLink>
  )
}

export default ButtonText
