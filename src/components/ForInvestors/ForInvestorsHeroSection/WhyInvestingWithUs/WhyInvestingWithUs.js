import React, { useEffect } from "react"
import styled from "styled-components"
import Container from "../../../Container/Container"
import Flex, { StyledFlex } from "../../../Flex/Flex"
import Text from "../../../Text/Text"
import { WrapperStyles } from "../../../Wrapper/Wrapper"
import RocketIcon from "../../../../images/ico-optimize-min.png"
import SupportIcon from "../../../../images/ico-support-min.png"
import LifecycleIcon from "../../../../images/ico-lifecycle-min.png"
import useWindowSize from "../../../../utils/UseWindowSize"
import { gsap } from "gsap"

const FeatureStyles = styled(StyledFlex)`
  @media only screen and (max-width: 1000px) {
    margin-top: 0;
    &:first-of-type {
      margin-top: 64px;
    }
  }
`

const ImgStyles = styled.img``

const ImgWrapper = styled.div`
  display: inline-flex;
  align-self: flex-start;
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
          as="h4"
          color="var(--headers-color)"
          fontSize="22px"
          fontWeight="500"
          lineHeight="normal"
        >
          {title}
        </Text>
      </Flex>
      <Text
        margin="29px 0 0"
        fontSize="18px"
        lineHeight="1.67em"
        fontWeight="400"
        color="var(--body-text)"
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
  @media only screen and (max-width: 1182px) {
    grid-gap: 60px;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 70px;
  }
  @media only screen and (max-width: 640px) {
    h4 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }
`

const WhyWrapperStyles = styled(WrapperStyles)`
  @media only screen and (max-width: 1182px) {
    margin: 0px 60px 40px;
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
    max-width: 640px;
    h3 {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 760px) {
    width: unset;
    margin: 0 30px 50px;
  }
  @media only screen and (max-width: 640px) {
    h3 {
      font-size: 24px;
    }
  }
`

const WhyInvestingWithUs = () => {
  const width = useWindowSize()
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(".wrapper", {
      autoAlpha: 1,
      delay: 1.8,
    })
      .from([".why--header", ".why--subheader"], 1.6, {
        opacity: 0,
        y: 12,
        ease: "power3.out",
        stagger: {
          amount: 0.4,
        },
      })
      .from(
        ".why--content",
        1.6,
        {
          opacity: 0,
          y: 10,
          ease: "power3.out",
          stagger: {
            amount: 0.3,
          },
        },
        "-=0.5"
      )
  }, [])

  return (
    <Container className="wrapper">
      <WhyWrapperStyles margin="43px 122px 0" direction="column">
        <Flex width="100%" direction="column" alignItems="center">
          <Text
            as="h3"
            textAlign={width > 1000 ? "center" : "left"}
            fontSize="36px"
            fontWeight="600"
            lineHeight="normal"
            color="var(--headers-color)"
            className="why--header"
          >
            Dlaczego warto inwestować razem z&nbsp;nami?
          </Text>
          <FeatureWrapper>
            <Feature
              icon={LifecycleIcon}
              iconBg="rgba(197, 242, 220, 0.6)"
              title="Tworzymy i&nbsp;serwisujemy koparki"
              content="Jesteśmy partnerem, u&nbsp;którego możesz kupić polskie koparki kryptowalut&nbsp;-&nbsp;z&nbsp;gwarancją, serwisem i&nbsp;szkoleniem z&nbsp;obsługi. Możesz wybrać zarówno gotowy produkt, jak i&nbsp;zamówić u&nbsp;nas koparkę o&nbsp;niemal dowolnych parametrach. Doradzimy najlepszy wybór do Twojego budżetu."
              className="why--content"
            />
            <Feature
              icon={SupportIcon}
              iconBg="rgba(241, 193, 201, 0.6)"
              title="Pełna obsługa"
              content="Nasza oferta to nie wyłącznie sprzedaż produktu, który ma zarabiać. Oferujemy przechowywanie w&nbsp;najlepszych warunkach, tani prąd, ubezpieczenie, serwis 24/h, zdalny dostęp i&nbsp;wiele innych. Nie musisz przetrzymywać kilkunastu koparek w&nbsp;siedzibie swojej firmy. Zostaw to profesjonalistom."
              className="why--content"
            />
            <Feature
              icon={RocketIcon}
              iconBg="rgba(197, 215, 242, 0.6)"
              title="Szkolenia dla firm"
              content="Oferujemy indywidualne szkolenia wprowadzające dla firm, z&nbsp;indywidualnym programem i&nbsp;dojazdem w&nbsp;cenie. Szkolenie obejmuje nie tylko obsługę zakupionych u&nbsp;nas koparek, ale i&nbsp;unikalną wiedzę biznesową w&nbsp;zakresie kryptowalut. Wykorzystaj ją na swoją korzyść."
              className="why--content"
            />
          </FeatureWrapper>
        </Flex>
      </WhyWrapperStyles>
    </Container>
  )
}

export default WhyInvestingWithUs
