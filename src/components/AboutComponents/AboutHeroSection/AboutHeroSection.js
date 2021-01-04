import React from "react"
import styled from "styled-components"
import Text from "../../Text/Text"
import AboutCeo from "./AboutCeo/AboutCeo"

const AboutHero = styled.section`
  min-height: 60vw;
  padding-top: 108px;
  display: flex;
  aligh-items: center;
  flex-direction: column;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  position: relative;
  z-index: 1;
  margin: 120px 122px 30px;

  > div {
    &:first-child {
      margin-right: 12px;
    }
    &:last-child {
      margin-left: 12px;
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
            <Text as="h1" fontSize="60px" fontWeight="600" lineHeight="1.03em">
              Kryptowaluty
            </Text>
            <Text fontSize="48px" fontWeight="500" margin="20px 0 0">
              To lubimy!
            </Text>
          </div>
          <div style={{ marginTop: "100px" }}>
            <Text fontSize="18px" lineHeight="1.67">
              Chyba śmiało możemy powiedzieć, że jesteśmy jedną z&nbsp;firm,
              której się udało. Udało zarobić na kryptowalutach, udało wytrwać
              w&nbsp;tym biznesie wiele lat i&nbsp;udało stworzyć markę, która
              z&nbsp;kryptowalut żyje i&nbsp;pracuje z&nbsp;nimi na co dzień.
            </Text>
            <br />
            <Text fontSize="18px" lineHeight="1.67">
              Nasza kopalnia to dowód na to, że gorączka kryptowalutowego złota
              jest w&nbsp;zasięgu ręki, jest namacalna i&nbsp;jest realna.
              Wiedzą o&nbsp;tym, jak inwestować, dzielimy się od lat.
              I&nbsp;mamy referencje!
            </Text>
          </div>
        </Wrapper>
        <Wrapper>
          <div>
            <Text fontSize="18px" lineHeight="1.67">
              Oprócz wiedzy dajemy też możliwości. Lokalizacja naszej kopalni
              w&nbsp;bezpośrednim sąsiedztwie biogazowni sprawia, że możemy
              zaproponować naszym klientom prąd za jedyne 32 grosze netto za
              kWh. Stworzone przez nas abonamenty realnie wpływają więc nie
              tylko na wygodę inwestycji, ale i&nbsp;realny zarobek naszych
              klientów. Koparki również sprzedajemy i&nbsp;profesjonalnie
              serwisujemy.
            </Text>
            <br />
            <Text fontSize="18px" lineHeight="1.67">
              I to są rzeczy, za które klienci nas uwielbiają.
            </Text>
            <br />
            <Text fontSize="18px" lineHeight="1.67">
              W naszej pracy codziennie udowadniamy, że kryptowaluty to jest
              sektor, w&nbsp;który warto zainwestować. Czujesz, że inwestycja
              w&nbsp;nowoczesne technologie to coś, dla Ciebie?
            </Text>
            <br />
            <Text fontSize="18px" lineHeight="1.67" margin="0 0 80px">
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
