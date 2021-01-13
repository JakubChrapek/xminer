import React from "react"
import styled from "styled-components"
import ButtonLink from "../../../ButtonLink/ButtonLink"
import beforeIcon from "../../../../images/dla-poczatkujacych-klocek.svg"
import ButtonText from "../../../ButtonText/ButtonText"
import arrowRight from "../../../../images/right-arrow.svg"

const BeforeStyles = styled.section`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  position: relative;
  z-index: 1;
  margin: 98px 30px 50px 129px;
  @media only screen and (max-width: 1440px) {
    max-width: 100%;
  }
  @media only screen and (max-width: 1453px) {
    margin: 80px 30px 50px 103px;
  }
  @media only screen and (max-width: 1082px) {
    margin: 38px;
  }
  @media only screen and (max-width: 801px) {
    margin: 20px 30px 32px;
    flex-direction: column;
    align-items: flex-start;
  }
  div {
    @media only screen and (max-width: 801px) {
      width: 100%;
    }
    &:first-child {
      flex: 4;
      margin-right: 70px;

      @media only screen and (max-width: 801px) {
        margin-right: 0px;
      }
      margin-top: 30px;

      .title {
        font-size: 10px;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--primary);
      }

      .claim {
        font-size: 48px;
        font-weight: 600;
        line-height: normal;
        color: var(--white);
        margin-top: 23px;
        @media only screen and (max-width: 1256px) {
          font-size: 40px;
          margin-top: 12px;
        }
        @media only screen and (max-width: 801px) {
          font-size: 24px;
          margin-top: 8px;
        }
      }

      .description {
        margin-top: 26px;
        font-size: 18px;
        font-weight: 300;
        color: var(--white);
        max-width: 580px;
        @media only screen and (max-width: 1140px) {
          margin-top: 18px;
        }
        @media only screen and (max-width: 801px) {
          max-width: unset;
          &:last-of-type {
            margin-top: 32px;
          }
        }
        @media only screen and (max-width: 801px) {
          font-size: 16px;
        }
      }
    }

    &:last-child {
      flex: 4;
      @media only screen and (max-width: 1082px) {
        flex: 2;
      }
      img {
        width: 100%;
      }
    }
    &:last-of-type {
      margin-top: 50px;
    }
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 36px 0 0;

  @media only screen and (max-width: 1140px) {
    margin-top: 22px !important;
  }
`

const BeforeMiningSection = () => {
  return (
    <BeforeStyles>
      <Wrapper>
        <div>
          <p className="title">Dla początkujących</p>
          <p className="claim">
            Zanim dowiesz się,
            <br />
            gdzie kopać!
          </p>
          <p className="description">
            W poszukiwaniu świętego Graala, Łzy Ashy czy innego skarbu narodów,
            trzeba wiedzieć, gdzie szukać i&nbsp;jak szukać, żeby znaleźć coś,
            czego chcą wszyscy. Podobnie jest z&nbsp;kryptowalutami, podobnie
            jest w&nbsp;koparkach&nbsp;-&nbsp;próbują wszyscy, ale zwrot
            z&nbsp;inwestycji dotyczy przecież garstki. Potrzebujesz narzędzi?
            Damy Ci je!
          </p>
          <p className="description">Zobacz, od czego zacząć.</p>
          <ButtonsWrapper>
            <ButtonText to="/dla-poczatkujacych" icon={arrowRight}>
              Dla początkujących
            </ButtonText>
          </ButtonsWrapper>
        </div>
        <div>{/* <img src={beforeIcon} alt="" /> */}</div>
      </Wrapper>
    </BeforeStyles>
  )
}

export default BeforeMiningSection
