import React from "react"
import styled from "styled-components"
import ButtonLink from "../../../ButtonLink/ButtonLink"
import investorsIcon from "../../../../images/dla-biznesu.svg"
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
  z-index: 3;
  margin: 98px 135px 50px 0;
  div {
    &:last-child {
      flex: 4;
      margin-left: 70px;
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

    &:first-child {
      flex: 4;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      img {
        width: 60%;

        &:first-child {
          position: absolute;
          left: -7.5%;
          bottom: 20%;
          width: 30%;
        }
      }
    }
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 36px 0 0 !important;
  z-index: 3;
`

const InvestorsSection = () => {
  return (
    <BeforeStyles>
      <Wrapper>
        <div>
          <img src={investorsIcon} alt="" />
          <img src={investorsIcon} alt="" />
        </div>
        <div>
          <p className="title">Dla profesjonalistów</p>
          <p className="claim">Inwestycja + opieka? To nasza propozycja!</p>
          <p className="description">
            Chcesz zainwestować w koparki. Nie wiesz tylko, jak zacząć. Do tego
            masz wątpliwości i pytania, które chcesz zadać komuś, kto zna się na
            rzeczy, również (a może przede wszystkim) pod praktycznym kątem
            biznesowym. Skontaktuj się z nami. Odpowiemy na wszystkie Twoje
            pytania i pokierujemy inwestycją. Inwestycja w kryptowaluty?
          </p>
          <p className="description">Powiemy Ci jak.</p>
          <ButtonsWrapper>
            <ButtonText
              color="var(--primary)"
              to="/dla-poczatkujacych"
              icon={arrowRight}
            >
              Dla biznesu
            </ButtonText>
          </ButtonsWrapper>
        </div>
      </Wrapper>
    </BeforeStyles>
  )
}

export default InvestorsSection
