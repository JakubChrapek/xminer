import { motion } from "framer-motion"
import React from "react"
import styled, { createGlobalStyle } from "styled-components"

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
    --text-white: #f2f2f2;
    --text-privacy: #bdbdbd;
    --black: #000;
    --link: #5761D7;
    --error: #af4c4c;
    --nav-dark-bluse: #111C3B;
    --dark: #171717;
    --dark-text: #23242A;
    --post-text: #333;
    --headers-color: #0d162c;
    --body-text: rgba(12, 21, 46, 0.64);
    --gradient: linear-gradient(93.11deg, #29ABE2 0%, rgba(255, 255, 255, 0) 100%), var(--primary);
    --gradient-hover: linear-gradient(180deg, rgba(45,31,132,1) 0%, rgba(43,112,151,1) 100%);
    --home-gradient: linear-gradient(180deg, #18254A 0%, #111C3B 100%);
    --main-gradient: linear-gradient(180deg, #18254A 0%, #111C3B 100%);
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
  .no-underline {
    &:after, &:before {
      content: none !important;
    }
  }

  /*! locomotive-scroll v3.5.4 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */
  html.has-scroll-smooth {
    overflow: hidden;
  }

  html.has-scroll-dragging {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .has-scroll-smooth body {
    overflow: hidden;
  }

  /* Specifying the scroll container manually */
  .has-scroll-smooth #___gatsby,
  .has-scroll-smooth [data-scroll-container] {
    min-height: 100vh;
  }

  .c-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
    height: 100vh;
    transform-origin: center right;
    transition: transform 0.3s, opacity 0.3s;
    opacity: 0;
  }
  .c-scrollbar:hover {
    transform: scaleX(1.6);
  }
  .c-scrollbar:hover,
  .has-scroll-scrolling .c-scrollbar,
  .has-scroll-dragging .c-scrollbar {
    opacity: 1;
  }

  .c-scrollbar_thumb {
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%);
    opacity: 0.5;
    width: 7px;
    border-radius: 15px;
    margin: 2px;
    cursor: -webkit-grab;
    cursor: grab;
  }
  .has-scroll-dragging .c-scrollbar_thumb {
    cursor: -webkit-grabbing;
    cursor: grabbing;
  }

  .body-lock {
  overflow-y: hidden;
  }

  .cursor {
    cursor: pointer;
    height: 3rem;
    width: 3rem;
    position: absolute;
    z-index: 10;
    top: 0;
    opacity: 0.2;
    border-radius: 100%;
    pointer-events: none;
    &--full {
    background: var(--secondary);
    }

    &--outline {
      border: 2px solid var(--secondary);
      background: transparent;
    }
    &--smaller {
      width: 2rem;
      height: 2rem;
    }
  }
`

const GlobalStyles = () => {
  return <Global />
}

export default GlobalStyles
