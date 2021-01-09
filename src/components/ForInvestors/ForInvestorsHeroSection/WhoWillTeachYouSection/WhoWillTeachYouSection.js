import React from "react"
import Container from "../../../Container/Container"
import Flex from "../../../Flex/Flex"
import Text from "../../../Text/Text"
import Button from "../../../Button/Button"
import Wrapper from "../../../Wrapper/Wrapper"
import ButtonLink from "../../../ButtonLink/ButtonLink"

const WhoWillTeachYouSection = () => {
  return (
    <Container>
      <Wrapper margin="60px 122px 0">
        <Flex width="100%" alignItems="center" direction="column">
          <Text
            fontSize="10px"
            fontWeight="normal"
            color="var(--nav-dark-bluse)"
            lineHeight="normal"
            letterSpacing="1px"
            textTransform="uppercase"
            textAlign="center"
            maxwidth="707px"
          >
            Nasi eksperci
          </Text>
          <Text
            fontSize="48px"
            fontWeight="600"
            textAlign="center"
            maxwidth="707px"
            margin="8px 0 0"
          >
            Kto będzie Cię szkolił?
          </Text>
          <Text
            fontSize="18px"
            fontWeight="300"
            lineHeight="1.67em"
            margin="24px 0 0"
            textAlign="center"
            maxwidth="707px"
          >
            Za szkolenia w Xminer odpowiada Łukasz Botorek - nasz specjalista i
            CEO, który nie tylko posiada ogromną wiedzę o inwestowaniu, ale i
            potrafi ją przekazać nawet opornym. Ostrzegamy lojalnie, że
            spotkanie z tym człowiekiem zazwyczaj kończy się olśnieniem i
            kryptowalutową zajawką, która trwa latami. Masz ochotę na próbkę?
            Zapraszamy na naszego bloga!
          </Text>
          <Flex margin="50px 0 0">
            <ButtonLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              bg="var(--primary)"
              margin="0 10px 0 0"
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
              margin="0 0px 0 10px"
              to="/o-xminer"
              width="200px"
            >
              Więcej o nas
            </ButtonLink>
          </Flex>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default WhoWillTeachYouSection
