import React from "react"
import styled from "styled-components"

export const ContainerStyles = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${({ bg }) => (bg ? bg : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
  overflow: hidden;
  /* &.wrapper {
    visibility: hidden;
  } */
`

const Container = ({ bg, margin, padding, minHeight, children, className }) => {
  return (
    <ContainerStyles
      bg={bg}
      margin={margin}
      padding={padding}
      minHeight={minHeight}
      className={className}
    >
      {children}
    </ContainerStyles>
  )
}

export default Container
