import React from "react"
import styled from "styled-components"
import Container from "../../Container/Container"
import { StyledFlex } from "../../Flex/Flex"
import Text from "../../Text/Text"
import { WrapperStyles } from "../../Wrapper/Wrapper"
import Img from "gatsby-image"
import ButtonText from "../../ButtonText/ButtonText"
import { useStaticQuery } from "gatsby"

export const MoreWrapperStyles = styled(WrapperStyles)`
  .gatsby-image-wrapper {
    width: 100%;
    border-radius: 12px;
    height: 320px;
    @media only screen and (min-width: 1500px) {
      height: 360px;
    }

    align-self: center;
  }
  @media only screen and (max-width: 1182px) {
    margin: 122px 60px 72px;
    &:nth-of-type(2) {
      margin-top: 82px;
    }
  }

  @media only screen and (max-width: 1080px) {
    width: 100%;
    max-width: 640px;
    flex-direction: column;
    &:nth-of-type(2) {
      margin-top: 0px;
    }
  }
  @media only screen and (max-width: 760px) {
    width: unset;
    margin: 65px 30px;
  }
`

export const FirstFlex = styled(StyledFlex)`
  h2,
  h3,
  p,
  a {
    margin-right: 40px;
  }

  @media only screen and (max-width: 1264px) {
    h3 {
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 1182px) {
    h2,
    h3,
    p,
    a {
      margin-right: 30px;
    }
    h3 {
      font-size: 32px;
      margin-top: 10px;
    }

    p {
      margin-top: 16px;
    }
  }
  @media only screen and (max-width: 1080px) {
    margin-left: 0 !important;
    margin-right: 0 !important;
    h2,
    h3,
    p,
    a {
      margin-right: 0px;
    }
    a {
      margin-top: 24px !important;
    }
  }
  @media only screen and (max-width: 640px) {
    h3 {
      font-size: 24px;
    }
  }
`

export const SecondFlex = styled(FirstFlex)`
  h2,
  h3,
  p,
  a {
    margin-left: 80px;
    margin-right: 0;
  }
  @media only screen and (max-width: 1182px) {
    h2,
    h3,
    p,
    a {
      margin-left: 50px;
    }
  }
  @media only screen and (max-width: 1080px) {
    margin-left: 0 !important;
    margin-right: 0 !important;
    order: -1;
    h2,
    h3,
    p,
    a {
      margin-left: 0;
    }
    a {
      margin-top: 24px !important;
    }
  }

  @media only screen and (max-width: 640px) {
    h3 {
      font-size: 24px;
    }
  }
`

const ImageFlex = styled(StyledFlex)`
  @media only screen and (max-width: 1080px) {
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-top: 24px !important;
  }
`

const ServicesCta = () => {
  const data = useStaticQuery(graphql`
    query servicesQuery {
      datoCmsStronaKolokacja {
        wantMoreImg {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        rigMgmtImg {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <MoreWrapperStyles equal margin="142px 102px 82px">
        <FirstFlex alignItems="flex-start" direction="column">
          <Text
            as="h2"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            color="var(--headers-color)"
            fontWeight="400"
            margin="0 0 0 0"
          >
            Możesz chcieć więcej
          </Text>
          <Text
            as="h3"
            margin="15px 0 0 0"
            fontSize="48px"
            fontWeight="600"
            color="var(--headers-color)"
            lineHeight="normal"
          >
            A my mamy na to odpowiedź
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0 0"
            lineHeight="normal"
            color="var(--body-text)"
            fontWeight="400"
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
            margin="49px 0 0 0"
          >
            Sprawdź więcej
          </ButtonText>
        </FirstFlex>
        <ImageFlex justifyContent="center">
          <Img
            fluid={data.datoCmsStronaKolokacja.wantMoreImg.fluid}
            alt={data.datoCmsStronaKolokacja.wantMoreImg.alt}
          />
        </ImageFlex>
      </MoreWrapperStyles>
      <MoreWrapperStyles equal margin="47px 102px 90px">
        <ImageFlex justifyContent="center">
          <Img
            fluid={data.datoCmsStronaKolokacja.rigMgmtImg.fluid}
            alt={data.datoCmsStronaKolokacja.rigMgmtImg.alt}
          />
        </ImageFlex>
        <SecondFlex direction="column">
          <Text
            as="h2"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            fontWeight="400"
            color="var(--headers-color)"
            margin="0 0 0 0"
          >
            Kolokacja koparek
          </Text>
          <Text
            as="h3"
            margin="15px 0 0 0"
            fontSize="48px"
            fontWeight="600"
            color="var(--headers-color)"
            lineHeight="normal"
          >
            Wygoda, bezpieczeństwo i&nbsp;niskie koszty
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0"
            lineHeight="normal"
            fontWeight="400"
            color="var(--body-text)"
          >
            Twoje koparki mogą pobierać mniej prądu. Mogą nie zajmować Twojego
            garażu lub nie mieć osobnego biura w Twojej firmie. Mogą też mieć
            lepsze warunki i&nbsp;to takie, nad którymi masz stałą kontrolę.
            Mogą to wszystko, jeśli wybierz Xminer.
          </Text>
          <Text fontWeight="400" color="var(--body-text)" margin="24px 0 0 0">
            Co jeszcze możemy zrobić, żeby ułatwić Ci inwestycję?
          </Text>
          <ButtonText
            to="/kontakt"
            color="var(--primary)"
            margin="24px 0 0 80px"
          >
            Skontaktuj się z&nbsp;nami
          </ButtonText>
        </SecondFlex>
      </MoreWrapperStyles>
    </Container>
  )
}

export default ServicesCta
