import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header/Header"
import SEO from "../components/SEO"
import GlobalStyles from "../components/Styles/GlobalStyles"
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

  const location = useLocation()

  return (
    <>
      <GlobalStyles />
      {/* <Scroll callbacks={location} /> */}
      <SEO />
      <Header />
      {/* <AnimatePresence exitBeforeEnter> */}
      <StyledMain
        key={location.pathname}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </StyledMain>
      <Footer key="footer" logo={data.datoCmsHomepage.logo} />
      {/* </AnimatePresence> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
