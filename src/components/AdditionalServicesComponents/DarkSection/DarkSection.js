import React from "react"
import styled from "styled-components"
import ButtonText from "../../ButtonText/ButtonText"
import Container from "../../Container/Container"
import Flex from "../../Flex/Flex"
import Text from "../../Text/Text"
import Wrapper from "../../Wrapper/Wrapper"

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
        color-interpolation-filters="sRGB"
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
`

const DarkSection = () => {
  return (
    <Container bg="var(--nav-dark-bluse)" padding="0">
      <Wrapper direction="column" margin="133px 122px 69px">
        <Grid>
          <Flex>
            <CheckMarkIcon />
            <Text
              fontSize="16px"
              lineHeight="1.63em"
              fontWeight="300"
              margin="2px 0 0 15px"
              maxWidth="707px"
              color="var(--light-blue)"
            >
              Tak, możesz przechowywać swoje koparki u&nbsp;nas i&nbsp;liczyć,
              że jeśli coś pójdzie nie tak, naprawa będzie błyskawiczna
              i&nbsp;w&nbsp;abonamencie.
            </Text>
          </Flex>
          <Flex justifyContent="flex-end">
            <CheckMarkIcon />
            <Text
              fontSize="16px"
              lineHeight="1.63em"
              fontWeight="300"
              margin="2px 0 0 15px"
              maxWidth="707px"
              color="var(--light-blue)"
            >
              Tak, możesz liczyć na to, że zakupione przez Ciebie koparki nie
              tylko do Ciebie dowieziemy, ale i&nbsp;przeprowadzimy konfigurację
              i&nbsp;połączymy z&nbsp;Twoim telefonem i&nbsp;laptopem.
            </Text>
          </Flex>
          <Flex>
            <CheckMarkIcon />
            <Text
              fontSize="16px"
              lineHeight="1.63em"
              fontWeight="300"
              margin="2px 0 0 15px"
              maxWidth="707px"
              color="var(--light-blue)"
            >
              Tak, możesz mieć dostęp do swojej koparki i&nbsp;sterować nią ze
              swojego domu, z&nbsp;firmy i&nbsp;z&nbsp;Karaibów. Pomożemy Ci
              w&nbsp;synchronizacji i&nbsp;będziemy trzymać nad nią pieczę.
            </Text>
          </Flex>
          <Flex justifyContent="flex-end">
            <CheckMarkIcon />
            <Text
              fontSize="16px"
              lineHeight="1.63em"
              fontWeight="300"
              margin="2px 0 0 15px"
              maxWidth="707px"
              color="var(--light-blue)"
            >
              Tak, możesz liczyć na to, że przeszkolimy Cię nie tylko w zakresie
              obsługi koparki, ale i&nbsp;inwestowania w&nbsp;kryptowaluty.
              Możemy to zrobić online, możemy przeprowadzić szkolenie dla
              pracowników Twojej firmy. Tak, jak Ci wygodnie!
            </Text>
          </Flex>
        </Grid>
        <Flex direction="column" alignItems="center" margin="101px 60px 0">
          <Text
            as="h2"
            fontSize="22px"
            color="var(--white)"
            fontWeight="normal"
            lineHeight="normal"
          >
            Xminer? O koparkach wiemy wszystko.
          </Text>
          <ButtonText margin="20px 0 0" to="/kontakt" color="var(--primary)">
            Skontaktuj się z nami
          </ButtonText>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default DarkSection
