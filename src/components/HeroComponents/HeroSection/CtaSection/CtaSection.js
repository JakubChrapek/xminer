import React from "react"
import styled from "styled-components"
import Button from "../../../Button/Button"
import ButtonLink from "../../../ButtonLink/ButtonLink"
import CheckmarkIcon from "../../../../images/check-icon.svg"
import useWindowSize from "../../../../utils/UseWindowSize"

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
  @media only screen and (max-width: 1146px) {
    padding: 40px 103px 90px;
  }
  @media only screen and (max-width: 640px) {
    padding: 40px 30px 76px;
  }
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
    @media only screen and (max-width: 1082px) {
      font-size: 40px;
    }
    @media only screen and (max-width: 802px) {
      font-size: 30px;
      margin-bottom: 32px;
    }
    @media only screen and (max-width: 640px) {
      font-size: 24px;
    }
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
  const width = useWindowSize()
  const listItems = [
    "Kolokacja, serwis i więcej!",
    "Potrzebujesz narzędzi? Damy Ci je!",
    "Zasilana w 100% energią z OZE ",
  ]
  return (
    <CtaStyles>
      <Wrapper>
        <h2>
          Chcesz zacząć kopać i&nbsp;zarabiać?
          <br />
          Dowiedz się jak!
        </h2>
        <ButtonLink type="tertiary" width="196px" to="/kontakt">
          Kontakt
        </ButtonLink>
        {width > 1082 && (
          <ul>
            {listItems.map(item => (
              <li key={item}>
                <img src={CheckmarkIcon} alt="Checkmark icon" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </Wrapper>
    </CtaStyles>
  )
}

export default CtaSection
