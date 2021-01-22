import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../../../Container/Container"
import Text from "../../../Text/Text"
import ButtonText from "../../../ButtonText/ButtonText"
import {
  MoreWrapperStyles,
  FirstFlex,
  SecondFlex,
  ImageFlex,
} from "../../../ServiceComponents/ServicesCta/ServicesCta"
import styled from "styled-components"

const HowToChooseSection = () => {
  const data = useStaticQuery(graphql`
    query salesLastSection {
      datoCmsPageSale {
        minerForYouImg {
          fluid(maxWidth: 770) {
            ...GatsbyDatoCmsFluid
          }
          alt
        }
        howToPickFirstMinerImg {
          fluid(maxWidth: 770) {
            ...GatsbyDatoCmsFluid
          }
          alt
        }
      }
    }
  `)

  const HowMoreWrapperStyles = styled(MoreWrapperStyles)`
    @media only screen and (max-width: 640px) {
      &:last-of-type {
        margin-bottom: 0;
      }
    }
  `

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
          <Text fontSize="16px" margin="25px 0 0" lineHeight="normal">
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
        </FirstFlex>
        <ImageFlex justifyContent="center">
          <Img
            fluid={data.datoCmsPageSale.howToPickFirstMinerImg.fluid}
            alt={data.datoCmsPageSale.howToPickFirstMinerImg.alt}
          />
        </ImageFlex>
      </MoreWrapperStyles>
      <HowMoreWrapperStyles equal margin="47px 102px 90px">
        <ImageFlex justifyContent="center">
          <Img
            fluid={data.datoCmsPageSale.minerForYouImg.fluid}
            alt={data.datoCmsPageSale.minerForYouImg.alt}
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
          <Text fontSize="16px" margin="25px 0 0" lineHeight="normal">
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
        </SecondFlex>
      </HowMoreWrapperStyles>
    </Container>
  )
}

export default HowToChooseSection
