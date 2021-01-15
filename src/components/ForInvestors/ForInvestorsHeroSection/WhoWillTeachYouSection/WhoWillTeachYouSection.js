import React from "react"
import Container from "../../../Container/Container"
import Flex from "../../../Flex/Flex"
import Text from "../../../Text/Text"
import Button from "../../../Button/Button"
import { WrapperStyles } from "../../../Wrapper/Wrapper"
import ButtonLink from "../../../ButtonLink/ButtonLink"
import styled from "styled-components"
import useWindowSize from "../../../../utils/UseWindowSize"

const WhoWrapperStyles = styled(WrapperStyles)`
  margin: 120px 122px 0;
  @media only screen and (max-width: 1182px) {
    margin: 90px 122px 0;
  }
  @media only screen and (max-width: 740px) {
    margin: 50px 30px 0;
  }
  @media only screen and (max-width: 740px) {
    margin: 21px 30px 0;
  }
`

const WhoWillTeachYouSection = () => {
  const width = useWindowSize()
  return (
    <Container>
      <WhoWrapperStyles margin="60px 122px 0">
        <Flex
          width="100%"
          alignItems={width > 740 ? "center" : "flex-start"}
          direction="column"
        >
          <Text
            fontSize="10px"
            fontWeight="normal"
            color="var(--headers-color)"
            lineHeight="normal"
            letterSpacing="1px"
            textTransform="uppercase"
            textAlign={width > 740 ? "center" : "left"}
          >
            Nasi eksperci
          </Text>
          <Text
            fontSize={width > 1182 ? "48px" : width > 740 ? "40px" : "24px"}
            fontWeight="600"
            textAlign={width > 740 ? "center" : "left"}
            margin="8px 0 0"
          >
            Kto będzie Cię szkolił?
          </Text>
          <Text
            fontSize="18px"
            fontWeight="300"
            lineHeight="1.67em"
            margin="24px 0 0"
            textAlign={width > 740 ? "center" : "left"}
            color="var(--body-text)"
          >
            Za szkolenia w&nbsp;Xminer odpowiada Łukasz Botorek -&nbsp;nasz
            specjalista i&nbsp;CEO, który nie tylko posiada ogromną wiedzę
            o&nbsp;inwestowaniu, ale i&nbsp;potrafi ją przekazać nawet opornym.
            Ostrzegamy lojalnie, że spotkanie z&nbsp;tym człowiekiem zazwyczaj
            kończy się olśnieniem i&nbsp;kryptowalutową zajawką, która trwa
            latami. Masz ochotę na próbkę? Zapraszamy na naszego bloga!
          </Text>
          <Flex
            margin="50px 0 0"
            width="100%"
            justifyContent="center"
            alignItems={width > 640 ? "" : "center"}
            direction={width > 640 ? "row" : "column"}
          >
            <ButtonLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              bg="var(--primary)"
              margin={width > 640 ? "0 10px 0 0" : "0"}
              to="/blog"
              width="200px"
            >
              Blog Xminer
            </ButtonLink>
            <ButtonLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              bg="transparent"
              color="var(--primary)"
              border="1px solid var(--primary)"
              margin={width > 640 ? "0 0px 0 10px" : "30px 0 0"}
              to="/o-xminer"
              width="200px"
            >
              Więcej o nas
            </ButtonLink>
          </Flex>
        </Flex>
      </WhoWrapperStyles>
    </Container>
  )
}

export default WhoWillTeachYouSection
