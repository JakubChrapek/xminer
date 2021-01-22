import React from "react"
import blob from "../../../images/dark-blob.svg"
import styled from "styled-components"
import ButtonLink from "../../ButtonLink/ButtonLink"
import { motion } from "framer-motion"
import useWindowSize from "../../../utils/UseWindowSize"
import Img from "gatsby-image"

const HeroStyles = styled(motion.section)`
  min-height: 80vh;
  min-height: max(80vh, 800px);
  @media only screen and (max-width: 640px) {
    min-height: unset;
  }
  padding-top: 108px;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
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

    .gatsby-image-wrapper {
      width: 100%;
      > div {
        margin-top: 0;
      }
      margin-top: 0;
      picture,
      img {
        object-fit: contain !important;
      }
      @media only screen and (max-width: 640px) {
        margin-top: 40px;
      }
    }

    &:last-child {
      flex: 4;
      z-index: -1;
      @media only screen and (max-width: 1082px) {
        flex: 2;
        width: 100%;
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
  z-index: 1;
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

const StyledImg = styled(Img)`
  width: 100%;
  margin-top: 0;
  @media only screen and (max-width: 1082px) {
    overflow: visible !important;
    picture,
    img {
      width: 150% !important;
      height: 150% !important;
      right: 0%;
      left: unset !important;
    }
  }
  @media only screen and (max-width: 940px) {
    picture,
    img {
      width: 210% !important;
      height: 210% !important;
      right: -100%;
    }
  }
  @media only screen and (max-width: 802px) {
    margin-top: 40px !important;
    picture,
    img {
      width: 100% !important;
      height: 100% !important;
      right: 0%;
    }
  }
`

const HeroSection = ({ heroIcon, heroMobileIcon }) => {
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
            <ButtonLink
              type="full"
              whileTap={{ scale: 0.95 }}
              to="/dla-poczatkujacych"
            >
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
          <StyledImg
            fluid={width > 640 ? heroIcon.fluid : heroMobileIcon.fluid}
            alt={width > 640 ? heroIcon.alt : heroMobileIcon.alt}
          />
        </div>
      </Wrapper>
    </HeroStyles>
  )
}

export default HeroSection
