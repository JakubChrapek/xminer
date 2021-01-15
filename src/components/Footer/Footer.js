import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa"
import { motion } from "framer-motion"
import { Link, useStaticQuery } from "gatsby"
import Email from "../../images/email-icon.svg"
import Mobile from "../../images/mobile.svg"
import Location from "../../images/location.svg"
import Text from "../Text/Text"
import useWindowSize from "../../utils/UseWindowSize"

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
  @media only screen and (max-width: 1140px) {
    margin: 80px 80px 32px;
  }
  @media only screen and (max-width: 1066px) {
    margin: 60px 30px 32px;
  }
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
  @media only screen and (max-width: 1066px) {
    grid-gap: 60px;
    margin-bottom: 80px;
  }
  @media only screen and (max-width: 898px) {
    grid-template-columns: 1fr 1fr;
    /* grid-template-rows: 1fr 1fr 1fr; */
    grid-gap: 32px 20px;

    > div {
      &:nth-of-type(1) {
        grid-column: 1/3;
        /* grid-row: 1/2; */
      }

      &:nth-of-type(2) {
        grid-column: 1/2;
        /* grid-row: 2/3; */
      }

      &:nth-of-type(3) {
        grid-column: 2/3;
        /* grid-row: 2/3; */
      }

      &:nth-of-type(4) {
        grid-column: 1/3;
        /* grid-row: 3/4; */
      }
    }
  }

  @media only screen and (max-width: 410px) {
    grid-gap: 24px 8px;
  }

  @media only screen and (max-width: 398px) {
    > div {
      &:nth-of-type(2),
      &:nth-of-type(3) {
        grid-column: 1/3;
      }
    }
  }

  .gatsby-image-wrapper {
    max-width: 150px;
  }

  p {
    font-size: 14px;
    line-height: 1.71;
    color: var(--gray300);
    padding-left: 9px;
    margin: 7px 0 0;
    font-weight: 300;
    width: 100%;
    max-width: 325px;
    @media only screen and (max-width: 640px) {
      width: 85%;
    }
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
    display: flex;
    flex-direction: column;
  }

  li {
    margin: 0 0 4px;
    font-size: 14px;
    line-height: 1.71;
    display: inline-flex;
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
      font-weight: 300;
      transition: color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);

      &:after {
        content: "";
        position: absolute;
        left: 10px;
        bottom: 0px;
        background-color: var(--secondary);
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
      }
      &:focus-visible {
        outline: 2px solid var(--secondary);
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

  @media only screen and (max-width: 802px) {
    flex-direction: column;
    width: calc(100% + 30px);
    margin-left: -15px;
    p {
      order: 1;
      text-align: center;
    }
    div,
    a {
      text-align: center;
    }
  }

  p,
  a {
    display: inline;
    font-weight: 300;
  }

  p,
  a {
    font-size: 14px;
    line-height: 1.71;
    color: var(--gray300);
    @media only screen and (max-width: 954px) {
      font-size: 12px;
    }
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
      background-color: var(--secondary);
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
      outline: 2px solid var(--secondary);
      outline-offset: 6px;
    }
  }
`

const LinkStyles = styled(Link)`
  &:after,
  &:before {
    content: none !important;
  }
  display: inline-flex;
  text-decoration: none;
  align-items: center;

  svg {
    width: 51px;
    height: 51px;
  }

  h1 {
    margin-left: 7px;
  }
`

const Footer = () => {
  const width = useWindowSize()
  return (
    <Wrapper>
      <FooterStyles>
        <Columns>
          <div>
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
                whileTap={{ scale: 0.95 }}
                style={{ marginLeft: -5 }}
                className="wider-gap"
              >
                <a href="mailto:kontakt@xminer.pl">
                  <img src={Email} alt="email icon" /> kontakt@xminer.pl
                </a>
              </motion.li>
              <motion.li whileTap={{ scale: 0.95 }} className="wider-gap">
                <a href="tel:+48123123123">
                  <img src={Mobile} alt="phone icon" />
                  +48 123 123 123
                </a>
              </motion.li>
              <motion.li whileTap={{ scale: 0.95 }} className="wider-gap">
                <a href="https://goo.gl/maps/jr67k2fLVoJXvsZZ8">
                  <img src={Location} alt="location icon" /> Pruszkowska 73,
                  05&#8209;090&nbsp;Raszyn
                </a>
              </motion.li>
            </ul>
          </div>
        </Columns>
        <Copyrights>
          {width > 801 ? (
            <>
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
            </>
          ) : (
            <>
              <p style={{ marginTop: "14px" }}>
                &copy; {new Date().getFullYear()} Xminer. Wszelkie prawa
                zastrzeżone. |
                <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
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
                </p>
              </div>
            </>
          )}
        </Copyrights>
      </FooterStyles>
    </Wrapper>
  )
}

export default Footer
