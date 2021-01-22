import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import Header from "../components/Header/Header"
import SEO from "../components/SEO"
import GlobalStyles from "../components/Styles/GlobalStyles"
import { motion } from "framer-motion"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import Footer from "../components/Footer/Footer"
import Scroll from "../components/locomotiveScroll"
import useMousePosition from "../utils/useMousePosition"
import useWindowSize from "../utils/UseWindowSize"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../utils/cursorContext"

const StyledMain = styled(motion.main)`
  position: relative;
  background: ${({ bg }) => bg};
`

const Layout = ({ children }) => {
  const dispatch = useGlobalDispatchContext()
  const { cursorShow, cursorType, cursorSize } = useGlobalStateContext()
  const location = useLocation()
  const [menuState, setMenuState] = useState(false)
  const width = useWindowSize()

  // Locking the body from scrolling when menu is opened
  useEffect(() => {
    menuState
      ? document.body.classList.add("body-lock")
      : document.body.classList.remove("body-lock")
  }, [menuState])

  const { x, y } = useMousePosition()

  return (
    <>
      <Scroll callbacks={location} />
      {width > 1024 && (
        <motion.div
          animate={{
            x: x - 16,
            y: y - 16,
            scale: cursorShow ? 1.2 : 1,
            opacity: cursorShow ? 0.8 : 0,
          }}
          transition={{
            ease: "linear",
            duration: 0.1,
          }}
          className={`${
            cursorType === "full"
              ? "cursor cursor--full"
              : "cursor cursor--outline"
          } ${cursorSize === "small" ? "cursor--smaller" : ""}`}
        />
      )}
      <GlobalStyles />
      <SEO />
      <Header
        menuState={menuState}
        setMenuState={setMenuState}
        dispatch={dispatch}
      />
      <StyledMain key={location.pathname}>{children}</StyledMain>
      <Footer dispatch={dispatch} key="footer" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
