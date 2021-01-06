import React from "react"
import GradientCtaSection from "../components/AdditionalServicesComponents/GradientCtaSection/GradientCtaSection"
import ContactUsSection from "../components/ContactUsSection/ContactUsSection"
import ForInvestorsHeroSection from "../components/ForInvestors/ForInvestorsHeroSection/ForInvestorsHeroSection"
import WhoWillTeachYouSection from "../components/ForInvestors/ForInvestorsHeroSection/WhoWillTeachYouSection/WhoWillTeachYouSection"
import WhyInvestingWithUs from "../components/ForInvestors/ForInvestorsHeroSection/WhyInvestingWithUs/WhyInvestingWithUs"
import BlogSection from "../components/HeroComponents/HeroSection/BlogSection/BlogSection"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import PackagesSection from "../components/ServiceComponents/PackagesSection/PackagesSection"

const ForInvestors = () => {
  return (
    <>
      <SEO title="Usługi dodatkowe" />
      <ForInvestorsHeroSection />
      <WhyInvestingWithUs />
      <WhoWillTeachYouSection />
      <BlogSection title="" subtitle="" padding="15px 122px 0" smaller />
      <PackagesSection
        title="Od czego zacząć"
        subtitle="Zacznij inwestować w kryptowaluty"
        smaller
        margin="84px 0 0"
      />
      <GradientCtaSection
        title="oferta"
        subtitle="Koparka + pełna obsługa już od XXX zł netto."
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

export default ForInvestors
