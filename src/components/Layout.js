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
import Footer from "./Footer/Footer"

const StyledMain = styled(motion.main)`
  position: relative;
  /* top: -103px; */
  background: ${({ bg }) => bg};
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
    setBg(pathname === "/o-xminer" ? "transparent" : "var(--main-gradient)")
  }, [pathname])
  return (
    <>
      <GlobalStyles />
      <SkipNavLink />
      <SEO />
      <Header />
      {/* <AnimatePresence exitBeforeEnter> */}
      <StyledMain key={pathname} initial={{}} animate={{}} exit={{}} bg={bg}>
        {children}
      </StyledMain>
      {/* </AnimatePresence> */}
      <Footer logo={data.datoCmsHomepage.logo} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
