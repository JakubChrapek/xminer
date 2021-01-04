import React from "react"
import styled from "styled-components"
import Button from "../../../Button/Button"
import ButtonLink from "../../../ButtonLink/ButtonLink"
import CheckmarkIcon from "../../../../images/check-icon.svg"

const CtaStyles = styled.section`
  display: flex;
  justify-content: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 80px 165px 102px;

  h2 {
    font-size: 48px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--white);
    margin-top: 10px;
    margin-bottom: 28px;
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    margin-top: 120px;
    li {
      display: flex;
      align-items: center;
      color: var(--white);
      font-size: 14px;
      font-weight: 300;
      line-height: 1.71;
    }
    img {
      display: inline;
      margin-right: 16px;
    }
  }
`
const CtaSection = () => {
  const listItems = [
    "Kolokacja, serwis i więcej!",
    "Potrzebujesz narzędzi? Damy Ci je!",
    "Zasilana w 100% energią z OZE ",
  ]
  return (
    <CtaStyles>
      <Wrapper>
        <h2>
          Chcesz zacząć kopać i zarabiać?
          <br />
          Dowiedz się jak!
        </h2>
        <ButtonLink
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          color="#101B56"
          width="196px"
          to="/kontakt"
          bg="var(--white)"
        >
          Kontakt
        </ButtonLink>
        <ul>
          {listItems.map(item => (
            <li key={item}>
              <img src={CheckmarkIcon} alt="Checkmark icon" />
              {item}
            </li>
          ))}
        </ul>
      </Wrapper>
    </CtaStyles>
  )
}

export default CtaSection
