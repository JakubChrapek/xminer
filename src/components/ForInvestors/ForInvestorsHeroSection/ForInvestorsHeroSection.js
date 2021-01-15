import React from "react"
import Container from "../../Container/Container"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"

const ForInvestorsHeroSection = () => {
  return (
    <Container padding="108px 0 0">
      <Wrapper margin="127px 122px" equal>
        <div>
          <Text
            as="h1"
            fontSize="10px"
            color="var(--headers-color)"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
          >
            Zainwestuj w koparki
          </Text>
          <Text
            as="h2"
            margin="20px 0 0"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
          >
            Wspieramy
            <br />
            przedsiębiorców.
            <br />
            Od A do Z!
          </Text>
        </div>
        <div>
          <Text
            maxwidth="588px"
            margin="52px 0 0"
            fontSize="18px"
            lineHeight="1.67em"
          >
            Inwestując firmowe środki w kryptowaluty, nie musisz być zdany tylko
            na siebie lub wiedzę zdobytą z czeluści internetów. W Xminer
            wspieramy przedsiębiorców na każdym etapie inwestycji - od zakupu
            koparek, przez pełną obsługę, aż po szkolenia dla firm. Wybierając
            Xminer, wybierasz firmę na solidnych podstawach, która wprowadzi
            Twoją firmę w świat kryptowalut.
          </Text>
          <Text
            maxwidth="588px"
            margin="26px 0 0"
            fontSize="18px"
            lineHeight="1.67em"
          >
            Wybierz rzetelną wiedzę, wybierz doświadczenie biznesowe.
          </Text>
          <Text
            maxwidth="588px"
            margin="26px 0 0"
            fontSize="18px"
            lineHeight="1.67em"
          >
            Wybierz Xminer.
          </Text>
        </div>
      </Wrapper>
    </Container>
  )
}

export default ForInvestorsHeroSection
