import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header/Header"
import SEO from "./SEO"
import GlobalStyles from "./Styles/GlobalStyles"
import SkipNavLink from "./SkipNavLink/SkipNavLink"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "@reach/router"
import styled from "styled-components"

const StyledMain = styled(motion.main)`
  position: relative;
  /* top: -103px; */
  background: ${({ bg }) => bg};
  padding-top: 103px;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [bg, setBg] = useState("transparent")

  let pathname = useLocation().pathname

  useEffect(() => {
    setBg(pathname === "/o-xminer" ? "transparent" : "var(--main-gradient)")
  }, [pathname])
  return (
    <>
      <GlobalStyles />
      <SkipNavLink />
      <SEO />
      <Header />
      <AnimatePresence exitBeforeEnter>
        <StyledMain
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          bg={bg}
        >
          <p>Main content here</p>
          {children}
        </StyledMain>
      </AnimatePresence>
      <footer>© {new Date().getFullYear()}</footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
