import React from "react"
import Container from "../../Container/Container"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"

const DarkSection = () => {
  return (
    <Container bg="var(--nav-dark-bluse)">
      <Wrapper margin="99px 60px 72px" direction="column" maxwidth="710px">
        <Text
          fontSize="36px"
          fontWeight="600"
          lineHeight="normal"
          color="var(--white)"
        >
          W Xminer o kryptowalutach
          <br />
          mówimy głośno i&nbsp;w&nbsp;helvetice.
        </Text>
        <Text
          margin="67px 0 0"
          fontSize="18px"
          color="var(--white)"
          lineHeight="1.67em"
          fontWeight="300"
        >
          Bez domysłów, bez ściemy i&nbsp;bez konieczności osiągnięcia wcześniej
          kilku poziomów kryptowalutowego wtajemniczenia.
        </Text>
        <Text
          margin="11px 0 0"
          fontSize="18px"
          color="var(--white)"
          lineHeight="1.67em"
          fontWeight="300"
        >
          Jeśli jesteś początkujący, dopiero chcesz zacząć kopać lub kopiesz od
          jakiegoś czasu, ale z&nbsp;marnym skutkiem -&nbsp;pozdrawiamy,
          zapraszamy. Doradzimy w&nbsp;wyborze koparki, opowiemy nieco
          o&nbsp;walutach, rozjaśnimy wszystkie mroki i&nbsp;pokażemy wszystkie
          aspekty, które znać warto -&nbsp;bez przemilczania.
        </Text>
        <Text
          margin="28px 0 0"
          fontSize="18px"
          color="var(--white)"
          lineHeight="1.67em"
          fontWeight="300"
        >
          Szukasz rzetelnej wiedzy, popartej doświadczeniem? Lubisz wiedzieć,
          w&nbsp;co inwestujesz, zanim zainwestujesz?
        </Text>
        <Text
          margin="28px 0 0"
          fontSize="18px"
          color="var(--white)"
          lineHeight="1.67em"
          fontWeight="300"
        >
          W&nbsp;takim razie zaczynamy!
        </Text>
      </Wrapper>
    </Container>
  )
}

export default DarkSection
