import React from "react"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import { BsArrowRight } from "react-icons/bs"

const ButtonTextStyles = styled(motion.span)`
  color: ${({ color }) => (color ? color : "var(--link)")};
  width: 100%;
  text-align: center;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "18px")};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.89;
  letter-spacing: normal;
  text-transform: uppercase;
  display: flex;
  align-items: center;

  &:focus,
  &:active {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid ${({ color }) => (color ? color : "var(--link)")};
    outline-offset: 4px;
  }

  &:hover {
    svg {
      transform: translateX(4px) scale(1.1);
    }
  }

  svg {
    margin-left: 8px;
    transition: transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }
`

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: ${({ width }) => (width ? width : "")};
  &:focus,
  &:active {
    outline: none;
  }
  &:focus-visible {
    outline: 2px solid ${({ color }) => (color ? color : "var(--link)")};
    outline-offset: 4px;
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
  width,
  outlineBg,
  icon,
  className,
}) => (
  <StyledLink to={to} width={width} type={type} outlineBg={outlineBg}>
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
    >
      {children}
      <BsArrowRight size="26px" color={color} />
    </ButtonTextStyles>
  </StyledLink>
)

export default ButtonText
