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
  text-transform: ${({ textTransform }) =>
    textTransform ? textTransform : ""};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  transition: color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
`

const Text = ({
  family,
  fontSize,
  fontWeight,
  letterSpacing,
  lineHeight,
  textTransform,
  textAlign,
  color,
  dangerously,
  margin,
  as,
  initial,
  animate,
  exit,
  variants,
  children,
  maxWidth,
}) => {
  if (dangerously) {
    return (
      <StyledText
        fontFamily={family}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        lineHeight={lineHeight}
        textTransform={textTransform}
        color={color}
        margin={margin}
        textAlign={textAlign}
        maxWidth={maxWidth}
        as={as}
        initial={initial}
        animate={animate}
        exit={exit}
        variants={variants}
        dangerouslySetInnerHTML={{ __html: dangerously }}
      />
    )
  }
  return (
    <StyledText
      fontFamily={family}
      fontSize={fontSize}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      textTransform={textTransform}
      color={color}
      margin={margin}
      textAlign={textAlign}
      maxWidth={maxWidth}
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
