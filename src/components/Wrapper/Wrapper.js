import React from "react"
import styled, { css } from "styled-components"

const WrapperStyles = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "1440px")};
  position: relative;
  z-index: ${({ zIndex }) => (zIndex ? zIndex : "1")};
  margin: ${({ margin }) => (margin ? margin : "60px 122px 100px")};
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

const Wrapper = ({ maxWidth, margin, direction, zIndex, children, equal }) => {
  return (
    <WrapperStyles
      equal={equal}
      maxWidth={maxWidth}
      margin={margin}
      zIndex={zIndex}
      direction={direction}
    >
      {children}
    </WrapperStyles>
  )
}

export default Wrapper
