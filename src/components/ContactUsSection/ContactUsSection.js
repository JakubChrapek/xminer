import React, { useState } from "react"
import Container from "../Container/Container"
import Wrapper from "../Wrapper/Wrapper"
import Flex from "../Flex/Flex"
import Text from "../Text/Text"
import ContactUsForm from "./ContactUsForm"

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
      <Wrapper equal margin={margin ? margin : "96px 122px 129px"}>
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
            fontSize="48px"
            fontWeight={bg ? "600" : "500"}
            lineHeight="normal"
            color={bg ? "var(--black)" : "var(--white)"}
            dangerously={subtitle}
            maxWidth={verticalForm && "523px"}
          />
          <Text
            fontSize="16px"
            margin="12px 0 0"
            fontWeight="normal"
            lineHeight="normal"
            color={bg ? "var(--black)" : "var(--white)"}
            maxWidth="465px"
            dangerously={content}
          />
          <Text
            color={bg ? "var(--black)" : "var(--white)"}
            margin="20px 0 0"
            dangerously={additionalLine}
          />
        </Flex>
        <ContactUsForm bg={bgForm} vertical={verticalForm} />
      </Wrapper>
    </Container>
  )
}

export default ContactUsSection
