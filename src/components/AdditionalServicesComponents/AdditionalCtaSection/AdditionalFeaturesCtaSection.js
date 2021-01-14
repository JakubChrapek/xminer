import React from "react"
import styled from "styled-components"
import Container from "../../Container/Container"
import { StyledFlex } from "../../Flex/Flex"
import Text from "../../Text/Text"
import {
  MoreWrapperStyles,
  FirstFlex,
  SecondFlex,
} from "../../ServiceComponents/ServicesCta/ServicesCta"
import Miner from "../../../images/miner.svg"
import Rig from "../../../images/rig.svg"
import ButtonText from "../../ButtonText/ButtonText"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import useWindowSize from "../../../utils/UseWindowSize"

const ImageFlex = styled(StyledFlex)`
  @media only screen and (max-width: 1080px) {
    margin-left: 0 !important;
    margin-right: 0 !important;
    margin-top: 24px !important;
  }

  @media only screen and (max-width: 640px) {
    .gatsby-image-wrapper {
      width: calc(100% + 60px);
      margin: 27px -30px 0;
      border-radius: 0;
      height: 260px;
    }
  }
  @media only screen and (max-width: 440px) {
    .gatsby-image-wrapper {
      height: 200px;
    }
  }
`

const AdditionalWrapperStyles = styled(MoreWrapperStyles)`
  @media only screen and (max-width: 1082px) {
    margin-bottom: 0 !important;
  }
`

const AdditionalCtaSection = () => {
  const width = useWindowSize()
  const data = useStaticQuery(graphql`
    query additionalServicesQuery {
      datoCmsStronaKolokacja {
        wantMoreImg {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        rigMgmtImg {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  return (
    <Container>
      <MoreWrapperStyles equal margin="202px 102px 82px">
        <FirstFlex alignItems="flex-start" direction="column">
          <Text
            as="h2"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            color="var(--headers-color)"
          >
            A może by tak...
          </Text>
          <Text
            as="h3"
            margin="15px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
            color="var(--headers-color)"
          >
            Wybrać ofertę {width < 1312 && width > 1080 && <br />}all in?
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0"
            lineHeight="normal"
            color="var(--body-text)"
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
            color="var(--body-text)"
          >
            Skonfigurujemy dla Ciebie zdalny dostęp!
          </Text>
        </FirstFlex>
        <ImageFlex justifyContent="center">
          <Img
            fluid={data.datoCmsStronaKolokacja.wantMoreImg.fluid}
            alt={data.datoCmsStronaKolokacja.wantMoreImg.alt}
          />
        </ImageFlex>
      </MoreWrapperStyles>
      <AdditionalWrapperStyles equal margin="47px 102px 0">
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
            color="var(--headers-color)"
          >
            Postaw na
          </Text>
          <Text
            as="h3"
            margin="15px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
            color="var(--headers-color)"
          >
            Stały kontakt {width < 640 && <br />}ze specjalistą
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0"
            lineHeight="normal"
            color="var(--body-text)"
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
            margin="20px 0 0"
            color="var(--body-text)"
          >
            To się opłaca!
          </Text>
        </SecondFlex>
      </AdditionalWrapperStyles>
    </Container>
  )
}

export default AdditionalCtaSection
