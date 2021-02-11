import React, { useEffect } from "react"
import styled from "styled-components"
import useWindowSize from "../../../utils/UseWindowSize"
import ButtonText from "../../ButtonText/ButtonText"
import Container from "../../Container/Container"
import { StyledFlex } from "../../Flex/Flex"
import { Checkmark } from "../../ServiceComponents/PackagesSection/Checkmark"
import Text from "../../Text/Text"
import { WrapperStyles } from "../../Wrapper/Wrapper"
import { gsap } from "gsap"

const WideStyledFlex = styled(StyledFlex)`
  @media only screen and (max-width: 740px) {
    margin: 120px 0 0;
    text-align: center;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 60px 35%;
  width: 100%;
  @media only screen and (max-width: 1600px) {
    grid-gap: 60px 20%;
  }
  @media only screen and (max-width: 1200px) {
    grid-gap: 60px 100px;
  }
  @media only screen and (max-width: 900px) {
    grid-gap: 40px 70px;
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }
`

const DarkWrapperStyles = styled(WrapperStyles)`
  @media only screen and (max-width: 1040px) {
    margin: 120px 90px 70px;
  }
  @media only screen and (max-width: 900px) {
    margin: 100px 60px 70px;
  }
  @media only screen and (max-width: 740px) {
    margin: 80px 30px 60px;
  }
  @media only screen and (max-width: 640px) {
    margin: 50px 30px 140px;
  }
  ${Checkmark} {
    margin: 0;
  }
`

const DarkSection = () => {
  const width = useWindowSize()

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(".wrapper", {
      autoAlpha: 1,
      delay: 1.8,
    })
      .from([".dark--header", ".dark--subheader"], 1.6, {
        opacity: 0,
        y: 12,
        ease: "power3.out",
        stagger: {
          amount: 0.4,
        },
      })
      .from(
        ".dark--content",
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
    <Container className="wrapper" bg="var(--nav-dark-bluse)" padding="0">
      <DarkWrapperStyles direction="column" margin="133px 122px 69px">
        <Grid>
          <StyledFlex className="dark--content">
            <Checkmark focus />
            <Text
              fontSize="16px"
              lineHeight="1.63em"
              fontWeight="300"
              margin="2px 0 0 15px"
              maxwidth="707px"
              color="var(--light-blue)"
            >
              Tak, możesz przechowywać swoje koparki u&nbsp;nas i&nbsp;liczyć,
              że jeśli coś pójdzie nie tak, naprawa będzie błyskawiczna
              i&nbsp;w&nbsp;abonamencie.
            </Text>
          </StyledFlex>
          <StyledFlex className="dark--content" justifyContent="flex-end">
            <Checkmark focus />
            <Text
              fontSize="16px"
              lineHeight="1.63em"
              fontWeight="300"
              margin="2px 0 0 15px"
              maxwidth="707px"
              color="var(--light-blue)"
            >
              Tak, możesz liczyć na to, że zakupione przez Ciebie koparki nie
              tylko do Ciebie dowieziemy, ale i&nbsp;przeprowadzimy konfigurację
              i&nbsp;połączymy z&nbsp;Twoim telefonem i&nbsp;laptopem.
            </Text>
          </StyledFlex>
          <StyledFlex className="dark--content">
            <Checkmark focus />
            <Text
              fontSize="16px"
              lineHeight="1.63em"
              fontWeight="300"
              margin="2px 0 0 15px"
              maxwidth="707px"
              color="var(--light-blue)"
            >
              Tak, możesz mieć dostęp do swojej koparki i&nbsp;sterować nią ze
              swojego domu, z&nbsp;firmy i&nbsp;z&nbsp;Karaibów. Pomożemy Ci
              w&nbsp;synchronizacji i&nbsp;będziemy trzymać nad nią pieczę.
            </Text>
          </StyledFlex>
          <StyledFlex className="dark--content" justifyContent="flex-end">
            <Checkmark focus />
            <Text
              fontSize="16px"
              lineHeight="1.63em"
              fontWeight="300"
              margin="2px 0 0 15px"
              maxwidth="707px"
              color="var(--light-blue)"
            >
              Tak, możesz liczyć na to, że przeszkolimy Cię nie tylko w zakresie
              obsługi koparki, ale i&nbsp;inwestowania w&nbsp;kryptowaluty.
              Możemy to zrobić online, możemy przeprowadzić szkolenie dla
              pracowników Twojej firmy. Tak, jak Ci wygodnie!
            </Text>
          </StyledFlex>
        </Grid>
        <WideStyledFlex
          direction="column"
          alignItems="center"
          margin="101px 60px 0"
        >
          <Text
            as="h2"
            fontSize="22px"
            color="var(--white)"
            fontWeight="normal"
            lineHeight="normal"
          >
            Xminer? {width < 740 && <br />}O koparkach wiemy wszystko.
          </Text>
          <ButtonText margin="20px 0 0" to="/kontakt" color="var(--primary)">
            Skontaktuj się z nami
          </ButtonText>
        </WideStyledFlex>
      </DarkWrapperStyles>
    </Container>
  )
}

export default DarkSection
