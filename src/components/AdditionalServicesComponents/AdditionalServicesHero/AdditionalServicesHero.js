import React from "react"
import useWindowSize from "../../../utils/UseWindowSize"
import Container from "../../Container/Container"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"
import { HeroWrapperStyles } from "../../ServiceComponents/HeroSection/HeroSection"
const AdditionalServicesHero = () => {
  const width = useWindowSize()
  return (
    <Container padding="108px 0 0">
      <HeroWrapperStyles margin="127px 122px 95px" equal>
        <div>
          <Text
            fontSize="10px"
            color="var(--headers-color)"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
          >
            Wiemy, czego potrzebujesz
          </Text>
          <Text
            as="h2"
            margin={width < 1080 ? "12px 0 0" : "20px 0 0"}
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
          >
            Serwis, konsultacje {width > 1336 || (width < 670 && <br />)}
            i&nbsp;opieka 24/h
          </Text>
        </div>
        <div>
          <Text
            margin={
              width > 1081 ? "52px 0 0" : width > 761 ? "32px 0 0" : "18px 0 0"
            }
            fontSize="18px"
            lineHeight="1.67em"
          >
            Twoja koparka może mieć lepsze życie. Ty możesz więcej na niej
            zarabiać. Możesz też spać spokojnie, wiedząc, że spoczywa w dobrych
            rękach, że czuwa nad nią ktoś, kto o koparkach może książek nie
            napisał, ale to tylko kwestia czasu. Dlatego obok kolokacji koparek
            i&nbsp;taniego dostępu do zielonego prądu, oferujemy Ci znacznie
            więcej: serwis 24/h, dowóz, montaż, konfigurację, konsultacje oraz
            zdalny dostęp do Twojej inwestycji.
          </Text>
          <Text
            margin="52px 0 0"
            fontSize="18px"
            lineHeight="1.67em"
            margin="20px 0 0"
          >
            I&nbsp;to z&nbsp;każdego miejsca na świecie.
          </Text>
        </div>
      </HeroWrapperStyles>
    </Container>
  )
}

export default AdditionalServicesHero
