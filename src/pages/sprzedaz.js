import React from "react"
import ContactUsSection from "../components/ContactUsSection/ContactUsSection"
import BlogSection from "../components/HeroComponents/HeroSection/BlogSection/BlogSection"
import Layout from "../components/Layout"
import CtaSalesSection from "../components/SalesComponents/SalesHero/HowToChooseSection/CtaSalesSection/CtaSalesSection"
import HowToChooseSection from "../components/SalesComponents/SalesHero/HowToChooseSection/HowToChooseSection"
import MinerRigsSection from "../components/SalesComponents/SalesHero/MinerRigsSection/MinerRigsSection"
import SalesHero from "../components/SalesComponents/SalesHero/SalesHero"
import SEO from "../components/SEO/SEO"

const Sales = () => {
  return (
    <>
      <SEO title="Sprzedaż" />
      <SalesHero />
      <MinerRigsSection />
      <HowToChooseSection />
      <CtaSalesSection />
      <BlogSection
        title="Blog"
        subtitle="Poczytaj i wybierz koparkę dla siebie"
      />
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

export default Sales
