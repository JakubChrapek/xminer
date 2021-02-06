import React from "react"
import AdditionalServicesHero from "../components/AdditionalServicesComponents/AdditionalServicesHero/AdditionalServicesHero"
import AdditionalCTASection from "../components/AdditionalServicesComponents/AdditionalCtaSection/AdditionalFeaturesCtaSection"
import DarkSection from "../components/AdditionalServicesComponents/DarkSection/DarkSection"
import FAQSection from "../components/AdditionalServicesComponents/FAQSection/FAQSection"
import GradientCtaSection from "../components/AdditionalServicesComponents/GradientCtaSection/GradientCtaSection"
import PricingConfiguratorSection from "../components/ServiceComponents/PricingConfigurator/PricingConfiguratorSection"
import SEO from "../components/SEO/SEO"
import PackagesSection from "../components/ServiceComponents/PackagesSection/PackagesSection"

const AdditionalServices = () => {
  return (
    <>
      <SEO title="Usługi dodatkowe" />
      <AdditionalServicesHero />
      <DarkSection />
      <AdditionalCTASection />
      {/* <PackagesSection title="pełna oferta" subtitle="Zobacz pakiety" /> */}
      <PricingConfiguratorSection />
      {/* <FAQSection /> */}
      <GradientCtaSection
        title="koparki kryptowalut"
        subtitle="Postaw na świadomą inwestycję"
        content="Kolejność? U nas jest dowolna. Możesz najpierw zamówić szkolenie lub
            konsultację online, żeby dowiedzieć się, czy koparki to coś dla
            Ciebie. Możesz zakupić u nas koparki i spróbować
            przechowywać je w domu, możesz od razu wybrać naszą
            kolokację - razem z pełnym pakietem lub jako
            pojedynczą usługą. Cokolwiek potrzebujesz, jesteśmy do dyspozycji."
        btnText="Kontakt"
        btnLink="/kontakt"
        additionalLine="W Xminer masz wybór!"
        contentWidth="780px"
      />
    </>
  )
}

export default AdditionalServices
