import React from "react"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"

const HeroSection = () => {
  return (
    <Container padding="108px 0 0">
      <Wrapper margin="127px 122px 95px" equal>
        <div>
          <Text
            as="h1"
            fontSize="10px"
            color="var(--nav-dark-bluse)"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
          >
            Nasza propozycja?
          </Text>
          <Text
            as="h2"
            margin="20px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
          >
            Najlepszy apartament dla Twoich koparek
          </Text>
        </div>
        <div>
          <Text
            maxwidth="588px"
            margin="52px 0 0"
            fontSize="18px"
            lineHeight="1.67em"
          >
            Jako pierwsza firma w Polsce oferujemy kolokację komputerów do
            wydobycia kryptowalut zasilaną w&nbsp;100% energią pochodzącą
            z&nbsp;odpowiedzialnych źródeł energii (OZE). Po prostu przenieś
            swoje koparki do naszego mobilnego centrum serwerowego, który jest
            położony w&nbsp;bezpośrednim sąsiedztwie biogazowni i&nbsp;tuż obok
            naszych specjalistów. Zyskaj tani prąd dla siebie, więcej
            przestrzeni w&nbsp;swoim domu i&nbsp;pięciogwiazdkowy hotel dla
            swoich maszyn.
          </Text>
        </div>
      </Wrapper>
    </Container>
  )
}

export default HeroSection
