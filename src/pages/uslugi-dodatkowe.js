import React from "react"
import AdditionalServicesHero from "../components/AdditionalServicesComponents/AdditionalServicesHero/AdditionalServicesHero"
import CtaSection from "../components/AdditionalServicesComponents/CtaSection/CtaSection"
import DarkSection from "../components/AdditionalServicesComponents/DarkSection/DarkSection"
import FAQSection from "../components/AdditionalServicesComponents/FAQSection/FAQSection"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import PackagesSection from "../components/ServiceComponents/PackagesSection/PackagesSection"

const AdditionalServices = () => {
  return (
    <>
      <SEO title="Usługi dodatkowe" />
      <AdditionalServicesHero />
      <DarkSection />
      <CtaSection />
      <PackagesSection title="pełna oferta" subtitle="Zobacz pakiety" />
      <FAQSection />
    </>
  )
}

export default AdditionalServices
