import React from "react"
import styled from "styled-components"
import ButtonLink from "../../../ButtonLink/ButtonLink"
import BeginCards from "./BeginCards"
import blob from "../../../../images/column-blog-icon.svg"
import investorsIcon from "../../../../images/dla-biznesu.svg"

const WhyStyles = styled.section`
  display: flex;
  justify-content: center;
  background: url(${blob});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  margin-top: -350px;
  @media (max-width: 1600px) {
    margin-top: -300px;
  }
  @media (max-width: 1405px) {
    background-size: contain;
  }
  z-index: 2;
  position: relative;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  position: relative;
  z-index: 2;
  padding: 520px 167px 250px;
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
    font-weight: 400;
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
