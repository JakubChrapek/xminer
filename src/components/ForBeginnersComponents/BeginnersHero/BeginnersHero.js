import React from "react"
import Container from "../../Container/Container"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"

const BeginnersHero = () => {
  return (
    <Container padding="108px 0 0">
      <Wrapper margin="127px 122px" equal>
        <div>
          <Text
            as="h1"
            fontSize="10px"
            color="var(--nav-dark-bluse)"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
          >
            Koparki kryptowalut
          </Text>
          <Text
            as="h2"
            margin="20px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
          >
            Zacznij swoją przygodę z&nbsp;Xminer
          </Text>
        </div>
        <div>
          <Text
            maxWidth="588px"
            margin="52px 0 0"
            fontSize="18px"
            lineHeight="1.67em"
          >
            O&nbsp;kryptowalutach ostatnio głośno i&nbsp;głośniej. Może nie tak
            dużo, jak o&nbsp;najnowszych promocjach w sklepie żółto-niebieskim,
            czy o&nbsp;tabsach w&nbsp;sezonie grypowym, nadal jednak
            z&nbsp;pewnością temat jest popularny i&nbsp;bestsellerowy. Ten coś
            słyszał, ten kupuje w&nbsp;grze komputerowej, ten już kopie
            i&nbsp;kryptowaluci&nbsp;-&nbsp;wciąż jednak niewiele jest w&nbsp;PL
            miejsc, w&nbsp;których o&nbsp;inwestycji w&nbsp;kryptowaluty możesz
            porozmawiać na poważnie i&nbsp;w&nbsp;tonie biznesowym.
          </Text>
        </div>
      </Wrapper>
    </Container>
  )
}

export default BeginnersHero
