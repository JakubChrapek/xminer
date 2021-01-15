import React from "react"
import Button from "../../../../Button/Button"
import ButtonLink from "../../../../ButtonLink/ButtonLink"
import Container from "../../../../Container/Container"
import Flex from "../../../../Flex/Flex"
import Text from "../../../../Text/Text"
import Wrapper from "../../../../Wrapper/Wrapper"

const CtaSalesSection = () => {
  return (
    <Container bg="linear-gradient(135deg, #29abe2, rgba(255, 255, 255, 0)), linear-gradient(to bottom, var(--primary), var(--primary))">
      <Wrapper margin="109px 40px 84px">
        <Flex width="100%" direction="column" alignItems="center">
          <Text
            color="var(--faded-aqua)"
            fontSize="10px"
            letterSpacing="1px"
            textTransform="uppercase"
          >
            Mamy więcej
          </Text>
          <Text
            color="var(--faded-aqua)"
            fontSize="48px"
            fontWeight="500"
            lineHeight="normal"
            margin="9px 0 24px"
          >
            Hosting, serwis, kolokacja
          </Text>
          <ButtonLink
            bg="var(--white)"
            color="var(--headers-color)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            to="/uslugi-dodatkowe"
          >
            Zobacz naszą ofertę
          </ButtonLink>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default CtaSalesSection
