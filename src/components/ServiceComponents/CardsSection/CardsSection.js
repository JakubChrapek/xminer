import { animate } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { ContainerStyles } from "../../Container/Container"
import Wrapper, { WrapperStyles } from "../../Wrapper/Wrapper"
import { useInView } from "react-intersection-observer"
import { Counter } from "../../Counter/Counter"
import { IntersectionObserver } from "../../../utils/IntersectionObserver"

const CardWrapperStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-gap: 46px;
  }
`

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 12px;
  padding: 39px 32px 58px;
  max-height: 202px;
  border-radius: 12px;
  box-shadow: 10px 10px 50px 3px rgba(39, 92, 141, 0.1);
  background-color: #ffffff;
  @media only screen and (max-width: 1000px) {
    max-width: 440px;
  }

  p {
    color: var(--headers-color);
  }
  .number {
    font-size: 36px;
    font-weight: 600;
    line-height: normal;
  }

  .content {
    font-size: 18px;
    line-height: 1.67;
    font-weight: 400;
  }

  @media only screen and (max-width: 340px) {
    padding: 32px;
    .number {
      font-size: 30px;
    }
    .content {
      font-size: 16px;
    }
  }
`

const Card = ({ number, textAfterNumber, content }) => {
  return (
    <CardStyles>
      <p className="number">
        <IntersectionObserver reset={true} threshold={0.4}>
          <Counter valueTo={number} totalDuration={2.2} /> {textAfterNumber}
        </IntersectionObserver>
      </p>
      <p className="content">{content}</p>
    </CardStyles>
  )
}

const CardsContainerStyles = styled(ContainerStyles)`
  @media only screen and (max-width: 1241px) {
    padding: 40px 103px 0;
  }
  @media only screen and (max-width: 1081px) {
    padding: 40px 60px 0;
  }
  @media only screen and (max-width: 640px) {
    padding: 0 30px;
  }
`

const InnerWrapperStyles = styled(WrapperStyles)`
  @media only screen and (max-width: 640px) {
    margin: 0 0 50px;
  }
`

const CardsSection = () => {
  return (
    <CardsContainerStyles padding="40px 182px 0">
      <InnerWrapperStyles margin="40px 0 60px">
        <CardWrapperStyles>
          <Card
            number="320"
            textAfterNumber="zł/MWh"
            content="Bez dodatkowych opłat i&nbsp;ukrytych kosztów"
          />
          <Card
            number="400"
            textAfterNumber="kW"
            content="Mocy zarezerwowanej wyłącznie dla kopalni Xminer"
          />
          <Card
            number="500 "
            textAfterNumber="miejsc"
            content="Dla koparek kryptowalut naszych Klientów (GPU i&nbsp;ANTMINER!)"
          />
        </CardWrapperStyles>
      </InnerWrapperStyles>
    </CardsContainerStyles>
  )
}

export default CardsSection
