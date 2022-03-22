import React from "react"
import ContactUsSection from "../components/ContactUsSection/ContactUsSection"
import BlogSection from "../components/HeroComponents/HeroSection/BlogSection/BlogSection"
import { graphql } from "gatsby"
import CtaSalesSection from "../components/SalesComponents/SalesHero/HowToChooseSection/CtaSalesSection/CtaSalesSection"
import HowToChooseSection from "../components/SalesComponents/SalesHero/HowToChooseSection/HowToChooseSection"
import MinerRigsSection from "../components/SalesComponents/SalesHero/MinerRigsSection/MinerRigsSection"
import SalesHero from "../components/SalesComponents/SalesHero/SalesHero"
import SEO from "../components/SEO/SEO"
import PricingConfiguratorSection from "../components/ServiceComponents/PricingConfigurator/PricingConfiguratorSection"

const Sales = ({ data }) => {
  const {
    allDatoCmsPost: { totalCount, nodes: posts },
  } = data
  return (
    <>
      <SEO title="Sprzedaż" />
      <SalesHero />
      {/* <MinerRigsSection /> */}
      <PricingConfiguratorSection />
      <HowToChooseSection />
      <CtaSalesSection />
      {/* <BlogSection
        posts={posts}
        totalCount={totalCount}
        title="Blog"
        subtitle="Poczytaj i wybierz koparkę dla siebie"
        lowercase="normal"
        margin="0 0 60px"
      /> */}
      <ContactUsSection
        title="Już dziś"
        subtitle="Skontaktuj się z&nbsp;nami!"
        content="W Xminer codziennie doradzamy, konstruujemy i&nbsp;dowozimy do
            Klientów maszyny, zdolne wykopać niemal każdą kryptowalutę pod
            wirtualnym słońcem. Chcesz dołączyć do grona kryptoinwestorów
            i&nbsp;zacząć zarabiać na nowoczesnych technologiach?"
        additionalLine="Napisz już dziś!"
      />
    </>
  )
}
export const blogQuery = graphql`
  query salesBlogQuery {
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
export default Sales
