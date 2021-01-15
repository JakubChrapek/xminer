import { AnimatePresence, motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"
import styled, { css } from "styled-components"
import useWindowSize from "../../../utils/UseWindowSize"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import { WrapperStyles } from "../../Wrapper/Wrapper"

const FaqWrapperStyles = styled(WrapperStyles)`
  @media only screen and (max-width: 862px) {
    margin: 70px 60px 100px;
    h3 {
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 640px) {
    margin: 70px 30px 100px;
    h3 {
      font-size: 24px;
    }

    span,
    h3 {
      align-self: flex-start;
    }
  }
`

const FaqStyles = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  margin: 96px auto 0;
  max-width: 665px;
  list-style-type: none;
  @media only screen and (max-width: 640px) {
    max-width: unset;
    margin-top: 110px;
  }
  li {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 0 15px;
    @media only screen and (max-width: 640px) {
      padding: 0;
      justify-content: center;
    }
  }

  button {
    width: 40px;
    min-width: 40px;
    min-height: 40px;
    max-width: 40px;
    max-height: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 3px var(--primary);
    border: none;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
    transition: box-shadow 0.2 cubic-bezier(0.04, 0.62, 0.23, 0.98),
      transform 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98);
    align-self: flex-start;
    margin: 8px 3px 0 0;
    @media only screen and (max-width: 640px) {
      align-self: center;
      margin-top: 0;
    }
    position: relative;

    &:before,
    &:after {
      content: "";
      position: absolute;
      width: 17px;
      height: 2px;
      background-color: var(--headers-color);
      transition: transform 0.2s 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        opacity 0.2s 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);
    }

    &:after {
      transform: rotate(90deg);
    }

    &:focus,
    &:active {
      outline: none;
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px var(--primary);
    }
  }

  span {
    font-size: 36px;
    font-weight: bold;
    padding: 10px 46px 0 30px;
    align-self: flex-start;
    width: 115px;
    transition: transform 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98);
    color: var(--headers-color);
  }

  h3 {
    margin-right: 40px;
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    padding: 19px 0 11px;
    color: var(--headers-color);
  }

  section {
    margin: 0 20px 0 115px;
    p {
      color: var(--body-text);
    }
  }
  @media only screen and (max-width: 640px) {
    h3 {
      font-size: 14px;
      margin-right: 8px;
    }
    section {
      margin: 0 20px 0 0;
      p {
        color: var(--body-text);
        margin-bottom: 20px;
      }
    }
    span,
    h3 {
      align-self: center;
    }
  }
`

const HeaderStyles = styled(motion.header)`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  cursor: pointer;
  border-top: 3px solid var(--light-aqua);
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: var(--primary);
    transform: ${({ expanded }) => (expanded ? "scaleX(1)" : "scaleX(0.22)")};
    transform-origin: left center;
    transition: transform 0.4s cubic-bezier(0.04, 0.62, 0.23, 0.98);
  }

  &:hover {
    span {
      transform: translateX(4px);
    }
    button {
      transform: scale(1.05);
    }
    &:before {
      transform: ${({ expanded }) => (expanded ? "scaleX(1)" : "scaleX(0.25)")};
    }
  }

  &:active {
    button {
      transform: scale(0.95);
    }
  }
  ${({ expanded }) =>
    expanded &&
    css`
      button {
        transform: scale(1.05);
        &:after {
          opacity: 0;
        }
      }
      span {
        transform: translateX(4px);
      }
    `}

  @media only screen and (max-width: 640px) {
    align-items: center;
    padding: 21px 0;
    h3 {
      padding: 0;
    }
  }
`

const Accordion = ({ i, expanded, setExpanded, faq }) => {
  const isOpen = i === expanded
  const width = useWindowSize()

  return (
    <motion.li key={faq.id}>
      <HeaderStyles
        initial={false}
        animate={{}}
        onClick={() => setExpanded(isOpen ? false : i)}
        expanded={isOpen}
      >
        {width > 640 && <span>0{i + 1}</span>}
        <h3 dangerouslySetInnerHTML={{ __html: faq.faqQuestion }} />
        <button type="button" />
      </HeaderStyles>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p dangerouslySetInnerHTML={{ __html: faq.faqAnswer }} />
          </motion.section>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

const FaqList = ({ faqs }) => {
  const [expanded, setExpanded] = useState(false)
  return (
    <FaqStyles>
      {faqs.map((faq, i) => (
        <Accordion
          i={i}
          faq={faq}
          expanded={expanded}
          setExpanded={setExpanded}
        />
      ))}
    </FaqStyles>
  )
}

const faqQuery = graphql`
  query MyQuery {
    allDatoCmsFaqContent(sort: { order: ASC, fields: meta___createdAt }) {
      nodes {
        faqAnswer
        faqQuestion
        id
      }
    }
  }
`

const FAQSection = () => {
  const faqData = useStaticQuery(faqQuery)
  return (
    <Container>
      <FaqWrapperStyles direction="column">
        <Flex width="100%" direction="column" alignItems="center">
          <Text
            as="span"
            fontSize="10px"
            letterSpacing="1px"
            lineHeight="normal"
            textTransform="uppercase"
            fontWeight="normal"
            color="var(--headers-color)"
          >
            Masz pytania?
          </Text>
          <Text
            as="h3"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
            margin="10px 0 0"
            color="var(--headers-color)"
          >
            Sprawdź nasze FAQ
          </Text>
        </Flex>
        <FaqList faqs={faqData.allDatoCmsFaqContent.nodes} />
      </FaqWrapperStyles>
    </Container>
  )
}

export default FAQSection
