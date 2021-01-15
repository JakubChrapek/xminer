import React from "react"
import DarkSection from "../components/ForBeginnersComponents/BeginnersDarkSection/DarkSection"
import BeginnersHero from "../components/ForBeginnersComponents/BeginnersHero/BeginnersHero"
import WhySection from "../components/ForBeginnersComponents/WhySection/WhySection"
import BlogSection from "../components/HeroComponents/HeroSection/BlogSection/BlogSection"

import SEO from "../components/SEO/SEO"

const ForBeginners = ({ data }) => {
  const {
    allDatoCmsPost: { totalCount, nodes: posts },
  } = data
  return (
    <>
      <SEO title="Dla początkujących" />
      <BeginnersHero />
      <DarkSection />
      <WhySection />
      <BlogSection
        posts={posts}
        totalCount={totalCount}
        title="Blog"
        subtitle="Więcej znajdziesz tutaj"
        padding="0 122px 65px"
      />
    </>
  )
}

export const forBeginnersQuery = graphql`
  query forBeginnersQuery {
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

export default ForBeginners
