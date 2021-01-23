import { motion, useMotionValue } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import icon1 from "../../../../images/icon01.svg"
import icon2 from "../../../../images/icon02.svg"
import icon3 from "../../../../images/icon03.svg"
import useWindowSize from "../../../../utils/UseWindowSize"
import { DragSlider } from "../../../DragSlider/DragSlider"
const CardsStyles = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(340px, 1fr));
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 973px) {
    grid-template-columns: repeat(auto-fill, minmax(283px, 1fr));
  }
  grid-gap: 30px;
`

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 40px 32px;
  margin: 60px 0 110px;
  @media only screen and (max-width: 640px) {
    margin: 56px 0 50px;
  }
  background: #1e2d6e;
  border-radius: 8px;

  @media only screen and (max-width: 1140px) {
    width: 343px;
    flex-shrink: 0;
    margin-right: 23px;
    &:last-of-type {
      margin-right: 0;
    }
  }
  @media only screen and (max-width: 640px) {
    width: 313px;
    padding: 40px 20px;
  }

  img {
    width: 32px;
  }

  h3 {
    margin-top: 54px;
    font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  color: var(--white);
  @media only screen and (max-width: 640px) {
    margin-top: 24px;
    font-size: 18px;
    line-height: 1.78em;
  }
}
  }

  p {
    font-size: 16px;
    line-height: 1.63em;
    @media only screen and (max-width: 640px) {
      margin-top: 6px;
      font-size: 14px;
      line-height: 1.86em;
    }
  }
`
const Card = ({ icon, title, content, cta }) => (
  <CardStyles>
    <img src={icon} alt={title} />
    <h3 dangerouslySetInnerHTML={{ __html: title }} />
    <p dangerouslySetInnerHTML={{ __html: content }} />
    <p dangerouslySetInnerHTML={{ __html: cta }} />
  </CardStyles>
)

const Cards = () => {
  const width = useWindowSize()
  const CardsContent = [
    {
      icon: icon1,
      title: "Współpracujemy B2B i&nbsp;B2C",
      content:
        "Przeprowadzamy przez inwestycję i&nbsp;prywatnych inwestorów, i&nbsp;korporacje. W&nbsp;zależności od sumy, którą chcesz zainwestować, opowiemy Ci, co i&nbsp;jak, pokażemy możliwości. Dywersyfikacja przychodów? To dobry plan. Inwestycja na podstawie wiedzy zdobytej na forach?",
      cta: "Mamy lepsze rozwiązanie.",
    },
    {
      icon: icon2,
      title: "Wiedza z&nbsp;praktyki",
      content:
        "Xminer to grupa, która w&nbsp;kryptokopalniach siedzi od lat. Jesteśmy górnikami, jesteśmy inżynierami, jesteśmy specjalistami&nbsp;-&nbsp;takimi, którzy nie tylko są zajarani krypto, ale przede wszystkim takimi, którzy znają temat pod względem biznesowym i&nbsp;inwestycyjnym. To nie jest chwilowa zajawka.",
      cta: "Wybierz na partnera firmę o&nbsp;solidnych podstawach.",
    },
    {
      icon: icon3,
      title: "Nasze koparki",
      content:
        "W Xminer mamy wiedzę technologiczną i&nbsp;zaplecze przygotowane na to, aby tworzyć koparki kryptowalut&nbsp;-&nbsp;zarówno na indywidualne zamówienie, jak i&nbsp;proponując gotowy, predefiniowany produkt. Jakość? Serwis? Energia z&nbsp;ekologicznego i&nbsp;ekonomicznego źródła? Instrukcja?",
      cta: "Masz w cenie. Rzecz jasna!",
    },
  ]
  return (
    <>
      {width > 1140 ? (
        <CardsStyles data-scroll-section>
          {CardsContent.map(({ icon, title, content, cta }) => (
            <Card
              key={title}
              icon={icon}
              title={title}
              content={content}
              cta={cta}
            />
          ))}
        </CardsStyles>
      ) : (
        <DragSlider margin="0px" leftAnchor={46}>
          {CardsContent.map(({ icon, title, content, cta }) => (
            <Card
              key={title}
              icon={icon}
              title={title}
              content={content}
              cta={cta}
            />
          ))}
        </DragSlider>
      )}
    </>
  )
}

export default Cards
