import PropTypes from "prop-types"
import React, { useEffect, useState } from "react"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import styled, { css } from "styled-components"
import { Link, useStaticQuery } from "gatsby"
import Button from "../Button/Button"
import { containerTransition, itemTransition } from "../Styles/Animations"
import { useLocation } from "@reach/router"
import ButtonLink from "../ButtonLink/ButtonLink"
import Img from "gatsby-image"
import Text from "../Text/Text"
import useWindowSize from "../../utils/UseWindowSize"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

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
    @media only screen and (max-width: 980px) {
      background-color: var(--headers-color);
    }
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
  z-index: 3;
  top: 119px;
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
    color: var(--headers-color);
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
        background-color: var(--secondary);
      }
    }
  }
`

const LinkStyles = styled(Link)`
  &:after,
  &:before {
    content: none !important;
  }
  display: inline-flex;
  align-items: center;

  svg {
    width: 51px;
    height: 51px;
  }

  h1 {
    margin-left: 7px;
  }
  @media only screen and (max-width: 640px) {
    svg {
      width: 38px;
      height: 38px;
    }
    h1 {
      font-size: 20px;
      margin-left: 8px;
    }
  }
`

const ToggleMenuButton = styled(motion.button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 35px;
  height: 23px;
  background-color: transparent;
  border: none;
  position: relative;

  &:active,
  &:focus {
    outline: none;
  }
  span {
    width: 100%;
    height: 3px;
    background-color: var(--white);
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      opacity 0.15s 0.05s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    &:nth-child(2) {
      width: 57%;
      top: 50%;
      right: 0;
      left: unset;
      transform: translate(0, -50%);
    }
    &:nth-child(3) {
      bottom: 0;
      top: unset;
    }
  }

  ${({ closed }) =>
    closed &&
    css`
      span {
        &:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        &:nth-child(2) {
          transform: translateX(-35px);
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(8px, -8px);
        }
      }
    `};
`

const MobileNavStyles = styled(motion.ul)`
  display: flex;
  position: fixed;
  flex-direction: column;
  position: absolute;
  top: 121px;
  padding: 37px 58px;
  background-color: var(--white);
  width: 100%;
  @media only screen and (max-width: 560px) {
    min-height: 100vh;
    padding: 37px 38px;
  }
  @media only screen and (max-width: 400px) {
    padding: 37px 30px;
  }
  justify-content: flex-start !important;
  align-items: flex-start !important;
  li {
    margin-top: 10px;

    &:first-child {
      margin-top: 0;
    }
  }
  a {
    color: var(--headers-color) !important;
    justify-content: flex-start !important;

    &:after {
      bottom: 5px !important;
    }
  }

  p {
    a {
      justify-content: flex-start;
      color: var(--body-text) !important;
      display: inline-block;
      font-size: 16px !important;
    }
  }

  div {
    > a {
      background-color: var(--footer-bg);
      border-radius: 50%;
      width: 30px;
      height: 30px;
      padding: 4px;
      justify-content: center !important;
      &:first-of-type {
        margin-right: 8px;
      }
      &:last-of-type {
        margin-left: 8px;
      }
    }
  }
`

const Navigation = () => {
  const [show, setShow] = useState(false)
  const [menuClosed, setMenuClosed] = useState(false)
  const [offerOpened, setOfferOpened] = useState(false)
  const pathname = useLocation().pathname
  const width = useWindowSize()

  const handleClick = e => {
    e.preventDefault()
    setShow(!show)
  }

  useEffect(() => {
    setShow(false)
    setOfferOpened(false)
    setMenuClosed(false)
  }, [pathname])
  return (
    <>
      <nav>
        <LinkStyles to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="214"
            height="190"
            fill="none"
            viewBox="0 0 214 190"
          >
            <path
              fill="url(#paint0_linear)"
              d="M152.152 0h-90.89c-5.65 0-10.87 3.01-13.7 7.91L2.123 86.62c-2.83 4.89-2.83 10.92 0 15.82l45.44 78.71c2.83 4.89 8.05 7.91 13.7 7.91h90.89c5.65 0 10.871-3.01 13.701-7.91l45.439-78.71c2.83-4.89 2.83-10.92 0-15.82l-45.45-78.71c-2.82-4.9-8.04-7.91-13.69-7.91z"
            />
            <path
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="7"
              d="M91.132 57.86l15.52 19.99 16.41-21.5h23.21l-28.15 36.9 41.54 54.66H51.272V57.95"
            />
            <path
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="7"
              d="M162.132 119.36l.11-79.91H53.862l41.53 54.65-28.15 36.91h23.22l16.41-21.51 14.89 19.73"
            />
            <path
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="7"
              d="M60.873 70.76l-9.46-14.23-8.71 14.23"
            />
            <path
              stroke="#fff"
              strokeMiterlimit="10"
              strokeWidth="3"
              d="M162.292 128.97c2.762 0 5-2.239 5-5s-2.238-5-5-5c-2.761 0-5 2.239-5 5s2.239 5 5 5zM88.272 59.95c2.762 0 5-2.239 5-5s-2.238-5-5-5c-2.761 0-5 2.239-5 5s2.239 5 5 5zM124.283 137.98c2.761 0 5-2.239 5-5s-2.239-5-5-5c-2.762 0-5 2.239-5 5s2.238 5 5 5z"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="179.966"
                x2="33.445"
                y1="21.265"
                y2="167.787"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#29ABE2" />
                <stop offset=".994" stop-color="#1FADAD" />
              </linearGradient>
            </defs>
          </svg>
          <Text
            as="h1"
            fontSize="24px"
            fontWeight="bold"
            color="var(--white)"
            lineHeight="normal"
          >
            Xminer
          </Text>
        </LinkStyles>
        <ul>
          {width > 980 && (
            <>
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
                    bg={width <= 980 && "var(--headers-color)"}
                  />
                </motion.a>
              </motion.li>
              <motion.li whileTap={{ scale: 0.95 }}>
                <Link to="/blog" activeClassName="active">
                  Blog
                </Link>
              </motion.li>
              <ButtonLink
                size="small"
                to="/kontakt"
                className="no-underline without-padding-right"
              >
                Kontakt
              </ButtonLink>
            </>
          )}
          {width <= 980 && (
            <ToggleMenuButton
              closed={menuClosed}
              onClick={() => setMenuClosed(!menuClosed)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span />
              <span />
              <span />
            </ToggleMenuButton>
          )}
        </ul>
      </nav>
      <AnimateSharedLayout>
        <AnimatePresence>
          {width <= 980 && menuClosed && (
            <MobileNavStyles
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <motion.li layout whileTap={{ scale: 0.95 }}>
                <Link to="/" activeClassName="active">
                  Strona główna
                </Link>
              </motion.li>
              <motion.li layout whileTap={{ scale: 0.95 }}>
                <Link to="/o-xminer" activeClassName="active">
                  O Xminer
                </Link>
              </motion.li>
              <motion.li layout>
                <motion.a
                  whileTap={{ scale: 0.95 }}
                  layout
                  href=""
                  onClick={e => {
                    e.preventDefault()
                    setOfferOpened(!offerOpened)
                  }}
                  activeClassName="active"
                  className="without-underline"
                >
                  Oferta{" "}
                  <Chevron
                    whileHover={{ scale: 1.05, y: 2 }}
                    whileTap={{ scale: 0.9 }}
                    layout
                    className={show && "active"}
                    onClick={() => setOfferOpened(!offerOpened)}
                    style={offerOpened && { rotate: 180, y: 2 }}
                  />
                </motion.a>
                {offerOpened && (
                  <motion.div
                    layout
                    style={{
                      display: "flex",
                      marginLeft: "28px",
                      flexDirection: "column",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.p layout key="sprzedaz">
                      <Link to="/sprzedaz" activeClassName="active">
                        Sprzedaż
                      </Link>
                    </motion.p>
                    <motion.p layout key="uslugi">
                      <Link to="/uslugi-dodatkowe" activeClassName="active">
                        Usługi dodatkowe
                      </Link>
                      <motion.p layout key="serwis">
                        <Link to="/serwis-i-kolokacja" activeClassName="active">
                          Serwis i kolokacja
                        </Link>
                      </motion.p>
                      <motion.p layout key="Dla początkujących">
                        <Link to="/dla-poczatkujacych" activeClassName="active">
                          Dla początkujących
                        </Link>
                      </motion.p>
                      <motion.p layout key="Dla inwestorów">
                        <Link to="/dla-inwestorow" activeClassName="active">
                          Dla inwestorów
                        </Link>
                      </motion.p>
                    </motion.p>
                  </motion.div>
                )}
              </motion.li>
              <motion.li layout whileTap={{ scale: 0.95 }}>
                <Link layout to="/blog" activeClassName="active">
                  Blog
                </Link>
              </motion.li>
              <ButtonLink
                alignSelf="center"
                to="/kontakt"
                whileTap={{ scale: 0.95 }}
                className="no-underline"
                size="small"
                padding="8px 20px"
                margin="24px 0"
                layout
              >
                Kontakt
              </ButtonLink>
              <motion.div
                layout
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <motion.a
                  whileHover={{
                    scale: 1.2,
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="icon"
                  href=""
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaFacebookF size="20px" color="var(--white)" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="icon"
                  href=""
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaInstagram size="20px" color="var(--white)" />
                </motion.a>
              </motion.div>
            </MobileNavStyles>
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
      <AnimatePresence exitBeforeEnter>
        {show && (
          <SubnavWrapper
            variants={containerTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <motion.ul>
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
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 3;
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
    z-index: 3;
    justify-content: space-between;
    align-items: center;
    margin: 30px 158px 30px 103px;
    @media only screen and (max-width: 1180px) {
      margin: 27px 60px 27px 40px;
    }
    @media only screen and (max-width: 820px) {
      margin: 27px 38px 27px 8px;
    }
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
    border-radius: 8px;
    display: flex;
    @media only screen and (max-width: 820px) {
      display: inline-flex;
    }
    justify-content: center;
    align-items: center;
    position: relative;
    transition: color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      background-position 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
      box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);

    &:after {
      content: "";
      position: absolute;
      left: 20px;
      bottom: 0px;
      background-color: var(--secondary);
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
    &:focus,
    &:active,
    &.active,
    &[aria-current] {
      outline: none;
      &:after {
        transform: scaleX(1);
      }
    }
    &.active,
    &[aria-current] {
      color: var(--secondary);
      &:after {
        transform: scaleX(1);
      }
    }
    &:focus-visible {
      box-shadow: 0 0 0 2px var(--secondary);
      outline: none;
      &:after {
        content: none !important;
      }
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
      bg={pathname === "/" ? "transparent" : "var(--nav-dark-bluse)"}
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
