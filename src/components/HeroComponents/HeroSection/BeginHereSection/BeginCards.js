import React from "react"
import styled from "styled-components"
import icon1 from "../../../../images/icon01.svg"
import icon2 from "../../../../images/icon02.svg"
import icon3 from "../../../../images/icon03.svg"

const CardsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 268px));
  grid-gap: 100px;
  margin-top: 84px;
  @media only screen and (max-width: 1326px) {
    grid-gap: 60px;
  }
  @media only screen and (max-width: 1082px) {
    grid-gap: 40px;
    margin-top: 60px;
  }
  @media only screen and (max-width: 801px) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: 640px) {
    grid-gap: 22px;
    margin-top: 32px;
  }
`

const CardStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;
  text-align: center;
  @media only screen and (max-width: 801px) {
    align-items: flex-start;
    text-align: center;
  }

  h3 {
    font-size: 26px !important;
    font-weight: 500 !important;
    color: var(--headers-color);
    text-align: center;
    @media only screen and (max-width: 801px) {
      text-align: left;
    }
    @media only screen and (max-width: 640px) {
      font-size: 18px !important;
    }
  }

  p {
    font-size: 16px;
    font-weight: 300;
    max-width: 264px;
    @media only screen and (max-width: 1082px) {
      max-width: unset;
    }

    @media only screen and (max-width: 801px) {
      text-align: left;
    }
    @media only screen and (max-width: 640px) {
      font-size: 14px !important;
    }
  }
`
const Card = ({ title, content, cta }) => (
  <CardStyles>
    <h3 dangerouslySetInnerHTML={{ __html: title }} />
    <p dangerouslySetInnerHTML={{ __html: content }} />
    <p
      style={{ marginTop: "20px" }}
      dangerouslySetInnerHTML={{ __html: cta }}
    />
  </CardStyles>
)

const Cards = () => {
  const CardsContent = [
    {
      title: "Kolokacja,<br/>serwis i&nbsp;więcej!",
      content:
        "Pierwsza w Polsce usługa kolokacji kryptokoparek zasilana w&nbsp;100% energią z&nbsp;OZE -&nbsp;to nasza propozycja, to nasza odpowiedź na problemy z&nbsp;ciągłym szumem i&nbsp;rachunkami za prąd, które znacząco wpływają na zwrot inwestycji. Praktyka? Wygodny abonament, ubezpieczenie, zdalny dostęp, a&nbsp;nawet opieka nad maleństwami.",
      cta: "Możesz na nas liczyć!",
    },
    {
      title: "Koparki",
      content:
        "Tworzymy koparki o&nbsp;różnej mocy, o&nbsp;różnych możliwościach i&nbsp;w&nbsp;różnych cenach. Wszystkie łączy jedno: metka Xminer, która świadczy o tym, że żadna kryptowaluta im się nie oprze. Gwarancja, instalacja, wdrożenie, serwis?",
      cta: "Wszystko po naszej stronie.",
    },
    {
      title: "Know-how",
      content:
        "Nie wiesz, jak zacząć, nie wiesz, jak i&nbsp;ile zainwestować i&nbsp;szukasz profesjonalnej pomocy -&nbsp;takiej, dla której koparki to nie hobby i&nbsp;odskocznia, ale praca i&nbsp;biznes. Zajrzyj na naszego bloga, zapytaj o&nbsp;spotkanie indywidualne lub szkolenie dla Twojego zespołu.",
      cta: "Chętnie dzielimy się wiedzą.",
    },
  ]
  return (
    <CardsStyles>
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
  )
}

export default Cards
