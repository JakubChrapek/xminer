import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Email from "../../images/email-icon.svg"
import Mobile from "../../images/mobile.svg"
import Location from "../../images/location.svg"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--nav-dark-bluse);
`

const FooterStyles = styled.footer`
  width: 100%;
  max-width: 1440px;
  margin: 96px 122px 25px;
  display: flex;
  flex-direction: column;

  .icon {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin-right: 16px;
    &:last-child {
      margin-right: 0;
    }
  }
`

const Columns = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 80px;
  margin: 0 0 102px;
  .gatsby-image-wrapper {
    max-width: 150px;
  }

  p {
    font-size: 14px;
    line-height: 1.71;
    color: var(--gray300);
    padding-left: 9px;
    margin: 7px 0 0;
  }

  .socials {
    margin-top: 24px;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    color: var(--white);
    margin: 0 0 18px 10px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  li {
    margin: 0 0 4px;
    font-size: 14px;
    line-height: 1.71;
    display: flex;
    align-items: center;
    &:last-child {
      margin: 0;
    }
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: var(--gray300);
      position: relative;
      padding: 6px 10px;

      &:after {
        content: "";
        position: absolute;
        left: 10px;
        bottom: 0px;
        background-color: var(--primary);
        height: 2px;
        width: calc(100% - 20px);
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

      img {
        margin-right: 8px;
      }
    }

    &.wider-gap {
      margin: 0 0 16px;
    }
  }
`

const Copyrights = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  p,
  a {
    display: inline;
  }

  p,
  a {
    font-size: 14px;
    line-height: 1.71;
    color: var(--gray300);
  }
  a {
    text-decoration: none;
    position: relative;
    padding: 6px 5px;

    &:after {
      content: "";
      position: absolute;
      left: 4px;
      bottom: 0px;
      background-color: var(--primary);
      height: 2px;
      width: calc(100% - 8px);
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

const Footer = ({ logo }) => {
  return (
    <Wrapper>
      <FooterStyles>
        <Columns>
          <div>
            <Link to="/">
              <Img fluid={logo.fluid} />
            </Link>
            <p>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
              nunc quam ac sed turpis volutpat. Cursus sed massa non nisi,
              placerat.
            </p>
            <div className="socials">
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
                <FaFacebookF size="14px" color="var(--white)" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="icon"
                href=""
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram size="14px" color="var(--white)" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                className="icon"
                href=""
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaYoutube size="14px" color="var(--white)" />
              </motion.a>
            </div>
          </div>
          <div>
            <h3>Menu</h3>
            <ul>
              <li>
                <Link to="/">Strona główna</Link>
              </li>
              <li>
                <Link to="/o-xminer">O Xminer</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/kontakt">Kontakt</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Oferta</h3>
            <ul>
              <li>
                <Link to="/sprzedaz">Sprzedaż</Link>
              </li>
              <li>
                <Link to="/serwis-i-kolokacja">Serwis i kolokacja</Link>
              </li>
              <li>
                <Link to="/uslugi-dodatkowe">Usługi dodatkowe</Link>
              </li>
              <li>
                <Link to="/dla-poczatkujacych">Dla początkujących</Link>
              </li>
              <li>
                <Link to="/dla-inwestorow">Dla inwestorów</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Znajdź nas</h3>
            <ul>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ marginLeft: -5 }}
                className="wider-gap"
              >
                <a
                  className="without-underline"
                  href="mailto:kontakt@xminer.pl"
                >
                  <img src={Email} alt="email icon" /> kontakt@xminer.pl
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="wider-gap"
              >
                <a className="without-underline" href="tel:+48123123123">
                  <img src={Mobile} alt="phone icon" />
                  +48 123 123 123
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="wider-gap"
              >
                <a
                  className="without-underline"
                  href="https://goo.gl/maps/jr67k2fLVoJXvsZZ8"
                >
                  <img src={Location} alt="location icon" /> Ostrobramska 101A,
                  <br />
                  04-041 Warszawa
                </a>
              </motion.li>
            </ul>
          </div>
        </Columns>
        <Copyrights>
          <p>
            &copy; {new Date().getFullYear()} Xminer. Wszelkie prawa
            zastrzeżone.
          </p>
          <div>
            <p>
              Stronę stworzyli{" "}
              <a
                href="https://kryptonumstudio.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Kryptonum Studio
              </a>{" "}
              &
              <a
                href="https://agathadesign.co.uk/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Agatha Design
              </a>
              |
            </p>
            <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
          </div>
        </Copyrights>
      </FooterStyles>
    </Wrapper>
  )
}

export default Footer
