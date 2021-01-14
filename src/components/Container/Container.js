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
`

const Container = ({ bg, margin, padding, minHeight, children }) => {
  return (
    <ContainerStyles
      bg={bg}
      margin={margin}
      padding={padding}
      minHeight={minHeight}
    >
      {children}
    </ContainerStyles>
  )
}

export default Container
