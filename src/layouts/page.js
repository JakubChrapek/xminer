import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/Header/Header"
import SEO from "../components/SEO"
import GlobalStyles from "../components/Styles/GlobalStyles"
import SkipNavLink from "../components/SkipNavLink/SkipNavLink"
import { AnimatePresence, motion } from "framer-motion"
import { useLocation } from "@reach/router"
import styled, { css } from "styled-components"
import Footer from "../components/Footer/Footer"

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

  let pathname = useLocation().pathname

  useEffect(() => {
    setBg(pathname === "/" ? "var(--main-gradient)" : "transparent")
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
          initial={{}}
          animate={{}}
          exit={{ opacity: 0, transition: { duration: 0 } }}
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
