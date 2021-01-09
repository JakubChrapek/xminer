import React from "react"
import styled from "styled-components"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"
import Miner from "../../../images/miner.svg"
import Rig from "../../../images/rig.svg"
import ButtonText from "../../ButtonText/ButtonText"

const ServicesCta = () => {
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
            Możesz chcieć więcej
          </Text>
          <Text
            as="h3"
            margin="15px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
          >
            A my mamy na to odpowiedź
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0"
            lineHeight="normal"
            maxwidth="580px"
          >
            Kolokacja? To zdecydowanie nie wszystko. Sprawdź naszą ofertę
            serwisu, opieki i&nbsp;zdalnego dostępu do koparek, o&nbsp;który
            możesz poszerzyć swój pakiet, zyskując czas, pieniądze
            i&nbsp;świadomość, że nad Twoją inwestycją cały czas czuwają
            specjaliści.
          </Text>
          <ButtonText
            to="/uslugi-dodatkowe"
            color="var(--primary)"
            margin="49px 0 0"
          >
            Sprawdź więcej
          </ButtonText>
        </Flex>
        <Flex justifyContent="center">
          <img src={Miner} alt="Karta graficzna" />
        </Flex>
      </Wrapper>
      <Wrapper equal margin="47px 102px 90px">
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
            Kolokacja koparek
          </Text>
          <Text
            as="h3"
            margin="15px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
          >
            Wygoda, bezpieczeństwo i niskie koszty
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0"
            lineHeight="normal"
            maxwidth="580px"
          >
            Twoje koparki mogą pobierać mniej prądu. Mogą nie zajmować Twojego
            garażu lub nie mieć osobnego biura w Twojej firmie. Mogą też mieć
            lepsze warunki i to takie, nad którymi masz stałą kontrolę. Mogą to
            wszystko, jeśli wybierz Xminer.
          </Text>
          <Text margin="24px 0 0">
            Co jeszcze możemy zrobić, żeby ułatwić Ci inwestycję?
          </Text>
          <ButtonText to="/kontakt" color="var(--primary)" margin="24px 0 0">
            Skontaktuj się z nami
          </ButtonText>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default ServicesCta
