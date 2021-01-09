import React from "react"
import styled from "styled-components"
import Container from "../../../Container/Container"
import Flex from "../../../Flex/Flex"
import Text from "../../../Text/Text"
import Wrapper from "../../../Wrapper/Wrapper"
import RocketIcon from "../../../../images/ico-rocket.svg"
import SupportIcon from "../../../../images/ico-support.svg"
import LifecycleIcon from "../../../../images/ico-lifecycle.svg"

const FeatureStyles = styled(Flex)``

const ImgStyles = styled.img``

const ImgWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  padding: 9px;
  position: relative;
  background-color: ${({ iconBg }) => (iconBg ? iconBg : "")};
  border-radius: 50%;
  margin-right: 28px;
`

const Feature = ({ icon, iconBg, title, content }) => {
  return (
    <FeatureStyles margin="68px 0 0" direction="column">
      <Flex alignItems="center">
        <ImgWrapper iconBg={iconBg}>
          <ImgStyles src={icon} alt={title} />
        </ImgWrapper>
        <Text
          maxwidth="243px"
          fontSize="22px"
          fontWeight="600"
          lineHeight="normal"
        >
          {title}
        </Text>
      </Flex>
      <Text
        margin="29px 0 0"
        fontSize="18px"
        lineHeight="1.67em"
        fontWeight="300"
        maxwidth="345px"
      >
        {content}
      </Text>
    </FeatureStyles>
  )
}

const FeatureWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;
  width: 100%;
`

const WhyInvestingWithUs = () => {
  return (
    <Container>
      <Wrapper margin="43px 122px 0" direction="column">
        <Flex width="100%" direction="column" alignItems="center">
          <Text
            textAlign="center"
            fontSize="36px"
            fontWeight="600"
            lineHeight="normal"
          >
            Dlaczego warto inwestować razem z nami?
          </Text>
          <FeatureWrapper>
            <Feature
              icon={LifecycleIcon}
              iconBg="rgba(197, 242, 220, 0.6)"
              title="Tworzymy i&nbsp;serwisujemy koparki"
              content="Jesteśmy partnerem, u&nbsp;którego możesz kupić polskie koparki kryptowalut&nbsp;-&nbsp;z&nbsp;gwarancją, serwisem i&nbsp;szkoleniem z&nbsp;obsługi. Możesz wybrać zarówno gotowy produkt, jak i&nbsp;zamówić u&nbsp;nas koparkę o&nbsp;niemal dowolnych parametrach. Doradzimy najlepszy wybór do Twojego budżetu."
            />
            <Feature
              icon={SupportIcon}
              iconBg="rgba(241, 193, 201, 0.6)"
              title="Pełna obsługa"
              content="Nasza oferta to nie wyłącznie sprzedaż produktu, który ma zarabiać. Oferujemy przechowywanie w&nbsp;najlepszych warunkach, tani prąd, ubezpieczenie, serwis 24/h, zdalny dostęp i&nbsp;wiele innych. Nie musisz przetrzymywać kilkunastu koparek w&nbsp;siedzibie swojej firmy. Zostaw to profesjonalistom."
            />
            <Feature
              icon={RocketIcon}
              iconBg="rgba(197, 215, 242, 0.6)"
              title="Szkolenia dla firm"
              content="Oferujemy indywidualne szkolenia wprowadzające dla firm, z&nbsp;indywidualnym programem i&nbsp;dojazdem w&nbsp;cenie. Szkolenie obejmuje nie tylko obsługę zakupionych u&nbsp;nas koparek, ale i&nbsp;unikalną wiedzę biznesową w&nbsp;zakresie kryptowalut. Wykorzystaj ją na swoją korzyść."
            />
          </FeatureWrapper>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default WhyInvestingWithUs
