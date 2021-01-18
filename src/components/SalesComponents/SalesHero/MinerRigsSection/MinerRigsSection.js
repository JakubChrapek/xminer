import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Container from "../../../Container/Container"
import { StyledFlex } from "../../../Flex/Flex"
import Text from "../../../Text/Text"
import { WrapperStyles } from "../../../Wrapper/Wrapper"
import TapIcon from "../../../../images/ico-tap.svg"
import LifecycleIcon from "../../../../images/ico-lifecycle.svg"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import * as Yup from "yup"
import { Formik, Form, useField, useFormikContext } from "formik"

import Button from "../../../Button/Button"
import { Step1, Step2, Step3, Step4 } from "./Steps"
import { staggerContainer, textFadeInUp } from "../../../Styles/Animations"
import { graphql, useStaticQuery } from "gatsby"
import useWindowSize from "../../../../utils/UseWindowSize"

const RocketStyles = styled(motion.svg)`
  fill: var(--primary);
  width: 80px;
  height: 80px;
  position: absolute;
`

const RocketIcon = ({ setReset, handleReset }) => (
  <RocketStyles
    initial={{ opacity: 0, x: -120, y: 260 }}
    animate={{ opacity: [0, 1, 0], x: [-120, 120, 360], y: [500, 100, -300] }}
    exit={{ opacity: 0, x: 320, y: -60 }}
    transition={{ duration: 2.6, ease: [0.6, 0.01, -0.05, 0.9] }}
    onAnimationComplete={() => setTimeout(() => handleReset(), 2000)}
    width="36"
    height="37"
    viewBox="0 0 36 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.7983 0.0760025C34.9172 0.0227014 29.6753 -0.153862 23.5844 2.72156C23.512 2.75551 23.4482 2.80348 23.3955 2.86175C19.2438 4.86199 14.7528 8.2738 11.0938 14.0782L6.39602 13.7572C6.13446 13.7307 5.89266 13.8967 5.79725 14.1463L2.15855 23.6765C2.06074 23.9323 2.14055 24.2231 2.35415 24.3897C2.46096 24.4733 2.58934 24.5151 2.7171 24.5151C2.84366 24.5151 2.97029 24.4746 3.0771 24.3922L6.09727 22.0712L7.67771 22.395L10.0611 24.8376L9.40832 26.0396C8.61452 25.639 7.69411 25.5405 6.79601 25.7736C5.59431 26.0866 4.61156 26.9265 4.10039 28.0794L0.553515 36.0769C0.449734 36.3105 0.49832 36.5854 0.675295 36.7661C0.789903 36.8842 0.943464 36.9463 1.09949 36.9463C1.18351 36.9463 1.26809 36.9278 1.3479 36.8909L9.15152 33.2553C10.2758 32.7321 11.0954 31.7249 11.4007 30.4933C11.6362 29.5436 11.526 28.5683 11.1022 27.7365L12.2155 27.0461L14.6986 29.5908L15.0143 31.2092L12.7495 34.3037C12.5887 34.5238 12.5893 34.8263 12.7519 35.0452C12.8677 35.2014 13.0458 35.2881 13.2294 35.2881C13.3026 35.2881 13.3764 35.274 13.4484 35.2469L22.7477 31.5178C22.9913 31.4201 23.1448 31.1717 23.1274 30.9043L22.8141 26.0879C28.4762 22.3389 31.8051 17.7378 33.7571 13.484C33.6743 13.562 33.5706 13.6157 33.4567 13.6368C33.4213 13.6429 33.3859 13.646 33.3505 13.646C33.1928 13.646 33.0398 13.5821 32.9264 13.4659L32.628 13.1601C30.4588 17.7718 26.2695 23.3486 18.1891 27.3263C17.2882 27.769 16.3566 28.1839 15.3981 28.569L13.3527 26.4728L18.2184 23.3248C18.3486 23.2401 18.4405 23.1089 18.4785 22.9598C18.4914 22.9094 18.4982 22.857 18.4982 22.8035V19.1144C18.4983 18.775 18.2295 18.4995 17.8983 18.4995H13.8558C13.7342 18.4995 13.618 18.5373 13.5206 18.6046C13.4422 18.6584 13.3759 18.7314 13.3287 18.8191L13.2507 18.9642L10.6673 23.7213L8.67356 21.6774C9.11674 20.5189 9.60036 19.3988 10.1212 18.3234C13.8672 10.6057 19.0272 6.37004 23.7413 4.05297L30.8877 1.69575C32.9375 1.32191 34.5167 1.2803 35.293 1.2915C35.3064 2.15333 35.2653 3.97779 34.8255 6.32343C35.2674 3.97323 35.3078 2.14977 35.2938 1.28958C34.5352 1.27654 33.0035 1.31037 31.0198 1.65219L35.7983 0.0760025ZM31.0198 1.65219C29.2553 1.95622 27.1332 2.50391 24.8792 3.47901L24.9113 3.51198C27.1046 2.56025 29.1628 2.01035 30.8877 1.69575L31.0198 1.65219ZM8.25758 28.1586L8.82331 27.1169C8.49224 26.9599 8.12946 26.8792 7.75836 26.8792C7.53758 26.8792 7.31385 26.9076 7.09125 26.9653C6.24469 27.1854 5.55233 27.7769 5.19297 28.5873L2.30779 35.0932L8.65533 32.1363C9.44606 31.7673 10.0232 31.0584 10.238 30.1908C10.3898 29.5772 10.334 28.9507 10.088 28.4084L9.07706 28.9944C8.84306 29.1303 8.54846 29.0897 8.3577 28.8936C8.2047 28.7372 8.14855 28.512 8.20074 28.305C8.21326 28.2547 8.23214 28.2055 8.25758 28.1586ZM9.46494 16.9372C9.75845 16.3651 10.0625 15.806 10.3767 15.261L6.75419 15.0138L4.04423 22.1116L5.59151 20.9225C5.72827 20.818 5.90229 20.7775 6.06907 20.8113L7.59623 21.1241C8.1738 19.6246 8.7997 18.2315 9.46494 16.9372ZM11.2392 25.197L10.4055 26.7322L17.2981 22.4574V19.7297H14.2096L11.3514 25.0482C11.3213 25.1041 11.2833 25.1541 11.2392 25.197ZM15.9376 29.6731L16.2429 31.2375C16.2765 31.4091 16.2369 31.5874 16.1349 31.727L14.9746 33.3127L21.9005 30.5353L21.6587 26.8235C21.1317 27.1426 20.5912 27.4515 20.0382 27.7498C18.771 28.4346 17.4066 29.0788 15.9376 29.6731ZM26.9959 9.79207C24.9782 7.72426 21.696 7.72426 19.6783 9.79207C17.6606 11.8599 17.6606 15.2238 19.6783 17.2916C20.6868 18.3258 22.0121 18.8423 23.3368 18.8423C24.6621 18.8423 25.9868 18.3252 26.9959 17.2916C29.0136 15.2238 29.0136 11.8598 26.9959 9.79207ZM26.1476 16.4221C24.5979 18.0103 22.0763 18.0103 20.5267 16.4221C18.977 14.8339 18.977 12.2497 20.5267 10.6615C21.3012 9.86766 22.3193 9.47047 23.3369 9.47047C24.3544 9.47047 25.3726 9.86766 26.1477 10.6615C27.6973 12.2497 27.6973 14.8339 26.1476 16.4221ZM22.1437 14.7644C22.8019 15.4389 23.8722 15.4396 24.5297 14.7644C24.7637 14.524 25.144 14.524 25.378 14.7644C25.6126 15.0048 25.6126 15.3935 25.378 15.6339C24.8159 16.2106 24.0768 16.499 23.337 16.499C22.5979 16.499 21.8581 16.2106 21.2953 15.6339C20.1698 14.4804 20.1698 12.6031 21.2953 11.4496C22.4208 10.2961 24.2531 10.2961 25.378 11.4496C25.6126 11.69 25.6126 12.0786 25.378 12.319C25.1441 12.5594 24.7637 12.5594 24.5297 12.319C23.8715 11.6445 22.8012 11.6451 22.1437 12.319C21.4861 12.9936 21.4861 14.0899 22.1437 14.7644Z"
    />
  </RocketStyles>
)

const SearchIcon = () => (
  <svg
    width="37"
    height="37"
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.2907 22.4081L35.676 32.0265C36.2073 32.5706 36.5 33.2943 36.5 34.0644C36.5 34.8345 36.2073 35.5583 35.6758 36.1025C35.1447 36.6469 34.4385 36.9468 33.6875 36.9468C32.9365 36.9468 32.2303 36.6469 31.6989 36.1023L24.909 29.1438L24.9079 29.1426L22.3137 26.484C20.0107 28.0508 17.3438 28.8762 14.5625 28.8762C6.80844 28.8762 0.5 22.4111 0.5 14.4645C0.5 6.51784 6.80844 0.0527344 14.5625 0.0527344C22.3166 0.0527344 28.625 6.51784 28.625 14.4645C28.625 17.3148 27.8196 20.0479 26.2907 22.4081ZM21.9829 24.9655L21.983 24.9654C23.0695 24.1572 24.0203 23.1827 24.809 22.0692C26.3855 19.8449 27.2188 17.2153 27.2188 14.4645C27.2188 7.3125 21.5412 1.49391 14.5625 1.49391C7.58384 1.49391 1.90625 7.3125 1.90625 14.4645C1.90625 21.6164 7.58384 27.435 14.5625 27.435C17.2467 27.435 19.8125 26.5811 21.9829 24.9655ZM25.4464 23.581C24.8511 24.3268 24.1859 25.0085 23.4582 25.6186L25.453 27.663C26.169 27.0414 26.8346 26.3592 27.4412 25.6254L25.4464 23.581ZM33.6875 35.5056C34.0628 35.5056 34.4159 35.3557 34.6816 35.0833C34.9474 34.811 35.0938 34.4494 35.0938 34.0644C35.0938 33.6795 34.9474 33.3178 34.6818 33.0459L28.4382 26.6472C27.8272 27.377 27.162 28.0586 26.45 28.6848L32.6934 35.0833C32.9591 35.3557 33.3122 35.5056 33.6875 35.5056ZM21.5938 14.4646C21.5938 14.0669 21.9088 13.7441 22.2969 13.7441C22.685 13.7441 23 14.0669 23 14.4646C23 14.8623 22.685 15.1851 22.2969 15.1851C21.9088 15.1851 21.5938 14.8623 21.5938 14.4646ZM14.5625 2.93506C8.35918 2.93506 3.3125 8.10703 3.3125 14.4644C3.3125 20.8217 8.35918 25.9937 14.5625 25.9937C20.7658 25.9937 25.8125 20.8217 25.8125 14.4644C25.8125 8.10703 20.7658 2.93506 14.5625 2.93506ZM14.5625 24.5525C9.13466 24.5525 4.71875 20.027 4.71875 14.4644C4.71875 8.90176 9.13466 4.37622 14.5625 4.37622C19.9903 4.37622 24.4062 8.90176 24.4062 14.4644C24.4062 20.027 19.9903 24.5525 14.5625 24.5525ZM19.3933 7.37809C20.7824 8.37526 21.8366 9.75598 22.4421 11.3709C22.5814 11.7424 22.4004 12.1592 22.0379 12.302C21.955 12.3346 21.8697 12.3501 21.7859 12.3501C21.5033 12.3501 21.2368 12.1743 21.1294 11.8878C20.0912 9.11879 17.4523 7.25848 14.5625 7.25848C14.1742 7.25848 13.8594 6.93582 13.8594 6.53793C13.8594 6.14004 14.1742 5.81738 14.5625 5.81738C16.3007 5.81738 17.9712 6.35707 19.3933 7.37809Z"
    />
  </svg>
)

const ConfiguratorWrapperStyles = styled(WrapperStyles)`
  margin: 0;
  padding: 126px 204px 220px 102px;
  width: 100%;

  @media only screen and (max-width: 1423px) {
    padding: 120px 130px 200px 80px;
  }
  @media only screen and (max-width: 1002px) {
    padding: 80px 30px 180px;
  }

  .top-line {
    background-color: var(--light-aqua);
    width: calc(100% - 7px);
    height: 1px;
    margin: 36px 0 0 7px;
    opacity: 0.2;
    @media only screen and (max-width: 1002px) {
      width: calc(100% + 60px);
      position: relative;
      margin: 40px 0 0;
      left: -30px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 286px 1fr;
    width: 100%;
    position: relative;
    @media only screen and (max-width: 1002px) {
      grid-template-columns: 1fr;
      margin-top: -10px;
    }
  }
`

const ConfiguratorFlexStyles = styled(StyledFlex)`
  width: 100%;
`

const StepsStyles = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  padding-top: 9px;
  border-right: 1px solid rgba(205, 239, 241, 0.2);

  li {
    display: flex;
    align-items: center;
    padding: 29px 38px 29px 0;
    position: relative;
    justify-content: space-between;
    p {
      color: var(--white);
    }
    &:after {
      content: "";
      position: absolute;
      right: -7px;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--light-aqua);
      border-radius: 50%;
      width: 14px;
      height: 14px;
      transition: background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }
    &.active:after {
      background-color: var(--primary);
    }
  }
  @media only screen and (max-width: 1002px) {
    flex-direction: row;
    justify-content: space-between;
    border-right: none;

    li {
      padding: 0;
      &:after {
        left: 0;
        right: unset;
        width: 20px;
        height: 20px;
      }
      &:last-of-type {
        right: 14px;
        left: unset;
      }
    }
  }
`

const ImgWrapper = styled(motion.span)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  margin-left: 20px;
  background-color: var(--light-aqua);
  border-radius: 50%;
  svg {
    fill: var(--primary);
  }
`

const StepsColumn = ({ items, activeStep, setActiveStep }) => {
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

const ActiveStepStyles = styled(motion.div)`
  padding: 38px 0 0 55px;
  display: flex;
  height: 100%;
  flex-direction: column;

  > div:first-of-type {
    padding-bottom: 42px;
    border-bottom: 1px solid rgba(205, 239, 241, 0.2);
  }
  > div:last-of-type {
    padding-top: 33px;
    height: 100%;
    flex: 1;
    justify-content: space-between;
    min-height: 312px;
  }

  @media only screen and (max-width: 1002px) {
    padding: 30px 0 0;
    > div:first-of-type {
      padding-bottom: 32px;
      border-bottom: none;
    }
    > div:last-of-type {
      padding-top: 23px;
      min-height: 551px;
    }
  }
`

const ActiveStep = ({ steps, activeStep, setActiveStep }) => {
  const width = useWindowSize()
  const [success, setSuccess] = useState(false)
  const [reset, setReset] = useState(false)
  const formRef = useRef()
  const handleSubmit = (e, props) => {
    e.preventDefault()
    props.setSubmitting(true)
    setTimeout(() => {
      props.setSubmitting(false)
      console.log("PROPS: ", props)
      setSuccess(true)
      props.resetForm()
    }, 1000)
  }

  const handleReset = () => {
    setActiveStep(0)
    setSuccess(false)
    setReset(false)
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
          .max(15, "Must be 15 characters or less")
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
      onSubmit={async (e, values, { setSubmitting }) => {
        // await new Promise(r => setTimeout(r, 500))
        e.preventDefault()
        setSubmitting(true)
        setTimeout(() => {
          setSubmitting(false)
        }, 2500)
      }}
    >
      {props => (
        <form ref={formRef} onReset={handleReset}>
          <ActiveStepStyles>
            <AnimateSharedLayout>
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
                    fontSize="24px"
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
                  {!success && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={`content-${activeStep}`}
                    >
                      {steps[activeStep].content}
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reset && { opacity: 0 }}
                    key={`content-success-rocket`}
                  >
                    {success && !reset && (
                      <RocketIcon
                        setReset={setReset}
                        handleReset={handleReset}
                      />
                    )}
                    {success && !reset && (
                      <Text
                        variants={textFadeInUp}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        color="var(--white)"
                      >
                        Dziękujemy za wysłanie wiadomości. Skontaktujemy się
                        z&nbsp;Tobą możliwie szybko!
                      </Text>
                    )}
                  </motion.div>
                </AnimatePresence>

                <StyledFlex
                  margin="54px 0 0"
                  width="100%"
                  key="flex-buttons"
                  layout
                  justifyContent={width > 1002 ? "flex-end" : "center"}
                  alignItems={width <= 1002 && "center"}
                  direction={width <= 1002 && "column"}
                >
                  <AnimatePresence>
                    {activeStep > 0 && (
                      <Button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        bg="transparent"
                        color="var(--primary)"
                        border="1px solid var(--primary)"
                        width="176px"
                        layout
                        margin={width > 1002 ? "0 12px 0 0" : "24px 0 0"}
                        onClick={() => setActiveStep(activeStep - 1)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.4 } }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                        key="back"
                        type="button"
                        disabled={props.isSubmitting || reset || success}
                      >
                        &larr; &nbsp;&nbsp;Wróć
                      </Button>
                    )}
                    <Button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      width="176px"
                      border="1px solid transparent"
                      layout
                      order={width <= 1002 && "-1"}
                      margin={width > 1002 ? "0 0 0 12px" : "0"}
                      type={activeStep < steps.length - 1 ? "button" : "submit"}
                      onClick={
                        activeStep < steps.length - 1
                          ? () => {
                              setActiveStep(activeStep + 1)
                              props.setSubmitting(true)
                              setTimeout(() => {
                                props.setSubmitting(false)
                              }, 50)
                            }
                          : e => {
                              handleSubmit(e, props)
                            }
                      }
                      disabled={
                        (activeStep === steps.length - 1 && !props.isValid) ||
                        props.isSubmitting ||
                        reset ||
                        success
                      }
                    >
                      {activeStep < steps.length - 1 ? "Dalej" : "Wyślij"}
                    </Button>
                  </AnimatePresence>
                </StyledFlex>
              </StyledFlex>
            </AnimateSharedLayout>
          </ActiveStepStyles>
        </form>
      )}
    </Formik>
  )
}

const Configurator = ({ vendors }) => {
  const [activeVendor, setActiveVendor] = useState(0)
  const [activeModel, setActiveModel] = useState(0)
  const [activeCard, setActiveCard] = useState(0)
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
      stepIcon: <SearchIcon />,
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
      stepIcon: <SearchIcon />,
      firstLine: "Wybierz liczbę kart w&nbsp;Twojej koparce",
      helperText:
        "Sprawdzone przez nas i&nbsp;sugerowane liczby to&nbsp;6,&nbsp;8,&nbsp;12",
      content: <Step3 activeCard={activeCard} setActiveCard={setActiveCard} />,
    },
    {
      stepTitle: "Gotowe",
      stepSubtitle: "Potwierdzenie",
      stepIcon: <SearchIcon />,
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
  const data = useStaticQuery(graphql`
    query minerConfiguratorQuery {
      datoCmsPageSale {
        amdLogoImg {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        nvidiaLogoImg {
          alt
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  const {
    datoCmsPageSale: { amdLogoImg, nvidiaLogoImg },
  } = data
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
            fontSize="48px"
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
