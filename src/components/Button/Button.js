import React from "react"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const ButtonStyles = styled(motion.button)`
  color: var(--white);
  background: var(--gradient);
  border-radius: 10px;
  border: none;

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
}) => (
  <ButtonStyles
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
  >
    {children}
  </ButtonStyles>
)

export default Button
