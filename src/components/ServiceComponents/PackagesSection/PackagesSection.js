import React, { useRef, useState } from "react"
import styled from "styled-components"
import ButtonLink from "../../ButtonLink/ButtonLink"
import Container from "../../Container/Container"
import Wrapper, { WrapperStyles } from "../../Wrapper/Wrapper"
import Text from "../../Text/Text"
import Flex from "../../Flex/Flex"
import useWindowSize from "../../../utils/UseWindowSize"
import { DragSlider } from "../../DragSlider/DragSlider"
import { AnimatePresence, motion } from "framer-motion"

const PackageWrapperStyles = styled(WrapperStyles)`
  @media only screen and (max-width: 1056px) {
    margin: 50px 0px 80px;
    h3 {
      font-size: 40px;
      max-width: 440px;
      text-align: center;
    }
  }
  @media only screen and (max-width: 740px) {
    padding: 40px 30px;
    margin: 50px 0 0;
    > div {
      margin-bottom: 32px;
    }
    h3 {
      font-size: 32px;
      text-align: left;
    }

    h2,
    h3 {
      align-self: flex-start;
    }
  }
  @media only screen and (max-width: 640px) {
    h3 {
      font-size: 24px;
    }
  }
`

const CardWrapperStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  position: relative;
  @media only screen and (max-width: 1056px) {
    grid-template-columns: 1fr;
  }
`
const PackageStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  border-radius: 12px;
  padding: 39px 32px 58px;
  border-radius: 12px;
  box-shadow: ${({ focus }) =>
    focus ? "10px 10px 50px 3px rgba(39, 92, 141, 0.1)" : ""};
  @media only screen and (max-width: 1056px) {
    box-shadow: 10px 10px 50px 3px rgba(39, 92, 141, 0.1);
  }
  @media only screen and (max-width: 640px) {
    box-shadow: 0px 10px 20px -5px rgba(39, 92, 141, 0.3);
    padding: 32px 27px 59px;
  }
  transition: 0.2s box-shadow cubic-bezier(0.04, 0.62, 0.23, 0.98);

  p,
  h3,
  ul {
    align-self: flex-start;
  }

  p {
    color: var(--headers-color);
  }
  h3 {
    color: var(--headers-color);
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    line-height: normal;
    text-align: left;
  }

  .primary {
    color: var(--primary);
    font-size: 13px;
    font-weight: normal;
    margin: 4px 0 0;
  }

  .cost {
    font-size: 48px;
    line-height: 1.17;
    font-weight: bold;
    letter-spacing: -1px;
    margin: 27px 0 0;
    span {
      font-size: 12px;
      letter-spacing: 2.5px;
      line-height: normal;
      text-transform: uppercase;
      margin-left: 4px;
    }

    @media only screen and (max-width: 640px) {
      margin: 8px 0 0;
    }
  }

  ul {
    padding: 0;
    margin: 24px 0 0;
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
    margin-top: 24px;
    font-size: 16px;
    line-height: normal;
    color: var(--headers-color);
    &:first-child {
      margin-top: 0;
    }
  }

  svg {
    fill: none;
    margin-right: 16px;
    min-width: 32px;
    #bg {
      fill: ${({ focus }) =>
        focus ? "var(--light-aqua)" : "rgba(224, 224, 224, 0.48)"};
    }

    #mark {
      stroke: ${({ focus }) =>
        focus ? "var(--primary)" : "var(--headers-color)"};
    }
  }

  @media only screen and (max-width: 640px) {
    a {
      margin: 36px 0 0 !important;
    }
  }
`

const PackagesNavStyles = styled(motion.div)`
  display: grid;
  place-content: center;
  place-items: center;
  grid-gap: 16px;
  grid-auto-flow: column;
  position: absolute;
  bottom: -48px;
  left: 50%;
  transform: translateX(-50%);
`

const ListItem = styled(motion.button)`
  border: none;
  background-color: ${({ active }) => (active ? "#5a5a5a" : "c4c4c4")};
  width: 18px;
  height: 18px;
  border-radius: 50%;
  outline: none;
  box-shadow: 0 0 0 0 transparent;
  transition: box-shadow 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);

  &:focus,
  &:active {
    outline: none;
    box-shadow: 0 0 0 2px transparent, 0 0 0 4px var(--primary);
  }
`

const PackagesNavigation = ({ length, activePackage, setActivePackage }) => {
  if (length < 2) {
    return null
  }

  return (
    <PackagesNavStyles>
      {Array.from({ length: length }, (v, i) => (
        <ListItem
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActivePackage(i)}
          active={i === activePackage}
        />
      ))}
    </PackagesNavStyles>
  )
}

const CardsSlider = () => {
  const packages = [
    {
      focus: false,
      type: "ASIC",
      typeDescription: "Koparka typu Antminer",
      price: "90",
      features: [
        "0,32 zł za kWh",
        "Wymiary Riga: nie dotyczy",
        "Jednorazowa opłata instalacyjna:&nbsp;99&nbsp;PLN*",
      ],
      btnText: "Na start",
      btnLink: "/kontakt",
    },
    {
      focus: true,
      type: "Single rig",
      typeDescription: "Koparka kryptowalut do 7 kart GPU",
      price: "140",
      features: [
        "0,32 zł za kWh",
        "Wymiary Riga: 70&nbsp;cm&nbsp;x&nbsp;50&nbsp;cm&nbsp;x&nbsp;40&nbsp;cm",
        "Jednorazowa opłata instalacyjna:&nbsp;249&nbsp;PLN*",
      ],
      btnText: "Najpopularniejszy",
      btnLink: "/kontakt",
    },
    {
      focus: false,
      type: "Double rig",
      typeDescription: "Koparka kryptowalut do 13 kart GPU",
      price: "180",
      features: [
        "0,32 zł za kWh",
        "Wymiary Riga: 70&nbsp;cm&nbsp;x&nbsp;50&nbsp;cm&nbsp;x&nbsp;40&nbsp;cm",
        "Jednorazowa opłata instalacyjna:&nbsp;249&nbsp;PLN*",
      ],
      btnText: "Dla inwestorów",
      btnLink: "/kontakt",
    },
  ]
  const cardAmount = packages.length
  const width = useWindowSize()
  const [activePackage, setActivePackage] = useState(0)
  const [dragPosition, setDragPosition] = useState(null)

  const constraintsRef = useRef(null)
  const handleNext = () => {
    const cardNumber = activePackage === cardAmount - 1 ? 0 : activePackage + 1
    setActivePackage(cardNumber)
  }

  const handlePrev = () => {
    const cardNumber = activePackage === 0 ? cardAmount - 1 : activePackage - 1
    setActivePackage(cardNumber)
  }

  const handleDragStart = (e, info) => {
    setDragPosition(info.point.x)
  }

  const handleDragEnd = (e, info) => {
    const difference = Math.abs(info.point.x - dragPosition)
    if (difference >= 12) {
      info.point.x < dragPosition ? handleNext() : handlePrev()
    }
    setDragPosition(info.point.x)
  }

  return (
    <CardWrapperStyles ref={constraintsRef}>
      {width > 1056 ? (
        packages.map(item => (
          <Package
            key={item.typeDescription}
            focus={item.focus}
            type={item.type}
            typeDescription={item.typeDescription}
            price={item.price}
            features={item.features}
            btnText={item.btnText}
            btnLink={item.btnLink}
          />
        ))
      ) : (
        <AnimatePresence exitBeforeEnter>
          {packages
            .filter((pkg, i) => i === activePackage)
            .map(item => (
              <Package
                key={item.typeDescription}
                focus={item.focus}
                type={item.type}
                typeDescription={item.typeDescription}
                price={item.price}
                features={item.features}
                btnText={item.btnText}
                btnLink={item.btnLink}
                drag="x"
                onDragStart={(e, info) => handleDragStart(e, info)}
                onDragEnd={(e, info) => handleDragEnd(e, info)}
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.2}
              />
            ))}
          <PackagesNavigation
            length={packages?.length || 0}
            activePackage={activePackage}
            setActivePackage={setActivePackage}
          />
        </AnimatePresence>
      )}
    </CardWrapperStyles>
  )
}

const Package = ({
  focus,
  type,
  typeDescription,
  price,
  features,
  btnLink,
  btnText,
  drag,
  onDragStart = { onDragStart },
  onDragEnd = { onDragEnd },
  dragConstraints = { dragConstraints },
  dragElastic = { dragElastic },
}) => (
  <PackageStyles
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    focus={focus}
    drag={drag}
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
    dragConstraints={dragConstraints}
    dragElastic={dragElastic}
  >
    <h3>{type}</h3>
    <p className="primary">{typeDescription}</p>
    <p className="cost">
      {price}PLN
      <span> /msc*</span>
    </p>
    <ul>
      {features.map((feature, i) => (
        <li className={focus ? "focus" : ""} key={i}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b)">
              <rect id="bg" width="32" height="32" rx="16" />
            </g>
            <path
              id="mark"
              d="M20.48 12.6396L14.32 18.7996L11.52 15.9996"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter
                id="filter0_b"
                x="-48"
                y="-48"
                width="128"
                height="128"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="24" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <span dangerouslySetInnerHTML={{ __html: feature }} />
        </li>
      ))}
    </ul>
    <ButtonLink
      bg={focus ? "var(--primary)" : "transparent"}
      outlinebg={!focus ? "var(--white)" : ""}
      type={!focus ? "outline" : ""}
      to={btnLink}
      whileTap={{ scale: 0.95 }}
      minwidth="196px"
      maxwidth="244px"
      margin="74px 0 0"
    >
      {btnText}
    </ButtonLink>
  </PackageStyles>
)

const PackagesSection = ({ margin, title, subtitle, smaller }) => {
  return (
    <Container>
      <PackageWrapperStyles
        margin={margin}
        padding="40px 122px 0"
        direction="column"
      >
        <Flex
          width="100%"
          direction="column"
          alignItems="center"
          margin={smaller ? "0 0 63px" : "0 0 27px"}
        >
          <Text
            as="h2"
            fontSize="10px"
            letterSpacing="1px"
            lineHeight="normal"
            textTransform="uppercase"
            fontWeight="normal"
            color="var(--headers-color)"
          >
            {title}
          </Text>
          <Text
            as="h3"
            margin={smaller && "10px 0 0"}
            fontSize={smaller ? "36px" : "48px"}
            fontWeight="600"
            lineHeight="normal"
            color="var(--headers-color)"
          >
            {subtitle}
          </Text>
        </Flex>
        <CardsSlider />
      </PackageWrapperStyles>
    </Container>
  )
}

export default PackagesSection
