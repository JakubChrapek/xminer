import React from "react"
import styled from "styled-components"
import icon1 from "../../../../images/icon01.svg"
import icon2 from "../../../../images/icon02.svg"
import icon3 from "../../../../images/icon03.svg"
const CardsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(340px, 1fr));
  grid-gap: 30px;
`

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 40px 32px;
  margin: 60px 0 110px;
  background: #1e2d6e;
  border-radius: 8px;

  img {

  }

  h3 {
    margin-top: 54px;
    font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  color: var(--white);
}
  }

  p {
    font-size: 16px;
    line-height: 1.63em;

  }
`
const Card = ({ icon, title, content, cta }) => (
  <CardStyles>
    <img src={icon} alt={title} />
    <h3>{title}</h3>
    <p>{content}</p>
    <p>{cta}</p>
  </CardStyles>
)

const Cards = () => {
  const CardsContent = [
    {
      icon: icon1,
      title: "Współpracujemy B2B i B2C",
      content:
        "Przeprowadzamy przez inwestycję i prywatnych inwestorów, i korporacje. W zależności od sumy, którą chcesz zainwestować, opowiemy Ci, co i jak, pokażemy możliwości. Dywersyfikacja przychodów? To dobry plan. Inwestycja na podstawie wiedzy zdobytej na forach?",
      cta: "Mamy lepsze rozwiązanie.",
    },
    {
      icon: icon2,
      title: "Wiedza z praktyki",
      content:
        "Xminer to grupa, która w kryptokopalniach siedzi od lat. Jesteśmy górnikami, jesteśmy inżynierami, jesteśmy specjalistami - takimi, którzy nie tylko są zajarani krypto, ale przede wszystkim takimi, którzy znają temat pod względem biznesowym i inwestycyjnym. To nie jest chwilowa zajawka.",
      cta: "Wybierz na partnera firmę o solidnych podstawach.",
    },
    {
      icon: icon3,
      title: "Nasze koparki",
      content:
        "W Xminer mamy wiedzę technologiczną i zaplecze przygotowane na to, aby tworzyć koparki kryptowalut - zarówno na indywidualne zamówienie, jak i proponując gotowy, predefiniowany produkt. Jakość? Serwis? Energia z ekologicznego i ekonomicznego źródła? Instrukcja?",
      cta: "Masz w cenie. Rzecz jasna!",
    },
  ]
  return (
    <CardsStyles>
      {CardsContent.map(({ icon, title, content, cta }) => (
        <Card icon={icon} title={title} content={content} cta={cta} />
      ))}
    </CardsStyles>
  )
}

export default Cards
