import React from "react"
import Container from "../Container/Container"
import Text from "../Text/Text"
import Wrapper from "../Wrapper/Wrapper"
import ButtonText from "../ButtonText/ButtonText"
import useWindowSize from "../../utils/UseWindowSize"
import { WrapperStyles } from "../Wrapper/Wrapper"
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
      }
    }
    flex-direction: column;
  }
  @media only screen and (max-width: 760px) {
    width: unset;
    margin: 52px 30px;
    h2 {
      font-size: 36px;
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

const StepCounter = styled.span`
  color: var(--primary);
  font-size: 36px;
  font-weight: bold;
  line-height: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  border-radius: 50%;
  background-color: var(--light-aqua);
  position: absolute;
  left: -52px;
  @media (max-width: 1024px) {
    font-size: 24px;
    width: 52px;
    height: 52px;
    left: -16px;
  }
  @media (max-width: 490px) {
    left: 0;
  }
`

const StepWrapper = styled.div`
  position: relative;
  margin-top: 64px;
  padding-left: 64px;
  @media (max-width: 490px) {
    margin-top: 46px;
    padding-left: 0;
    display: flex;
    flex-wrap: wrap;
    > p:first-of-type {
      padding-left: 71px;
      min-height: 64px;
      font-size: 18px;
      line-height: 1.68;
      font-weight: 500;
    }
  }
`

const StepSection = ({
  stepText,
  titleText,
  ContentText,
  width = { width },
}) => (
  <StepWrapper>
    <StepCounter>{stepText}</StepCounter>
    <Text
      color="var(--headers-color)"
      fontSize="22px"
      fontWeight="600"
      lineHeight="normal"
    >
      {titleText}
    </Text>
    <Text
      margin="15px 0 0"
      fontSize="18px"
      lineHeight="1.67em"
      fontWeight="400"
      color="var(--body-text)"
      dangerously={ContentText}
    />
  </StepWrapper>
)

const KryptowoltaikaHowTo = () => {
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
          Jak obniżyć koszt prądu koparek?
        </Text>
        <StepSection
          width={width}
          stepText="1"
          titleText="Ustalamy przewidywany pobór prądu przez Twoje koparki."
          ContentText="Wiadomo, że zużycie prądu będzie się różnić dla poszczególnych algorytmów. Później możecie się wspomóc kalkulatorem <a class='link' rel='noreferrer noopener' target='_blank' href='https://www.whattomine.com'>whattomine</a>, ale na tym etapie bierzemy pod uwagę sumaryczną moc Twojej koparki.​"
        />
        <StepSection
          width={width}
          stepText="2"
          titleText="Sprawdzamy lokalne warunki"
          ContentText="Jaką działką dysponujesz, jakim dachem (kat nachylenia, powierzchnia), dokładnie w jaką stronę mogą być zwrócone panele w Twojej lokalizacji, jaką mocą umowną (przyłączeniową) dysponujesz, czy można ją zwiększyć, z jakim dostawcą masz podpisaną umowę na dostawę energii. ​"
        />
        <StepSection
          width={width}
          stepText="3"
          titleText="Przygotowujemy kilka wariantów  technicznych i&nbsp;analizę ich produktywności​"
          ContentText="Fachowo doradzimy ci, jak obniżyć koszt prądu do&nbsp;koparek do&nbsp;kryptowalut. Przedstawimy wady i&nbsp;zalety każdego dostępnego rozwiązania, żebyś mógł podjąć świadomą decyzję w&nbsp;kwestii swoich inwestycji.​"
        />
        <StepSection
          width={width}
          stepText="4"
          titleText="Sprawdzamy możliwości finansowania i&nbsp;przygotowujemy wnioski"
          ContentText="Istnieją różne programy: Mój prąd, Dotacja Warszawska, regionalne programy RPO, projekty NFOŚ. Przez lata pomagaliśmy naszym klientom stworzyć dobre aplikacje, dzięki którym dostawali oni dotacje do swoich inwestycji.​"
        />
        <StepSection
          width={width}
          stepText="5"
          titleText="Optymalizujemy zwrot z inwestycji"
          ContentText="Dobieramy wielkość i&nbsp;rodzaj instalacji do&nbsp;Twojej inwestycji. Skoro mamy już wszystkie składowe rzutujące na wielkość inwestycji i&nbsp;poziom dopłat, to zastanawiamy się z&nbsp;Tobą czy chcesz pokrywać całość zużycia prądu z&nbsp;fotowoltaiki? Istnieje w&nbsp;tej materii kilka wariantów i&nbsp;pomagamy wybrać najlepszy.​​"
        />
      </WhyWrapperStyles>
    </Container>
  )
}

export default KryptowoltaikaHowTo
