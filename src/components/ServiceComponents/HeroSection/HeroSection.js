import React, {useEffect} from "react"
import styled from "styled-components"
import useWindowSize from "../../../utils/UseWindowSize"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import { WrapperStyles } from "../../Wrapper/Wrapper"
import {gsap} from 'gsap'
export const HeroWrapperStyles = styled(WrapperStyles)`
visibility: hidden;
  > div {
    &:nth-of-type(2) {
      margin-left: 60px;
    }
  }

  @media only screen and (max-width: 1440px) {
    margin: 120px 80px 95px;
    > div {
      &:nth-of-type(2) {
        margin-left: 50px;
      }
    }
    h2 {
      font-size: 40px;
    }
  }
  @media only screen and (max-width: 1180px) {
    margin: 88px 60px;
    > div {
      &:nth-of-type(2) {
        margin-left: 40px;
      }
    }
  }
  @media only screen and (max-width: 1080px) {
    width: 100%;
    max-width: 640px;
    h2 {
      font-size: 32px;
    }
    > div {
      &:nth-of-type(2) {
        margin-left: 0px;

        p {
          max-width: unset;
        }
      }
    }
    flex-direction: column;
  }
  @media only screen and (max-width: 760px) {
    width: unset;
    margin: 65px 30px 50px;
    h2 {
      font-size: 36px;
    }
    > div {
      &:nth-of-type(2) {
        p {
          font-size: 16px;
        }
      }
    }
  }
  @media only screen and (max-width: 482px) {
    h2 {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 413px) {
    h2 {
      font-size: 24px;
    }
  }
`

const HeroSection = () => {
    useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.wrapper', {
      autoAlpha: 1,
    })
    .from(['.services--header', '.services--subheader'], 1.6, {
      opacity: 0,
      y: 12,
      ease: "power4.out",
      stagger: {
        amount: 0.4
      }
    })
    .from('.services--content', 1.6, {
      opacity: 0,
      y: 10,
      ease: "power4.out",
      stagger: {
        amount: 0.3
      }
    }, "-=0.5")
  }, [])
  const width = useWindowSize()
  return (
    <Container padding="108px 0 0">
      <HeroWrapperStyles className="wrapper" margin="127px 122px 95px" equal>
        <div>
          <Text
            as="h1"
            fontSize="10px"
            color="var(--headers-color)"
            textTransform="uppercase"
            letterSpacing="1px"
            fontWeight="normal"
            lineHeight="normal"
            className="services--header"
          >
            Nasza propozycja?
          </Text>
          <Text
            as="h2"
            margin={width < 1080 ? "12px 0 0" : "20px 0 0"}
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
            color="var(--headers-color)"
            className="services--subheader"
          >
            Najlepszy apartament {width < 1080 && <br />}dla Twoich koparek
          </Text>
        </div>
        <div>
          <Text
            maxwidth="588px"
            margin={
              width > 1081 ? "52px 0 0" : width > 761 ? "32px 0 0" : "18px 0 0"
            }
            fontSize={width > 640 ? "18px" : "16px"}
            lineHeight="1.67em"
            fontWeight="400"
            color="var(--body-text)"
            className="services--content"
          >
            Jako pierwsza firma w Polsce oferujemy kolokację komputerów do
            wydobycia kryptowalut zasilaną w&nbsp;100% energią pochodzącą
            z&nbsp;odpowiedzialnych źródeł energii (OZE). Po prostu przenieś
            swoje koparki do naszego mobilnego centrum serwerowego, który jest
            położony w&nbsp;bezpośrednim sąsiedztwie biogazowni i&nbsp;tuż obok
            naszych specjalistów. Zyskaj tani prąd dla siebie, więcej
            przestrzeni w&nbsp;swoim domu i&nbsp;pięciogwiazdkowy hotel dla
            swoich maszyn.
          </Text>
        </div>
      </HeroWrapperStyles>
    </Container>
  )
}

export default HeroSection
