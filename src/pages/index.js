import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO/SEO"
import styled from "styled-components"
import HeroSection from "../components/HeroComponents/HeroSection/HeroSection"
import WhySection from "../components/HeroComponents/HeroSection/WhyXminer/WhyXminer"
import BeforeMiningSection from "../components/HeroComponents/HeroSection/BeforeMining/BeforeMining"
import InvestorsSection from "../components/HeroComponents/HeroSection/InvestorsSection/InvestorsSection"
import BeginHereSection from "../components/HeroComponents/HeroSection/BeginHereSection/BeginHereSection"
import TestimonialsSection from "../components/HeroComponents/HeroSection/TestimonialsSection/TestimonialsSection"
import CtaSection from "../components/HeroComponents/HeroSection/CtaSection/CtaSection"
import BlogSection from "../components/HeroComponents/HeroSection/BlogSection/BlogSection"

const HomeStyles = styled.div`
  background: var(--home-gradient);
  overflow: hidden;
`
const IndexPage = ({ data }) => {
  const {
    allDatoCmsPost: { totalCount, nodes: posts },
    datoCmsHomepage: {
      heroIkona: heroIcon,
      heroIkonaMobile: heroMobileIcon,
      beforeYouStartImg: beforeIcon,
    },
  } = data
  return (
    <>
      <HomeStyles>
        <SEO title="Xminer" />
        <HeroSection heroIcon={heroIcon} heroMobileIcon={heroMobileIcon} />
        <WhySection />
        <BeforeMiningSection beforeIcon={beforeIcon} />
        <InvestorsSection />
        <BeginHereSection />
        <TestimonialsSection />
        <CtaSection />
        {/* <BlogSection
          posts={posts}
          totalCount={totalCount}
          title="Wiedza z Xminer"
          subtitle="Blog o krypto"
        /> */}
      </HomeStyles>
    </>
  )
}
export const blogQuery = graphql`
  query blogQuery {
    allDatoCmsPost(limit: 3, sort: { fields: date, order: DESC }) {
      totalCount
      nodes {
        title
        postCategory {
          categoryName
        }
        date
        readingTime
        id
        slug
        coverImage {
          fluid(maxWidth: 360) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
    datoCmsHomepage {
      heroIkona {
        alt
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      heroIkonaMobile {
        alt
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      beforeYouStartImg {
        alt
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
export default IndexPage
