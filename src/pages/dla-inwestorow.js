import React from "react"
import GradientCtaSection from "../components/AdditionalServicesComponents/GradientCtaSection/GradientCtaSection"
import ContactUsSection from "../components/ContactUsSection/ContactUsSection"
import ForInvestorsHeroSection from "../components/ForInvestors/ForInvestorsHeroSection/ForInvestorsHeroSection"
import WhoWillTeachYouSection from "../components/ForInvestors/ForInvestorsHeroSection/WhoWillTeachYouSection/WhoWillTeachYouSection"
import WhyInvestingWithUs from "../components/ForInvestors/ForInvestorsHeroSection/WhyInvestingWithUs/WhyInvestingWithUs"
import BlogSection from "../components/HeroComponents/HeroSection/BlogSection/BlogSection"
import { graphql } from "gatsby"
import SEO from "../components/SEO/SEO"
import PackagesSection from "../components/ServiceComponents/PackagesSection/PackagesSection"
import PricingConfiguratorSection from "../components/ServiceComponents/PricingConfigurator/PricingConfiguratorSection"

const ForInvestors = ({ data }) => {
  const {
    allDatoCmsPost: { totalCount, nodes: posts },
  } = data
  return (
    <>
      <SEO title="Dla inwestorów" />
      <ForInvestorsHeroSection />
      <WhyInvestingWithUs />
      <WhoWillTeachYouSection />
      {/* <BlogSection
        posts={posts}
        totalCount={totalCount}
        title=""
        subtitle=""
        padding="0px 122px 0"
        smaller
      /> */}
      {/* <PackagesSection
        title="Od czego zacząć"
        subtitle="Zacznij inwestować w&nbsp;kryptowaluty"
        smaller
        margin="84px 0 0"
        padding="0 0 50px"
      /> */}
      <PricingConfiguratorSection />
      <GradientCtaSection
        title="oferta"
        subtitle="Koparka + pełna obsługa już&nbsp;od&nbsp;XXX&nbsp;zł&nbsp;netto."
        btnText="Sprawdź pakiety"
        btnLink="/sprzedaz"
        contentWidth="730px"
        margin="102px 0 0"
        btnMargin="0"
      />
      <ContactUsSection
        title="Skontaktuj się z nami"
        subtitle="Porozmawiaj z&nbsp;ekspertem Xminer"
        content="Jeszcze dziś skontaktuj się z&nbsp;naszym zespołem i&nbsp;porozmawiaj z&nbsp;nami o&nbsp;Twojej inwestycji."
        additionalLine="Obiecujemy, że się nie zawiedziesz!"
      />
    </>
  )
}

export const forInvestorsQuery = graphql`
  query forInvestorsQuery {
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
  }
`

export default ForInvestors
