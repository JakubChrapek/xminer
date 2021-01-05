import { animate } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Container from "../../Container/Container"
import Wrapper from "../../Wrapper/Wrapper"
import { useInView } from "react-intersection-observer"

const CardWrapperStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
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

  p {
    color: var(--dark-text);
  }
  .number {
    font-size: 36px;
    font-weight: 600;
    line-height: normal;
  }

  .content {
    font-size: 18px;
    line-height: 1.67;
    font-weight: 300;
  }
`

const Counter = ({ from, to }) => {
  const [number, setNumber] = useState(0)
  const nodeRef = useRef()

  useEffect(() => {
    const node = nodeRef.current
    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        setNumber(value.toFixed(0))
        // node.textContent = value.toFixed(2)
      },
    })
    return () => controls.stop()
  }, [from, to])

  return <span ref={nodeRef}>{to}</span>
}

const Card = ({ number, textAfterNumber, content }) => {
  const [from, setFrom] = useState(1)
  const [to, setTo] = useState(100)
  const [ref, inView, entry] = useInView({ threshold: 0.2 })

  useEffect(() => {
    inView && setTo(number)
  }, [inView])

  return (
    <CardStyles ref={ref}>
      <p className="number">
        <Counter from={from} to={to} /> {textAfterNumber}
      </p>
      <p className="content">{content}</p>
    </CardStyles>
  )
}

const CardsSection = () => {
  return (
    <Container padding="40px 182px 0">
      <Wrapper>
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
      </Wrapper>
    </Container>
  )
}

export default CardsSection
