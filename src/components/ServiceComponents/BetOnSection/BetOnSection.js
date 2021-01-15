import React from "react"
import styled from "styled-components"
import useWindowSize from "../../../utils/UseWindowSize"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import { WrapperStyles } from "../../Wrapper/Wrapper"

const BetWrapperStyles = styled(WrapperStyles)`
  > div {
    &:nth-of-type(2) {
      margin-left: 60px;
    }
  }

  @media only screen and (max-width: 1440px) {
    margin: 95px 80px;
    > div {
      &:nth-of-type(2) {
        margin-left: 50px;
      }
    }
  }
  @media only screen and (max-width: 1180px) {
    margin: 88px 60px;
    > div {
      &:nth-of-type(1) {
        margin: 0;
      }
      &:nth-of-type(2) {
        margin-left: 60px;
      }
    }
  }
  @media only screen and (max-width: 1080px) {
    width: 100%;
    max-width: 640px;
    flex-direction: column;
    > div {
      &:nth-of-type(2) {
        margin: 38px 0 0;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    width: unset;
    margin: 65px 30px;
  }
  @media only screen and (max-width: 640px) {
    margin: 55px 30px;
    > div {
      h3 {
        font-size: 24px;
      }
      p {
        font-size: 16px;
      }
    }
  }
`

const BetOnSection = () => {
  const width = useWindowSize()
  return (
    <Container padding="0">
      <BetWrapperStyles margin="40px 103px 109px">
        <Flex flex="3" direction="column" margin="0 146px 0 0">
          <Text
            as="span"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            fontWeight="400"
            color="var(--headers-color)"
          >
            Postaw na
          </Text>
          <Text
            as="h3"
            fontSize="24px"
            lineHeight="1.33em"
            fontWeight="600"
            margin="12px 0 0"
            color="var(--headers-color)"
          >
            Bezpieczeństwo
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="400"
            margin="20px 0 0"
            color="var(--body-text)"
          >
            Nasza oferta jest skierowana dla inwestorów z&nbsp;całej Polski.
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="400"
            margin="32px 0 0"
            color="var(--body-text)"
          >
            Nasze kontenery są zabezpieczone: system alarmowy, montoring wideo
            i&nbsp;zdalny podgląd 24/h zapewnia bezpieczeństwo dla każdej
            koparki, która znajduje się w&nbsp;naszych rękach.
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="400"
            margin="32px 0 0"
            color="var(--body-text)"
          >
            Nieuprawniony dostęp? Patrol interwencyjny na miejscu. Zdarzenia
            losowe? Mamy ubezpieczenie i&nbsp;od kradzieży, i&nbsp;od wypadków.
          </Text>
        </Flex>
        <Flex
          flex="2"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          margin="80px 0 0"
        >
          <Text
            as="span"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            maxwidth="286px"
            fontWeight="400"
            color="var(--headers-color)"
          >
            Co zyskujesz?
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="400"
            margin="12px 0 0"
            maxwidth={width > 640 ? "286px" : "unset"}
            color="var(--body-text)"
          >
            Oddając swoją maszynę pod opiekę Xminer, oszczędzasz nie tylko na
            energii elektrycznej, ale i&nbsp;po prostu&nbsp;-&nbsp;zapewniasz
            swoim koparkom bezpieczeństwo.
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="400"
            margin="32px 0 0"
            maxwidth="286px"
            color="var(--body-text)"
          >
            A to jest ważne!
          </Text>
        </Flex>
      </BetWrapperStyles>
    </Container>
  )
}

export default BetOnSection
