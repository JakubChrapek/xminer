import PropTypes from "prop-types"
import React, { useState } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { Link } from "gatsby"
import Button from "../Button/Button"

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

const Navigation = ({ items }) => {
  const [show, setShow] = useState(false)

  const handleClick = e => {
    e.preventDefault()
    console.log("Clicked")
    setShow(!show)
  }
  return (
    <nav>
      <Link to="/">
        <h1>Xminer</h1>
      </Link>
      <ul>
        <li>
          <Link to="/" activeClassName="active">
            Strona główna
          </Link>
        </li>
        <li>
          <Link to="/o-xminer" activeClassName="active">
            O Xminer
          </Link>
        </li>
        <li>
          <motion.a href="" onClick={handleClick} activeClassName="active">
            Oferta <Chevron className={show && "active"} />
          </motion.a>
        </li>
        <li>
          <Link to="/blog" activeClassName="active">
            Blog
          </Link>
        </li>
        <Button size="small">Kontakt</Button>
      </ul>
    </nav>
  )
}

const HeaderStyles = styled(motion.header)`
  background-color: var(--nav-dark-bluse);

  h1 {
    font-size: 20px;
    line-height: 1em;
    font-weight: 700;
  }
  nav {
    display: flex;
    max-width: 1440px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 30px 158px 30px 103px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
  }
  li {
    padding: 0;
    margin-right: 60px;
    &:last-child {
      margin-right: 0;
    }
  }
  button {
    margin-left: 25px;
  }
  a {
    text-decoration: none;
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -3px;
      background-color: #2ec5ce;
      height: 2px;
      width: 100%;
      transform: scaleX(0);
    }

    &.active:after {
      transform: scaleX(1);
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeaderStyles>
    <Navigation items={"Strona główna"} />
  </HeaderStyles>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
