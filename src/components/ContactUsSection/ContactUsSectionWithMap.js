import React, { useState } from "react"
import Container from "../Container/Container"
import { WrapperStyles } from "../Wrapper/Wrapper"
import Flex from "../Flex/Flex"
import Text from "../Text/Text"
import ContactUsForm from "./ContactUsForm"
import styled from "styled-components"
import LeafletMap from "../LeafletMap/LeafletMap"
import Email from "../../images/email-icon.svg"
import Mobile from "../../images/mobile.svg"
import Location from "../../images/location.svg"
import { motion } from "framer-motion"

const ContactWrapperStyles = styled(WrapperStyles)`
  padding-top: 108px;
  margin: 127px 123px 90px;
  @media only screen and (max-width: 1282px) {
    h2 {
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 1182px) {
    margin: 120px 60px 100px;
    width: 100%;
    max-width: 640px;
    flex-direction: column;
    > div:last-child {
      margin-left: 0;
    }
    h2 {
      font-size: 36px;
    }
  }
  @media only screen and (max-width: 1066px) {
    margin: 110px 30px 100px;
  }
  @media only screen and (max-width: 740px) {
    width: unset;
    margin: 80px 30px 76px;
  }
`

const LinkStyles = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  @media only screen and (max-width: 1082px) {
    margin-top: 24px;
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
      color: var(--body-text);
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

const ContactUsSectionWithMap = ({
  bg,
  margin,
  title,
  subtitle,
  content,
  additionalLine,
  bgForm,
  verticalForm,
}) => {
  return (
    <Container bg={bg ? bg : "var(--nav-dark-bluse)"}>
      <ContactWrapperStyles equal margin={margin ? margin : "96px 122px 129px"}>
        <Flex direction="column">
          <Text
            fontSize="10px"
            lineHeight="normal"
            fontWeight="normal"
            textTransform="uppercase"
            color={bg ? "var(--headers-color)" : "var(--white)"}
            letterSpacing="1px"
          >
            {title}
          </Text>
          <Text
            as="h2"
            fontSize="48px"
            fontWeight="500"
            lineHeight="normal"
            color={bg ? "var(--black)" : "var(--white)"}
            dangerously={subtitle}
          />
          <LinkStyles>
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
              <a href="tel:+48537787240">
                <img src={Mobile} alt="phone icon" />
                +48 537 787 240
              </a>
            </motion.li>
            <motion.li whileTap={{ scale: 0.95 }} className="wider-gap">
              <a href="https://goo.gl/maps/jr67k2fLVoJXvsZZ8">
                <img src={Location} alt="location icon" /> Pruszkowska 73,
                05&#8209;090&nbsp;Raszyn
              </a>
            </motion.li>
          </LinkStyles>
        </Flex>

        <LeafletMap
          position={[52, -0.5]}
          zoom={8}
          markerText={"Hello, this is a marker"}
        />
      </ContactWrapperStyles>
    </Container>
  )
}

export default ContactUsSectionWithMap
