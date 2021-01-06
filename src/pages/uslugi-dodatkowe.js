import React from "react"
import AdditionalServicesHero from "../components/AdditionalServicesComponents/AdditionalServicesHero/AdditionalServicesHero"
import CtaSection from "../components/AdditionalServicesComponents/CtaSection/CtaSection"
import DarkSection from "../components/AdditionalServicesComponents/DarkSection/DarkSection"
import FAQSection from "../components/AdditionalServicesComponents/FAQSection/FAQSection"
import GradientCtaSection from "../components/AdditionalServicesComponents/GradientCtaSection/GradientCtaSection"
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
