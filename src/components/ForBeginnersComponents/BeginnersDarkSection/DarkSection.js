import React, { useEffect } from "react"
import styled from "styled-components"
import useWindowSize from "../../../utils/UseWindowSize"
import Container from "../../Container/Container"
import Text from "../../Text/Text"
import { WrapperStyles } from "../../Wrapper/Wrapper"
import { gsap } from "gsap"
const DarkWrapperStyles = styled(WrapperStyles)`
  @media only screen and (max-width: 1080px) {
    width: 100%;
    max-width: 640px;
    span {
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
    margin: 97px 30px;
    span {
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
  @media only screen and (max-width: 640px) {
    span {
      font-size: 30px;
    }
  }
  @media only screen and (max-width: 540px) {
    span {
      font-size: 24px;
    }
  }
`

const DarkSection = () => {
  const width = useWindowSize()

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(".wrapper", {
      autoAlpha: 1,
      delay: 1.8,
    }).from(
      ".dark-beginners--content",
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

  return (
    <Container bg="var(--nav-dark-bluse)" className="wrapper">
      <DarkWrapperStyles
        margin="99px 60px 72px"
        direction="column"
        maxwidth="710px"
      >
        <Text
          as="span"
          fontSize="36px"
          fontWeight="600"
          lineHeight="normal"
          color="var(--white)"
          className="dark-beginners--content"
        >
          W Xminer o&nbsp;kryptowalutach {width > 640 && <br />}
          mówimy głośno i&nbsp;w&nbsp;helvetice.
        </Text>
        <Text
          margin="67px 0 0"
          color="var(--white)"
          lineHeight="1.67em"
          fontWeight="400"
          className="dark-beginners--content"
          margin={
            width > 1081 ? "52px 0 0" : width > 761 ? "32px 0 0" : "18px 0 0"
          }
          fontSize={width > 640 ? "18px" : "16px"}
        >
          Bez domysłów, bez ściemy i&nbsp;bez konieczności osiągnięcia wcześniej
          kilku poziomów kryptowalutowego wtajemniczenia.
        </Text>
        <Text
          margin="11px 0 0"
          color="var(--white)"
          lineHeight="1.67em"
          fontWeight="400"
          className="dark-beginners--content"
          fontSize={width > 640 ? "18px" : "16px"}
        >
          Jeśli jesteś początkujący, dopiero chcesz zacząć kopać lub kopiesz od
          jakiegoś czasu, ale z&nbsp;marnym skutkiem -&nbsp;pozdrawiamy,
          zapraszamy. Doradzimy w&nbsp;wyborze koparki, opowiemy nieco
          o&nbsp;walutach, rozjaśnimy wszystkie mroki i&nbsp;pokażemy wszystkie
          aspekty, które znać warto -&nbsp;bez przemilczania.
        </Text>
        <Text
          margin="28px 0 0"
          fontSize={width > 640 ? "18px" : "16px"}
          color="var(--white)"
          lineHeight="1.67em"
          fontWeight="400"
          className="dark-beginners--content"
        >
          Szukasz rzetelnej wiedzy, popartej doświadczeniem? Lubisz wiedzieć,
          w&nbsp;co inwestujesz, zanim zainwestujesz?
        </Text>
        <Text
          margin="28px 0 0"
          fontSize={width > 640 ? "18px" : "16px"}
          color="var(--white)"
          lineHeight="1.67em"
          fontWeight="400"
          className="dark-beginners--content"
        >
          W&nbsp;takim razie zaczynamy!
        </Text>
      </DarkWrapperStyles>
    </Container>
  )
}

export default DarkSection
