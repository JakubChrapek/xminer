import React, { useState } from "react"
import Container from "../Container/Container"
import Wrapper from "../Wrapper/Wrapper"
import Flex from "../Flex/Flex"
import Text from "../Text/Text"
import styled from "styled-components"

const PrivacyPolicySection = ({ bg, margin, title, subtitle, content }) => {
  return (
    <Container>
      <Wrapper margin={margin ? margin : "96px 122px 129px"}>
        <Flex alignItems="flex-start" direction="column">
          <Text
            fontSize="10px"
            lineHeight="normal"
            fontWeight="normal"
            textTransform="uppercase"
            letterSpacing="1px"
            dangerously={title}
            textAlign="left"
            color="var(--nav-dark-bluse)"
            style={{ alignSelf: "flex-start" }}
          />
          <Text
            as="h1"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
            dangerously={subtitle}
            textAlign="left"
            margin="20px 0 56px"
          />
          <Text
            fontSize="18px"
            margin="0"
            fontWeight="normal"
            lineHeight="1.67em"
            dangerously={content}
          />
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default PrivacyPolicySection
