import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import styled from "styled-components"
import useWindowSize from "../../../../utils/UseWindowSize"
import { staggerContainer, staggerItemFade } from "../../../Styles/Animations"

const SliderStyles = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  .title {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--primary);
  }

  .question {
    font-size: 48px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--white);
    margin-top: 10px;
    @media only screen and (max-width: 1082px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 801px) {
      font-size: 30px;
    }
    @media only screen and (max-width: 640px) {
      font-size: 24px;
    }
  }
`

const SlidesWrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  margin-left: 80px;
  @media only screen and (max-width: 1082px) {
    margin-left: 50px;
  }
  @media only screen and (max-width: 801px) {
    margin: 110px 0 0px;
  }
`

const SlideStyles = styled(motion.div)`
  .name {
    font-size: 22px;
    font-weight: 600;
    color: var(--white);
    text-transform: uppercase;
    @media only screen and (max-width: 801px) {
      margin-left: 20px;
    }
    @media only screen and (max-width: 640px) {
      font-size: 18px;
    }
  }
  .business {
    font-size: 14px;
    font-weight: 600;
    color: var(--primary);
    margin-top: 7px;
    @media only screen and (max-width: 801px) {
      margin-left: 20px;
    }
  }
  .recommendation {
    font-size: 18px;
    font-weight: 300;
    color: var(--white);
    margin-top: 23px;
    max-width: 466px;
    @media only screen and (max-width: 640px) {
      font-size: 15px;
      margin-top: 26px;
    }
  }
`

const Slide = ({ name, businessName, recommendation }) => {
  return (
    <SlideStyles
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.p
        variants={staggerItemFade}
        initial="initial"
        animate="animate"
        exit="exit"
        className="name"
      >
        {name}
      </motion.p>
      <motion.p
        variants={staggerItemFade}
        initial="initial"
        animate="animate"
        exit="exit"
        className="business"
      >
        {businessName}
      </motion.p>
      <motion.p
        variants={staggerItemFade}
        initial="initial"
        animate="animate"
        exit="exit"
        className="recommendation"
      >
        {recommendation}
      </motion.p>
    </SlideStyles>
  )
}

const ProgressStyles = styled.div`
  display: flex;
  align-items: center;
  margin-top: 60px;
  @media only screen and (max-width: 801px) {
    margin-top: 40px;
  }

  span {
    position: relative;
    width: 148px;
    height: 5px;
    border-radius: 5px;
    margin-right: 31px;
    @media only screen and (max-width: 801px) {
      margin-right: 26px;
    }
    background-color: ${({ barBgColor }) =>
      barBgColor ? barBgColor : "var(--white)"};
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      transform-origin: left center;
      transition: transform 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98);
      transform: ${({ barWidth }) =>
        barWidth ? `scaleX(${barWidth})` : "scaleX(0)"};
      background-color: ${({ barFillColor }) =>
        barFillColor ? barFillColor : "var(--primary)"};
    }
  }

  button {
    background-color: transparent;
    border: none;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98);
    &[disabled] {
      opacity: 0.3;
      cursor: auto;
    }

    &:active,
    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px var(--secondary);
    }
  }
`

const Progressbar = ({
  fillColor,
  bgColor,
  slides,
  activeSlide,
  setActiveSlide,
}) => (
  <ProgressStyles
    barFillColor={fillColor}
    barBgColor={bgColor}
    barWidth={activeSlide / slides.length}
  >
    <motion.span />
    <motion.button
      whileHover={activeSlide <= 1 ? {} : { x: -2 }}
      whileTap={activeSlide <= 1 ? {} : { x: -4 }}
      whileFocus={{ scale: 1.1 }}
      type="button"
      style={{ marginRight: "16px" }}
      onClick={() => setActiveSlide(Math.max(activeSlide - 1, 1))}
      disabled={activeSlide <= 1}
    >
      <FiChevronLeft color={bgColor} size="26px" />
    </motion.button>
    <motion.button
      whileHover={activeSlide >= slides.length ? {} : { x: 2 }}
      whileFocus={{ scale: 1.1 }}
      whileTap={activeSlide >= slides.length ? {} : { x: 4 }}
      type="button"
      style={{ marginLeft: "16px" }}
      onClick={() => setActiveSlide(Math.min(activeSlide + 1, slides.length))}
      disabled={activeSlide >= slides.length}
    >
      <FiChevronRight color={bgColor} size="26px" />
    </motion.button>
  </ProgressStyles>
)

const QuoteStyles = styled(motion.svg)`
  z-index: -1;
  position: absolute;
  left: -110px;
  top: -70px;
  @media only screen and (max-width: 801px) {
    left: 0;
    top: -50px;
    width: 143px !important;
  }
`

const Quote = () => (
  <QuoteStyles fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.3" clipPath="url(#clip0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M142.373 18.7419C121.049 29.1541 110.387 41.3882 110.387 55.4447C119.476 56.4859 126.992 60.1735 132.934 66.5076C138.877 72.8417 141.849 80.1735 141.849 88.5033C141.849 97.3536 138.965 104.816 133.197 110.889C127.428 116.963 120.175 120 111.435 120C101.647 120 93.1701 116.052 86.0037 108.156C78.8374 100.26 75.2542 90.6725 75.2542 79.3926C75.2542 45.553 94.306 19.089 132.41 0L142.373 18.7419ZM67.1186 18.7419C45.6196 29.1541 34.8702 41.3882 34.8702 55.4447C44.134 56.4859 51.7373 60.1735 57.6801 66.5076C63.6229 72.8417 66.5943 80.1735 66.5943 88.5033C66.5943 97.3536 63.6666 104.816 57.8112 110.889C51.9557 116.963 44.6584 120 35.919 120C26.1308 120 17.6973 116.052 10.6184 108.156C3.53942 100.26 0 90.6725 0 79.3926C0 45.553 18.9643 19.089 56.8935 0L67.1186 18.7419Z"
        fill="#2435B3"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="143" height="120" fill="white" />
      </clipPath>
    </defs>
  </QuoteStyles>
)

const Slider = ({ slides, title, header }) => {
  const [activeSlide, setActiveSlide] = useState(1)
  const width = useWindowSize()
  return (
    <>
      <SliderStyles>
        <p className="title">{title}</p>
        <p className="question">{header}</p>
        {width > 801 && (
          <Progressbar
            fillColor="var(--blue)"
            bgColor="var(--white)"
            slides={slides}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
          />
        )}
      </SliderStyles>
      <SlidesWrapper>
        <Quote />
        <AnimatePresence exitBeforeEnter>
          {slides
            .filter((_, i) => i + 1 === activeSlide)
            .map((slide, iterator) => (
              <Slide
                key={slide.nameSurname}
                name={slide.nameSurname}
                businessName={slide.businessName}
                recommendation={slide.testimonialContent}
              />
            ))}
        </AnimatePresence>
      </SlidesWrapper>
      {width <= 801 && (
        <Progressbar
          fillColor="var(--blue)"
          bgColor="var(--white)"
          slides={slides}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      )}
    </>
  )
}

export default Slider
