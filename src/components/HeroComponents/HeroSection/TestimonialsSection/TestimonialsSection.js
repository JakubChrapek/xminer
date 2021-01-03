import React from "react"
import styled from "styled-components"
import ButtonLink from "../../../ButtonLink/ButtonLink"
import beforeIcon from "../../../../images/dla-poczatkujacych-klocek.svg"
import ButtonText from "../../../ButtonText/ButtonText"
import arrowRight from "../../../../images/right-arrow.svg"
import Slider from "./Slider"

const BeforeStyles = styled.section`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  position: relative;
  z-index: 1;
  margin: 98px 130px 80px 130px;
`

const TestimonialsSection = () => {
  const slides = [
    {
      name: "Jan Kowalski",
      businessName: "fajna firma",
      recommendation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor quam viverra aliquet egestas. Nunc nec est platea sed. Luctus massa integer pretium, nulla varius arcu dolor. Vestibulum adipiscing magna nibh id interdum vestibulum ac.",
    },
    {
      name: "Marian Nowak",
      businessName: "pędzące imadło",
      recommendation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor quam viverra aliquet egestas. Nunc nec est platea sed. Luctus massa integer pretium, nulla varius arcu dolor. Vestibulum adipiscing magna nibh id interdum vestibulum ac.",
    },
    {
      name: "Natalia Oreiro",
      businessName: "Zbuntowany Anioł",
      recommendation:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor quam viverra aliquet egestas. Nunc nec est platea sed. Luctus massa integer pretium, nulla varius arcu dolor. Vestibulum adipiscing magna nibh id interdum vestibulum ac.",
    },
  ]
  return (
    <BeforeStyles>
      <Wrapper>
        <Slider slides={slides} title="Referencje" header="Co o nas mówią" />
      </Wrapper>
    </BeforeStyles>
  )
}

export default TestimonialsSection
