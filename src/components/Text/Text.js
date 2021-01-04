import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"

const StyledText = styled(motion.p)`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "300")};
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "Poppins")};
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing ? letterSpacing : "normal"};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "1.67em")};
  color: ${({ color }) => (color ? color : "var(--black)")};
  margin: ${({ margin }) => (margin ? margin : "0")};
`

const Text = ({
  family,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  color,
  margin,
  as,
  initial,
  animate,
  exit,
  variants,
  children,
}) => {
  return (
    <StyledText
      fontFamily={family}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      color={color}
      margin={margin}
      as={as}
      initial={initial}
      animate={animate}
      exit={exit}
      variants={variants}
    >
      {children}
    </StyledText>
  )
}

export default Text
