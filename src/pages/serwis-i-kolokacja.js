import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import ServicesCta from "../components/ServiceComponents/ServicesCta/ServicesCta"
import BetOnSection from "../components/ServiceComponents/BetOnSection/BetOnSection"
import CardsSection from "../components/ServiceComponents/CardsSection/CardsSection"
import HeroSection from "../components/ServiceComponents/HeroSection/HeroSection"
import PackagesSection from "../components/ServiceComponents/PackagesSection/PackagesSection"
import ParagraphSection from "../components/ServiceComponents/ParagraphSection/ParagraphSection"
import ServicesDarkSection from "../components/ServiceComponents/ServicesDarkSection/ServicesDarkSection"

const ServicesAndColocation = () => {
  return (
    <>
      <SEO title="Serwis i kolokacja" />
      <HeroSection />
      <ParagraphSection />
      <ServicesDarkSection />
      <BetOnSection />
      <CardsSection />
      <PackagesSection title="Kolokacja koparek" subtitle="Zobacz pakiety" />
      <ServicesCta />
    </>
  )
}

export default ServicesAndColocation
