import React, { useState } from "react"
import Container from "../Container/Container"
import Wrapper, { WrapperStyles } from "../Wrapper/Wrapper"
import Flex from "../Flex/Flex"
import Text from "../Text/Text"
import ContactUsForm from "./ContactUsForm"
import styled from "styled-components"

const ContactWrapperStyles = styled(WrapperStyles)`
  margin: 147px 123px 129px;
  @media only screen and (max-width: 1282px) {
    h2 {
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 1140px) {
    margin: 120px 80px 100px;
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
            maxwidth={verticalForm && "523px"}
          />
          <Text
            fontSize="16px"
            margin="12px 0 0"
            fontWeight="300"
            lineHeight="normal"
            color={bg ? "var(--black)" : "var(--white)"}
            dangerously={content}
          />
          <Text
            color={bg ? "var(--black)" : "var(--white)"}
            fontWeight="300"
            margin="20px 0 0"
            dangerously={additionalLine}
          />
        </Flex>
        <ContactUsForm bg={bgForm} vertical={verticalForm} />
      </ContactWrapperStyles>
    </Container>
  )
}

export default ContactUsSection
