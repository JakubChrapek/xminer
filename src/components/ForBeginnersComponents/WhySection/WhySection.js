import React from "react"
import Container from "../../Container/Container"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"
import ButtonText from "../../ButtonText/ButtonText"

const StepSection = ({
  stepText,
  titleText,
  ContentText,
  CtaText,
  BtnText,
  BtnLink,
}) => (
  <>
    <Text
      margin="72px 0 17px"
      fontSize="10px"
      textTransform="uppercase"
      letterSpacing="1px"
    >
      {stepText}
    </Text>
    <Text fontSize="36px" fontWeight="600" lineHeight="normal">
      {titleText}
    </Text>
    <Text
      margin="38px 0 0"
      fontSize="18px"
      lineHeight="1.67em"
      fontWeight="300"
    >
      {ContentText}
    </Text>
    {CtaText && (
      <Text
        margin="28px 0 0"
        fontSize="18px"
        lineHeight="1.67em"
        fontWeight="300"
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
  return (
    <Container bg="var(--while)">
      <Wrapper margin="72px 60px 134px" direction="column" maxwidth="710px">
        <Text as="h2" fontSize="36px" fontWeight="600" lineHeight="normal">
          Dlaczego warto zainwestować w&nbsp;koparki kryptowalut?
        </Text>
        <Text
          margin="38px 0 0"
          fontSize="18px"
          lineHeight="1.67em"
          fontWeight="300"
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
          stepText="Krok 2: Czas na maszynę"
          titleText="Wybierz koparkę"
          ContentText="Bez tego ani rusz: jeśli uważasz, że temat jest rozwojowy i daje możliwości, czas na ten pierwszy, debiutancki występ. Chętnie pomożemy Ci wybrać koparkę (lub koparki!) idealne do Twoich potrzeb i budżetu, a po zakupie spotkasz się z ekspertem, który opowie, nauczy, doradzi."
          CtaText="I już nie możesz się doczekać, aż zaczniesz kopać!"
          BtnText="Zobacz koparki"
          BtnLink="/sprzedaz"
        />
        <StepSection
          stepText="Krok 3: Zarabiaj"
          titleText="Pod okiem naszych specjalistów"
          ContentText="Lub zupełnie samodzielnie, w swoim domu. Wybór należy do Ciebie - nie wiążemy Cię przecież żadną umową czy innym cyrografem. Wiedz, że możesz zostawić u nas swoje maleństwo, że masz u nas wsparcie, ale tylko Ty decydujesz. I zawsze możesz zmienić zdanie!"
          BtnText="Skontaktuj się z nami"
          BtnLink="/kontakt"
        />
        <StepSection
          stepText="A może"
          titleText="Masz już koparkę i... nic?"
          ContentText="Każdy może kupić koparkę kryptowalut. Początkujący jednak spotykają na swojej drodze wiele problemów, które stają im na drodze do finansowej satysfakcji. Skalowanie przychodów, ogromne wydatki na prąd, problem z wyborem waluty? Zapraszamy na naszego bloga!"
        />
      </Wrapper>
    </Container>
  )
}

export default WhySection
