import React from "react"
import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
    --white: #fff;
    --dark: #171717;
    font-size: 10px;
    font-family: "Staatliches";
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    font-size: 1.6rem;
  }
  button {
    cursor: pointer;
  }
  ul {
    padding: 0;
    margin: 0;
  }
  img::selection {
    background-color: transparent;
  }
`

const GlobalStyles = () => {
  return <Global />
}

export default GlobalStyles
