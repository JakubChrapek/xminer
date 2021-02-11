import React, { useEffect } from "react"
import styled from "styled-components"
import useWindowSize from "../../../utils/UseWindowSize"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import { WrapperStyles } from "../../Wrapper/Wrapper"
import { gsap } from "gsap"

const ParagraphWrapperStyles = styled(WrapperStyles)`
  > div {
    &:nth-of-type(2) {
      margin-left: 60px;
    }
  }

  @media only screen and (max-width: 1440px) {
    margin: 0px 80px 95px;
    > div {
      &:nth-of-type(2) {
        margin-left: 50px;
      }
    }
  }
  @media only screen and (max-width: 1180px) {
    margin: 0 60px 88px;
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
    margin: 0 30px 65px;
  }
  @media only screen and (max-width: 640px) {
    width: unset;
    margin: 0 30px 55px;
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

const ParagraphSection = () => {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(".wrapper", {
      autoAlpha: 1,
      delay: 2,
    })
      .from([".paragraph--header", ".paragraph--subheader"], 1.6, {
        opacity: 0,
        y: 12,
        ease: "power3.out",
        stagger: {
          amount: 0.4,
        },
      })
      .from(
        ".paragraph--content",
        1.6,
        {
          opacity: 0,
          y: 10,
          ease: "power3.out",
          stagger: {
            amount: 0.4,
          },
        },
        "-=0.5"
      )
  }, [])

  const width = useWindowSize()
  return (
    <Container>
      <ParagraphWrapperStyles className="wrapper" margin="0 122px 93px">
        <Flex flex="3" direction="column" margin="0 146px 0 0">
          <Text
            as="span"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            fontWeight="normal"
            color="var(--headers-color)"
            className="paragraph--header"
          >
            Nasza propozycja to:
          </Text>
          <Text
            as="h3"
            fontSize="24px"
            lineHeight="1.33em"
            fontWeight="600"
            margin="12px 0 0"
            color="var(--headers-color)"
            className="paragraph--subheader"
          >
            Najlepsze warunki
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="400"
            margin={width > 640 ? "12px 0 0" : "8px 0 0"}
            color="var(--body-text)"
            className="paragraph--content"
          >
            Szum, pole magnetyczne, nadmiar ciepła, wysoki koszt energii
            elektrycznej, problemy z&nbsp;przyłączami -&nbsp;to jedne
            z&nbsp;najpopularniejszych kłopotów, z&nbsp;którymi spotyka się
            początkujący inwestor, trzymający koparki w&nbsp;domu lub
            w&nbsp;siedzibie firmy.
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.63em"
            fontWeight="400"
            margin="24px 0 0"
            color="var(--body-text)"
            className="paragraph--content"
          >
            Nasza propozycja to rozwiązanie tych problemów -&nbsp;koparki
            umieszczane są w&nbsp;specjalnym, zaprojektowanym przez nas
            kontenerze, z&nbsp;aktywnym systemem chłodzenia, układem filtrów
            powietrza oraz precyzyjnymi czujnikami mocy i&nbsp;temperatury.
            I&nbsp;to 24 godziny na dobę.
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
            maxwidth="286px"
            color="var(--headers-color)"
            fontWeight="normal"
            className="paragraph--content"
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
            className="paragraph--content"
          >
            Wolne miejsce w&nbsp;domu lub w&nbsp;firmie, całodobowy monitoring
            samopoczucia Twojej koparki i&nbsp;mniejszą awaryjność sprzętu,
            który pracuje w&nbsp;idealnych warunkach.
          </Text>
        </Flex>
      </ParagraphWrapperStyles>
    </Container>
  )
}

export default ParagraphSection
