import React from "react"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const ButtonStyles = styled(motion.button)`
  color: var(--white);
  background: var(--gradient);
  border-radius: ${({ radius }) => (radius ? radius : "10px")};
  border: none;
  transition: opacity 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);

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
    disabled={disabled}
    radius={radius}
  >
    {children}
  </ButtonStyles>
)

export default Button
