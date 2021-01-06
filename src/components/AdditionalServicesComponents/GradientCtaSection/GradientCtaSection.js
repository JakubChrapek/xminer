import React from "react"
import Button from "../../Button/Button"
import ButtonLink from "../../ButtonLink/ButtonLink"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"

const GradientCtaSection = () => {
  return (
    <Container bg="linear-gradient(135deg, #29abe2, rgba(255, 255, 255, 0)), linear-gradient(to bottom, var(--primary), var(--primary))">
      <Wrapper margin="64px 40px 44px">
        <Flex width="100%" direction="column" alignItems="center">
          <Text
            as="h2"
            color="var(--faded-aqua)"
            fontSize="10px"
            letterSpacing="1px"
            textTransform="uppercase"
          >
            Koparki kryptowalut
          </Text>
          <Text
            color="var(--faded-aqua)"
            fontSize="48px"
            fontWeight="500"
            lineHeight="normal"
            margin="9px 0 24px"
            maxWidth="536px"
            textAlign="center"
          >
            Postaw na świadomą inwestycję
          </Text>
          <Text
            maxWidth="780px"
            textAlign="center"
            fontSize="16px"
            lineHeight="normal"
            fontWeight="300"
            color="var(--faded-aqua)"
          >
            Kolejność? U nas jest dowolna. Możesz najpierw zamówić szkolenie lub
            konsultację online, żeby dowiedzieć się, czy koparki to coś dla
            Ciebie. Możesz zakupić&nbsp;u nas koparki&nbsp;i spróbować
            przechowywać je&nbsp;w domu, możesz od razu wybrać naszą
            kolokację&nbsp;-&nbsp;razem z&nbsp;pełnym pakietem lub jako
            pojedynczą usługą. Cokolwiek potrzebujesz, jesteśmy do dyspozycji.
          </Text>
          <Text
            maxWidth="780px"
            textAlign="center"
            fontSize="16px"
            lineHeight="normal"
            fontWeight="300"
            color="var(--faded-aqua)"
            margin="24px 0 0"
          >
            W Xminer masz wybór!
          </Text>
          <ButtonLink
            margin="30px 0 0"
            bg="var(--white)"
            color="var(--nav-dark-bluse)"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            maxWidth="80vw"
            width="257px"
            to="/kontakt"
          >
            Kontakt
          </ButtonLink>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default GradientCtaSection
