import React from "react"
import ContactUsSection from "../components/ContactUsSection/ContactUsSection"
import ContactUsSectionWithMap from "../components/ContactUsSection/ContactUsSectionWithMap"

const ContactPage = () => (
  <>
    <ContactUsSectionWithMap
      bg="var(--white)"
      bgForm="var(--headers-color)"
      title="Kontakt"
      subtitle="Kupujesz, kolokujesz, serwisujesz?"
    />
    <ContactUsSection
      subtitle="Możesz na nas polegać!"
      content="Skontaktuj się z&nbsp;nami już dziś - telefonicznie, mailowo, messengerowo."
      additionalLine="Jesteśmy do Twojej dyspozycji"
    />
  </>
)

export default ContactPage
