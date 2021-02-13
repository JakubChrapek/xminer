import { AnimatePresence, motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Message } from "../../../ContactUsSection/ContactUsForm"
import { fadeInUp, textFadeInUp } from "../../../Styles/Animations"
import { useField, useFormikContext } from "formik"
import { Link } from "gatsby"

const ImgWrapper = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 36px 51px;
  width: 209px;
  @media only screen and (max-width: 640px) {
    padding: 22px 42px;
    width: 60%;
    min-width: 180px;
  }
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

    img,
    picture {
      width: 100%;
      height: 100%;
      object-fit: contain;
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

export const Step1 = ({ vendors, activeVendor, setActiveVendor }) => {
  const { setFieldValue } = useFormikContext()
  useEffect(() => {
    setFieldValue("vendor", "amd")
  }, [])
  const VendorGrid = () => (
    <Grid>
      {vendors.map((vendor, i) => (
        <ImgWrapper
          key={vendor.name}
          whileHover={{
            cursor: "pointer",
          }}
          whileTap={{ scale: 0.97 }}
          onClick={e => {
            e.preventDefault()
            setActiveVendor(i)
            setFieldValue("vendor", vendors[i].name)
          }}
          className={activeVendor === i ? "active" : ""}
        >
          <Img fluid={vendor.fluid} alt={vendor.alt} />
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
      key="producent"
    >
      <VendorGrid />
    </motion.div>
  )
}

const ModelGridStyles = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 32px;

  button {
    padding: 64px 12px;

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

export const Step2 = ({ models, activeModel, setActiveModel }) => {
  const [fieldVendor, metaVendor] = useField({ name: "vendor" })
  const { setFieldValue } = useFormikContext()
  useEffect(() => {
    setFieldValue("model", models[fieldVendor.value][0].name)
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
      key="model-karty"
    >
      <ModelGridStyles>
        {models[fieldVendor.value].map((model, i) => (
          <motion.button
            key={model.name}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 100,
              default: { duration: 0.2 },
            }}
            onClick={e => {
              e.preventDefault()
              setActiveModel(i)
              setFieldValue("model", models[fieldVendor.value][i].name)
            }}
            className={activeModel === i ? "active" : ""}
          >
            {model.name}
          </motion.button>
        ))}
      </ModelGridStyles>
    </motion.div>
  )
}

const GraphicsGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(121px, 1fr));
  grid-gap: 14px 10px;
  width: 100%;
  list-style-type: none;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: none;
    background-color: var(--white);
    color: var(--headers-color);
    padding: 20px 17px;
    font-size: 20px;
    line-height: 30px;
    box-shadow: ${({ buttonWithShadow }) =>
      buttonWithShadow &&
      `0 16px 24px 0 rgba(38, 50, 56, 0.08),
      0 8px 8px 0 rgba(38, 50, 56, 0.12)`};
    transition: box-shadow 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      transform 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53);

    &:hover {
      background-color: var(--light-aqua);
      color: var(--primary);
    }

    &.accent {
      background-color: var(--light-aqua);
      color: var(--primary);
    }
    &.active {
      box-shadow: inset 0 0 0 5px var(--primary);
      color: var(--primary);
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

  @media only screen and (max-width: 1002px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
  @media only screen and (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  }
  @media only screen and (max-width: 378px) {
    grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  }
`

export const Step3 = ({ activeCard, setActiveCard, pricingConfigurator }) => {
  const { setFieldValue } = useFormikContext()
  const [fieldName, setFieldName] = useState("number")

  useEffect(() => {
    pricingConfigurator ? setFieldName("fan") : setFieldName("number")
    setFieldValue(fieldName, "1")
  }, [])

  return (
    <GraphicsGrid
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
      key="moc"
      buttonWithShadow={pricingConfigurator}
    >
      {[...Array(12).keys()].map(i => (
        <motion.button
          tabIndex="0"
          key={`graphic-cards-number-${i}`}
          whileHover={{
            cursor: "pointer",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 100,
            default: { duration: 0.2 },
          }}
          onClick={e => {
            e.preventDefault()
            setActiveCard(i)
            setFieldValue(fieldName, `${i + 1}`)
          }}
          className={
            activeCard === i ? "active" : [5, 7, 11].includes(i) ? "accent" : ""
          }
        >
          {i + 1}
        </motion.button>
      ))}
    </GraphicsGrid>
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

  input,
  textarea {
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
  flex: ${({ flex }) => (flex ? flex : "2")};
  align-items: center;
  &:first-of-type {
    margin-right: 34px;
  }
  margin: ${({ margin }) => margin && margin};
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
      <MyTextArea
        label="Wiadomość"
        name="configuratorMessage"
        type="textarea"
        placeholder="Dodatkowo chciałbym..."
      />
      <MyCheckbox name="acceptedTerms" />
      {/* {<RocketIcon />} */}
    </LastStyles>
  )
}
