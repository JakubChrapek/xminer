import React, { useState, useEffect } from "react"
import {gsap} from 'gsap'
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
import {LineAnimationWrapper} from "../Styles/Animations"

const ContactWrapperStyles = styled(WrapperStyles)`
  visibility: hidden;
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
      border-radius: 8px;
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
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.wrapper', {
      autoAlpha: 1,
    })
    .from(['.contact--header', '.contact--subheader'], 2, {
      opacity: 0,
      y: 12,
      ease: "power4.out",
      stagger: {
        amount: 0.5
      }
    })
    .from('.contact--item', 1.6, {
      opacity: 0,
      y: 10,
      ease: "power4.out",
      stagger: {
        amount: 0.5
      }
    }, "-=1.2")
    .from('.map', 1.6, {
      opacity: 0,
      scale: 0.95,
      ease: "power4.out"
    }, "<0.4")
  }, [])

  return (
    <Container>
      <ContactWrapperStyles className="wrapper" equal margin={margin ? margin : "96px 122px 129px"}>
        <Flex direction="column">
          <Text
            fontSize="10px"
            lineHeight="normal"
            fontWeight="normal"
            textTransform="uppercase"
            color="var(--headers-color)"
            letterSpacing="1px"
            className="contact--header"
          >
            {title}
          </Text>
          <Text
            as="h2"
            fontSize="48px"
            fontWeight="500"
            lineHeight="normal"
            color="var(--headers-color)"
            dangerously={subtitle}
            className="contact--subheader"
          />
          <LinkStyles>
            <motion.li 
              whileTap={{ scale: 0.98 }}
              style={{ marginLeft: -5 }}
              className="wider-gap contact--item"
            >
              <a href="mailto:kontakt@xminer.pl">
                <img src={Email} alt="email icon" /> kontakt@xminer.pl
              </a>
            </motion.li>
            <motion.li  whileTap={{ scale: 0.98 }} className="wider-gap contact--item">
              <a href="tel:+48537787240">
                <img src={Mobile} alt="phone icon" />
                +48 537 787 240
              </a>
            </motion.li>
            <motion.li  whileTap={{ scale: 0.98 }} className="wider-gap contact--item">
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
          className="map"
        />
      </ContactWrapperStyles>
    </Container>
  )
}

export default ContactUsSectionWithMap
