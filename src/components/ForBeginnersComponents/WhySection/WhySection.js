import React from "react"
import Container from "../../Container/Container"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"
import ButtonText from "../../ButtonText/ButtonText"
import useWindowSize from "../../../utils/UseWindowSize"
import { WrapperStyles } from "../../Wrapper/Wrapper"
import styled from "styled-components"

const WhyWrapperStyles = styled(WrapperStyles)`
  @media only screen and (max-width: 1080px) {
    width: 100%;
    max-width: 640px;
    h2 {
      font-size: 32px;
    }
    > div {
      &:nth-of-type(2) {
        margin-left: 0px;

        p {
          max-width: unset;
        }
      }
    }
    flex-direction: column;
  }
  @media only screen and (max-width: 760px) {
    width: unset;
    margin: 97px 30px;
    h2 {
      font-size: 36px;
    }
    > div {
      &:nth-of-type(2) {
        p {
          font-size: 16px;
        }
      }
    }
  }
  @media only screen and (max-width: 640px) {
    h2 {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 540px) {
    h2 {
      font-size: 24px;
    }
  }
`

const StepSection = ({
  stepText,
  titleText,
  ContentText,
  CtaText,
  BtnText,
  BtnLink,
  width = { width },
}) => (
  <>
    <Text
      margin={width > 740 ? "72px 0 17px" : "54px 0 16px"}
      fontSize="10px"
      textTransform="uppercase"
      letterSpacing="1px"
      color="var(--headers-color)"
      fontWeight="400"
    >
      {stepText}
    </Text>
    <Text
      color="var(--headers-color)"
      fontSize={width > 1182 ? "36px" : width > 740 ? "30px" : "18px"}
      fontWeight="500"
      lineHeight="normal"
    >
      {titleText}
    </Text>
    <Text
      margin={width > 1182 ? "38px 0 0" : width > 740 ? "26px 0 0" : "20px 0 0"}
      fontSize={width > 640 ? "18px" : "16px"}
      lineHeight="1.67em"
      fontWeight="400"
      color="var(--body-text)"
    >
      {ContentText}
    </Text>
    {CtaText && (
      <Text
        margin={
          width > 1182 ? "38px 0 0" : width > 740 ? "26px 0 0" : "20px 0 0"
        }
        fontSize={width > 640 ? "18px" : "16px"}
        lineHeight="1.67em"
        fontWeight="400"
        color="var(--body-text)"
      >
        {CtaText}
      </Text>
    )}
    {BtnText && (
      <ButtonText
        smaller
        fontSize="14px"
        fontWeight="bold"
        lineHeight="2.14em"
        margin="17px 0 0"
        to={BtnLink}
        color="var(--primary)"
      >
        {BtnText}
      </ButtonText>
    )}
  </>
)

const WhySection = () => {
  const width = useWindowSize()
  return (
    <Container bg="var(--while)">
      <WhyWrapperStyles
        margin="72px 60px 134px"
        direction="column"
        maxwidth="710px"
      >
        <Text
          color="var(--headers-color)"
          as="h2"
          fontSize="36px"
          fontWeight="600"
          lineHeight="normal"
        >
          Dlaczego warto zainwestować w&nbsp;koparki kryptowalut?
        </Text>
        <Text
          margin={width > 640 ? "38px 0 0" : "20px 0 0"}
          fontSize={width > 640 ? "18px" : "16px"}
          lineHeight="1.67em"
          fontWeight="400"
          color="var(--body-text)"
        >
          Na to pytanie pada wiele różnych odpowiedzi. Wśród inwestorów,
          z&nbsp;którymi rozmawiamy, znajdują się i&nbsp;miłośnicy nowych
          technologii i&nbsp;przedsiębiorcy, którzy szukają inwestycji
          niezależnej od gospodarki i&nbsp;polityki państw. Inwestorzy, którzy
          dysponują za małymi środkami, żeby próbować w&nbsp;innych sektorach,
          ale wystarczającymi, żeby zacząć tutaj. Koparki kryptowalut kupują też
          firmy, które szukają sposobu na dywersyfikację przychodu i&nbsp;młodzi
          ludzie, którzy uważają, że kryptowaluty to przyszłość.
          I&nbsp;to&nbsp;całkiem niedaleka.
        </Text>
        <StepSection
          width={width}
          stepText="Krok 1: Podstawy"
          titleText="Dobry start od bloga"
          ContentText="Zanim umówisz się na konsultacje czy zadasz pytania, zacznij od
          podstaw. Na naszym blogu piszą eksperci, piszą z sensem i z konkretem,
          bo na rzeczy się znają, bo wiedzą, o co początkujący pytają
          najczęściej. Zacznij więc tu."
          CtaText="Polecamy!"
          BtnText="Wpisy na blogu Xminer"
          BtnLink="/blog"
        />
        <StepSection
          width={width}
          stepText="Krok 2: Czas na maszynę"
          titleText="Wybierz koparkę"
          ContentText="Bez tego ani rusz: jeśli uważasz, że temat jest rozwojowy i daje możliwości, czas na ten pierwszy, debiutancki występ. Chętnie pomożemy Ci wybrać koparkę (lub koparki!) idealne do Twoich potrzeb i budżetu, a po zakupie spotkasz się z ekspertem, który opowie, nauczy, doradzi."
          CtaText="I już nie możesz się doczekać, aż zaczniesz kopać!"
          BtnText="Zobacz koparki"
          BtnLink="/sprzedaz"
        />
        <StepSection
          width={width}
          stepText="Krok 3: Zarabiaj"
          titleText="Pod okiem naszych specjalistów"
          ContentText="Lub zupełnie samodzielnie, w swoim domu. Wybór należy do Ciebie - nie wiążemy Cię przecież żadną umową czy innym cyrografem. Wiedz, że możesz zostawić u nas swoje maleństwo, że masz u nas wsparcie, ale tylko Ty decydujesz. I zawsze możesz zmienić zdanie!"
          BtnText="Skontaktuj się z nami"
          BtnLink="/kontakt"
        />
        <StepSection
          width={width}
          stepText="A może"
          titleText="Masz już koparkę i... nic?"
          ContentText="Każdy może kupić koparkę kryptowalut. Początkujący jednak spotykają na swojej drodze wiele problemów, które stają im na drodze do finansowej satysfakcji. Skalowanie przychodów, ogromne wydatki na prąd, problem z wyborem waluty? Zapraszamy na naszego bloga!"
        />
      </WhyWrapperStyles>
    </Container>
  )
}

export default WhySection
