import React from "react"
import useWindowSize from "../../../utils/UseWindowSize"
import Container from "../../Container/Container"
import Text from "../../Text/Text"
import { HeroWrapperStyles } from "../../ServiceComponents/HeroSection/HeroSection"

const BeginnersHero = () => {
  const width = useWindowSize()
  return (
    <Container padding="108px 0 0">
      <HeroWrapperStyles margin="127px 122px" equal>
        <div>
          <Text
            as="h1"
            fontSize="10px"
            color="var(--headers-color)"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            color="var(--headers-color)"
          >
            Koparki kryptowalut
          </Text>
          <Text
            as="h2"
            margin={width < 1080 ? "12px 0 0" : "20px 0 0"}
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
            color="var(--headers-color)"
          >
            Zacznij swoją przygodę z&nbsp;Xminer
          </Text>
        </div>
        <div>
          <Text
            color="var(--body-text)"
            margin={
              width > 1081 ? "52px 0 0" : width > 761 ? "32px 0 0" : "18px 0 0"
            }
            fontSize="18px !important"
            lineHeight="1.67em"
            fontWeight="400"
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
      </HeroWrapperStyles>
    </Container>
  )
}

export default BeginnersHero
