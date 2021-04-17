import React, { useEffect } from "react"
import Container from "../Container/Container"
import Text from "../Text/Text"
import Wrapper from "../Wrapper/Wrapper"
import { HeroWrapperStyles } from "../ServiceComponents/HeroSection/HeroSection"
import useWindowSize from '../../utils/UseWindowSize'
import { gsap } from "gsap"

const KryptowoltaikaHeroSection = () => {
  const width = useWindowSize()

  // useEffect(() => {
  //   const tl = gsap.timeline()
  //   tl.to(".wrapper", {
  //     autoAlpha: 1,
  //   })
  //     .from([".kryptowoltaika--header", ".kryptowoltaika--subheader"], {
  //       opacity: 0,
  //       duration: 1.2,
  //       y: 12,
  //       ease: "power3.out",
  //       stagger: {
  //         amount: 0.4,
  //       },
  //     })
  //     .from(
  //       ".kryptowoltaika--content",
  //       {
  //         opacity: 0,
  //         y: 10,
  //         duration: 1.6,
  //         ease: "power3.out",
  //         stagger: {
  //           amount: 0.4,
  //         },
  //       },
  //       "-=0.5"
  //     )
  // }, [])

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
            className="kryptowoltaika--header"
          >
            Kryptowoltaika
          </Text>
          <Text
            as="h2"
            margin={width < 1080 ? "12px 0 0" : "20px 0 0"}
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
            color="var(--headers-color)"
            className="kryptowoltaika--subheader"
          >
            Niski koszt
            <br />
            prądu do koparek
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
            className="kryptowoltaika--content"
          >
            Największym bieżącym problemem osób, które chcą kopać kryptowaluty jest koszt prądu. <strong>Oczywiście, w&nbsp;czasie hossy nikt się tym nie przejmuje, wszystkie inwestycje i&nbsp;tak będą opłacalne. Ale co potem?</strong>​
          </Text>
          <Text
            color="var(--body-text)"
            margin={
              width > 1081 ? "26px 0 0" : width > 761 ? "22px 0 0" : "18px 0 0"
            }
            fontSize="18px"
            fontWeight="400"
            lineHeight="1.67em"
            className="kryptowoltaika--content"
          >
            Firma Xminer myśli terminowo i&nbsp;dlatego zdecydowaliśmy się połączyć siły z&nbsp;firmą RBS Energia, aby obniżyć koszt prądu do koparek do kryptowalut.
          </Text><Text
            color="var(--body-text)"
            margin={
              width > 1081 ? "26px 0 0" : width > 761 ? "22px 0 0" : "18px 0 0"
            }
            fontSize="18px"
            fontWeight="400"
            lineHeight="1.67em"
            className="kryptowoltaika--content"
          >
            RBS zajmuje się OZE, czyli redukowaniem kosztów prądu od 18 lat. Według rankingu Gazety Wyborczej jest najlepszą  fotowoltaiczną firmą warszawską.​
          </Text>
        </div>
      </HeroWrapperStyles>
    </Container>
  )
}

export default KryptowoltaikaHeroSection
