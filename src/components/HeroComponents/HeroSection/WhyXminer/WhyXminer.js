import React, {useEffect} from "react"
import styled from "styled-components"
import useWindowSize from "../../../../utils/UseWindowSize"
import ButtonLink from "../../../ButtonLink/ButtonLink"
import Cards from "./Cards"
import {gsap} from 'gsap';

const WhyStyles = styled.section`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  position: relative;
  z-index: 1;
  margin: 10px 167px 30px;
  text-align: center;
  @media only screen and (max-width: 1440px) {
    max-width: 100%;
    margin: 32px 0px;
    padding: 0 60px;
  }
  @media only screen and (max-width: 1140px) {
    padding: 0 30px;
  }
  @media only screen and (max-width: 600px) {
    text-align: left;
    align-items: flex-start;
  }

  .line {
    height: 13px;
    position: relative;
    overflow: hidden;
    &-h1 {
      height: 13px;
    }
    &-h2 {
      height: 80px;
    }
  }

  h1 {
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--secondary);
  }

  h2 {
    font-size: 48px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--white);
    margin-top: 10px;
    @media only screen and (max-width: 1256px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 600px) {
      margin-top: 6px;
      font-size: 24px;
    }
  }

  p {
    max-width: 767px;
    margin-top: 24px;
    font-size: 16px;
    font-weight: 400;
    color: var(--white);
    @media only screen and (max-width: 600px) {
      margin-top: 16px;
      font-size: 16px;
      line-height: normal;
    }
  }
`

const WhySection = () => {
  const width = useWindowSize()

  return (
    <WhyStyles>
      <Wrapper className="container">
        <div className="line line-h1"><h1>Xminer</h1></div>
        <div className="line line-h2"><h2>Dlaczego Xminer?</h2></div>
        <p>
          Wiemy, jak zarabiać na koparkach kryptowalut. Skąd? Sami kopiemy od
          lat. Więcej! Tworzymy koparki, serwisujemy koparki, hostingujemy
          koparki, uczymy o&nbsp;koparkach, a&nbsp;nawet śnimy o&nbsp;nich.
          Czujesz, że z&nbsp;krypto Ci po drodze, chcesz spróbować,
          zainwestować? W takim razie jesteś dobrym miejscu, zaczynamy! Od
          konkretów oczywiście. Oferta? Mamy wszystko, czego potrzebujesz.
        </p>
        <p>
          Niezależnie od tego, czy jesteś zielony jak szczypiorek, czy masz
          prawdziwą kryptokopalnię&nbsp;-&nbsp;w&nbsp;Xminer mamy coś dla
          Ciebie. Chcesz kupić, nie masz gdzie trzymać, chcesz oszczędzić na
          rachunkach, dowiedzieć się wszystkiego, co ważne? Zajmujemy się
          wszystkim, co dotyczy koparek kryptowalut.&nbsp;A Ty wiesz, że nie
          musisz szukać już więcej.
        </p>
        <Cards />
        <ButtonLink
          whileTap={{ scale: 0.95 }}
          type="tertiary"
          to="/o-xminer"
          width={width < 640 ? "240px" : null}
          alignself={width < 640 ? "center" : null}
        >
          Więcej o Xminer
        </ButtonLink>
      </Wrapper>
    </WhyStyles>
  )
}

export default WhySection
