import React from 'react'
import styled from 'styled-components'
import Text from '../Text/Text'
import HappyFace from '../../images/face-happy.png'
import SadFace from '../../images/face-sad.png'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

const ArrowWrapper = styled.div`
  position: absolute;
  right: -116px;
  bottom: -88px;
  display: flex;
  align-items: flex-end;

  > p {
    font-size: 36px;
    font-weight: 600;
    color: var(--primary);
  
    @media (max-width: 580px) {
      font-size: 24px;
    }
  }

  @media (max-width: 1050px) {
    right: -26px;
  }
  @media (max-width: 580px) {
    right: 0;
    bottom: -80px;
  }
`

const ArrowStyles = styled.svg`
  margin-right: 24px;
  @media (max-width: 580px) {
  margin-right: 18px;
    width: 81px;
  }
`

export const Arrow = () => {
  return (
    <ArrowWrapper>
      <ArrowStyles width="106" height="70" viewBox="0 0 106 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 2.5C9.5 48 47.1 58.9 103.5 52.5M103.5 52.5L95.5 33.5M103.5 52.5L90 67.5" stroke="#2EC5CE" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      </ArrowStyles>
      <Text>Patrz pkt.3</Text>
    </ArrowWrapper>
  )

}

const Container = styled.section`
  background-color: var(--nav-dark-bluse);
  padding: 100px 0 167px;
  @media (max-width: 1050px) {
    padding: 80px 0 153px;
  }
  @media (max-width: 680px) {
    padding: 40px 0 153px;
  }


`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 740px;
  margin: 0 auto;
  @media (max-width: 1050px) {
    padding: 0 30px;
  > p {
    font-size: 24px;
  }
  }
`

const BoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  margin-top: 70px;
  position: relative;
  > a {
    text-decoration: none;
  }
  @media (max-width: 1050px) {
    grid-column-gap: 40px;
    margin-top: 60px;
  }

  @media (max-width: 850px) {
    grid-row-gap: 70px;
    grid-template-columns: 460px;
  }


  @media (max-width: 580px) {
    grid-row-gap: 51px;
    grid-template-columns: 1fr;
    margin-top: 50px;
  }

`

const Box = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 58px 35px 48px;
  background-color: var(--white);
  border-radius: 15px;
  flex: 1 1 50%;
  @media (max-width: 580px) {
    padding: 40px 20px 37px;
  }


  > p {
    text-align: center;
    color: var(--body-text);
    margin-top: 12px;
    font-size: 18px;
    line-height: 1.68;
  }
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    margin-right: 13px;
    @media (max-width: 580px) {
      width: 28px;
    }
  }
  > p {
    font-size: 36px;
    line-height: 1;
    font-weight: 600;
    color: var(--black);
    @media (max-width: 580px) {
      font-size: 24px;
    }
  }
`

const KryptowoltaikaHappySection = () => {
  return (
    <Container>
      <Wrapper>
      <Text fontSize="48px" fontWeight="600" color="var(--white)" lineHeight="normal">Zadowolony?</Text>
      <BoxWrapper>
        <Link to="/kontakt">
          <Box transition={{duration: 0.2, ease: 'circOut'}} whileHover={{backgroundColor: 'var(--light-aqua)'}} >
            <IconWrapper><motion.img whileHover={{scale: 1.2}} transition={{duration: 0.2, ease: 'backOut'}} src={HappyFace} alt="uśmiechnięta buźka" /><Text>Tak</Text></IconWrapper>
            <Text>Podpisujemy umowę i&nbsp;rozpoczynamy instalację tak szybko jak możliwe, abyś nie tracił pieniędzy na drogi prąd.​</Text>
          </Box>
        </Link>
        <Box>
          <IconWrapper><motion.img whileHover={{scale: 1.2}} transition={{duration: 0.2, ease: 'backOut'}} src={SadFace} alt="smutna buźka" /><Text>Nie</Text></IconWrapper>
          <Text>Zobaczyłeś nowe możliwości? To zaczynamy zastanawiać się od początku.​</Text>
        </Box>
        <Arrow />
      </BoxWrapper>
      </Wrapper>
    </Container>
  )
}

export default KryptowoltaikaHappySection
