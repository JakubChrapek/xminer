import React from "react"
import styled from "styled-components"
import ButtonLink from "../../../ButtonLink/ButtonLink"
import BeginCards from "./BeginCards"
import blob from "../../../../images/white-blob.svg"
import investorsIcon from "../../../../images/dla-biznesu.svg"

const WhyStyles = styled.section`
  display: flex;
  justify-content: center;
  background: url(${blob});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: -80px;
  z-index: 2;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  position: relative;
  top: -140px;
  z-index: 2;
  padding: 30% 167px 15%;
  @media (max-width: 1440px) {
    padding: 30% 167px 20%;
    max-width: 100%;
  }
  @media (max-width: 1260px) {
    padding: 30% 103px 20%;
  }
  @media (max-width: 1118px) {
    padding: 30% 60px 10%;
  }
  @media only screen and (max-width: 1082px) {
    padding: 30% 30px 10%;
  }
  @media only screen and (max-width: 801px) {
    padding: 30% 55px 10%;
  }
  @media only screen and (max-width: 640px) {
    padding: 30% 55px 5%;
  }
  text-align: center;

  > img {
    position: absolute;
    left: 0;
    top: 0;
  }

  h2 {
    font-size: 10px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--primary);
  }

  h3 {
    font-size: 48px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--headers-color);
    margin-top: 10px;
    @media only screen and (max-width: 640px) {
      margin-top: 6px;
      font-size: 24px;
    }
  }

  p {
    max-width: 767px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 400;
    color: var(--body-text);
    @media only screen and (max-width: 801px) {
      max-width: unset;
    }
  }
`

const BeginHereSection = () => {
  return (
    <WhyStyles>
      <Wrapper>
        {/* <img src={investorsIcon} alt="" /> */}
        <h2>Oferta</h2>
        <h3>Zacznij tutaj</h3>
        <BeginCards />
      </Wrapper>
    </WhyStyles>
  )
}

export default BeginHereSection
