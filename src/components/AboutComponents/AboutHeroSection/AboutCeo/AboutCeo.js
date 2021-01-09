import React from "react"
import styled from "styled-components"
import Text from "../../../Text/Text"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"
import ButtonLink from "../../../ButtonLink/ButtonLink"

const AboutHero = styled.section`
  display: flex;
  aligh-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #29abe2, rgba(255, 255, 255, 0)),
    linear-gradient(to bottom, var(--primary), var(--primary));
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

  > div {
    &:first-child {
      margin-right: 12px;
    }
    &:last-child {
      margin-left: 12px;
    }
    flex: 1;
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
            Nasz mistrz Yoda, CEO i człowiek, który pojęcia takie jak
            blockchain, bitcoin i kopanie kryptowalut z powodzeniem tłumaczy
            nawet przedszkolakom.
          </Text>
          <Text
            margin="48px 0 0"
            fontSize="18px"
            lineHeight="1.67em"
            color="var(--white)"
          >
            Wieloletnie doświadczenie w branży inwestycyjnej i energetycznej w
            połączeniu z pasją do nowej technologii zaowocowało u niego
            tworzeniem biznesu, o którym wielu tylko marzy. W Xminer zarządza
            zespołem, szkoli inwestorów i wyznacza trendy na rynku. Warto go
            poznać!
          </Text>
          <ButtonLink
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            color="var(--black)"
            maxwidth="306px"
            to="/kontakt"
            margin="56px 0 0"
            bg="var(--white)"
          >
            skontaktuj się z Łukaszem
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
