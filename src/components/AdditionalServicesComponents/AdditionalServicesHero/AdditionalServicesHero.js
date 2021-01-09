import React from "react"
import Container from "../../Container/Container"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"

const AdditionalServicesHero = () => {
  return (
    <Container padding="108px 0 0">
      <Wrapper margin="127px 122px 95px" equal>
        <div>
          <Text
            fontSize="10px"
            color="var(--nav-dark-bluse)"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
          >
            Wiemy, czego potrzebujesz
          </Text>
          <Text
            as="h2"
            margin="20px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
            maxwidth="480px"
          >
            Serwis, konsultacje i&nbsp;opieka 24/h
          </Text>
        </div>
        <div>
          <Text
            maxwidth="588px"
            margin="52px 0 0"
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
            maxwidth="588px"
            margin="52px 0 0"
            fontSize="18px"
            lineHeight="1.67em"
            margin="20px 0 0"
          >
            I&nbsp;to z&nbsp;każdego miejsca na świecie.
          </Text>
        </div>
      </Wrapper>
    </Container>
  )
}

export default AdditionalServicesHero
