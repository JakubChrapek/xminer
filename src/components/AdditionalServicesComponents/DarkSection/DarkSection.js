import React from "react"
import styled from "styled-components"
import useWindowSize from "../../../utils/UseWindowSize"
import ButtonText from "../../ButtonText/ButtonText"
import Container from "../../Container/Container"
import { StyledFlex } from "../../Flex/Flex"
import Text from "../../Text/Text"
import { WrapperStyles } from "../../Wrapper/Wrapper"

const CheckMarkIconStyles = styled.svg`
  fill: none;
  margin: 0;
  width: 100%;
  max-width: 32px;
  #bg {
    fill: var(--light-aqua);
  }

  #mark {
    stroke: var(--primary);
  }
`

const WideStyledFlex = styled(StyledFlex)`
  @media only screen and (max-width: 740px) {
    margin: 120px 0 0;
    text-align: center;
  }
`

const CheckMarkIcon = () => (
  <CheckMarkIconStyles
    width="32"
    height="32"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b)">
      <rect id="bg" width="32" height="32" rx="16" />
    </g>
    <path
      id="mark"
      d="M20.48 12.6396L14.32 18.7996L11.52 15.9996"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <filter
        id="filter0_b"
        x="-48"
        y="-48"
        width="128"
        height="128"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="24" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur"
          result="shape"
        />
      </filter>
    </defs>
  </CheckMarkIconStyles>
)

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
`

const DarkSection = () => {
  const width = useWindowSize()
  return (
    <Container bg="var(--nav-dark-bluse)" padding="0">
      <DarkWrapperStyles direction="column" margin="133px 122px 69px">
        <Grid>
          <StyledFlex>
            <CheckMarkIcon />
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
          <StyledFlex justifyContent="flex-end">
            <CheckMarkIcon />
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
          <StyledFlex>
            <CheckMarkIcon />
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
          <StyledFlex justifyContent="flex-end">
            <CheckMarkIcon />
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
