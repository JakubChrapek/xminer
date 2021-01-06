import { AnimatePresence, motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { FaPlusCircle } from "react-icons/fa"
import styled from "styled-components"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"

const FaqStyles = styled.ul`
  display: flex;
  padding: 0;
  flex-direction: column;
  margin: 96px auto 0;
  max-width: 665px;
  list-style-type: none;
  li {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 0 15px;
  }

  button {
    width: 40px;
    min-width: 40px;
    min-height: 40px;
    max-width: 40px;
    max-height: 40px;
    height: 40px;
    border: 2px solid var(--primary);
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    transition: box-shadow 0.2 cubic-bezier(0.55, 0.085, 0.68, 0.53);
    align-self: flex-start;
    margin: 8px 3px 0 0;

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
    padding: 10px 46px 12px 30px;
    align-self: flex-start;
    width: 122px;
  }

  h3 {
    margin-right: 40px;
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    padding: 19px 0 0;
  }

  section {
    margin: 0 20px 0 122px;
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
    transition: transform 0.5s cubic-bezier(0.04, 0.62, 0.23, 0.98);
  }
`

const Accordion = ({ i, expanded, setExpanded, faq }) => {
  const isOpen = i === expanded

  return (
    <motion.li key={faq.id}>
      <HeaderStyles
        initial={false}
        animate={{}}
        onClick={() => setExpanded(isOpen ? false : i)}
        expanded={isOpen}
      >
        <span>0{i + 1}</span>
        <h3>{faq.faqQuestion}</h3>
        <motion.button type="button" whileTap={{ scale: 0.95 }} />
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
            <p>{faq.faqAnswer}</p>
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
      <Wrapper direction="column">
        <Flex width="100%" direction="column" alignItems="center">
          <Text
            fontSize="10px"
            letterSpacing="1px"
            lineHeight="normal"
            textTransform="uppercase"
            fontWeight="normal"
            color="var(--nav-dark-bluse)"
          >
            Masz pytania?
          </Text>
          <Text
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
            margin="10px 0 0"
          >
            Sprawdź nasze FAQ
          </Text>
        </Flex>
        <FaqList faqs={faqData.allDatoCmsFaqContent.nodes} />
      </Wrapper>
    </Container>
  )
}

export default FAQSection
