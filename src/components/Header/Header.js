import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import styled from "styled-components"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { containerTransition, itemTransition } from "../Styles/Animations"
import { useLocation } from "@reach/router"
import ButtonLink from "../ButtonLink/ButtonLink"

const Chevron = styled(motion.span)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
  position: relative;
  width: 11px;
  height: 23px;
  &:after,
  &:before {
    content: "";
    position: absolute;
    background-color: var(--white);
    width: 7px;
    height: 2px;
    transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  &:after {
    left: 0;
    top: 50%;
    transform: rotate(45deg);
  }
  &:before {
    right: 0;
    top: 50%;
    transform: rotate(-45deg);
  }
  &.active {
    &:after {
      transform: rotate(-45deg);
    }
    &:before {
      transform: rotate(45deg);
    }
  }
`

const SubnavWrapper = styled(motion.div)`
  display: flex;
  position: absolute;
  z-index: 1;
  top: 103px;
  width: 100%;
  background-color: var(--white);
  justify-content: center;
  align-items: center;
  > ul {
    padding: 60px 120px 60px 0px;
    max-width: 740px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start !important;
    justify-content: space-between !important;
  }

  h3 {
    margin: 0 0 12px 20px;
    color: var(--nav-dark-bluse);
    font-size: 20px;
    line-height: 1.5em;
    font-weight: 500;
  }
`

const StyledColumn = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;

  li {
    margin: 4px 0 0;
    margin-right: 0 !important;
    a {
      padding: 4px 20px;
      color: var(--gray3);
      font-size: 14px;
      line-height: 1.71em;
      font-weight: 400;

      &:after {
        background-color: var(--nav-dark-bluse);
      }
    }
  }
`

const Navigation = () => {
  const [show, setShow] = useState(false)
  const pathname = useLocation().pathname

  const handleClick = e => {
    e.preventDefault()
    console.log("Clicked")
    setShow(!show)
  }

  useEffect(() => {
    setShow(false)
  }, [pathname])
  return (
    <>
      <nav>
        <Link to="/">
          <h1>Xminer</h1>
        </Link>
        <ul>
          <motion.li whileTap={{ scale: 0.95 }}>
            <Link to="/" activeClassName="active">
              Strona główna
            </Link>
          </motion.li>
          <motion.li whileTap={{ scale: 0.95 }}>
            <Link to="/o-xminer" activeClassName="active">
              O Xminer
            </Link>
          </motion.li>
          <motion.li whileTap={{ scale: 0.95 }}>
            <motion.a
              href=""
              whileTap={{ scale: 0.95 }}
              onClick={handleClick}
              activeClassName="active"
              className="without-underline"
            >
              Oferta{" "}
              <Chevron
                whileHover={{ scale: 1.05, y: 2 }}
                whileTap={{ scale: 0.9 }}
                className={show && "active"}
              />
            </motion.a>
          </motion.li>
          <motion.li whileTap={{ scale: 0.95 }}>
            <Link to="/blog" activeClassName="active">
              Blog
            </Link>
          </motion.li>
          <ButtonLink
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="no-underline"
            size="small"
            to="/kontakt"
          >
            Kontakt
          </ButtonLink>
        </ul>
      </nav>
      <AnimatePresence exitBeforeEnter>
        {show && (
          <SubnavWrapper
            variants={containerTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.ul
              variants={containerTransition}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.li variants={itemTransition}>
                <motion.h3>Inwestycja</motion.h3>
                <StyledColumn>
                  <motion.li>
                    <Link to="/sprzedaz">Sprzedaż</Link>
                  </motion.li>
                  <motion.li>
                    <Link to="/serwis-i-kolokacja">Serwis i Kolokacja</Link>
                  </motion.li>
                  <motion.li>
                    <Link to="/uslugi-dodatkowe">Usługi dodatkowe</Link>
                  </motion.li>
                </StyledColumn>
              </motion.li>
              <motion.li variants={itemTransition}>
                <motion.h3>Dla początkujących</motion.h3>
                <StyledColumn>
                  <motion.li>
                    <Link to="/dla-poczatkujacych">Oferta</Link>
                  </motion.li>
                </StyledColumn>
              </motion.li>
              <motion.li variants={itemTransition}>
                <motion.h3>Dla inwestorów</motion.h3>
                <StyledColumn>
                  <motion.li>
                    <Link to="/dla-inwestorow">Oferta</Link>
                  </motion.li>
                </StyledColumn>
              </motion.li>
            </motion.ul>
          </SubnavWrapper>
        )}
      </AnimatePresence>
    </>
  )
}

const HeaderStyles = styled(motion.header)`
  background: ${({ bg }) => (bg ? bg : "transparent")};
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 2;
  /* transition: background 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19); */
  h1 {
    font-size: 20px;
    line-height: 1em;
    font-weight: 700;
  }
  nav {
    display: flex;
    width: 100%;
    max-width: 1440px;
    z-index: 2;
    justify-content: space-between;
    align-items: center;
    margin: 30px 158px 30px 103px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }
  li {
    margin-right: 20px;
    &:last-child {
      padding: 0;
      margin-right: 0;
    }
  }
  button {
    margin-left: 25px;
  }
  a {
    padding: 8px 20px;
    text-decoration: none;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 20px;
      bottom: 0px;
      background-color: var(--primary);
      height: 2px;
      width: calc(100% - 40px);
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    &.without-underline:after {
      content: none;
    }
    &:hover,
    &.active,
    &:focus,
    &:active,
    &[aria-current] {
      outline: none;
      &:after {
        transform: scaleX(1);
      }
    }
    &:focus-visible {
      outline: 2px solid var(--primary);
      outline-offset: 6px;
    }
  }
`

const Header = () => {
  const [bg, setBg] = useState("transparent")
  let pathname = useLocation().pathname

  // useEffect(() => {
  //   pathname === "/o-xminer"
  //     ? setBg("var(--nav-dark-bluse)")
  //     : setBg("transparent")
  // }, [pathname])
  // useEffect(() => {
  //   console.log("HEADER RENDER")
  // }, [])
  return (
    <HeaderStyles
      bg={pathname === "/o-xminer" ? "var(--nav-dark-bluse)" : "transparent"}
    >
      <Navigation />
    </HeaderStyles>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
