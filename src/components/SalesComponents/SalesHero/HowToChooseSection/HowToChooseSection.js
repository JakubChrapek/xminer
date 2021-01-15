import React from "react"
import styled from "styled-components"
import Container from "../../../Container/Container"
import Flex from "../../../Flex/Flex"
import Text from "../../../Text/Text"
import Wrapper from "../../../Wrapper/Wrapper"
import Miner from "../../../../images/miner.svg"
import Rig from "../../../../images/rig.svg"
import ButtonText from "../../../ButtonText/ButtonText"

const HowToChooseSection = () => {
  return (
    <Container>
      <Wrapper equal margin="192px 102px 90px">
        <Flex alignItems="flex-start" direction="column">
          <Text
            as="h2"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            color="var(--headers-color)"
          >
            Sprawdź
          </Text>
          <Text
            as="h3"
            margin="20px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
          >
            Jak wybrać pierwszą koparkę?
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0"
            lineHeight="normal"
            maxwidth="580px"
          >
            Wybór właściwej koparki to nie jest bułka z nutellą. Dlatego, jeśli
            masz wątpliwości, chcesz kupić kilka koparek - skontaktuj się
            z&nbsp;nami, opisz potrzeby, napisz, jaki masz budżet.&nbsp;A my?
            Odpiszemy w&nbsp;try-miga i&nbsp;powiemy Ci, wszystko, co wiemy. Bez
            ściemy, branżowego slangu i&nbsp;namawiania na coś, do czego nie
            jesteśmy przekonani. To nie u&nbsp;nas!
          </Text>
          <ButtonText to="/kontakt" color="var(--primary)" margin="24px 0 0">
            No to piszę!
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
            color="var(--headers-color)"
          >
            Twoja kryptokoparka
          </Text>
          <Text
            as="h3"
            margin="20px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
          >
            Koparka stworzona dla Ciebie
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0"
            lineHeight="normal"
            maxwidth="580px"
          >
            Możesz u&nbsp;nas zamówić koparkę o&nbsp;niemal dowolnych
            parametrach&nbsp;-&nbsp;nasz zespół to specjaliści gotowi tworzyć
            maszyny o&nbsp;ogromnych możliwościach obliczeniowych. Szukasz
            podwykonawcy, który zaprojektuje i&nbsp;stworzy koparkę na Twoje
            indywidualne zamówienie?
            <br />
            Zapytaj nas o nie.
          </Text>
          <Text margin="24px 0 0">Takie rzeczy robimy na co dzień!</Text>
          <ButtonText to="/kontakt" color="var(--primary)" margin="24px 0 0">
            Zamawiam indywidualnie
          </ButtonText>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default HowToChooseSection
