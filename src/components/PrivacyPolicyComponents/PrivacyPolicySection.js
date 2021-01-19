import React, { useState } from "react"
import Container from "../Container/Container"
import { WrapperStyles } from "../Wrapper/Wrapper"
import Flex from "../Flex/Flex"
import Text from "../Text/Text"
import styled from "styled-components"

const PrivacyWrapperStyles = styled(WrapperStyles)`
  p {
    color: var(--body-text);
  }
  h1,
  h2,
  h3,
  h4 {
    color: var(--headers-color);
  }
  @media only screen and (max-width: 1182px) {
    margin: 200px 60px 140px;
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 22px;
    }
  }
  @media only screen and (max-width: 820px) {
    margin: 172px 30px 120px;
    h1 {
      margin: 16px 0 32px;
      font-weight: 500;
    }
    h2 {
      font-size: 18px;
      font-weight: 500;
      margin: 32px 0 8px;
    }
    h3 {
      font-size: 18px;
      font-weight: 500;
    }
    p {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 820px) {
    h1 {
      font-size: 24px;
    }
  }
`

const PrivacyPolicySection = ({ bg, margin, title, subtitle, content }) => {
  return (
    <Container>
      <PrivacyWrapperStyles margin={margin ? margin : "96px 122px 129px"}>
        <Flex alignItems="flex-start" direction="column">
          <Text
            as="span"
            fontSize="10px"
            lineHeight="normal"
            fontWeight="normal"
            textTransform="uppercase"
            letterSpacing="1px"
            dangerously={title}
            textAlign="left"
            color="var(--headers-color)"
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
            color="var(--headers-color)"
          />
          <Text
            fontSize="18px"
            margin="0"
            fontWeight="normal"
            lineHeight="1.67em"
            dangerously={content}
          />
        </Flex>
      </PrivacyWrapperStyles>
    </Container>
  )
}

export default PrivacyPolicySection
