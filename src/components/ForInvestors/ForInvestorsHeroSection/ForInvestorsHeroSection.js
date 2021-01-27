import React, {useEffect} from "react"
import Container from "../../Container/Container"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"
import { HeroWrapperStyles } from "../../ServiceComponents/HeroSection/HeroSection"
import useWindowSize from "../../../utils/UseWindowSize"
import {gsap} from 'gsap'

const ForInvestorsHeroSection = () => {
  const width = useWindowSize()

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.wrapper', {
      autoAlpha: 1,
    })
    .from(['.investors--header', '.investors--subheader'], 1.6, {
      opacity: 0,
      y: 12,
      ease: "power4.out",
      stagger: {
        amount: 0.4
      }
    })
    .from('.investors--content', 1.6, {
      opacity: 0,
      y: 10,
      ease: "power4.out",
      stagger: {
        amount: 0.4
      }
    }, "-=0.5")
  }, [])

  return (
    <Container padding="108px 0 0">
      <HeroWrapperStyles className="wrapper" margin="127px 122px" equal>
        <div>
          <Text
            as="h1"
            fontSize="10px"
            color="var(--headers-color)"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            className="investors--header"
          >
            Zainwestuj w koparki
          </Text>
          <Text
            as="h2"
            margin={width < 1080 ? "12px 0 0" : "20px 0 0"}
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
            color="var(--headers-color)"
            className="investors--subheader"
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
            margin={
              width > 1081 ? "52px 0 0" : width > 761 ? "32px 0 0" : "18px 0 0"
            }
            fontSize="18px"
            lineHeight="1.67em"
            color="var(--body-text)"
            fontWeight="400"
            className="investors--content"
          >
            Inwestując firmowe środki w&nbsp;kryptowaluty, nie musisz być zdany
            tylko na siebie lub wiedzę zdobytą z&nbsp;czeluści internetów.
            W&nbsp;Xminer wspieramy przedsiębiorców na każdym etapie inwestycji
            -&nbsp;od zakupu koparek, przez pełną obsługę, aż po szkolenia dla
            firm. Wybierając Xminer, wybierasz firmę na solidnych podstawach,
            która wprowadzi Twoją firmę w&nbsp;świat kryptowalut.
          </Text>
          <Text
            color="var(--body-text)"
            margin={
              width > 1081 ? "26px 0 0" : width > 761 ? "22px 0 0" : "18px 0 0"
            }
            fontSize="18px"
            fontWeight="400"
            lineHeight="1.67em"
            className="investors--content"
          >
            Wybierz rzetelną wiedzę, wybierz doświadczenie biznesowe.
          </Text>
          <Text
            margin={
              width > 1081 ? "26px 0 0" : width > 761 ? "22px 0 0" : "18px 0 0"
            }
            fontSize="18px"
            lineHeight="1.67em"
            fontWeight="400"
            color="var(--body-text)"
            className="investors--content"
          >
            Wybierz Xminer.
          </Text>
        </div>
      </HeroWrapperStyles>
    </Container>
  )
}

export default ForInvestorsHeroSection
