import React, { useEffect } from "react"
import useWindowSize from "../../../utils/UseWindowSize"
import Container from "../../Container/Container"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"
import { HeroWrapperStyles } from "../../ServiceComponents/HeroSection/HeroSection"
import { gsap } from "gsap"

const AdditionalServicesHero = () => {
  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(".wrapper", {
      autoAlpha: 1,
    })
      .from([".additional--header", ".additional--subheader"], 1.6, {
        opacity: 0,
        y: 12,
        ease: "power3.out",
        stagger: {
          amount: 0.4,
        },
      })
      .from(
        ".additional--content",
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
    <Container padding="108px 0 0">
      <HeroWrapperStyles className="wrapper" margin="127px 122px 95px" equal>
        <div>
          <Text
            fontSize="10px"
            color="var(--headers-color)"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            color="var(--headers-color)"
            className="additional--header"
          >
            Wiemy, czego potrzebujesz
          </Text>
          <Text
            as="h2"
            margin={width < 1080 ? "12px 0 0" : "20px 0 0"}
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
            color="var(--headers-color)"
            className="additional--subheader"
          >
            Serwis, konsultacje {width > 1336 || (width < 670 && <br />)}
            i&nbsp;opieka 24/h
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
            className="additional--content"
          >
            Twoja koparka może mieć lepsze życie. Ty możesz więcej na niej
            zarabiać. Możesz też spać spokojnie, wiedząc, że spoczywa w dobrych
            rękach, że czuwa nad nią ktoś, kto o&nbsp;koparkach może książek nie
            napisał, ale to tylko kwestia czasu. Dlatego obok kolokacji koparek
            i&nbsp;taniego dostępu do zielonego prądu, oferujemy Ci znacznie
            więcej: serwis 24/h, dowóz, montaż, konfigurację, konsultacje oraz
            zdalny dostęp do Twojej inwestycji.
          </Text>
          <Text
            margin="52px 0 0"
            fontSize="18px"
            lineHeight="1.67em"
            margin="20px 0 0"
            color="var(--body-text)"
            className="additional--content"
          >
            I&nbsp;to z&nbsp;każdego miejsca na świecie.
          </Text>
        </div>
      </HeroWrapperStyles>
    </Container>
  )
}

export default AdditionalServicesHero
