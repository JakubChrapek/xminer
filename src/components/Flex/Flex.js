import React from "react"
import styled from "styled-components"

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : ""};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
  width: ${({ width }) => (width ? width : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
`
const Flex = ({
  children,
  justifyContent,
  width,
  alignItems,
  direction,
  margin,
}) => {
  return (
    <StyledFlex
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
      direction={direction}
      margin={margin}
    >
      {children}
    </StyledFlex>
  )
}

export default Flex
