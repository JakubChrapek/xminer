import React from "react"
import styled from "styled-components"

const ContainerStyles = styled.section`
  display: flex;
  aligh-items: center;
  flex-direction: column;
  background: ${({ bg }) => (bg ? bg : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  min-height: ${({ minHeight }) => (minHeight ? minHeight : "")};
`

const Container = ({ bg, padding, minHeight, children }) => {
  return (
    <ContainerStyles bg={bg} padding={padding} minHeight={minHeight}>
      {children}
    </ContainerStyles>
  )
}

export default Container
