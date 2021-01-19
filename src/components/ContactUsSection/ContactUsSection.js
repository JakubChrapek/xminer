import React, { useState } from "react"
import Container from "../Container/Container"
import { WrapperStyles } from "../Wrapper/Wrapper"
import Flex from "../Flex/Flex"
import Text from "../Text/Text"
import ContactUsForm from "./ContactUsForm"
import styled from "styled-components"
import useWindowSize from "../../utils/UseWindowSize"

const ContactWrapperStyles = styled(WrapperStyles)`
  margin: 127px 123px 90px;
  @media only screen and (min-width: 1182px) {
    width: 100%;
    margin: 127px 0 90px;
    padding: 0 123px;
    > div:first-child {
      padding-right: 60px;
    }
  }
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
      font-size: 32px;
    }
  }
  @media only screen and (max-width: 1066px) {
    margin: 110px 30px 100px;
  }
  @media only screen and (max-width: 740px) {
    width: unset;
    margin: 80px 30px 30px;
    h2 {
      font-size: 24px;
    }
  }
`

const ContactUsSection = ({
  bg,
  margin,
  title,
  subtitle,
  content,
  additionalLine,
  bgForm,
  verticalForm,
}) => {
  const width = useWindowSize()
  return (
    <Container bg={bg ? bg : "var(--nav-dark-bluse)"}>
      <ContactWrapperStyles equal margin={margin ? margin : "96px 122px 129px"}>
        <Flex direction="column">
          <Text
            fontSize="10px"
            lineHeight="normal"
            fontWeight="normal"
            textTransform="uppercase"
            color={bg ? "var(--nav-dark-bluse)" : "var(--white)"}
            letterSpacing="1px"
          >
            {title}
          </Text>
          <Text
            as="h2"
            fontSize="48px"
            fontWeight={bg ? "600" : "500"}
            lineHeight="normal"
            color={bg ? "var(--black)" : "var(--white)"}
            dangerously={subtitle}
            maxwidth={verticalForm && "523px"}
            margin={width <= 640 && "6px 0 10px"}
          />
          <Text
            fontSize="16px"
            margin="12px 0 0"
            fontWeight="normal"
            lineHeight="normal"
            color={bg ? "var(--black)" : "var(--white)"}
            dangerously={content}
          />
          <Text
            color={bg ? "var(--black)" : "var(--white)"}
            margin="20px 0 0"
            fontWeight="normal"
            dangerously={additionalLine}
          />
        </Flex>
        <ContactUsForm bg={bgForm} vertical={verticalForm} />
      </ContactWrapperStyles>
    </Container>
  )
}

export default ContactUsSection
