import React, { useState, useEffect } from "react"
import { gsap } from "gsap"
import styled from "styled-components"
import { ContainerStyles } from "../../Container/Container"
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

const SalesWrapper = styled(HeroWrapperStyles)`
  /* visibility: hidden; */
  @media only screen and (max-width: 640px) {
    h3 {
      font-size: 36px;
    }
  }
  @media only screen and (max-width: 440px) {
    h3 {
      font-size: 24px;
    }
  }
`

const MinedImgFlex = styled(ImageFlex)`
  @media only screen and (max-width: 640px) {
    margin-top: 0 !important;
    .gatsby-image-wrapper {
      margin-top: 0 !important;
    }
  }
`

const SalesMoreWrapperStyles = styled(MoreWrapperStyles)`
  margin: 110px 122px;
  @media only screen and (max-width: 1182px) {
    margin: 72px 60px;
  }
  @media only screen and (max-width: 640px) {
    margin: 67px 30px;
  }
`

const StyledContainer = styled(ContainerStyles)`
  @media only screen and (max-width: 640px) {
    align-items: flex-start;
  }
`

const SalesHero = () => {
  const width = useWindowSize()
  const data = useStaticQuery(graphql`
    query salesQuery {
      datoCmsPageSale {
        trainingImg {
          alt
          fluid(maxWidth: 770) {
            ...GatsbyDatoCmsFluid
          }
        }
        minerForYouImg {
          alt
          fluid(maxWidth: 770) {
            ...GatsbyDatoCmsFluid
          }
        }
        fullPackageImg {
          alt
          fluid(maxWidth: 770) {
            ...GatsbyDatoCmsFluid
          }
        }
        minedInPolandImg {
          alt
          fluid(maxWidth: 770) {
            ...GatsbyDatoCmsFluid
          }
        }
        whyIsItWorthItImg {
          alt
          fluid(maxWidth: 770) {
            ...GatsbyDatoCmsFluid
          }
        }
        howToPickFirstMinerImg {
          alt
          fluid(maxWidth: 770) {
            ...GatsbyDatoCmsFluid
          }
        }
        multipleCryptocurrenciesImg {
          alt
          fluid(maxWidth: 770) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)

  // useEffect(() => {
  //   const tl = gsap.timeline()
  //   tl.to(".wrapper", {
  //     autoAlpha: 1,
  //   })
  //     .from([".sales--header", ".sales--subheader"], {
  //       opacity: 0,
  //       duration: 1.4,
  //       ease: "power3.out",
  //       stagger: {
  //         amount: 0.4,
  //       },
  //     })
  //     .from(
  //       ".sales--content",
  //       {
  //         opacity: 0,
  //         duration: 1.6,
  //         ease: "power3.out",
  //         stagger: {
  //           amount: 0.4,
  //         },
  //       },
  //       "-=0.5"
  //     )
  // }, [])

  return (
    <StyledContainer padding="108px 0 0">
      <SalesWrapper className="wrapper" margin="127px 122px" equal>
        <div>
          <Text
            as="span"
            fontSize="10px"
            color="var(--headers-color)"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            className="sales--header"
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
            className="sales--subheader"
          >
            Wybierz koparkę
            <br />z metką Xminer
          </Text>
        </div>
        <div>
          <Text
            color="var(--body-text)"
            margin={width > 640 ? "52px 0 0" : "30px 0 0"}
            fontSize="18px"
            lineHeight="1.67em"
            fontWeight="400"
            className="sales--content"
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
            margin={width > 640 ? "32px 0 0" : "24px 0 0"}
            fontSize="18px"
            lineHeight="1.67em"
            fontWeight="400"
            className="sales--content"
          >
            Prawda, że fajnie?
          </Text>
        </div>
      </SalesWrapper>
      <Text
        textAlign={width > 640 ? "center" : "left"}
        fontSize={width > 640 ? "36px" : "24px"}
        margin={
          width <= 640 ? "0 0 -16px 30px" : width < 1080 ? "0 0 32px" : ""
        }
        lineHeight="normal"
        fontWeight="600"
        color="var(--headers-color)"
        className="sales--content"
      >
        Dlaczego warto?
      </Text>
      <MoreWrapperStyles margin="110px 122px 120px">
        <FirstFlex
          marginRight="80px"
          flex="1"
          order={width < 640 && "1"}
          alignItems="flex-start"
          direction="column"
        >
          <Text
            as="h3"
            margin={width > 640 ? "15px 0 0 0" : "32px 0 0 !important"}
            fontSize={width > 640 ? "22px !important" : "18px !important"}
            fontWeight={width > 640 ? "600" : "500"}
            color="var(--headers-color)"
            lineHeight="normal"
          >
            Różne konfiguracje, {width < 640 && <br />}różne możliwości
          </Text>
          <Text
            fontSize="16px"
            margin={width > 640 ? "25px 0 0 0" : "10px 0 0 !important"}
            lineHeight="normal"
            color="var(--body-text)"
            fontWeight="400"
          >
            Nowy serwer obliczeniowy, niski pobór prądu i&nbsp;od 6 do nawet 13
            kart graficznych w&nbsp;jednej koparce -&nbsp;to najważniejsze
            zalety naszych maleństw. Płyta główna, nawet 2&nbsp;zasilacze
            o&nbsp;dużej mocy (co najmniej 650W!) oraz specjalna, autorska
            aluminiowa obudowa wraz z&nbsp;riserami -&nbsp;a&nbsp;Ty już wiesz,
            że jest wybór i&nbsp;są możliwości. Nasze koparki konfigurujemy na
            Linux (HiveOS).
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
          <MinedImgFlex justifyContent="center">
            <Img
              fluid={data.datoCmsPageSale.minedInPolandImg.fluid}
              alt={data.datoCmsPageSale.minedInPolandImg.alt}
            />
          </MinedImgFlex>
          <SecondFlex order={width < 640 && "1 !important"} direction="column">
            <Text
              as="h3"
              margin={width > 640 ? "15px 0 0 0" : "32px 0 0 !important"}
              fontSize={width > 640 ? "22px !important" : "18px !important"}
              fontWeight={width > 640 ? "600" : "500"}
              color="var(--headers-color)"
              lineHeight="normal"
            >
              Wiemy, że się sprawdza. {width < 640 && <br />}Z&nbsp;metką
              „Wykopane w&nbsp;Polsce”
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
          order={width < 640 && "1 !important"}
        >
          <Text
            as="h3"
            margin={width > 640 ? "15px 0 0 0" : "32px 0 0 !important"}
            fontSize={width > 640 ? "22px !important" : "18px !important"}
            fontWeight={width > 640 ? "600" : "500"}
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
        <MinedImgFlex flex="1" justifyContent="center">
          <Img
            fluid={data.datoCmsPageSale.fullPackageImg.fluid}
            alt={data.datoCmsPageSale.fullPackageImg.alt}
          />
        </MinedImgFlex>
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
          <MinedImgFlex justifyContent="center">
            <Img
              fluid={data.datoCmsPageSale.multipleCryptocurrenciesImg.fluid}
              alt={data.datoCmsPageSale.multipleCryptocurrenciesImg.alt}
            />
          </MinedImgFlex>
          <SecondFlex order={width < 640 && "1 !important"} direction="column">
            <Text
              as="h3"
              margin={width > 640 ? "15px 0 0 0" : "32px 0 0 !important"}
              fontSize={width > 640 ? "22px !important" : "18px !important"}
              fontWeight={width > 640 ? "600" : "500"}
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
      <SalesMoreWrapperStyles margin="110px 122px 120px">
        <FirstFlex
          marginRight="80px"
          flex="1"
          alignItems="flex-start"
          direction="column"
          order={width < 640 && "1 !important"}
        >
          <Text
            as="h3"
            margin={width > 640 ? "15px 0 0 0" : "32px 0 0 !important"}
            fontSize={width > 640 ? "22px !important" : "18px !important"}
            fontWeight={width > 640 ? "600" : "500"}
            color="var(--headers-color)"
            lineHeight="normal"
          >
            Szkolenie i konfiguracja
          </Text>
          <Text
            fontSize="16px"
            margin="25px 0 0 0"
            lineHeight="normal"
            color="var(--body-text)"
            fontWeight="400"
          >
            Niezależnie od tego, czy kupujesz u&nbsp;nas jedną koparkę, czy
            kilkadziesiąt -&nbsp;możesz zamówić u&nbsp;nas szkolenie: zdalne,
            indywidualne lub dla całego zespołu. Konfiguracja komputera lub
            telefonu, żeby kontrolować koparkę na odległość? Nie ma sprawy!
          </Text>
        </FirstFlex>
        <MinedImgFlex flex="1" justifyContent="center">
          <Img
            fluid={data.datoCmsPageSale.trainingImg.fluid}
            alt={data.datoCmsPageSale.trainingImg.alt}
          />
        </MinedImgFlex>
      </SalesMoreWrapperStyles>
    </StyledContainer>
  )
}

export default SalesHero
