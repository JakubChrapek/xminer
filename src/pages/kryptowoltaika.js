import { graphql } from 'gatsby'
import React from 'react'
import ContactUsSection from '../components/ContactUsSection/ContactUsSection';
import KryptowoltaikaHappySection from '../components/Kryptwoltaika/KryptowoltaikaHappySection';
import KryptowoltaikaHeroSection from '../components/Kryptwoltaika/KryptowoltaikaHeroSection';
import KryptowoltaikaHowTo from '../components/Kryptwoltaika/KryptowoltaikaHowTo';
import KryptowoltaikaInstallations from '../components/Kryptwoltaika/KryptowoltaikaInstallations';
import SEO from '../components/SEO/SEO';

const Kryptowoltaika = ({data}) => {
  const {allDatoCmsStronaKryptowoltaika: {nodes}} = data;
  const {businessInstallations, homeInstallations} = nodes[0]
  return (
    <>
      <SEO title="Kryptowoltaika - tani prąd dla koparek kryptowalut" />
      <KryptowoltaikaHeroSection />
      <KryptowoltaikaHowTo />
      <KryptowoltaikaHappySection />
      <KryptowoltaikaInstallations photos={businessInstallations} galleryHeader="Instalacje przemysłowe naszych klientów" galleryParagraphBottom="Klienci przemysłowi posługują się (zazwyczaj) innymi kryteriami wyboru niż klienci instalujący fotowoltaikę na domach prywatnych. Najczęściej ważne jest dla nich, aby instalacja była solidna, bezpieczna i przede wszystkim zapewniała jak <strong>najszybszy termin zwrotu</strong> inwestycji. Instalacje w ramach <strong>kryptowoltaiki</strong> powinny zapewniać jeszcze krótszy termin zwrotu. Jednak skrócenie tego terminu, niesie ze sobą zmiany innych parametrów." galleryParagraphBottomAdditional="Skomplikowane, prawda? Wszystko wyjaśnimy na spotkaniu (online lub offline).​" galleryParagraphTop="To są zdjęcia zrealizowanych przez nas inwestycji. Instalacje tych wielkości zapewnią prąd 5-9 koparkom 1000W​"/>
      <KryptowoltaikaInstallations last photos={homeInstallations} galleryHeader="Instalacje domowe naszych klientów" galleryParagraphBottom="Nasi klienci bardzo często, zakładają instalacje, a mimo to posiadają jeszcze wolne miejsca na dachu czy trawniku. „Domowa kryptowoltaika” to maksymalne wykorzystanie dopłat, wolnych powierzchni i mocy koparek, tak aby zmaksymalizować rentowność instalacji." galleryParagraphBottomAdditional="Więcej zdjęć można odnaleźć na <a href='https://rbsenergia.pl/realizacje-rbs-energia/' class='link' rel='noreferrer noopener' target='blank'>RBS Energia</a>"/>
      <ContactUsSection
        title="Skontaktuj się z nami"
        subtitle="Porozmawiaj z&nbsp;ekspertem Xminer"
        content="Jeszcze dziś skontaktuj się z&nbsp;naszym zespołem i&nbsp;porozmawiaj z&nbsp;nami o&nbsp;Twojej inwestycji."
        additionalLine="Obiecujemy, że się nie zawiedziesz!"
      />
    </>
  )
}

export const cryptowoltaikaQuery = graphql`
  query kryptowoltaikaQuery {
    allDatoCmsStronaKryptowoltaika {
      nodes {
        businessInstallations: instalacjePrzemyslowe {
          alt
          fluid(maxWidth: 1440) {
            ...GatsbyDatoCmsFluid
          }
        }
        homeInstallations: instalacjeDomowe {
          alt
          fluid(maxWidth: 1440) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }

`
export default Kryptowoltaika
