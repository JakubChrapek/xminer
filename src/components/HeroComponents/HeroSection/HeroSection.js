import React from "react"
import blob from "../../../images/dark-blob.svg"
import styled from "styled-components"
import ButtonLink from "../../ButtonLink/ButtonLink"
// import heroIcon from "../../../images/home-icon-min.svg"
import { HeroIcon } from "../../SvgIcons/XminerIcons"
import { motion } from "framer-motion"
import useWindowSize from "../../../utils/UseWindowSize"

const HeroStyles = styled(motion.section)`
  min-height: 80vh;
  min-height: max(80vh, 800px);
  padding-top: 108px;
  display: flex;
  justify-content: center;
  position: relative;
  /* background: url(${blob});
  background-repeat: no-repeat;
  background-size: contain;
  @media only screen and (max-width: 800px) {
    min-height: 70vh;
    background-size: cover;
  } */
`

const BlobStyles = styled.img`
  position: absolute;
  left: 0;
  top: -40%;
  width: 73%;
  @media only screen and (max-width: 2200px) {
    top: -50%;
    width: 80%;
  }
  @media only screen and (max-width: 1720px) {
    top: -35%;
    width: 82%;
  }
  @media only screen and (max-width: 1600px) {
    top: -25%;
    width: 80%;
  }
  @media only screen and (max-width: 1400px) {
    top: -10%;
    width: 80%;
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  position: relative;
  z-index: 1;
  margin: 98px 30px 50px 193px;
  @media only screen and (max-width: 1453px) {
    margin: 80px 30px 50px 103px;
  }
  @media only screen and (max-width: 1082px) {
    margin: 38px;
  }
  @media only screen and (max-width: 801px) {
    margin: 20px 24px 32px;
    flex-direction: column;
    align-items: center;
  }
  div {
    &:first-child {
      flex: 4;
      margin-top: 70px;
      @media only screen and (max-width: 1440px) {
        margin-top: 30px;
      }
      @media only screen and (max-width: 801px) {
        margin-top: 30px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .claim {
        font-size: 60px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.03;
        color: var(--white);
        @media only screen and (max-width: 1364px) {
          font-size: 46px;
        }
        @media only screen and (max-width: 1364px) {
          font-size: 46px;
        }
        @media only screen and (max-width: 912px) {
          font-size: 38px;
        }
        @media only screen and (max-width: 801px) {
          font-size: 24px;
          max-width: 450px;
          line-height: normal;
        }
      }

      .whatfor {
        margin-top: 43px;
        font-size: 24px;
        font-weight: 600;
        line-height: 1.25;
        color: var(--faded-aqua);
        span {
          padding: 4px 12px;
          background-color: var(--aqua-primary);
          border-radius: 3px;
          margin-left: 4px;
        }
        @media only screen and (max-width: 1364px) {
          font-size: 22px;
        }
      }

      .description {
        margin-top: 26px;
        font-size: 18px;
        font-weight: 300;
        color: var(--faded-aqua);
        @media only screen and (max-width: 801px) {
          margin-top: 22px;
          font-size: 16px;
          max-width: 500px;
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
  }
`

const ButtonsWrapper = styled.div`
  display: grid;
  grid-gap: 54px;
  grid-template-columns: auto auto;
  max-width: 520px;
  margin: 60px 0 0;
  @media only screen and (max-width: 1200px) {
    grid-gap: 21px;
  }
  @media only screen and (max-width: 801px) {
    margin-top: 36px;
    width: 100%;
    /* max-width: 80%; */
    grid-template-columns: 1fr;
    grid-gap: 31px;
    place-items: center center;
  }
`

const HeroSection = () => {
  const width = useWindowSize()
  return (
    <HeroStyles>
      {width > 1082 && <BlobStyles src={blob} alt="" />}
      <Wrapper>
        <div>
          {width > 801 ? (
            <p className="claim">
              Wszystko,
              <br />
              czego potrzebujesz.
            </p>
          ) : (
            <p className="claim">
              Wszystko, czego potrzebujesz, żeby zacząć wydobywać kryptowaluty.
            </p>
          )}
          {width > 801 && (
            <h3 className="whatfor">
              Żeby zacząć wydobywać <span>kryptowaluty</span>
            </h3>
          )}
          <p className="description">
            Gotowe koparki w różnych konfiguracjach, hosting, serwis, know-how
            i&nbsp;więcej -&nbsp;sprawdź i&nbsp;zacznij kopać
            (i&nbsp;wydobywać!) z&nbsp;Xminer.
          </p>
          <ButtonsWrapper>
            <ButtonLink whileTap={{ scale: 0.95 }} to="/dla-poczatkujacych">
              Dla początkujących
            </ButtonLink>
            <ButtonLink
              outlinebg="var(--nav-dark-bluse)"
              bg="transparent"
              type="outline"
              width="204px"
              to="/dla-inwestorow"
              whileTap={{ scale: 0.95 }}
            >
              Dla inwestorów
            </ButtonLink>
          </ButtonsWrapper>
        </div>
        <div>
          <HeroIcon />
          {/* <img src={heroIcon} alt="" /> */}
        </div>
      </Wrapper>
    </HeroStyles>
  )
}

export default HeroSection
