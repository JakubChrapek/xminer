import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Container from "../../../Container/Container"
import { StyledFlex } from "../../../Flex/Flex"
import Text from "../../../Text/Text"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import * as Yup from "yup"
import { Formik } from "formik"

import Button from "../../../Button/Button"
import { Step1, Step2, Step3, Step4 } from "./Steps"
import { textFadeInUp } from "../../../Styles/Animations"
import { graphql, useStaticQuery } from "gatsby"
import useWindowSize from "../../../../utils/UseWindowSize"
import { useGlobalDispatchContext } from "../../../../utils/cursorContext"
import RocketIcon from "../../../RocketIcon/RocketIcon"
import {
  BookIcon,
  RoocketIconSmall,
  SearchIcon,
  TapIcon,
} from "../../../SvgIcons/XminerIcons"
import {
  ActiveStepStyles,
  ImgWrapper,
  StepsStyles,
} from "../../../ConfiguratorStyles/StepsStyles"
import {
  ConfiguratorFlexStyles,
  ConfiguratorWrapperStyles,
} from "../../../ConfiguratorStyles/ConfiguratorStyles"

const StepsColumn = ({ items, activeStep }) => {
  const width = useWindowSize()
  return (
    <StepsStyles>
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
    console.log("CONFIG: ", props.values)
    console.log(
      encode({
        subject: `[xminer.pl|konfiguracja] ${props.values.configuratorEmail} wysłał wiadomość`,
        "form-name": "configure-form",
        ...props.values,
      })
    )
    if (formSendCounter < 2) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          subject: `[xminer.pl|konfiguracja] ${props.values.configuratorEmail} wysłał wiadomość`,
          "form-name": "configure-form",
          ...props.values,
        }),
      })
        .then(() => {
          setFeedbackMsg(
            "Pewnie zastanawiasz się, dlaczego jeszcze nie znasz ceny swojej koparki? W związku z brakiem dostępu do kart graficznych funkcjonujemy w oparciu o pre-order. Niezwłocznie po otrzymaniu Twojej wiadomości skontaktujemy się z Tobą i przedstawimy ofertę! Dziękujemy za kontakt!"
          )
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
        vendor: "",
        model: "",
        number: "",
      }}
      validationSchema={Yup.object({
        configuratorName: Yup.string()
          .max(15, "Maksymalnie 15 znaków")
          .required("Wymagane"),
        vendor: Yup.string()
          .oneOf(["amd", "nvidia"], "Nieprawidłowy producent kart")
          .required("Wymagane"),
        model: Yup.string().required("Wymagane"),
        number: Yup.string()
          .min(1)
          .max(12, "Wybierz liczbę kart z przedziału 1-12")
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
      })}
    >
      {props => (
        <AnimateSharedLayout>
          <motion.form
            name="configure-form"
            data-netlify={true}
            layout
            ref={formRef}
            onReset={handleReset}
          >
            <input type="hidden" name="form-name" value="configure-form" />
            <input type="hidden" name="vendor" />
            <input type="hidden" name="model" />
            <input type="hidden" name="number" />
            <input type="hidden" name="configuratorEmail" />
            <input type="hidden" name="configuratorName" />
            <input type="hidden" name="acceptedTerms" />
            <ActiveStepStyles layout>
              <StyledFlex layout key="flex-1" direction="column">
                <AnimatePresence exitBeforeEnter>
                  <Text
                    margin="25px 0 0"
                    fontSize="10px"
                    textTransform="uppercase"
                    fontWeight="400"
                    letterSpacing="1px"
                    color="var(--white)"
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
                    color="var(--white)"
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
                    color="var(--white)"
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
                        color="var(--white)"
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
                          disableSending
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

const Configurator = ({ vendors }) => {
  const [activeVendor, setActiveVendor] = useState(0)
  const [activeModel, setActiveModel] = useState(0)
  const [activeCard, setActiveCard] = useState(7)
  const [activeStep, setActiveStep] = useState(0)

  const models = {
    amd: [
      { name: "RX 5700" },
      { name: "RX 6700" },
      { name: "RX 6800" },
      { name: "RX 6900" },
    ],
    nvidia: [
      { name: "RTX 3060ti" },
      { name: "RTX 3070" },
      { name: "RTX 3080" },
      { name: "RTX 3090" },
    ],
  }
  const steps = [
    {
      stepTitle: "Producent kart",
      stepSubtitle: "Przeglądaj i wybierz",
      stepIcon: <SearchIcon />,
      firstLine: "Wybierz producenta karty",
      helperText: "Tekst pomocniczy na temat karty",
      content: (
        <Step1
          vendors={vendors}
          activeVendor={activeVendor}
          setActiveVendor={setActiveVendor}
        />
      ),
    },
    {
      stepTitle: "Model kart",
      stepSubtitle: "Przeglądaj i wybierz",
      stepIcon: <TapIcon />,
      firstLine: "Wybierz model karty graficznej",
      helperText: "Tutaj pomocniczy tekst do wyboru",
      content: (
        <Step2
          models={models}
          activeModel={activeModel}
          setActiveModel={setActiveModel}
        />
      ),
    },
    {
      stepTitle: "Liczba kart",
      stepSubtitle: "Wybierz liczbę kart",
      stepIcon: <BookIcon />,
      firstLine: "Wybierz liczbę kart w&nbsp;Twojej koparce",
      helperText:
        "Sprawdzone przez nas i&nbsp;sugerowane liczby to&nbsp;6,&nbsp;8,&nbsp;12",
      content: <Step3 activeCard={activeCard} setActiveCard={setActiveCard} />,
    },
    {
      stepTitle: "Gotowe",
      stepSubtitle: "Potwierdzenie",
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
    query minerConfiguratorQuery {
      datoCmsPageSale {
        amdLogoImg {
          alt
          fluid(maxWidth: 220) {
            ...GatsbyDatoCmsFluid
          }
        }
        nvidiaLogoImg {
          alt
          fluid(maxWidth: 220) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  const {
    datoCmsPageSale: { amdLogoImg, nvidiaLogoImg },
  } = data
  const width = useWindowSize()
  return (
    <Container bg="var(--nav-dark-bluse)">
      <ConfiguratorWrapperStyles direction="column">
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
            color="var(--white)"
          >
            Maszyny Xminer
          </Text>
          <Text
            color="var(--white)"
            as="h3"
            fontSize={width > 640 ? "48px" : "24px"}
            lineHeight="normal"
            fontWeight="600"
          >
            Stwórz koparkę
          </Text>
          <span className="top-line" />
          <Configurator
            vendors={[
              { ...amdLogoImg, name: "amd" },
              { ...nvidiaLogoImg, name: "nvidia" },
            ]}
          />
        </ConfiguratorFlexStyles>
      </ConfiguratorWrapperStyles>
    </Container>
  )
}

export default MinerRigsSection
