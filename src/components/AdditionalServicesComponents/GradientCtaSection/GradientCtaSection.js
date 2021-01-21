import React from "react"
import styled from "styled-components"
import Button from "../../Button/Button"
import ButtonLink from "../../ButtonLink/ButtonLink"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import { WrapperStyles } from "../../Wrapper/Wrapper"

const GradientWrapperStyles = styled(WrapperStyles)`
  @media only screen and (max-width: 1182px) {
    margin: 118px 30px 54px;
    h2 {
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 960px) {
    margin: 118px 48px 100px;
    h2 {
      font-size: 32px;
    }
  }
  @media only screen and (max-width: 640px) {
    h2 {
      font-size: 24px;
    }

    a {
      margin-top: 52px;
    }
  }
  @media only screen and (max-width: 360px) {
    h2 {
      margin: 6px -15px 20px;
    }
  }
`

const GradientCtaSection = ({
  title,
  subtitle,
  content,
  additionalLine,
  btnText,
  btnLink,
  contentWidth,
  margin,
  btnMargin,
}) => {
  return (
    <Container
      margin={margin}
      bg="linear-gradient(135deg, #29abe2, rgba(255, 255, 255, 0)), linear-gradient(to bottom, var(--primary), var(--primary))"
    >
      <GradientWrapperStyles margin="109px 40px 50px">
        <Flex width="100%" direction="column" alignItems="center">
          {title && (
            <Text
              as="h1"
              color="var(--faded-aqua)"
              fontSize="10px"
              letterSpacing="1px"
              textTransform="uppercase"
            >
              {title}
            </Text>
          )}
          {subtitle && (
            <Text
              as="h2"
              color="var(--faded-aqua)"
              fontSize="48px"
              fontWeight="500"
              lineHeight="normal"
              margin="9px 0 24px"
              maxwidth="536px"
              textAlign="center"
              maxwidth={contentWidth}
            >
              {subtitle}
            </Text>
          )}
          {content && (
            <Text
              maxwidth="780px"
              textAlign="center"
              fontSize="16px"
              lineHeight="normal"
              fontWeight="300"
              color="var(--faded-aqua)"
              maxwidth={contentWidth}
            >
              {content}
            </Text>
          )}
          {additionalLine && (
            <Text
              maxwidth="780px"
              textAlign="center"
              fontSize="16px"
              lineHeight="normal"
              fontWeight="300"
              color="var(--faded-aqua)"
              margin="24px 0 0"
            >
              {additionalLine}
            </Text>
          )}
          {btnText && (
            <ButtonLink
              margin={btnMargin ? btnMargin : "30px 0 0"}
              type="tertiary"
              whileTap={{ scale: 0.95 }}
              maxwidth="80vw"
              width="257px"
              to={btnLink}
            >
              {btnText}
            </ButtonLink>
          )}
        </Flex>
      </GradientWrapperStyles>
    </Container>
  )
}

export default GradientCtaSection
