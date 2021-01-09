import React from "react"
import styled from "styled-components"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"
import FeatureParagraph from "./FeatureParagraph/FeatureParagraph"
import IdeaIcon from "../../../images/ico-idea.svg"
import RocketIcon from "../../../images/ico-rocket.svg"
import ManualIcon from "../../../images/ico-manual.svg"
import TapIcon from "../../../images/ico-tap.svg"
import SearchIcon from "../../../images/ico-search.svg"

const SalesWrapper = styled(Wrapper)``

const SalesHero = () => {
  return (
    <Container padding="108px 0 0">
      <SalesWrapper margin="127px 122px" equal>
        <div>
          <Text
            as="h2"
            fontSize="10px"
            color="var(--nav-dark-bluse)"
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
          >
            Wybierz koparkę
            <br />z metką Xminer
          </Text>
        </div>
        <div>
          <Text
            maxwidth="588px"
            margin="52px 0 0"
            fontSize="18px"
            lineHeight="1.67em"
          >
            Dla naszych Klientów tworzymy koparki, którymi sami kopiemy na co
            dzień. Do wyboru masz setki konfiguracji, ale przedstawiamy Ci też
            kilka gotowych produktów, nad którymi nie musisz się zastanawiać -
            idealne rozwiązanie, kiedy dopiero zaczynasz lub masz niewielkie
            doświadczenie w kopaniu. Niski pobór prądu i niska awaryjność, a do
            tego gwarancja, szkolenie, dowóz i zdalne wsparcie - to wszystko co,
            otrzymujesz razem z naszymi koparkami.
          </Text>
          <Text margin="32px 0 0" fontSize="18px" lineHeight="1.67em">
            Prawda, że fajnie?
          </Text>
        </div>
      </SalesWrapper>
      <SalesWrapper margin="0 122px 120px">
        <Flex width="100%" justifyContent="center" direction="column">
          <Text
            textAlign="center"
            fontSize="36px"
            lineHeight="normal"
            fontWeight="600"
          >
            Dlaczego warto?
          </Text>
          <FeatureParagraph
            icon={SearchIcon}
            iconBg="rgba(197, 242, 220, 0.6)"
            iconAlt="Ikona lupy"
            title="Różne konfiguracje, różne możliwości"
            content="Nowy serwer obliczeniowy, niski pobór prądu i od 6 do nawet 13 kart graficznych w jednej koparce - to najważniejsze zalety naszych maleństw. Płyta główna, nawet 2 zasilacze o dużej mocy (co najmniej 650W!) oraz specjalna, autorska aluminiowa obudowa wraz z riserami - a Ty już wiesz, że jest wybór i są możliwości. Nasze koparki konfigurujemy na Linux (HiveOS)."
            margin="80px 0 0"
          />
          <FeatureParagraph
            icon={IdeaIcon}
            iconBg="rgba(250, 227, 175, 0.6)"
            iconAlt="Ikona z wykrzyknikiem"
            title="Dlaczego? Bo wiemy, że się sprawdza. Koparka z metką „Wykopane w Polsce”"
            content="Nasze koparki nie tylko tworzone są bezpośrednio przez inżynierów z Xminer, ale i z polskich podzespołów. Nie ma problemu z serwisem, nie ma problemu z importem, nie ma problemu z częściami opisanymi w języku krzaczastym i wątpliwej jakości. Kupując u nas, masz pewność. I wiemy z różnych źródeł, że dla naszych inwestorów to jest zaleta bardzo ważna."
            margin="104px 0 0 33%"
          />
          <FeatureParagraph
            icon={RocketIcon}
            iconBg="rgba(197, 215, 242, 0.6)"
            iconAlt="Ikona rakiety"
            title="W cenie? Pełny pakiet"
            content="Cena każdej koparki obejmuje koszt części, budowy, konfiguracji, przeszkolenia, dowozu (do 100km od Wrocławka bezpłatnie) oraz zdalnego wsparcia przez cały (tak cały!) okres inwestycji. Koparkę możesz nawet zostawić u nas, zasilać u nas i serwisować u nas. Dla nas kompleksowa oferta to zdecydowanie nie jest pusty slogan."
            margin="104px 0 0"
          />
          <FeatureParagraph
            icon={TapIcon}
            iconBg="rgba(241, 193, 201, 0.6)"
            iconAlt="Ikona palca wciskającego guzik"
            title="Wiele walut do wydobycia"
            content="Na naszym sprzęcie można kopać między innymi Ethereum (ETH), EtherumClassic (ETC), Nicehash, Ravencoin (RVN), GrinCoin (GRIN) czy Bittube (TUBE). Nie wiesz, od czego zacząć, czy inwestować w stary, dobry Bitcoin czy może modne Ethereum? Zapytaj nas o to. Powiemy wszystko, co wiemy!"
            margin="104px 0 0 33%"
          />
          <FeatureParagraph
            icon={ManualIcon}
            iconBg="rgba(250, 227, 175, 0.6)"
            iconAlt="Ikona podręcznika"
            title="Szkolenie i konfiguracja"
            content="Niezależnie od tego, czy kupujesz u nas jedną koparkę, czy kilkadziesiąt - możesz zamówić u nas szkolenie: zdalne, indywidualne lub dla całego zespołu. Konfiguracja komputera lub telefonu, żeby kontrolować koparkę na odległość? Nie ma sprawy!"
            margin="104px 0 0"
          />
        </Flex>
      </SalesWrapper>
    </Container>
  )
}

export default SalesHero
