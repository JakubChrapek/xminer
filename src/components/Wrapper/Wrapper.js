import React from "react"
import styled, { css } from "styled-components"

const WrapperStyles = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({ maxwidth }) => (maxwidth ? maxwidth : "1440px")};
  position: relative;
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "1")};
  margin: ${({ margin }) => (margin ? margin : "60px 122px 100px")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  flex-direction: ${({ direction }) => (direction ? direction : "")};

  ${({ equal }) =>
    equal &&
    css`
      > div {
        flex: 1;
        &:first-child {
          margin-right: 12px;
        }
        &:last-child {
          margin-left: 12px;
        }
      }
    `}
`

const Wrapper = ({
  maxwidth,
  margin,
  padding,
  direction,
  zIndex,
  children,
  equal,
}) => {
  return (
    <WrapperStyles
      equal={equal}
      maxwidth={maxwidth}
      margin={margin}
      padding={padding}
      zIndex={zIndex}
      direction={direction}
    >
      {children}
    </WrapperStyles>
  )
}

export default Wrapper
