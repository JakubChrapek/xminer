import { motion, useMotionValue } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import icon1 from "../../../../images/icon01.svg"
import icon2 from "../../../../images/icon02.svg"
import icon3 from "../../../../images/icon03.svg"
import useWindowSize from "../../../../utils/UseWindowSize"
const CardsStyles = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, minmax(340px, 1fr));
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
  const width = useWindowSize()
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
    <>
      {/* {width > 1200 ? ( */}
      <CardsStyles
        drag="x"
        dragConstraints={{ left: -600, right: 0 }}
        initial={{ x: 0 }}
        style={{ display: "flex", cursor: "drag" }}
      >
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
      {/* ) : (
        <DragSlider>
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
      )} */}
    </>
  )
}

const DragSlider = ({
  children,
  bounceStiffness = 100, // Affects the stiffness of the bounce spring. Higher values will create more sudden movement.
  bounceDamping = 10, // affects the damping of the bounce spring. If set to 0, spring will oscillate indefinitely.
}) => {
  const ref = useRef(null)
  const x = useMotionValue(0)

  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0)
  const [sliderConstraints, setSliderConstraints] = useState(0)

  useEffect(() => {
    const calcSliderChildrenWidth = () => {
      setSliderChildrenWidth(
        Array.from(ref.current.childNodes).reduce(
          (acc, node) => acc + node.clientWidth,
          0
        )
      )
    }

    calcSliderChildrenWidth()

    const calcSliderWidth = () => {
      setSliderWidth(ref.current.clientWidth)
    }

    calcSliderWidth()
    window.addEventListener("resize", calcSliderWidth)

    const calcSliderConstraints = () => {
      setSliderConstraints(sliderChildrenWidth - sliderWidth)
    }

    calcSliderConstraints()
    window.addEventListener("resize", calcSliderConstraints)
  }, [ref, sliderChildrenWidth, sliderWidth])

  const SliderWrap = ({ children }) => {
    return (
      <div style={{ overflowX: "hidden" }}>
        <motion.div
          ref={ref}
          drag="x"
          initial={{ x: 0 }}
          style={{ x, display: "flex", cursor: "drag" }}
          // style={{ x: scrollXValue }}
          dragConstraints={{
            left: `${-sliderConstraints}`,
            right: 0,
          }}
          dragTransition={{ bounceStiffness, bounceDamping }}
        >
          {children}
        </motion.div>
      </div>
    )
  }

  return <SliderWrap>{children}</SliderWrap>
}

export default Cards
