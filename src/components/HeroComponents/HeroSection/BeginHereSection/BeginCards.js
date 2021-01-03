import React from "react"
import styled from "styled-components"
import icon1 from "../../../../images/icon01.svg"
import icon2 from "../../../../images/icon02.svg"
import icon3 from "../../../../images/icon03.svg"

const CardsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 264px));
  grid-gap: 100px;
  margin-top: 84px;
`

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;
  text-align: center;

  h3 {
    font-size: 26px;
    font-weight: 500;
    color: #101b56;
    text-align: center;
  }

  p {
    font-size: 16px;
    font-weight: 300;
    max-width: 264px;
  }
`
const Card = ({ title, content, cta }) => (
  <CardStyles>
    <h3>{title}</h3>
    <p>{content}</p>
    <p>{cta}</p>
  </CardStyles>
)

const Cards = () => {
  const CardsContent = [
    {
      title: "Kolokacja, serwis i więcej!",
      content:
        "Pierwsza w Polsce usługa kolokacji kryptokoparek zasilana w 100% energią z OZE - to nasza propozycja, to nasza odpowiedź na problemy z ciągłym szumem i rachunkami za prąd, które znacząco wpływają na zwrot inwestycji. Praktyka? Wygodny abonament, ubezpieczenie, zdalny dostęp, a nawet opieka nad maleństwami.",
      cta: "Możesz na nas liczyć!",
    },
    {
      title: "Koparki",
      content:
        "Tworzymy koparki o różnej mocy, o lróżnych możliwościach i w różnych cenach. Wszystkie łączy jedno: metka Xminer, która świadczy o tym, że żadna kryptowaluta im się nie oprze. Gwarancja, instalacja, wdrożenie, serwis?",
      cta: "Wszystko po naszej stronie.",
    },
    {
      title: "Know-how",
      content:
        "Nie wiesz, jak zacząć, nie wiesz, jak i ile zainwestować i szukasz profesjonalnej pomocy - takiej, dla której koparki to nie hobby i odskocznia, ale praca i biznes. Zajrzyj na naszego bloga, zapytaj o spotkanie indywidualne lub szkolenie dla Twojego zespołu.",
      cta: "Chętnie dzielimy się wiedzą.",
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
