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
  div {
    &:first-child {
      flex: 4;
      margin-right: 70px;
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
      }

      .whatfor {
        margin-top: 43px;
        font-size: 24px;
        font-weight: 600;
        line-height: 1.25;
        color: var(--white);
        span {
          padding: 4px 12px;
          background-color: var(--aqua-primary);
          border-radius: 3px;
          margin-left: 4px;
          display: flex;
          align-items: center;
        }
      }

      .description {
        margin-top: 26px;
        font-size: 18px;
        font-weight: 300;
        color: var(--white);
        max-width: 580px;
      }
    }

    &:last-child {
      flex: 4;
      img {
        width: 100%;
      }
    }
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 36px 0 0;
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
            jest w&nbsp;koparkach - próbują wszyscy, ale zwrot z&nbsp;inwestycji
            dotyczy przecież garstki. Potrzebujesz narzędzi? Damy Ci je!
          </p>
          <p className="description">Zobacz, od czego zacząć.</p>
          <ButtonsWrapper>
            {/* <ButtonText to="/dla-poczatkujacych" icon={arrowRight}>
              Dla początkujących
            </ButtonText> */}
          </ButtonsWrapper>
        </div>
        <div>
          <img src={beforeIcon} alt="" />
        </div>
      </Wrapper>
    </BeforeStyles>
  )
}

export default BeforeMiningSection
