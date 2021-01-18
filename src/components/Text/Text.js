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
  max-width: ${({ maxwidth }) => (maxwidth ? maxwidth : "")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "")};
  transition: color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);

  > h2 {
    margin-top: 48px;
    margin-bottom: 16px;
    font-size: 27px;
    font-weight: 600;
  }

  > h3 {
    margin-top: 36px;
    margin-bottom: 14px;
    font-size: 24px;
    font-weight: 500;
  }

  > h4 {
    margin-bottom: 8px;
    margin-top: 30px;
    font-size: 22px;
    font-weight: 500;
  }

  > p > a {
    color: var(--primary);
    position: relative;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    &:after {
      content: "";
      position: absolute;
      left: 0px;
      bottom: -2px;
      background-color: var(--primary);
      height: 2px;
      width: 100%;
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    &:hover,
    &.active,
    &:focus,
    &:active,
    &[aria-current] {
      outline: none;
      color: var(--primary);
      &:after {
        transform: scaleX(1);
      }
    }
    &:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 6px;
    }
  }
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
  onAnimationComplete,
  transition,
  children,
  maxwidth,
  key,
  layout,
  className,
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
        maxwidth={maxwidth}
        as={as}
        transition={transition}
        onAnimationComplete={onAnimationComplete}
        initial={initial}
        className={className}
        animate={animate}
        exit={exit}
        variants={variants}
        key={key}
        layout={layout}
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
      maxwidth={maxwidth}
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
