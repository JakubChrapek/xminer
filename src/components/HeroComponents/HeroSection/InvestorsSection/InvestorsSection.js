import React from "react"
import styled from "styled-components"
import ButtonText from "../../../ButtonText/ButtonText"
import arrowRight from "../../../../images/right-arrow.svg"
import useWindowSize from "../../../../utils/UseWindowSize"
const BeforeStyles = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  z-index: 3;
  margin: 98px 135px 50px 0;
  @media only screen and (max-width: 1453px) {
    margin: 50px 70px 50px 0px;
    max-width: 100%;
  }
  @media only screen and (max-width: 1082px) {
    margin: 38px;
  }
  @media only screen and (max-width: 801px) {
    margin: 20px 30px 32px;
    flex-direction: column;
    align-items: flex-start;
  }
  @media only screen and (max-width: 640px) {
    margin: 0px 30px 32px;
    flex-direction: column;
    align-items: flex-start;
  }
  div {
    @media only screen and (max-width: 801px) {
      width: 100%;
    }
    &:last-child {
      flex: 4;
      margin-left: 70px;
      margin-top: 30px;
      @media only screen and (max-width: 1453px) {
        margin-left: 30px;
        margin-top: 30px;
      }
      @media only screen and (max-width: 1118px) {
        margin-left: 103px;
        margin-right: 30px;
      }
      @media only screen and (max-width: 1082px) {
        margin-left: 0;
        margin-right: 0;
      }
      @media only screen and (max-width: 801px) {
        order: -1;
        margin-left: 0;
      }

      .title {
        font-size: 10px;
        font-weight: 400;
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

    &:first-child {
      flex: 4;
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      @media only screen and (max-width: 1118px) {
        display: none;
      }

      img {
        position: absolute;
        left: 0;
      }
    }
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 36px 0 0 !important;
  z-index: 3;

  @media only screen and (max-width: 1140px) {
    margin-top: 22px !important;
  }
  @media only screen and (max-width: 801px) {
    margin-top: 12px !important;
  }
  @media only screen and (max-width: 640px) {
    margin-top: 4px !important;
  }
`

const InvestorsSection = () => {
  const width = useWindowSize()
  return (
    <BeforeStyles>
      <Wrapper>
        <div></div>
        <div>
          <p className="title">Dla profesjonalistów</p>
          <p className="claim">
            Inwestycja +&nbsp;opieka? {width < 640 && <br />}To nasza
            propozycja!
          </p>
          <p className="description">
            Chcesz zainwestować w&nbsp;koparki. Nie wiesz tylko, jak zacząć. Do
            tego masz wątpliwości i&nbsp;pytania, które chcesz zadać komuś, kto
            zna się na rzeczy, również (a&nbsp;może przede wszystkim) pod
            praktycznym kątem biznesowym. Skontaktuj się z&nbsp;nami. Odpowiemy
            na wszystkie Twoje pytania i&nbsp;pokierujemy inwestycją.
          </p>
          <p className="description">
            Inwestycja w&nbsp;kryptowaluty? {width < 640 && <br />}Powiemy Ci
            jak.
          </p>
          <ButtonsWrapper>
            <ButtonText
              color="var(--primary)"
              margin={width < 333 && "0 -12px 0 -8px"}
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
