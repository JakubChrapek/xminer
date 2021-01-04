import React from "react"
import Container from "../Container/Container"
import Wrapper from "../Wrapper/Wrapper"
import Flex from "../Flex/Flex"
import Text from "../Text/Text"
import { Formik, Form, Field, ErrorMessage } from "formik"
import Button from "../Button/Button"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion"
import { fadeInUp } from "../Styles/Animations"

const IconUser = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 29V27C28 25.9391 27.5786 24.9217 26.8284 24.1716C26.0783 23.4214 25.0609 23 24 23H16C14.9391 23 13.9217 23.4214 13.1716 24.1716C12.4214 24.9217 12 25.9391 12 27V29"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 19C22.2091 19 24 17.2091 24 15C24 12.7909 22.2091 11 20 11C17.7909 11 16 12.7909 16 15C16 17.2091 17.7909 19 20 19Z"
      stroke-linecap="round"
      stroke-linejoin="round"
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
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M30 14L20 21L10 14"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
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
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M26 10L30 14L20 24H16V20L26 10Z"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
)

const FormStyles = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;

  input,
  textarea {
    border-radius: 16px;
    background-color: rgba(242, 242, 242, 0.24);
    border: rgba(242, 242, 242, 0.24);
    padding: 8px 44px 8px 16px;
    transition: box-shadow 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53),
      color 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53);
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
  }

  button {
    margin: 30px 0 0 15px;
  }
`

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  margin: ${({ margin }) => (margin ? margin : "")};

  label,
  div,
  svg {
    position: absolute;
  }

  label {
    left: -9999px;
    opacity: 0;
    display: none;
  }

  div {
    left: 16px;
    bottom: -24px;
  }

  svg {
    top: 3px;
    right: 16px;
    stroke: #fff;
    fill: none;
    stroke-width: 1px;
    transition: 0.15s stroke cubic-bezier(0.55, 0.085, 0.68, 0.53) stroke-width
      0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  }

  p {
    font-size: 12px;
    line-height: normal;
    color: var(--text-white);
  }
`

const ContactUsSection = () => {
  return (
    <Container bg="var(--nav-dark-bluse)">
      <Wrapper equal margin="96px 122px 129px">
        <Flex direction="column">
          <Text
            fontSize="10px"
            lineHeight="normal"
            textTransform="uppercase"
            color="var(--white)"
          >
            Już dziś
          </Text>
          <Text
            fontSize="48px"
            fontWeight="500"
            lineHeight="normal"
            color="var(--white)"
          >
            Skontaktuj się z&nbsp;nami!
          </Text>
          <Text
            fontSize="16px"
            margin="12px 0 0"
            lineHeight="normal"
            color="var(--white)"
            maxWidth="465px"
          >
            W Xminer codziennie doradzamy, konstruujemy i&nbsp;dowozimy do
            Klientów maszyny, zdolne wykopać niemal każdą kryptowalutę pod
            wirtualnym słońcem. Chcesz dołączyć do grona kryptoinwestorów
            i&nbsp;zacząć zarabiać na nowoczesnych technologiach?
          </Text>
          <Text color="var(--white)" margin="20px 0 0">
            Napisz już dziś!
          </Text>
        </Flex>
        <Flex>
          <Formik
            initialValues={{ email: "", password: "", message: "" }}
            validate={values => {
              const errors = {}
              if (!values.name) {
                errors.name = "Jak masz na imię?"
              }
              if (!values.message) {
                errors.message = "Wprowadź wiadomość?"
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
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            {({ isSubmitting, errors }) => (
              <FormStyles>
                <Flex width="100%">
                  <FieldWrapper margin="0 15px 0 0">
                    <label htmlFor="name">Imię</label>
                    <Field
                      id="name"
                      type="name"
                      name="name"
                      placeholder="Imię"
                    />
                    <AnimatePresence exitBeforeEnter>
                      {errors.name && (
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

                  <FieldWrapper margin="0 0 0 15px">
                    <label htmlFor="name">Imię</label>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      placeholder="E-mail"
                    />
                    <AnimatePresence exitBeforeEnter>
                      {errors.email && (
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
                <Flex width="100%">
                  <FieldWrapper margin="45px 0 0 0">
                    <label htmlFor="message">Twoja wiadomość</label>
                    <Field
                      as="textarea"
                      type="textarea"
                      name="message"
                      placeholder="Twoja wiadomość"
                    />
                    <AnimatePresence exitBeforeEnter>
                      {errors.message && (
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
                    <IconMail />
                  </FieldWrapper>
                  <Button type="submit" disabled={isSubmitting}>
                    Submit
                  </Button>
                </Flex>
              </FormStyles>
            )}
          </Formik>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default ContactUsSection
