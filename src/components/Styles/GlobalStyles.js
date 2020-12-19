import React from "react"
import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
  html {
    box-sizing: border-box;
    --gray: #787878;
    --gray3: #828282;
    --gray300: #D9DBE1;
    --blue: #2435B3;
    --light-blue: #F1F3FF;
    --primary: #2EC5CE;
    --secondary: #2F80ED;
    --dark-aqua: #10A7B0;
    --aqua-primary: #82B6EF;
    --light-aqua: #CDEFF1;
    --faded-aqua: #F6F9FB;
    --footer-bg: #03002D;
    --white: #fff;
    --black: #000;
    --link: #5761D7;
    --nav-dark-bluse: #111C3B;
    --dark: #171717;
    --gradient: linear-gradient(93.11deg, #29ABE2 0%, rgba(255, 255, 255, 0) 100%), var(--primary);
    font-size: 10px;
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
    font-family: "Poppins";
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