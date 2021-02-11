import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Container from "../../Container/Container"
import { StyledFlex } from "../../Flex/Flex"
import Text from "../../Text/Text"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import * as Yup from "yup"
import { Formik } from "formik"

import Button from "../../Button/Button"
import { Step1, Step2, Step3, Step4 } from "./PricingConfiguratorSteps"
import { textFadeInUp } from "../../Styles/Animations"
import { graphql, useStaticQuery } from "gatsby"
import useWindowSize from "../../../utils/UseWindowSize"
import { useGlobalDispatchContext } from "../../../utils/cursorContext"
import RocketIcon from "../../RocketIcon/RocketIcon"
import {
  BookIcon,
  RoocketIconSmall,
  SearchIcon,
  TapIcon,
} from "../../SvgIcons/XminerIcons"
import {
  ActiveStepStyles,
  ImgWrapper,
  StepsStyles,
} from "../../ConfiguratorStyles/StepsStyles"
import {
  ConfiguratorFlexStyles,
  ConfiguratorWrapperStyles,
} from "../../ConfiguratorStyles/ConfiguratorStyles"

const StepsColumn = ({ items, activeStep }) => {
  const width = useWindowSize()
  return (
    <StepsStyles variant="light">
      {items.map((item, i) => (
        <li className={activeStep === i ? "active" : ""}>
          {width > 1002 && (
            <>
              <div>
                <Text fontSize="18px" fontWeight="bold">
                  {item.stepTitle}
                </Text>{" "}
                <Text margin="12px 0 0" fontSize="13px" fontWeight="300">
                  {item.stepSubtitle}
                </Text>
              </div>
              <ImgWrapper>{item.stepIcon}</ImgWrapper>
            </>
          )}
        </li>
      ))}
    </StepsStyles>
  )
}

const ActiveStep = ({ steps, activeStep, setActiveStep }) => {
  const width = useWindowSize()
  const [sent, setSent] = useState(false)
  const formRef = useRef()
  const nextBtnRef = useRef(null)
  const dispatch = useGlobalDispatchContext()
  const [formSendCounter, setFormSendCounter] = useState(0)
  const [disableSending, setDisableSending] = useState(false)
  const [feedbackMsg, setFeedbackMsg] = useState(null)

  useEffect(() => {
    const handleEnter = e => {
      if (e.keyCode === 13) {
        e.preventDefault()
        const nodes = nextBtnRef.current.children
        const btnNext = nodes.namedItem("nextBtn")
        Array.from(nodes).forEach(element => {
          if (document.activeElement === element) {
            element.click()
          } else {
            btnNext.click()
          }
        })
      }
    }
    document.addEventListener("keydown", handleEnter)

    return () => document.removeEventListener("keydown", handleEnter)
  }, [])

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (e, props) => {
    e.preventDefault()
    props.setSubmitting(true)
    dispatch({
      type: "TOGGLE_CURSOR",
      cursorShow: false,
    })
    console.log("PRICING: ", props.values)
    console.log(
      encode({
        subject: `[xminer.pl|konfiguracja] ${props.values.configuratorEmail} wysłał wiadomość`,
        "form-name": "miner-pricing-form",
        ...props.values,
      })
    )
    if (formSendCounter < 2) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          subject: `[xminer.pl|konfiguracja] ${props.values.configuratorEmail} wysłał wiadomość`,
          "form-name": "miner-pricing-form",
          ...props.values,
        }),
      })
        .then(() => {
          setFeedbackMsg("Dziękujemy za kontakt! Wkrótce się odezwiemy.")
          setFormSendCounter(formSendCounter + 1)
        })
        .catch(() => {
          setFeedbackMsg("Coś poszło nie tak, spróbuj jeszcze raz.")
          setFormSendCounter(formSendCounter + 1)
        })
        .finally(() => {
          setSent(true)
          props.setSubmitting(false)
          setTimeout(() => {
            setFeedbackMsg(null)
            props.resetForm()
            handleReset()
            setSent(false)
          }, 20000)
        })
    } else {
      setDisableSending(true)
      setSent(true)
      props.setSubmitting(false)
      setFeedbackMsg(
        `Przesłałeś już ${formSendCounter} konfiguracje, już przygotowujemy dla Ciebie ofertę.`
      )
      props.resetForm()
    }
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Formik
      initialValues={{
        configuratorName: "",
        configuratorEmail: "",
        acceptedTerms: false,
        type: "",
        fan: "",
        power: "",
        price: "",
      }}
      validationSchema={Yup.object({
        configuratorName: Yup.string()
          .max(15, "Maksymalnie 15 znaków")
          .required("Wymagane"),
        type: Yup.string()
          .oneOf(["asic", "gpu"], "Nieprawidłowy typ koparki")
          .required("Wymagane"),
        fan: Yup.string()
          .oneOf(["1", "2"], "Do wyboru 1 lub 2")
          .required("Wymagane"),
        power: Yup.number()
          .min(500, "Minimalna moc to 200W.")
          .max(1500000, "Maksymalna moc to 1.5MW.")
          .required("Wymagane"),
        configuratorEmail: Yup.string()
          .email("Nieprawidłowy adres email`")
          .required("Wymagane"),
        acceptedTerms: Yup.boolean()
          .required("Wymagane")
          .oneOf(
            [true],
            "Musisz zaakceptować politykę prywatności Xminer, aby wysłać zamówienie"
          ),
        price: Yup.number()
          .required("Wymagane")
          .min(70, "Cena minimalna za utrzymanie koparki to 70zł"),
      })}
    >
      {props => (
        <AnimateSharedLayout>
          <motion.form
            name="miner-pricing-form"
            data-netlify={true}
            layout
            ref={formRef}
            onReset={handleReset}
          >
            <input type="hidden" name="form-name" value="miner-pricing-form" />
            <input type="hidden" name="type" />
            <input type="hidden" name="fan" />
            <input type="hidden" name="power" />
            <input type="hidden" name="price" />
            <input type="hidden" name="configuratorEmail" />
            <input type="hidden" name="configuratorName" />
            <input type="hidden" name="acceptedTerms" />
            <ActiveStepStyles variant="light" layout>
              <StyledFlex layout key="flex-1" direction="column">
                <AnimatePresence exitBeforeEnter>
                  <Text
                    margin="25px 0 0"
                    fontSize="10px"
                    textTransform="uppercase"
                    fontWeight="400"
                    letterSpacing="1px"
                    color="var(--nav-dark-bluse)"
                    variants={textFadeInUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={`step-${activeStep + 1}`}
                  >
                    Krok <motion.span>{activeStep + 1}</motion.span>/
                    {steps.length}
                  </Text>
                  <Text
                    margin="19px 0 0"
                    fontSize={width > 640 ? "24px" : "18"}
                    lineHeight="1.25em"
                    fontWeight={width > 1002 ? "600" : "500"}
                    color="var(--nav-dark-bluse)"
                    variants={textFadeInUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={`firstline-${activeStep + 1}`}
                    dangerously={steps[activeStep].firstLine}
                  />
                  <Text
                    margin="7px 0 0"
                    fontSize="13px"
                    lineHeight="normal"
                    fontWeight="300"
                    color="var(--nav-dark-bluse)"
                    variants={textFadeInUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={`helperText-${activeStep + 1}`}
                    dangerously={steps[activeStep].helperText}
                  />
                </AnimatePresence>
              </StyledFlex>
              <StyledFlex layout key="flex-2" direction="column">
                <AnimatePresence exitBeforeEnter>
                  {!sent && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={`content-${activeStep}`}
                      layout
                    >
                      {steps[activeStep].content}
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={`content-success-rocket`}
                    layout
                  >
                    {sent && <RocketIcon handleReset={handleReset} />}
                    {feedbackMsg && sent && (
                      <Text
                        variants={textFadeInUp}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        color="var(--nav-dark-bluse)"
                      >
                        {feedbackMsg}
                      </Text>
                    )}
                  </motion.div>
                </AnimatePresence>

                <StyledFlex
                  ref={nextBtnRef}
                  margin="54px 0 0"
                  width="100%"
                  key="flex-buttons"
                  layout
                  justifyContent={width > 1002 ? "flex-end" : "center"}
                  alignItems={width <= 1002 ? "center" : ""}
                  direction={width <= 1002 ? "column" : ""}
                >
                  <AnimatePresence>
                    {!disableSending && activeStep > 0 && (
                      <Button
                        outlinebg="var(--nav-dark-bluse)"
                        type="onlyOutline"
                        width="176px"
                        layout={true}
                        margin={width > 1002 ? "0 12px 0 0" : "24px 0 0"}
                        onClick={e => {
                          e.preventDefault()
                          setActiveStep(activeStep - 1)
                          dispatch({
                            type: "TOGGLE_CURSOR",
                            cursorShow: false,
                          })
                        }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1, transition: { duration: 0.4 } }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                        key="back"
                        whileTap={{ scale: 0.98 }}
                        disabled={props.isSubmitting || sent || disableSending}
                        cursor="pointer"
                      >
                        &larr; &nbsp;&nbsp;Wróć
                      </Button>
                    )}
                    {!disableSending && (
                      <Button
                        id="nextBtn"
                        width="176px"
                        order={width <= 1002 && "-1"}
                        margin={width > 1002 ? "0 0 0 12px" : "0"}
                        layout={true}
                        type={
                          activeStep < steps.length - 1 ? "button" : "submit"
                        }
                        whileTap={{ scale: 0.98 }}
                        loading={
                          activeStep === steps.length - 1
                            ? props.isSubmitting
                            : undefined
                        }
                        onClick={
                          activeStep < steps.length - 1
                            ? () => {
                                setActiveStep(activeStep + 1)
                                props.setSubmitting(true)
                                setTimeout(() => {
                                  props.setSubmitting(false)
                                }, 50)
                                dispatch({
                                  type: "TOGGLE_CURSOR",
                                  cursorShow: false,
                                })
                              }
                            : e => {
                                handleSubmit(e, props)
                              }
                        }
                        disabled={
                          (activeStep === steps.length - 1 && !props.isValid) ||
                          props.isSubmitting ||
                          sent ||
                          disableSending ||
                          (activeStep === 2 &&
                            (props.values.power < 200 ||
                              props.values.power > 1500000))
                        }
                      >
                        {activeStep < steps.length - 1 ? "Dalej" : "Wyślij"}
                      </Button>
                    )}
                  </AnimatePresence>
                </StyledFlex>
              </StyledFlex>
            </ActiveStepStyles>
          </motion.form>
        </AnimateSharedLayout>
      )}
    </Formik>
  )
}

const Configurator = ({ types }) => {
  const [activeType, setActiveType] = useState(0)
  const [activeModel, setActiveModel] = useState(0)
  const [activeCard, setActiveCard] = useState(7)
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      stepTitle: "Rodzaj koparki",
      stepSubtitle: "GPU / ASIC",
      stepIcon: <SearchIcon />,
      firstLine: "Wybierz rodzaj koparki",
      helperText:
        "Dedykowane rozwiązanie ASIC czy równoległe obliczenia z wykorzystaniem kart graficznych?",
      content: (
        <Step1
          types={types}
          activeType={activeType}
          setActiveType={setActiveType}
        />
      ),
    },
    {
      stepTitle: "Liczba wiatraków",
      stepSubtitle: "Chłodzenie koparki",
      stepIcon: <TapIcon />,
      firstLine: "Wybierz liczbę wiatraków",
      helperText: "Chłodzenie to podstawa długiego życia Twojej koparki",
      content: <Step2 />,
    },
    {
      stepTitle: "Moc koparki",
      stepSubtitle: "Moc koparki",
      stepIcon: <BookIcon />,
      firstLine: "Ile mocy potrzebuje Twoja koparka?",
      helperText:
        "Na podstawie wprowadzonej mocy oszacujemy koszty utrzymania Twojej koparki.",
      content: <Step3 activeCard={activeCard} setActiveCard={setActiveCard} />,
    },
    {
      stepTitle: "Podsumowanie",
      stepSubtitle: "Wycena",
      stepIcon: <RoocketIconSmall />,
      firstLine: "Potwierdź konfigurację",
      helperText:
        "Wprowadź dane kontaktowe, odezwiemy się możliwie najszybciej!",
      content: <Step4 />,
    },
  ]
  return (
    <div className="grid">
      <StepsColumn
        items={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <ActiveStep
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </div>
  )
}

const MinerRigsSection = () => {
  const dispatch = useGlobalDispatchContext()
  const data = useStaticQuery(graphql`
    query configuratorQuery {
      datoCmsPageSale {
        fullPackageImg {
          alt
          fluid {
            src
          }
        }
        minerForYouImg {
          alt
          fluid {
            src
          }
        }
      }
    }
  `)
  const {
    datoCmsPageSale: { fullPackageImg, minerForYouImg },
  } = data
  const width = useWindowSize()
  return (
    <Container>
      <ConfiguratorWrapperStyles variant="light" direction="column">
        <ConfiguratorFlexStyles
          width="100%"
          alignItems="flex-start"
          direction="column"
        >
          <Text
            as="h2"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            color="var(--nav-dark-bluse)"
          >
            Maszyny Xminer
          </Text>
          <Text
            color="var(--nav-dark-bluse)"
            as="h3"
            fontSize={width > 640 ? "48px" : "24px"}
            lineHeight="normal"
            fontWeight="600"
          >
            Stwórz koparkę
          </Text>
          <span className="top-line" />
          <Configurator
            types={[
              { ...fullPackageImg, name: "asic" },
              { ...minerForYouImg, name: "gpu" },
            ]}
          />
        </ConfiguratorFlexStyles>
      </ConfiguratorWrapperStyles>
    </Container>
  )
}

export default MinerRigsSection
