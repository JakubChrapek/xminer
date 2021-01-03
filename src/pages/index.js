import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO/SEO"
import website from "../../config/website"
import styled from "styled-components"
import HeroSection from "../components/HeroComponents/HeroSection/HeroSection"
import WhySection from "../components/HeroComponents/HeroSection/WhyXminer/WhyXminer"
import BeforeMiningSection from "../components/HeroComponents/HeroSection/BeforeMining/BeforeMining"
import InvestorsSection from "../components/HeroComponents/HeroSection/InvestorsSection/InvestorsSection"
import BeginHereSection from "../components/HeroComponents/HeroSection/BeginHereSection/BeginHereSection"
import TestimonialsSection from "../components/HeroComponents/HeroSection/TestimonialsSection/TestimonialsSection"
import CtaSection from "../components/HeroComponents/HeroSection/CtaSection/CtaSection"
import BlogSection from "../components/HeroComponents/HeroSection/BlogSection/BlogSection"

const HomeStyles = styled.div`
  background: var(--home-gradient);
`
const IndexPage = () => (
  <HomeStyles>
    <SEO title="Xminer" />
    <HeroSection />
    <WhySection />
    <BeforeMiningSection />
    <InvestorsSection />
    <BeginHereSection />
    <TestimonialsSection />
    <CtaSection />
    <BlogSection />
  </HomeStyles>
)

export default IndexPage
