import React from "react"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"

const ParagraphSection = () => {
  return (
    <Container>
      <Wrapper margin="0 122px 93px">
        <Flex flex="3" direction="column" margin="0 146px 0 0">
          <Text
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
          >
            Nasza propozycja to:
          </Text>
          <Text
            fontSize="24px"
            lineHeight="1.33em"
            fontWeight="600"
            margin="12px 0 0"
          >
            Najlepsze warunki
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="300"
            margin="12px 0 0"
            maxWidth="707px"
          >
            Szum, pole magnetyczne, nadmiar ciepła, wysoki koszt energii
            elektrycznej, problemy z przyłączami - to jedne z
            najpopularniejszych kłopotów, z którymi spotyka się początkujący
            inwestor, trzymający koparki w domu lub w siedzibie firmy.
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="300"
            margin="24px 0 0"
            maxWidth="707px"
          >
            Nasza propozycja to rozwiązanie tych problemów - koparki umieszczane
            są w specjalnym, zaprojektowanym przez nas kontenerze, z aktywnym
            systemem chłodzenia, układem filtrów powietrza oraz precyzyjnymi
            czujnikami mocy i temperatury. I to 24 godziny na dobę.
          </Text>
        </Flex>
        <Flex
          flex="2"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          margin="110px 0 0"
        >
          <Text
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            maxWidth="286px"
          >
            Co zyskujesz?
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="300"
            margin="12px 0 0"
            maxWidth="286px"
          >
            Wolne miejsce w domu lub w firmie, całodobowy monitoring
            samopoczucia Twojej koparki i mniejszą awaryjność sprzętu, który
            pracuje w idealnych warunkach.
          </Text>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default ParagraphSection
