import React from "react"
import styled from "styled-components"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import { HeroWrapperStyles } from "../../ServiceComponents/HeroSection/HeroSection"
import {
  MoreWrapperStyles,
  ImageFlex,
  FirstFlex,
  SecondFlex,
} from "../../ServiceComponents/ServicesCta/ServicesCta"
import { graphql, useStaticQuery } from "gatsby"
import useWindowSize from "../../../utils/UseWindowSize"
import Img from "gatsby-image"

const SalesWrapper = styled(HeroWrapperStyles)``

const SalesMoreWrapperStyles = styled(MoreWrapperStyles)`
  margin: 110px 122px;
  @media only screen and (max-width: 1182px) {
    margin: 72px 60px;
  }
`

const SalesHero = () => {
  const width = useWindowSize()
  const data = useStaticQuery(graphql`
    query salesQuery {
      datoCmsPageSale {
        trainingImg {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        minerForYouImg {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        fullPackageImg {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        minedInPolandImg {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        whyIsItWorthItImg {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        howToPickFirstMinerImg {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        multipleCryptocurrenciesImg {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  return (
    <Container padding="108px 0 0">
      <SalesWrapper margin="127px 122px" equal>
        <div>
          <Text
            as="span"
            fontSize="10px"
            color="var(--headers-color)"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
          >
            Twoja inwestycja zaczyna się tutaj
          </Text>
          <Text
            as="h3"
            margin="20px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
            color="var(--headers-color)"
          >
            Wybierz koparkę
            <br />z metką Xminer
          </Text>
        </div>
        <div>
          <Text
            color="var(--body-text)"
            margin="52px 0 0"
            fontSize="18px"
            lineHeight="1.67em"
          >
            Dla naszych Klientów tworzymy koparki, którymi sami kopiemy na co
            dzień. Do wyboru masz setki konfiguracji, ale przedstawiamy Ci też
            kilka gotowych produktów, nad którymi nie musisz się zastanawiać
            -&nbsp;idealne rozwiązanie, kiedy dopiero zaczynasz lub masz
            niewielkie doświadczenie w&nbsp;kopaniu. Niski pobór prądu
            i&nbsp;niska awaryjność, a&nbsp;do tego gwarancja, szkolenie, dowóz
            i&nbsp;zdalne wsparcie -&nbsp;to wszystko co, otrzymujesz razem
            z&nbsp;naszymi koparkami.
          </Text>
          <Text
            color="var(--body-text)"
            margin="32px 0 0"
            fontSize="18px"
            lineHeight="1.67em"
          >
            Prawda, że fajnie?
          </Text>
        </div>
      </SalesWrapper>
      <Text
        textAlign="center"
        fontSize="36px"
        lineHeight="normal"
        fontWeight="600"
        color="var(--headers-color)"
      >
        Dlaczego warto?
      </Text>
      <MoreWrapperStyles margin="110px 122px 120px">
        <FirstFlex
          marginRight="80px"
          flex="1"
          alignItems="flex-start"
          direction="column"
        >
          <Text
            as="h3"
            margin="15px 0 0 0"
            fontSize="22px !important"
            fontWeight="600"
            color="var(--headers-color)"
            lineHeight="normal"
          >
            Różne konfiguracje, różne możliwości
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0 0"
            lineHeight="normal"
            color="var(--body-text)"
            fontWeight="400"
          >
            Nowy serwer obliczeniowy, niski pobór prądu i od 6 do nawet 13 kart
            graficznych w jednej koparce - to najważniejsze zalety naszych
            maleństw. Płyta główna, nawet 2 zasilacze o dużej mocy (co najmniej
            650W!) oraz specjalna, autorska aluminiowa obudowa wraz z riserami -
            a Ty już wiesz, że jest wybór i są możliwości. Nasze koparki
            konfigurujemy na Linux (HiveOS).
          </Text>
        </FirstFlex>
        <ImageFlex flex="1" justifyContent="center">
          <Img
            fluid={data.datoCmsPageSale.whyIsItWorthItImg.fluid}
            alt={data.datoCmsPageSale.whyIsItWorthItImg.alt}
          />
        </ImageFlex>
      </MoreWrapperStyles>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "var(--faded-aqua)",
          width: "100%",
        }}
      >
        <SalesMoreWrapperStyles alignItems="center" equal margin="110px 102px">
          <ImageFlex justifyContent="center">
            <Img
              fluid={data.datoCmsPageSale.minedInPolandImg.fluid}
              alt={data.datoCmsPageSale.minedInPolandImg.alt}
            />
          </ImageFlex>
          <SecondFlex direction="column">
            <Text
              as="h3"
              margin="15px 0 0 0"
              fontSize="22px !important"
              fontWeight="600"
              color="var(--headers-color)"
              lineHeight="normal"
            >
              Wiemy, że się sprawdza. Z&nbsp;metką „Wykopane w&nbsp;Polsce”
            </Text>
            <Text
              fontSize="16px"
              margin="25px 0 0"
              lineHeight="normal"
              fontWeight="400"
              color="var(--body-text)"
            >
              Nasze koparki nie tylko tworzone są bezpośrednio przez inżynierów
              z&nbsp;Xminer, ale i&nbsp;z&nbsp;polskich podzespołów. Nie ma
              problemu z&nbsp;serwisem, nie ma problemu z&nbsp;importem, nie ma
              problemu z&nbsp;częściami opisanymi w&nbsp;języku krzaczastym
              i&nbsp;wątpliwej jakości. Kupując u&nbsp;nas, masz pewność.
              I&nbsp;wiemy z&nbsp;różnych źródeł, że dla naszych inwestorów to
              jest zaleta bardzo ważna.
            </Text>
          </SecondFlex>
        </SalesMoreWrapperStyles>
      </div>
      <SalesMoreWrapperStyles margin="110px 122px 120px">
        <FirstFlex
          marginRight="80px"
          flex="1"
          alignItems="flex-start"
          direction="column"
        >
          <Text
            as="h3"
            margin="15px 0 0 0"
            fontSize="22px !important"
            fontWeight="600"
            color="var(--headers-color)"
            lineHeight="normal"
          >
            W cenie? Pełny pakiet
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0 0"
            lineHeight="normal"
            color="var(--body-text)"
            fontWeight="400"
          >
            Cena każdej koparki obejmuje koszt części, budowy, konfiguracji,
            przeszkolenia, dowozu (do 100 km od Wrocławka bezpłatnie) oraz
            zdalnego wsparcia przez cały (tak cały!) okres inwestycji. Koparkę
            możesz nawet zostawić u&nbsp;nas, zasilać u nas i&nbsp;serwisować
            u&nbsp;nas. Dla nas kompleksowa oferta to zdecydowanie nie jest
            pusty slogan.
          </Text>
        </FirstFlex>
        <ImageFlex flex="1" justifyContent="center">
          <Img
            fluid={data.datoCmsPageSale.fullPackageImg.fluid}
            alt={data.datoCmsPageSale.fullPackageImg.alt}
          />
        </ImageFlex>
      </SalesMoreWrapperStyles>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "var(--faded-aqua)",
          width: "100%",
        }}
      >
        <SalesMoreWrapperStyles alignItems="center" equal margin="110px 102px">
          <ImageFlex justifyContent="center">
            <Img
              fluid={data.datoCmsPageSale.multipleCryptocurrenciesImg.fluid}
              alt={data.datoCmsPageSale.multipleCryptocurrenciesImg.alt}
            />
          </ImageFlex>
          <SecondFlex direction="column">
            <Text
              as="h3"
              margin="15px 0 0 0"
              fontSize="22px !important"
              fontWeight="600"
              color="var(--headers-color)"
              lineHeight="normal"
            >
              Wiele walut do wydobycia
            </Text>
            <Text
              fontSize="16px"
              margin="25px 0 0"
              lineHeight="normal"
              fontWeight="400"
              color="var(--body-text)"
            >
              Na naszym sprzęcie można kopać między innymi Ethereum (ETH),
              EtherumClassic (ETC), Nicehash, Ravencoin (RVN), GrinCoin (GRIN)
              czy Bittube (TUBE). Nie wiesz, od czego zacząć, czy inwestować
              w&nbsp;stary, dobry Bitcoin czy może modne Ethereum? Zapytaj nas o
              to. Powiemy wszystko, co wiemy!
            </Text>
          </SecondFlex>
        </SalesMoreWrapperStyles>
      </div>
    </Container>
  )
}

export default SalesHero
