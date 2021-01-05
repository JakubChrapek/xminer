import React from "react"
import DarkSection from "../components/ForBeginnersComponents/BeginnersDarkSection/DarkSection"
import BeginnersHero from "../components/ForBeginnersComponents/BeginnersHero/BeginnersHero"
import WhySection from "../components/ForBeginnersComponents/WhySection/WhySection"
import BlogSection from "../components/HeroComponents/HeroSection/BlogSection/BlogSection"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"

const ForBeginners = () => {
  return (
    <>
      <SEO title="Dla początkujących" />
      <BeginnersHero />
      <DarkSection />
      <WhySection />
      <BlogSection
        title="Blog"
        subtitle="Więcej znajdziesz tutaj"
        padding="0 122px 65px"
      />
    </>
  )
}

export default ForBeginners
