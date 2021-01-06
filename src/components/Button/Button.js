import React from "react"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const ButtonStyles = styled(motion.button)`
  color: var(--white);
  background: ${({ bg }) => (bg ? bg : "var(--gradient)")};
  border-radius: ${({ radius }) => (radius ? radius : "10px")};
  border: none;
  transition: opacity 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98);
  margin: ${({ margin }) => (margin ? margin : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  width: ${({ width }) => (width ? width : "")};

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
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.6;
    `}
`

const Button = ({
  children,
  size,
  fill,
  gradient,
  color,
  bg,
  type,
  initial,
  animate,
  exit,
  whileHover,
  whileTap,
  whileFocus,
  disabled,
  radius,
  width,
  margin,
}) => (
  <ButtonStyles
    initial={initial}
    animate={animate}
    exit={exit}
    whileHover={whileHover}
    whileTap={whileTap}
    margin={margin}
    whileFocus={whileFocus}
    size={size}
    fill={fill}
    gradient={gradient}
    bg={bg}
    type={type}
    width={width}
    disabled={disabled}
    radius={radius}
  >
    {children}
  </ButtonStyles>
)

export default Button
