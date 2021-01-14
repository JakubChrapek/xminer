import React from "react"
import styled from "styled-components"
import useWindowSize from "../../../utils/UseWindowSize"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import { WrapperStyles } from "../../Wrapper/Wrapper"

const DarkWrapperStyles = styled(WrapperStyles)`
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
    width: unset;
    margin: 46px 30px 52px;
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

const ServicesDarkSection = () => {
  const width = useWindowSize()
  return (
    <Container bg="var(--nav-dark-bluse)" padding="0">
      <DarkWrapperStyles margin="97px 103px 109px">
        <Flex flex="3" direction="column" margin="0 146px 0 0">
          <Text
            as="span"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            color="var(--light-blue)"
          >
            Wybierz
          </Text>
          <Text
            as="h3"
            fontSize="24px"
            lineHeight="1.33em"
            fontWeight="600"
            margin="12px 0 0"
            color="var(--light-blue)"
          >
            Tani (i eko!) prąd
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="300"
            margin="20px 0 0"
            color="var(--light-blue)"
          >
            O tym, że koparki kryptowalut są wysoce energochłonne,
            a&nbsp;najważniejszym kosztem wydobycia jest energia elektryczna,
            wie każdy inwestor. Wysokie rachunki za prąd nie muszą spędzać Ci
            snu z&nbsp;powiek, zmniejszać przychodów ze sprzedaży kryptowalut,
            a&nbsp;do tego obciążać instalacji elektrycznej w domu&nbsp;lub
            w&nbsp;Twojej firmie.
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="300"
            margin="32px 0 0"
            color="var(--light-blue)"
          >
            Twoja koparka w Xminer jest kolokowana tuż obok biogazowni, więc
            możemy Ci zaoferować energię elektryczną za jedyne 0,32 zł netto za
            każdą kilowatogodzinę (kWh). Co miesiąc otrzymasz fakturę
            z&nbsp;precyzyjnie zmierzonym, realnym zużyciem energii Twoich
            koparek&nbsp;-&nbsp;i&nbsp;zarabiasz więcej!
          </Text>
        </Flex>
        <Flex
          flex="2"
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          margin="110px 0 0"
        >
          <Text
            as="span"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            maxwidth={width > 640 ? "286px" : "unset"}
            color="var(--light-blue)"
          >
            Co zyskujesz?
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="300"
            margin="12px 0 0"
            maxwidth={width > 640 ? "286px" : "unset"}
            color="var(--light-blue)"
          >
            Tani i pochodzący z&nbsp;OZE prąd, który realnie podnosi Twój zysk
            z&nbsp;koparek. Nie ma co się oszukiwać, to jest oszczędność, to się
            opłaca. I&nbsp;nasi Klienci to potwierdzają!
          </Text>
        </Flex>
      </DarkWrapperStyles>
    </Container>
  )
}

export default ServicesDarkSection
