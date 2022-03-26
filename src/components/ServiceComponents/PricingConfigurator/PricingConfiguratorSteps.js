import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import styled, { css } from "styled-components"
import { Message } from "../../ContactUsSection/ContactUsForm"
import { fadeInUp, textFadeInUp } from "../../Styles/Animations"
import { useField, useFormikContext } from "formik"
import { Link } from "gatsby"
import Text from "../../Text/Text"
import InputRange from "react-input-range"
import { Step3 as GpuStep2Choices } from "../../SalesComponents/SalesHero/MinerRigsSection/Steps"
import "react-input-range/lib/css/index.css"

const ImgWrapper = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 209px;
  height: 132px;
  position: relative;
  box-shadow: 0 16px 24px 0 rgba(38, 50, 56, 0.08),
    0 8px 8px 0 rgba(38, 50, 56, 0.12);
  @media only screen and (max-width: 640px) {
    width: 60%;
    min-width: 180px;
  }
  @media only screen and (max-width: 440px) {
    width: 75%;
  }
  background-color: var(--white);
  border-radius: 15px;
  border: none;
  transition: background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
    transform 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53);

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 15px;
    z-index: 1;
  }

  &:hover:after {
    box-shadow: inset 0 0 0 3px var(--primary);
  }

  &.active {
    transform: scale(1.05) !important;
    &:after {
      box-shadow: inset 0 0 0 5px var(--primary);
    }
  }
  &:focus,
  &:active {
    outline: none;
  }
  &:focus-visible {
    outline: none !important;
    &:after {
      box-shadow: inset 0 0 0 5px var(--primary);
    }
  }

  &:first-of-type {
    margin-right: 50px;
    @media only screen and (max-width: 1002px) {
      margin: 0;
    }
  }

  &:last-of-type {
    @media only screen and (max-width: 1002px) {
      margin-top: 26px;
    }
  }
  .gatsby-image-wrapper {
    width: 100% !important;
    height: 100% !important;
    border-radius: 15px;

    img,
    picture {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 15px;
    }
  }
`

const Grid = styled(motion.div)`
  display: flex;
  @media only screen and (max-width: 1002px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 640px) {
    align-items: flex-start;
  }
`

const Step1TextStyles = styled(Text)`
  position: absolute;
  left: 50%;
  bottom: -50px;
  transform: translateX(-50%);
  @media only screen and (max-width: 1002px) {
    left: unset;
    right: 0;
    bottom: 50%;
    transform: translate(60px, 50%);
  }
`

export const Step1 = ({ types, activeType, setActiveType }) => {
  const { setFieldValue } = useFormikContext()
  useEffect(() => {
    setFieldValue("type", "asic")
  }, [])
  const VendorGrid = () => (
    <Grid>
      {types.map((type, i) => (
        <ImgWrapper
          key={type.name}
          whileHover={{
            cursor: "pointer",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={e => {
            e.preventDefault()
            setActiveType(i)
            setFieldValue("type", types[i].name)
          }}
          className={activeType === i ? "active" : ""}
        >
          <Img fluid={type.fluid} alt={type.alt} />
          <Step1TextStyles
            textTransform="uppercase"
            color="var(--nav-dark-bluse)"
            fontSize="20px"
            lineHeight="1.5"
            fontWeight="400"
          >
            {type.name}
          </Step1TextStyles>
        </ImgWrapper>
      ))}
    </Grid>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: 0.15 },
      }}
      exit={{
        opacity: 0,
        y: -16,
        transition: { duration: 0.4, delay: 0.15 },
      }}
      key="type"
    >
      <VendorGrid />
    </motion.div>
  )
}

const ModelGridStyles = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 52px;

  button {
    padding: 64px 12px;
    box-shadow: 0 16px 24px 0 rgba(38, 50, 56, 0.08),
      0 8px 8px 0 rgba(38, 50, 56, 0.12);
    @media only screen and (max-width: 1002px) {
      padding: 40px 12px;
      width: 70%;
      max-width: 360px;
      margin: 0 auto;
    }
    @media only screen and (max-width: 640px) {
      max-width: 280px;
    }
    @media only screen and (max-width: 440px) {
      width: 100%;
      max-width: 176px;
    }

    text-transform: uppercase;
    color: var(--headers-color);
    font-size: 20px;
    @media only screen and (max-width: 380px) {
      padding: 40px 8px;
      font-size: 18px;
    }
    line-height: 30px;
    font-weight: 500;
    text-align: center;
    background-color: var(--white);
    border-radius: 15px;
    border: none;
    transition: box-shadow 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      transform 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53);

    &:hover {
      background-color: var(--light-aqua);
    }

    &.active {
      box-shadow: inset 0 0 0 5px var(--primary);
      transform: scale(1.05) !important;
    }
    &:focus,
    &:active {
      outline: none;
    }
    &:focus-visible {
      outline: none !important;
      box-shadow: inset 0 0 0 5px var(--primary);
    }
  }
  @media only screen and (max-width: 1423px) {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-gap: 24px;

    span {
      padding: 44px 10px;
    }
  }
  @media only screen and (max-width: 1002px) {
    grid-template-columns: 1fr;
    grid-gap: 37px;
  }
`

// const AsicStep2Choices = () => {
//   const [activeChoice, setActiveChoice] = useState(0)
//   const [fieldFan, metaFan] = useField({ name: "fan" })
//   const { setFieldValue } = useFormikContext()
//   useEffect(() => {
//     setFieldValue("fan", 1)
//   }, [])

//   return (
//     <ModelGridStyles>
//       {Array.from({ length: 3 }, (_, i) => (
//         <motion.button
//           key={`cryptominder-fan-${i}`}
//           whileTap={{ scale: 0.97 }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             default: { duration: 0.2 },
//           }}
//           onClick={e => {
//             e.preventDefault()
//             setActiveChoice(i)
//             i === 2 ? setFieldValue("fan", "inna") : setFieldValue("fan", i + 1)
//           }}
//           className={activeChoice === i ? "active" : ""}
//         >
//           <Text
//             textTransform="uppercase"
//             color="var(--nav-dark-bluse)"
//             fontSize="20px"
//             lineHeight="1.5"
//             fontWeight="400"
//           >
//             {i === 2 ? "inna" : `${i + 1} fan`}
//           </Text>
//         </motion.button>
//       ))}
//     </ModelGridStyles>
//   )
// }

export const NumberOfMinersStep = () => {
  const [typeField, metaTypeField] = useField({ name: "miners" })
  const { setFieldValue } = useFormikContext()
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: 0.15 },
      }}
      exit={{
        opacity: 0,
        y: -16,
        transition: { duration: 0.4, delay: 0.15 },
      }}
      key="numberOfMiners"
    >
      <MyTextInput
        label="Liczba koparek"
        name="miners"
        type="number"
        step="1"
        min="1"
        max="1000"
        variant="miners"
        placeholder={+typeField.value}
        pattern="[0-9]"
      // onChange={e => {
      //   e.preventDefault()
      //   setFieldValue("miners", e.target.value)
      // }}
      />
    </motion.div>
  )
}

// export const Step2 = ({ activeCard, setActiveCard }) => {
//   const [typeField, metaTypeField] = useField({ name: "type" })
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 16 }}
//       animate={{
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.4, delay: 0.15 },
//       }}
//       exit={{
//         opacity: 0,
//         y: -16,
//         transition: { duration: 0.4, delay: 0.15 },
//       }}
//       key="fan"
//     >
//       {typeField.value === "asic" ? (
//         <AsicStep2Choices />
//       ) : (
//         <GpuStep2Choices
//           activeCard={activeCard}
//           setActiveCard={setActiveCard}
//           pricingConfigurator
//         />
//       )}
//     </motion.div>
//   )
// }

const PowerContainer = styled(motion.ul)`
  width: 100%;
  margin-top: 32px;
  @media only screen and (max-width: 640px) {
    width: 95%;
    margin: 32px auto 0;
  }
  .input-range {
    &__label {
      font-family: "Poppins";
      text-transform: uppercase;
      font-size: 14px;
      line-height: 1;
      font-weight: 400;
      color: var(--white);
      &--min,
      &--max {
        bottom: -2.4em;
        .input-range__label-container {
          left: 0;
        }
      }
      &--value {
        background-color: var(--primary);
        padding: 0.6em 1.2em;
        text-align: center;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        position: relative;
        left: 3px;
        top: -2em;
        @media only screen and (max-width: 640px) {
          padding: 0.6em 0.8em;
        }

        &:after {
          content: "W";
        }
      }
      &-container {
        left: 0;
      }
      &--min,
      &--max {
        &:after {
          content: "W";
        }
      }
      &--min {
        color: #29abe2;
      }
      &--max {
        color: #6ed7dd;
        .input-rage__label-container {
          left: 0;
        }
      }
    }
    &__slider {
      width: 16px;
      height: 16px;
      margin-left: 33px;
      margin-top: -1px;
      pointer-events: all;
      background-color: var(--white);
      border: 0;
      box-shadow: 0 0 1px 0 rgba(9, 30, 66, 0.31),
        0 3px 5px 0 rgba(9, 30, 66, 0.2);
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease,
        background-color 0.2s ease;
      &:hover {
        transform: scale(1.2);
        background-color: var(--primary);
      }
      &:active {
        transform: scale(1.3);
        background-color: var(--primary);
      }

      &-container {
        margin-top: -1.5em;
        margin-left: -36px;
        pointer-events: none;
      }
    }
    &__track {
      height: 0.4rem;
      background-color: #ebecf0;
      &--active {
        background: var(--gradient);
      }
    }
  }
`

export const Step3 = () => {
  const [fieldPower, metaPower] = useField({ name: "power" })
  const { setFieldValue } = useFormikContext()
  const minValue = 500
  const maxValue = 5000

  useEffect(() => {
    if (!fieldPower.value) {
      setFieldValue("power", minValue)
    }
  }, [])

  return (
    <PowerContainer
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: 0.15 },
      }}
      exit={{
        opacity: 0,
        y: -16,
        transition: { duration: 0.4, delay: 0.15 },
      }}
      key="power"
    >
      <InputRange
        minValue={minValue}
        maxValue={maxValue}
        value={fieldPower.value}
        step={10}
        onChange={value => setFieldValue("power", value)}
        onChangeComplete={value => {
          setFieldValue("power", value)
        }}
      />
      <Text
        fontSize="13px"
        fontWeight="400"
        color="var(--nav-dark-bluse)"
        margin="56px 0 0"
      >
        Potrzebujesz innej mocy? Proszę wpisz wartość w poniższe pole.
      </Text>
      <MyTextInput
        label=""
        name="power"
        type="number"
        placeholder={fieldPower.value}
        onChange={e => {
          setFieldValue("power", e.target.value)
        }}
        min={200}
        max={1500000}
        variant="power"
      />
    </PowerContainer>
  )
}

const LastStyles = styled(motion.div)`
  position: relative;
  display: flex;
  flex-basis: 55%;
  flex-direction: column;

  @media only screen and (max-width: 640px) {
    flex-basis: 100%;
  }

  input,
  textarea {
    border-radius: 16px;
    width: 100%;
    background-color: var(--faded-aqua);
    border: 0;
    color: var(--nav-dark-bluse);
    padding: 8px 16px;
    @media only screen and (max-width: 1002px) {
      padding: 20px 16px;
    }
    transition: box-shadow 0.15s cubic-bezier(0.04, 0.62, 0.23, 0.98),
      color 0.15s cubic-bezier(0.04, 0.62, 0.23, 0.98);
    font-size: 18px;
    line-height: 1.76em;
    font-family: "Poppins";
    font-weight: 300;
    &::placeholder {
      color: var(--gray3);
      font-family: "Poppins";
      font-weight: 300;
      opacity: 1;
      letter-spacing: 0;
      font-size: 18px;
      line-height: 1.76em;
    }
    @media only screen and (max-width: 740px) {
      padding: 16px;
      font-size: 16px;
      &::placeholder {
        font-size: 16px;
      }
    }

    :hover {
      outline: none;
      box-shadow: inset 0 0 0 1px var(--nav-dark-bluse);
      color: var(--nav-dark-bluse);
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 0 0 2px var(--nav-dark-bluse);
      color: var(--nav-dark-bluse);
    }
  }
`

const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 36px 0 0;
  position: relative;
  display: flex;
  flex: ${({ flex }) => flex && flex};
  margin: ${({ margin }) => margin && margin};
  label {
    position: absolute;
  }

  &:nth-of-type(1) {
    margin-top: 0;
  }

  @media only screen and (max-width: 1002px) {
    margin: 0;
    margin: ${({ margin }) => margin && margin};
    &:nth-of-type(2),
    &:nth-of-type(3) {
      margin-top: 40px;
    }
  }

  .error {
    position: absolute;
    bottom: -22px;
    left: 16px;
    color: var(--primary);
    font-size: 12px;
    line-height: 1.3em;
  }

  input#acceptedTerms {
    opacity: 0;
    width: 0;
    height: 0;

    &:focus + label:after {
      box-shadow: 0 0 0 2px var(--primary);
    }

    &:checked {
      + label:before {
        opacity: 1;
      }
      + label:after {
        border-color: var(--primary);
      }
    }

    &:focus {
      + label:after {
        border-color: var(--primary);
      }
    }
  }

  label {
    left: -9999px;
    opacity: 0;
    display: none;

    &.checkbox {
      position: relative;
      left: unset;
      opacity: 1;
      display: inline;
      color: var(--nav-dark-bluse);
      margin-left: 26px;
      align-items: center;
      letter-spacing: 0.25px;
      margin-top: 24px;
      font-size: 12px;
      position: relative;
      &:hover {
        &:after {
          border-color: var(--primary);
          transform: translateY(-50%) scale(1.1);
        }
      }

      &:active {
        &:after {
          transform: translateY(-50%) scale(0.9);
        }
      }

      &:after,
      &:before {
        content: "";
        position: absolute;
        transition: opacity 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19),
          border 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
          transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        left: -26px;
        top: 50%;
      }

      &:after {
        width: 16px;
        height: 16px;
        transform: translateY(-50%);
        background-color: transparent;
        border: 2px solid var(--nav-dark-bluse);
        border-radius: 3px;
      }

      &:before {
        content: "✓";
        transform: translate(-50%, -50%);
        left: -15px;
        top: calc(50% - 4px);
        font-size: 22px;
        opacity: 0;
        color: var(--primary);
      }

      a {
        font-weight: 500;
        color: var(--secondary);
        text-decoration: none;
        position: relative;
        padding: 6px 10px 6px 2px;

        &:focus {
          outline: none;
          box-shadow: 0 0 0 3px var(--secondary);
          border-radius: 4px;
        }

        &:after {
          content: "";
          position: absolute;
          left: 2px;
          bottom: 0px;
          background-color: var(--secondary);
          height: 2px;
          width: calc(100% - 12px);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        &:hover:after {
          transform: scaleX(1);
        }
      }
    }
  }

  div {
    left: 16px;
    bottom: -24px;
    &.privacy {
      left: 26px;
      bottom: -20px;
    }
  }

  ${({ variant }) =>
    variant === "power"
      ? css`
          margin: 12px 0 0;

          input {
            padding: 0.6em 1em;
            border: 1px solid var(--nav-dark-bluse);
            border-radius: 5px;
            color: var(--nav-dark-bluse);
            font-weight: 500;
            font-size: 16px;
          }

          .error {
            position: absolute;
            left: 0px;
            color: var(--primary);
            font-size: 12px;
            line-height: 1.3em;
          }
        `
      : variant === "miners" &&
      css`
          input {
            padding: 0.4em 1em;
            border: 2px solid var(--nav-dark-bluse);
            border-radius: 5px;
            color: var(--nav-dark-bluse);
            font-weight: 500;
            font-size: 22px;
            transition: border 0.15s ease;

            &:focus,
            &:active {
              outline: none;
              border: 2px solid var(--primary);
            }
          }
        `}
`

const MyTextInput = ({ label, variant, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <NameWrapper variant={variant}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      <AnimatePresence>
        {meta.touched && meta.error ? (
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="error"
          >
            {meta.error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </NameWrapper>
  )
}

const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <NameWrapper margin="32px 0 0" flex="100%">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea rows="2" className="text-area" {...field} {...props} />
      <AnimatePresence>
        {meta.touched && meta.error ? (
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="error"
          >
            {meta.error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </NameWrapper>
  )
}

const CheckboxWrapper = styled(NameWrapper)`
  width: 100%;
  flex: unset;
  margin-top: 12px;

  .error {
    bottom: -36px;
    left: 26px;
  }
  @media (max-width: 640px) {
    .error {
      bottom: -50px;
    }
  }
`

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" })
  return (
    <CheckboxWrapper>
      <input id={field.name} {...field} {...props} type="checkbox" />
      <label className="checkbox" htmlFor={field.name}>
        Przeczytałem/łam i&nbsp;zgadzam się z&nbsp;
        <a href="/polityka-prywatnosci" target="_blank">
          polityką prywatności
        </a>
      </label>
      <AnimatePresence>
        {meta.touched && meta.error ? (
          <motion.p
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            exit="exit"
            className="error"
          >
            {meta.error}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </CheckboxWrapper>
  )
}

const LastWrapper = styled(motion.div)`
  display: flex;
  gap: 36px;
  @media only screen and (max-width: 640px) {
    flex-direction: column;
    margin-bottom: 32px;
  }
`

const SummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 22px 26px;
  border-radius: 10px;
  background-color: var(--primary);
  flex-basis: 45%;

  @media only screen and (max-width: 640px) {
    flex-basis: 100%;
  }
`

export const Step4 = () => {
  const { setFieldValue } = useFormikContext()
  const { values } = useFormikContext()

  const roundToNearest = (number, jump = 5) => {
    return Math.floor(number / jump) * jump
  }

  const getPriceFromConfiguration = values => {
    const { type, fan, power, miners } = values
    const costPerKiloWattPerHour = 0.8
    let normalizedPower = (power / 1000) * 24 * 31
    let price = 0

    // if (type === "asic") {
    //   const fanPrice = fan === 1 ? 90 : 120
    //   price += fanPrice
    // } else {
    //   if (type === "gpu") {
    //     const cardsNumber = fan
    //     // For 1-4 graphic cards price equals 120PLN
    //     // Over 4 graphic cards each one costs 30PLN
    //     const graphicCardsPrice = fan <= 4 ? 120 : 120 + (cardsNumber - 4) * 30
    //     price += graphicCardsPrice
    //   }
    // }

    price += normalizedPower * costPerKiloWattPerHour
    return miners * roundToNearest(price, 2)
  }

  useEffect(() => {
    setFieldValue("price", getPriceFromConfiguration(values))
  }, [])

  return (
    <LastWrapper
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: 0.3 },
      }}
      exit={{
        opacity: 0,
        y: -16,
        transition: { duration: 0.4, delay: 0.3 },
      }}
      key="kontakt"
    >
      <SummaryWrapper>
        <Text fontSize="16px" color="var(--white)">
          Cena pakietu
        </Text>
        <Text
          fontSize="24px"
          lineHeight="1.25"
          fontWeight="600"
          margin="10px 0 0"
          color="var(--white)"
        >
          {getPriceFromConfiguration(values)}zł / msc (netto)
        </Text>
        <Text
          fontSize="13px"
          lineHeight="1"
          fontWeight="400"
          margin="30px 0 0"
          color="var(--light-aqua)"
        >
          Rodzaj koparki (liczba koparek)
        </Text>
        <Text
          fontSize="14px"
          lineHeight="2.14"
          fontWeight="600"
          color="var(--white)"
          margin="8px 0 0"
          textTransform="uppercase"
        >
          {values.type} ({values.miners})
        </Text>
        {/* <Text
          fontSize="13px"
          lineHeight="1"
          fontWeight="400"
          margin="10px 0 0"
          color="var(--light-aqua)"
        >
          Liczba {values.type === "gpu" ? "kart graficznych" : "wiatraków"}
        </Text>
        <Text
          fontSize="14px"
          lineHeight="2.14"
          fontWeight="600"
          color="var(--white)"
          margin="8px 0 0"
          textTransform="uppercase"
        >
          {values.fan === "inna"
            ? values.fan
            : `${values.fan}
          ${
            values.type === "gpu"
              ? values.fan == 1
                ? "karta"
                : values.fan <= 4
                ? "karty"
                : "kart"
              : "FAN"
          }`}
        </Text> */}
        <Text
          fontSize="13px"
          lineHeight="1"
          fontWeight="400"
          margin="10px 0 0"
          color="var(--light-aqua)"
        >
          Łączna moc koparek
        </Text>
        <Text
          fontSize="14px"
          lineHeight="2.14"
          fontWeight="600"
          color="var(--white)"
          margin="8px 0 0"
          textTransform="uppercase"
        >
          {(values.power / 1000).toFixed(1)}kW
        </Text>
      </SummaryWrapper>
      <LastStyles>
        <MyTextInput
          label="Imię"
          name="configuratorName"
          type="text"
          placeholder="Imię"
        />
        <MyTextInput
          label="Email"
          name="configuratorEmail"
          type="email"
          placeholder="jan_nowak@gmail.com"
        />
        <MyTextArea
          label="Wiadomość"
          name="configuratorMessage"
          type="text"
          placeholder="Dodatkowo chciałbym..."
        />
        <MyCheckbox name="acceptedTerms" />
      </LastStyles>
    </LastWrapper>
  )
}
