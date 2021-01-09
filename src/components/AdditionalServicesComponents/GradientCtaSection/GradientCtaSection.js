import React from "react"
import Button from "../../Button/Button"
import ButtonLink from "../../ButtonLink/ButtonLink"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"

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
      <Wrapper margin="64px 40px 44px">
        <Flex width="100%" direction="column" alignItems="center">
          {title && (
            <Text
              as="h2"
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
              bg="var(--white)"
              color="var(--nav-dark-bluse)"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              maxwidth="80vw"
              width="257px"
              to={btnLink}
            >
              {btnText}
            </ButtonLink>
          )}
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default GradientCtaSection
