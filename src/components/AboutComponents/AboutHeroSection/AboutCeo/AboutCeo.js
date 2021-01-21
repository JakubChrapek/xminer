import React from "react"
import styled from "styled-components"
import Text from "../../../Text/Text"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import ButtonLink from "../../../ButtonLink/ButtonLink"
import useWindowSize from "../../../../utils/UseWindowSize"

const AboutHero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #29abe2, rgba(255, 255, 255, 0)),
    linear-gradient(to bottom, var(--primary), var(--primary));
  @media only screen and (max-width: 1040px) {
    margin-top: 240px;
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  position: relative;
  z-index: 1;
  margin: 60px 122px 100px;
  .gatsby-image-wrapper {
    max-width: 540px;
    margin-left: 50px;
    margin-top: -217px;
  }
  @media only screen and (max-width: 1600px) {
    width: 90%;
    max-width: 1360px;
  }

  @media only screen and (max-width: 1180px) {
    margin: 60px 80px 90px;
    width: 100%;
    max-width: 960px;

    h2 {
      margin-top: 36px;
      font-size: 48px;
    }
  }

  @media only screen and (max-width: 1040px) {
    flex-direction: column;
    width: 80vw;
    max-width: 740px;
    margin: 60px auto 80px;
    p {
      max-width: unset !important;
    }
    .gatsby-image-wrapper {
      margin: -380px 8px 0px;
    }
  }

  @media only screen and (max-width: 740px) {
    width: unset;
    margin: 60px 30px 80px;
  }

  > div {
    &:first-child {
      margin-right: 12px;
    }
    &:last-child {
      margin-left: 12px;
    }
    flex: 1;
    @media only screen and (max-width: 1040px) {
      &:first-child,
      &:last-child {
        margin: 0;
      }
      &:first-child {
        order: 1;
      }
    }
  }

  p {
    max-width: 514px;
  }
`

const ceoPhotoQuery = graphql`
  query AboutQuery {
    datoCmsStronaOXminer {
      ceoPhoto {
        fluid(maxWidth: 540) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

const AboutCeo = () => {
  const width = useWindowSize()
  const data = useStaticQuery(ceoPhotoQuery)
  return (
    <AboutHero>
      <Wrapper>
        <div>
          <Text
            color="var(--white)"
            as="h2"
            fontSize="48px"
            fontWeight="600"
            lineHeight="normal"
          >
            Łukasz Botorek
          </Text>
          <Text
            margin="28px 0 0"
            color="var(--white)"
            fontSize="24px"
            fontWeight="500"
            lineHeight="1.73"
          >
            Nasz mistrz Yoda, CEO i&nbsp;człowiek, który pojęcia takie jak
            blockchain, bitcoin i&nbsp;kopanie kryptowalut z&nbsp;powodzeniem
            tłumaczy nawet przedszkolakom.
          </Text>
          <Text
            margin={width < 640 ? "40px 0 0" : "48px 0 0"}
            fontSize="18px"
            lineHeight="1.67em"
            color="var(--white)"
          >
            Wieloletnie doświadczenie w&nbsp;branży inwestycyjnej
            i&nbsp;energetycznej w&nbsp;połączeniu z&nbsp;pasją do nowej
            technologii zaowocowało u&nbsp;niego tworzeniem biznesu,
            o&nbsp;którym wielu tylko marzy. W&nbsp;Xminer zarządza zespołem,
            szkoli inwestorów i&nbsp;wyznacza trendy na rynku. Warto go poznać!
          </Text>
          <ButtonLink
            whileTap={{ scale: 0.95 }}
            type="tertiary"
            maxwidth={width < 440 ? "unset" : "306px"}
            to="/kontakt"
            margin={width < 440 ? "40px 0 0" : "56px 0 0"}
          >
            skontaktuj się z&nbsp;Łukaszem
          </ButtonLink>
        </div>
        <div>
          <Img
            fluid={data.datoCmsStronaOXminer.ceoPhoto.fluid}
            alt="Łukasz Botorek na tle koparek kryptowalut"
          />
        </div>
      </Wrapper>
    </AboutHero>
  )
}

export default AboutCeo
