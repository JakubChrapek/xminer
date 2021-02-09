import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Message } from "../../ContactUsSection/ContactUsForm"
import { fadeInUp, textFadeInUp } from "../../Styles/Animations"
import { useField, useFormikContext } from "formik"
import { Link } from "gatsby"
import Text from "../../Text/Text"
import InputRange from "react-input-range"
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
`

const Step1TextStyles = styled(Text)`
  position: absolute;
  left: 50%;
  bottom: -50px;
  transform: translateX(-50%);
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
    @media only screen and (max-width: 640px) {
      padding: 30px 12px;
    }

    text-transform: uppercase;
    color: var(--headers-color);
    font-size: 20px;
    @media only screen and (max-width: 380px) {
      padding: 30px 8px;
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
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
  @media only screen and (max-width: 368px) {
    grid-gap: 20px;
    span {
      padding: 34px 8px;
    }
  }
`

export const Step2 = () => {
  const [fieldFan, metaFan] = useField({ name: "fan" })
  const { setFieldValue } = useFormikContext()
  useEffect(() => {
    setFieldValue("fan", 1)
    console.log(fieldFan, metaFan)
  }, [])

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
      key="fan"
    >
      <ModelGridStyles>
        {Array.from({ length: 2 }, (_, i) => (
          <motion.button
            key={`cryptominder-fan-${i}`}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 100,
              default: { duration: 0.2 },
            }}
            onClick={e => {
              e.preventDefault()
              setFieldValue("fan", i + 1)
            }}
            className={fieldFan.value === i ? "active" : ""}
          >
            <Text
              textTransform="uppercase"
              color="var(--nav-dark-bluse)"
              fontSize="20px"
              lineHeight="1.5"
              fontWeight="400"
            >
              {`${i + 1} fan`}
            </Text>
          </motion.button>
        ))}
      </ModelGridStyles>
    </motion.div>
  )
}

const PowerContainer = styled(motion.ul)`
  width: 100%;
  margin-top: 32px;
  .input-range {
    &__label {
      font-family: "Poppins";
      text-transform: uppercase;
      font-size: 14px;
      line-height: 1;
      font-weight: 400;
      color: var(--white);
      &--value {
        background-color: var(--primary);
        padding: 0.5em 1.3em;
        text-align: center;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        position: relative;
        left: -50%;
        top: -32px;

        &:after {
          content: "W";
        }
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
      margin-left: -8px;
      margin-top: -10px;
      background-color: var(--white);
      border: 0;
      box-shadow: 0 0 1px 0 rgba(9, 30, 66, 0.31),
        0 3px 5px 0 rgba(9, 30, 66, 0.2);
    }
    &__track {
      &--active {
      }
    }
  }
`

export const Step3 = () => {
  const [fieldPower, metaPower] = useField({ name: "power" })
  const { setFieldValue } = useFormikContext()
  const [StateValue, setStateValue] = useState(500)

  useEffect(() => {
    setFieldValue("power", 600)
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
        minValue={500}
        maxValue={5000}
        value={StateValue}
        onChange={value => {
          setStateValue(value)
        }}
        onChangeComplete={value => {
          setFieldValue("power", value)
        }}
      />
    </PowerContainer>
  )
}

const LastStyles = styled(motion.div)`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 1002px) {
    flex-direction: column;
  }
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  input {
    border-radius: 16px;
    width: 100%;
    background-color: rgba(242, 242, 242, 0.24);
    border: rgba(242, 242, 242, 0.24);
    padding: 8px 44px 8px 16px;
    @media only screen and (max-width: 1002px) {
      padding: 20px 44px 20px 16px;
    }
    transition: box-shadow 0.15s cubic-bezier(0.04, 0.62, 0.23, 0.98),
      color 0.15s cubic-bezier(0.04, 0.62, 0.23, 0.98);
    font-size: 18px;
    line-height: 1.76em;
    color: var(--text-white);
    font-family: "Poppins";
    font-weight: 300;
    &::placeholder {
      color: var(--text-privacy);
      font-family: "Poppins";
      font-weight: 300;
      opacity: 1;
      letter-spacing: 0;
      font-size: 18px;
      line-height: 1.76em;
    }
    @media only screen and (max-width: 740px) {
      padding: 16px 44px 16px 16px;
      font-size: 16px;
      &::placeholder {
        font-size: 16px;
      }
    }

    :hover {
      outline: none;
      box-shadow: inset 0 0 0 1px var(--primary);
      color: var(--primary);
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 0 0 2px var(--primary);
      color: var(--primary);

      ~ svg {
        stroke: var(--primary);
      }
    }
    &:-webkit-autofill,
    &:-webkit-autofill {
      -webkit-text-fill-color: var(--text-white);
      -webkit-box-shadow: inset 0 0 0px 1000px #465067;
      background-color: #465067;

      &:hover {
        -webkit-box-shadow: inset 0 0 0 1px var(--primary),
          inset 0 0 0 1000px #465067;
      }
      &:focus {
        -webkit-box-shadow: inset 0 0 0 2px var(--primary),
          inset 0 0 0 1000px #465067;
      }
    }
  }
`

const NameWrapper = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  margin-right: 34px;
  position: relative;
  label {
    position: absolute;
  }

  @media only screen and (max-width: 1002px) {
    margin: 0;

    &:nth-of-type(2) {
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
      box-shadow: 0 0 0 2px var(--nav-dark-bluse), 0 0 0 4px var(--primary);
    }

    &:checked {
      + label:before {
        opacity: 1;
      }
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
      color: var(--text-privacy);
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
        border: 2px solid #b2b3b5;
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
        color: #f0f0f0;
        text-decoration: none;
        position: relative;
        padding: 6px 10px 6px 2px;

        &:focus {
          outline: none;
          box-shadow: 0 0 0 1px var(--nav-dark-bluse), 0 0 0 3px var(--primary);
          border-radius: 4px;
        }

        &:after {
          content: "";
          position: absolute;
          left: 2px;
          bottom: 0px;
          background-color: var(--primary);
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
`

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <NameWrapper>
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

const CheckboxWrapper = styled(NameWrapper)`
  width: 100%;
  flex: unset;
  margin-top: 12px;

  .error {
    left: 26px;
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

export const Step4 = () => {
  const {} = useFormikContext()
  return (
    <LastStyles
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
      <MyCheckbox name="acceptedTerms" />
      {/* {<RocketIcon />} */}
    </LastStyles>
  )
}
