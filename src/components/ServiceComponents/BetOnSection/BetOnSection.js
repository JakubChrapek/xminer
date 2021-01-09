import React from "react"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"

const BetOnSection = () => {
  return (
    <Container padding="0">
      <Wrapper margin="40px 103px 109px">
        <Flex flex="3" direction="column" margin="0 146px 0 0">
          <Text
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
          >
            Postaw na
          </Text>
          <Text
            fontSize="24px"
            lineHeight="1.33em"
            fontWeight="600"
            margin="12px 0 0"
          >
            Bezpieczeństwo
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="300"
            margin="20px 0 0"
            maxwidth="707px"
          >
            Nasza oferta jest skierowana dla inwestorów z całej Polski.
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="300"
            margin="32px 0 0"
            maxwidth="707px"
          >
            Nasze kontenery są zabezpieczone: system alarmowy, montoring wideo i
            zdalny podgląd 24/h zapewnia bezpieczeństwo dla każdej koparki,
            która znajduje się w naszych rękach.
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="300"
            margin="32px 0 0"
            maxwidth="707px"
          >
            Nieuprawniony dostęp? Patrol interwencyjny na miejscu. Zdarzenia
            losowe? Mamy ubezpieczenie i od kradzieży, i od wypadków.
          </Text>
        </Flex>
        <Flex
          flex="2"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          margin="80px 0 0"
        >
          <Text
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            maxwidth="286px"
          >
            Co zyskujesz?
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="300"
            margin="12px 0 0"
            maxwidth="286px"
          >
            Oddając swoją maszynę pod opiekę Xminer, oszczędzasz nie tylko na
            energii elektrycznej, ale i&nbsp;po prostu&nbsp;-&nbsp;zapewniasz
            swoim koparkom bezpieczeństwo.
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="300"
            margin="32px 0 0"
            maxwidth="286px"
          >
            A to jest ważne!
          </Text>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default BetOnSection
