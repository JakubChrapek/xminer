import React from "react"
import styled from "styled-components"
import Text from "../../Text/Text"
import AboutCeo from "./AboutCeo/AboutCeo"

const AboutHero = styled.section`
  min-height: 60vw;
  padding-top: 108px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  /* width: 100%; */
  max-width: 1440px;
  position: relative;
  z-index: 1;
  margin: 120px 122px 30px;

  @media only screen and (max-width: 1180px) {
    margin: 100px 80px 30px;

    &:last-of-type {
      margin: 40px 80px 30px;
    }
    h1 {
      font-size: 48px;

      + p {
        font-size: 40px;
      }
    }
  }

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    width: 80vw;
    max-width: 740px;
    margin: 100px auto 30px;
    &:last-of-type {
      margin: 40px auto 30px;
    }
    p {
      max-width: unset !important;
    }
  }

  @media only screen and (max-width: 740px) {
    width: unset;
    margin: 100px 30px 30px;
    &:last-of-type {
      margin: 40px 30px 30px;
    }
  }

  @media only screen and (max-width: 640px) {
    margin: 55px 30px 40px;

    &:last-of-type {
      margin: 0px 30px 50px;
    }
    h1 {
      font-size: 36px;

      + p {
        font-size: 30px;
        margin: 10px 0 0;
      }
    }
    p {
      font-size: 16px;
    }
  }

  > div {
    &:first-child {
      margin-right: 12px;
      @media only screen and (max-width: 1040px) {
        margin-right: 0;
      }
    }
    &:last-child {
      margin-top: 100px;
      margin-left: 12px;
      @media only screen and (max-width: 1040px) {
        margin-top: 40px;
        margin-left: 0;
      }
      @media only screen and (max-width: 640px) {
        margin-top: 20px;
        margin-left: 0;
      }
    }
    flex: 1;
  }
`

const AboutHeroSection = () => {
  return (
    <>
      <AboutHero>
        <Wrapper>
          <div>
            <Text
              as="h1"
              fontSize="60px"
              fontWeight="600"
              lineHeight="1.03em"
              color="var(--headers-color)"
            >
              Kryptowaluty
            </Text>
            <Text
              fontSize="48px"
              fontWeight="500"
              margin="20px 0 0"
              color="var(--headers-color)"
            >
              To lubimy!
            </Text>
          </div>
          <div>
            <Text
              color="var(--body-text)"
              maxwidth="588px"
              fontSize="18px"
              lineHeight="1.67"
            >
              Chyba śmiało możemy powiedzieć, że jesteśmy jedną z&nbsp;firm,
              której się udało. Udało zarobić na kryptowalutach, udało wytrwać
              w&nbsp;tym biznesie wiele lat i&nbsp;udało stworzyć markę, która
              z&nbsp;kryptowalut żyje i&nbsp;pracuje z&nbsp;nimi na co dzień.
            </Text>
            <br />
            <Text
              color="var(--body-text)"
              maxwidth="588px"
              fontSize="18px"
              lineHeight="1.67"
            >
              Nasza kopalnia to dowód na to, że gorączka kryptowalutowego złota
              jest w&nbsp;zasięgu ręki, jest namacalna i&nbsp;jest realna.
              Wiedzą o&nbsp;tym, jak inwestować, dzielimy się od lat.
              I&nbsp;mamy referencje!
            </Text>
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <Text
              color="var(--body-text)"
              maxwidth="588px"
              fontSize="18px"
              lineHeight="1.67"
            >
              Oprócz wiedzy dajemy też możliwości. Lokalizacja naszej kopalni
              w&nbsp;bezpośrednim sąsiedztwie biogazowni sprawia, że możemy
              zaproponować naszym klientom prąd za jedyne 32 grosze netto za
              kWh. Stworzone przez nas abonamenty realnie wpływają więc nie
              tylko na wygodę inwestycji, ale i&nbsp;realny zarobek naszych
              klientów. Koparki również sprzedajemy i&nbsp;profesjonalnie
              serwisujemy.
            </Text>
            <br />
            <Text
              color="var(--body-text)"
              maxwidth="588px"
              fontSize="18px"
              lineHeight="1.67"
            >
              I to są rzeczy, za które klienci nas uwielbiają.
            </Text>
            <br />
            <Text
              color="var(--body-text)"
              maxwidth="588px"
              fontSize="18px"
              lineHeight="1.67"
            >
              W naszej pracy codziennie udowadniamy, że kryptowaluty to jest
              sektor, w&nbsp;który warto zainwestować. Czujesz, że inwestycja
              w&nbsp;nowoczesne technologie to coś, dla Ciebie?
            </Text>
            <br />
            <Text
              color="var(--body-text)"
              fontSize="18px"
              lineHeight="1.67"
              margin="0 0 80px"
            >
              Dobrze trafiłeś!
            </Text>
          </div>
          <div></div>
        </Wrapper>
      </AboutHero>
      <AboutCeo />
    </>
  )
}

export default AboutHeroSection
