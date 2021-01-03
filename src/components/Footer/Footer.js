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
  margin: 96px 120px 25px;
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
                  scale: 1.05,
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="icon"
                href=""
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram size="14px" color="var(--white)" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
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
                <Link to="/hosting">Hosting</Link>
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
              <li>
                <a href="mailto:kontakt@xminer.pl">
                  <img src={Email} alt="email icon" /> kontakt@xminer.pl
                </a>
              </li>
              <li>
                <a href="tel:+48123123123">
                  <img src={Mobile} alt="phone icon" />
                  +48 123 123 123
                </a>
              </li>
              <li>
                <a href="https://goo.gl/maps/jr67k2fLVoJXvsZZ8">
                  <img src={Location} alt="location icon" /> Ostrobramska 101A,
                  04-041 Warszawa
                </a>
              </li>
            </ul>
          </div>
        </Columns>
      </FooterStyles>
    </Wrapper>
  )
}

export default Footer
