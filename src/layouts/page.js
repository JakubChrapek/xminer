import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header/Header"
import SEO from "../components/SEO"
import GlobalStyles from "../components/Styles/GlobalStyles"
import SkipNavLink from "../components/SkipNavLink/SkipNavLink"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "@reach/router"
import styled from "styled-components"
import Footer from "../components/Footer/Footer"
import Scroll from "../components/locomotiveScroll"

const StyledMain = styled(motion.main)`
  position: relative;
  /* top: -103px; */
  background: ${({ bg }) => bg};
  /* min-height: 100vh; */
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      datoCmsHomepage {
        logo {
          fluid(maxWidth: 150) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  const [bg, setBg] = useState("transparent")

  let location = useLocation()

  // useEffect(() => {
  //   setBg(pathname === "/" ? "var(--main-gradient)" : "transparent")
  // }, [pathname])
  return (
    <>
      <GlobalStyles />
      {/* <Scroll callbacks={location} /> */}
      <SEO />
      <Header />
      {/* <SkipNavLink /> */}
      <AnimatePresence exitBeforeEnter>
        <StyledMain
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          bg={bg}
        >
          {children}
        </StyledMain>
      </AnimatePresence>
      <Footer logo={data.datoCmsHomepage.logo} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
