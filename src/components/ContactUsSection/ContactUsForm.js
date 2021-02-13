import React, { useState } from "react"
import Flex from "../Flex/Flex"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Button from "../Button/Button"
import styled, { css } from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { fadeInUp, textFadeInUp } from "../Styles/Animations"
import { Link } from "gatsby"
import useWindowSize from "../../utils/UseWindowSize"
import { useGlobalDispatchContext } from "../../utils/cursorContext"

const IconUser = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 29V27C28 25.9391 27.5786 24.9217 26.8284 24.1716C26.0783 23.4214 25.0609 23 24 23H16C14.9391 23 13.9217 23.4214 13.1716 24.1716C12.4214 24.9217 12 25.9391 12 27V29"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconMail = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 12H28C29.1 12 30 12.9 30 14V26C30 27.1 29.1 28 28 28H12C10.9 28 10 27.1 10 26V14C10 12.9 10.9 12 12 12Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M30 14L20 21L10 14" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconEdit = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 22.66V28C28 28.5304 27.7893 29.0391 27.4142 29.4142C27.0391 29.7893 26.5304 30 26 30H12C11.4696 30 10.9609 29.7893 10.5858 29.4142C10.2107 29.0391 10 28.5304 10 28V14C10 13.4696 10.2107 12.9609 10.5858 12.5858C10.9609 12.2107 11.4696 12 12 12H17.34"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26 10L30 14L20 24H16V20L26 10Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const FormStyles = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  ${({ vertical }) =>
    vertical &&
    css`
      max-width: 410px;
      padding-bottom: 8px;
    `}

  input,
  textarea {
    border-radius: 16px;
    background-color: rgba(242, 242, 242, 0.24);
    border: rgba(242, 242, 242, 0.24);
    padding: 8px 44px 8px 16px;
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
      padding: 16px;
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

  button {
    height: 100%;
    padding: ${({ vertical }) => (vertical ? "30px 22px" : "")};
  }
`

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => (flex ? flex : "1")};
  position: relative;
  justify-content: center;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  width: ${({ width }) => (width ? width : "")};

  ${({ privacy }) =>
    privacy &&
    css`
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    `}

  label,
  div,
  svg {
    position: absolute;
  }

  input#privacy {
    /* display: none; */
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

    &.privacy {
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

  svg {
    top: 3px;
    right: 10px;
    @media only screen and (max-width: 740px) {
      top: 10px;
    }
    stroke: #fff;
    fill: none;
    strokewidth: 1px;
    transition: 0.15s stroke cubic-bezier(0.04, 0.62, 0.23, 0.98) strokeWidth
      0.15s cubic-bezier(0.04, 0.62, 0.23, 0.98);
  }

  p {
    font-size: 12px;
    line-height: normal;
    color: var(--primary);
  }
`

export const Message = styled(motion.p)`
  font-size: 14px;
  font-weight: normal;
  color: var(--text-white);
  position: absolute;
  bottom: ${({ vertical }) => (vertical ? "12px" : "-36px")};
  @media only screen and (max-width: 414px) {
    bottom: ${({ vertical }) => (vertical ? "12px" : "-26px")};
  }

  &.error {
    color: var(--error);
  }
`
const ContactUsForm = ({ vertical, bg, width }) => {
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState(false)
  const [privacyError, setPrivacyError] = useState(false)
  const [feedbackMsg, setFeedbackMsg] = useState(null)
  const currentWidth = useWindowSize()
  const dispatch = useGlobalDispatchContext()
  const [formSendCounter, setFormSendCounter] = useState(0)
  const [disableSending, setDisableSending] = useState(false)

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleClick = (e, values, setSubmitting, resetForm) => {
    e.preventDefault()
    setSubmitting(true)
    dispatch({
      type: "TOGGLE_CURSOR",
      cursorShow: false,
    })

    if (formSendCounter < 2) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          subject: `[xminer.pl] ${values.email} wysłał wiadomość`,
          "form-name": "contact-form",
          ...values,
        }),
      })
        .then(() => {
          setFeedbackMsg("Poprawnie wysłano wiadomość. Dzięki!")
          resetForm()
          setFormSendCounter(formSendCounter + 1)
        })
        .catch(() => {
          setFeedbackMsg("Coś poszło nie tak, spróbuj jeszcze raz.")
          setFormSendCounter(formSendCounter + 1)
        })
        .finally(() => {
          setSubmitting(false)
          setTimeout(() => {
            setFeedbackMsg(null)
          }, 4000)
        })
    } else {
      setFeedbackMsg("Spróbuj ponownie później.")
      setTimeout(() => {
        setFeedbackMsg(null)
      }, 4000)
      setSubmitting(false)
      setDisableSending(true)
      resetForm()
    }
  }

  return (
    <Flex
      padding={vertical ? (width > 640 ? "40px 65px" : "40px 30px") : ""}
      radius={vertical && "20px"}
      bg={bg}
      margin="34px 0 0"
      flex={vertical && "unset !important"}
    >
      <Formik
        validateOnMount
        initialValues={{ email: "", name: "", message: "", privacy: false }}
        validate={values => {
          const errors = {}
          if (!values.name) {
            errors.name = "Jak masz na imię?"
          }
          if (!values.message) {
            errors.message = "Wprowadź wiadomość"
          }
          if (
            !values.privacy ||
            values.privacy === "false" ||
            values.privacy === false
          ) {
            errors.privacy = "Zgadzasz się?"
          }

          if (!values.email) {
            errors.email = "Podaj email"
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Nieprawidłowy adres email"
          }
          return errors
        }}
        onSubmit={() => {}}
      >
        {({
          isSubmitting,
          setSubmitting,
          errors,
          values,
          resetForm,
          isValid,
          touched,
          dirty,
          setFieldTouched,
        }) => (
          <FormStyles
            name="contact-form"
            data-netlify={true}
            vertical={vertical}
          >
            <Flex
              direction={currentWidth < 640 ? "column" : ""}
              width="100%"
              flexWrap={vertical && "wrap"}
            >
              <FieldWrapper
                width={vertical && "100%"}
                margin={
                  currentWidth < 640
                    ? "0"
                    : vertical
                    ? "32px 0 0 0"
                    : "0 15px 0 0"
                }
                flex={vertical && "unset"}
              >
                <label htmlFor="name">Imię</label>
                <Field
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Imię"
                  className={nameError ? "error" : ""}
                />
                <AnimatePresence exitBeforeEnter>
                  {errors.name && touched.name && (
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <ErrorMessage
                        name="name"
                        component="p"
                        className="error"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <IconUser />
              </FieldWrapper>

              <FieldWrapper
                width={vertical && "100%"}
                margin={
                  currentWidth < 640
                    ? "40px 0 0"
                    : vertical
                    ? "32px 0 0 0"
                    : "0 0 0 15px"
                }
                flex={vertical && "unset"}
              >
                <label htmlFor="email">Email</label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={emailError ? "error" : ""}
                />
                <AnimatePresence exitBeforeEnter>
                  {errors.email && touched.email && (
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <ErrorMessage
                        name="email"
                        component="p"
                        className="error"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <IconMail />
              </FieldWrapper>
            </Flex>
            <Flex
              width="100%"
              flexWrap={currentWidth < 640 || vertical ? "wrap" : ""}
            >
              <FieldWrapper
                flex={currentWidth < 640 || vertical ? "unset" : "2"}
                width={currentWidth < 640 || vertical ? "100%" : ""}
                margin={
                  currentWidth < 640
                    ? "40px 0 0"
                    : vertical
                    ? "32px 0 0 0"
                    : "45px 15px 0 0"
                }
              >
                <label htmlFor="message">Wiadomość</label>
                <Field
                  as="textarea"
                  type="textarea"
                  name="message"
                  rows={width < 640 ? "4" : "2"}
                  placeholder="Wiadomość"
                  className={messageError ? "error" : ""}
                />
                <AnimatePresence exitBeforeEnter>
                  {errors.message && touched.message && (
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      <ErrorMessage
                        name="message"
                        component="p"
                        className="error"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <IconEdit />
              </FieldWrapper>
              {currentWidth < 640 && (
                <FieldWrapper
                  flex={vertical ? "unset" : ""}
                  width={currentWidth < 640 || vertical ? "100%" : ""}
                  order={currentWidth < 640 || vertical ? "1" : ""}
                  margin={
                    currentWidth < 640
                      ? "40px 0 0"
                      : vertical
                      ? "36px 0 0"
                      : "18px 0 0"
                  }
                  privacy
                >
                  <Field
                    type="checkbox"
                    name="privacy"
                    id="privacy"
                    placeholder="Przeczytałem/łam i zgadzam się z
              polityką prywatności"
                    className={privacyError ? "error" : ""}
                  />
                  <label className="privacy" htmlFor="privacy">
                    Przeczytałem/łam i zgadzam się z&nbsp;
                    <a
                      href="/polityka-prywatnosci"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      polityką prywatności
                    </a>
                  </label>
                  <AnimatePresence exitBeforeEnter>
                    {errors.privacy && touched.privacy && (
                      <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="privacy"
                      >
                        <ErrorMessage
                          name="privacy"
                          component="p"
                          className="error"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </FieldWrapper>
              )}
              <FieldWrapper
                flex={currentWidth < 640 || vertical ? "unset" : "1"}
                width={currentWidth < 640 || vertical ? "100%" : ""}
                margin={
                  currentWidth < 640
                    ? "40px 0 0"
                    : vertical
                    ? "32px 0 0 0"
                    : "45px 0 0 15px"
                }
                alignItems={currentWidth < 640 || vertical ? "center" : ""}
              >
                <Button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  color="var(--white)"
                  type="submit"
                  disabled={
                    !isValid ||
                    disableSending ||
                    isSubmitting ||
                    (!dirty && isValid)
                  }
                  onClick={e => {
                    handleClick(e, values, setSubmitting, resetForm)
                    dispatch({
                      type: "TOGGLE_CURSOR",
                      cursorShow: false,
                    })
                  }}
                  radius="16px"
                  margin={vertical && "38px 0 0"}
                  width={currentWidth < 640 || vertical ? "170px" : ""}
                  bg="linear-gradient(90deg, rgba(41,171,226,1) 0%, rgba(46,197,206,1) 25%, rgba(123,221,230,1) 50%, rgba(46,197,206,1) 75%, rgba(41,171,226,1) 100%)"
                  loading={isSubmitting ? true : false}
                >
                  Wyślij
                </Button>
              </FieldWrapper>
            </Flex>
            {currentWidth >= 640 && (
              <FieldWrapper
                flex={vertical ? "unset" : ""}
                width={currentWidth < 640 || vertical ? "100%" : ""}
                order={currentWidth < 640 || vertical ? "1" : ""}
                margin={
                  currentWidth < 640
                    ? "40px 0 0"
                    : vertical
                    ? "36px 0 0"
                    : "18px 0 0"
                }
                privacy
              >
                <Field
                  type="checkbox"
                  name="privacy"
                  id="privacy"
                  placeholder="Przeczytałem/łam i zgadzam się z
              polityką prywatności"
                  className={privacyError ? "error" : ""}
                />
                <label className="privacy" htmlFor="privacy">
                  Przeczytałem/łam i zgadzam się z&nbsp;
                  <a
                    href="/polityka-prywatnosci"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    polityką prywatności
                  </a>
                </label>
                <AnimatePresence exitBeforeEnter>
                  {errors.privacy && touched.privacy && (
                    <motion.div
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="privacy"
                    >
                      <ErrorMessage
                        name="privacy"
                        component="p"
                        className="error"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </FieldWrapper>
            )}
            <AnimatePresence>
              {feedbackMsg && (
                <Message
                  variants={textFadeInUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.6, delay: 0.4 }}
                  vertical={vertical}
                >
                  {feedbackMsg}
                </Message>
              )}
            </AnimatePresence>
          </FormStyles>
        )}
      </Formik>
    </Flex>
  )
}

export default ContactUsForm
