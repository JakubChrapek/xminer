import React from "react"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"

const ButtonStyles = styled(motion.button)`
  color: var(--white);
  background: var(--gradient);
  border-radius: 10px;
  border: none;

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

const Button = ({ children, size, fill, gradient, color, bg, type }) => (
  <ButtonStyles size={size} fill={fill} gradient={gradient} bg={bg} type={type}>
    {children}
  </ButtonStyles>
)

export default Button
