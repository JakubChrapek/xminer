import React from "react"
import styled from "styled-components"

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : ""};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
  width: ${({ width }) => (width ? width : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  border-radius: ${({ radius }) => (radius ? radius : "")};
  flex: ${({ flex }) => (flex ? flex : "")};
  background-color: ${({ bg }) => (bg ? bg : "")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "")};
`
const Flex = ({
  children,
  justifyContent,
  width,
  alignItems,
  direction,
  margin,
  flex,
  padding,
  radius,
  bg,
  flexWrap,
}) => {
  return (
    <StyledFlex
      justifyContent={justifyContent}
      alignItems={alignItems}
      width={width}
      direction={direction}
      margin={margin}
      flex={flex}
      bg={bg}
      padding={padding}
      radius={radius}
      flexWrap={flexWrap}
    >
      {children}
    </StyledFlex>
  )
}

export default Flex
