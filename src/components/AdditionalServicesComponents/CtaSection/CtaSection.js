import React from "react"
import styled from "styled-components"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"
import Miner from "../../../images/miner.svg"
import Rig from "../../../images/rig.svg"
import ButtonText from "../../ButtonText/ButtonText"

const CtaSection = () => {
  return (
    <Container>
      <Wrapper equal margin="202px 102px 82px">
        <Flex alignItems="flex-start" direction="column">
          <Text
            as="h2"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            color="var(--nav-dark-bluse)"
          >
            A może by tak...
          </Text>
          <Text
            as="h3"
            margin="15px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
          >
            Wybrać ofertę all in?
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0"
            lineHeight="normal"
            maxwidth="580px"
          >
            W tej inwestycji nie musisz być sam. Nie musisz iść w ciemno, nie
            musisz mieć nadzieję i ufać wyłącznie własnej intuicji. Zostawiając
            nam koparkę, zyskujesz nie tylko tani prąd, ale i opiekę serwisową
            oraz świetne warunki do przechowywania koparek. Lubisz czuwać nad
            swoimi pieniędzmi? Nie ma problemu.
          </Text>
          <Text
            fontSize="16px"
            margin="20px 0 0"
            lineHeight="normal"
            maxwidth="580px"
          >
            Skonfigurujemy dla Ciebie zdalny dostęp!
          </Text>
        </Flex>
        <Flex justifyContent="center">
          <img src={Miner} alt="Karta graficzna" />
        </Flex>
      </Wrapper>
      <Wrapper equal margin="47px 102px 0">
        <Flex justifyContent="center">
          <img src={Rig} alt="Karta graficzna" />
        </Flex>
        <Flex direction="column">
          <Text
            as="h2"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            color="var(--nav-dark-bluse)"
          >
            Postaw na
          </Text>
          <Text
            as="h3"
            margin="15px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
          >
            Stały kontakt ze specjalistą
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0"
            lineHeight="normal"
            maxwidth="580px"
          >
            Wybierając pełną obsługę, wybierasz nie tylko świetne warunki dla
            swoich koparek kryptowalut - wybierasz też świadomość, że masz stały
            kontakt ze specjalistami, którzy co jak co, ale o koparkach wiedzą
            wszystko. Dołącz swoje koparki do naszej kopalni i wydobywaj bez
            ograniczeń.
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0"
            lineHeight="normal"
            maxwidth="580px"
            margin="20px 0 0"
          >
            To się opłaca!
          </Text>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default CtaSection
