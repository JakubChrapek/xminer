import React from "react"
import Layout from "../components/Layout"
import MinerRigsSection from "../components/SalesComponents/SalesHero/MinerRigsSection/MinerRigsSection"
import SalesHero from "../components/SalesComponents/SalesHero/SalesHero"
import SEO from "../components/SEO/SEO"

const Sales = () => {
  return (
    <>
      <SEO title="Sprzedaż" />
      <SalesHero />
      <MinerRigsSection />
    </>
  )
}

export default Sales
