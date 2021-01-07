import React, { useState } from "react"
import Flex from "../Flex/Flex"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Button from "../Button/Button"
import styled, { css } from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { fadeInUp } from "../Styles/Animations"
import { Link } from "gatsby"

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
      color: var(--gray300);
      font-family: "Poppins";
      font-weight: 300;
      opacity: 1;
      letter-spacing: 0;
      font-size: 18px;
      line-height: 1.76em;
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

const FieldWrapper = styled.div`
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
    stroke: #fff;
    fill: none;
    stroke-width: 1px;
    transition: 0.15s stroke cubic-bezier(0.04, 0.62, 0.23, 0.98) stroke-width
      0.15s cubic-bezier(0.04, 0.62, 0.23, 0.98);
  }

  p {
    font-size: 12px;
    line-height: normal;
    color: var(--primary);
  }
`

const Message = styled(motion.p)`
  /* margin-top: 12px; */
  font-size: 12px;
  font-weight: normal;
  color: var(--text-white);
  position: absolute;
  bottom: ${({ vertical }) => (vertical ? "12px" : "6px")};

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

  return (
    <Flex
      padding={vertical && "40px 65px"}
      radius={vertical && "20px"}
      bg={bg}
      margin="34px 0 0"
      flex={vertical && "unset !important"}
    >
      <Formik
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
        onSubmit={(values, errors, setSubmitting) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            // TODO: setSubmitting or own state
            // setSubmitting(false)
            errors.name && setNameError(true)
            errors.email && setEmailError(true)
            errors.message && setMessageError(true)
            errors.privacy && setMessageError(true)
            setFeedbackMsg("Poprawnie wysłano wiadomość. Dzięki!")
          }, 400)
        }}
      >
        {({ isSubmitting, errors, values, touched, setFieldTouched }) => (
          <FormStyles vertical={vertical}>
            <Flex width="100%" flexWrap={vertical && "wrap"}>
              <FieldWrapper
                width={vertical && "100%"}
                margin={vertical ? "32px 0 0 0" : "0 15px 0 0"}
                flex={vertical && "unset"}
              >
                <label htmlFor="name">Imię</label>
                <Field
                  id="name"
                  type="name"
                  name="name"
                  placeholder="Imię"
                  autoComplete="off"
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
                margin={vertical ? "32px 0 0 0" : "0 0 0 15px"}
                flex={vertical && "unset"}
              >
                <label htmlFor="email">Imię</label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="E-mail"
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
            <Flex width="100%" flexWrap={vertical && "wrap"}>
              <FieldWrapper
                flex={vertical ? "unset" : "2"}
                width={vertical && "100%"}
                margin={vertical ? "32px 0 0 0" : "45px 15px 0 0"}
              >
                <label htmlFor="message">Twoja wiadomość</label>
                <Field
                  as="textarea"
                  type="textarea"
                  name="message"
                  placeholder="Twoja wiadomość"
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
              {vertical && (
                <FieldWrapper
                  flex={vertical ? "unset" : "2"}
                  width={vertical && "100%"}
                  order={vertical && "1"}
                  margin={vertical ? "36px 0 0" : "18px 0 0"}
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
                    <Link to="/polityka-prywatnosci">polityką prywatności</Link>
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
                flex={vertical ? "unset" : "1"}
                width={vertical && "100%"}
                margin={vertical ? "32px 0 0 0" : "45px 0 0 15px"}
                alignItems={vertical && "center"}
              >
                <Button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  color="var(--white)"
                  type="submit"
                  disabled={isSubmitting}
                  radius="16px"
                  margin={vertical && "38px 0 0"}
                  width={vertical && "170px"}
                  bg="linear-gradient(90deg, rgba(41,171,226,1) 0%, rgba(46,197,206,1) 25%, rgba(123,221,230,1) 50%, rgba(46,197,206,1) 75%, rgba(41,171,226,1) 100%)"
                >
                  Wyślij
                </Button>
              </FieldWrapper>
            </Flex>
            {!vertical && (
              <FieldWrapper
                flex={vertical ? "unset" : "2"}
                width={vertical && "100%"}
                order={vertical && "1"}
                margin="18px 0 0"
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
                  <Link to="/polityka-prywatnosci">polityką prywatności</Link>
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
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit="exit"
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
