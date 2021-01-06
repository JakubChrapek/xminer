import React from "react"
import styled from "styled-components"
import ButtonLink from "../../ButtonLink/ButtonLink"
import Container from "../../Container/Container"
import Wrapper from "../../Wrapper/Wrapper"
import Text from "../../Text/Text"
import Flex from "../../Flex/Flex"

const CardWrapperStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
`
const PackageStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  border-radius: 12px;
  padding: 39px 32px 58px;
  border-radius: 12px;
  box-shadow: ${({ focus }) =>
    focus ? "10px 10px 50px 3px rgba(39, 92, 141, 0.1)" : ""};
  transition: 0.2s box-shadow cubic-bezier(0.04, 0.62, 0.23, 0.98);

  &:hover {
    box-shadow: 10px 10px 50px 3px rgba(39, 92, 141, 0.1);
  }

  p,
  h3,
  ul {
    align-self: flex-start;
  }

  p {
    color: var(--dark-text);
  }
  h3 {
    color: var(--black);
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 600;
    line-height: normal;
    text-align: left;
  }

  .primary {
    color: var(--primary);
    font-size: 13px;
    font-weight: normal;
    margin: 4px 0 0;
  }

  .cost {
    font-size: 48px;
    line-height: 1.17;
    font-weight: bold;
    letter-spacing: -1px;
    margin: 27px 0 0;
    span {
      font-size: 12px;
      letter-spacing: 2.5px;
      line-height: normal;
      text-transform: uppercase;
      margin-left: 4px;
    }
  }

  ul {
    padding: 0;
    margin: 24px 0 0;
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
    margin-top: 24px;
    font-size: 16px;
    line-height: normal;
    &:first-child {
      margin-top: 0;
    }
  }

  svg {
    fill: none;
    margin-right: 16px;
    #bg {
      fill: ${({ focus }) =>
        focus ? "var(--light-aqua)" : "rgba(224, 224, 224, 0.48)"};
    }

    #mark {
      stroke: ${({ focus }) => (focus ? "var(--primary)" : "var(--dark-text)")};
    }
  }
`

const Package = ({
  focus,
  type,
  typeDescription,
  price,
  features,
  btnLink,
  btnText,
}) => (
  <PackageStyles focus={focus}>
    <h3>{type}</h3>
    <p className="primary">{typeDescription}</p>
    <p className="cost">
      {price}PLN
      <span> /msc*</span>
    </p>
    <ul>
      {features.map((feature, i) => (
        <li className={focus ? "focus" : ""} key={i}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b)">
              <rect id="bg" width="32" height="32" rx="16" />
            </g>
            <path
              id="mark"
              d="M20.48 12.6396L14.32 18.7996L11.52 15.9996"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <filter
                id="filter0_b"
                x="-48"
                y="-48"
                width="128"
                height="128"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="24" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <span dangerouslySetInnerHTML={{ __html: feature }} />
        </li>
      ))}
    </ul>
    <ButtonLink
      bg={focus ? "var(--primary)" : ""}
      to={btnLink}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      minWidth="196px"
      maxWidth="244px"
      margin={focus ? "77px 0 0" : "74px 0 0"}
    >
      {btnText}
    </ButtonLink>
  </PackageStyles>
)

const PackagesSection = ({ title, subtitle }) => {
  return (
    <Container padding="40px 182px 0">
      <Wrapper direction="column">
        <Flex
          width="100%"
          direction="column"
          alignItems="center"
          margin="0 0 27px"
        >
          <Text
            fontSize="10px"
            letterSpacing="1px"
            lineHeight="normal"
            textTransform="uppercase"
            fontWeight="normal"
          >
            {title}
          </Text>
          <Text fontSize="48px" fontWeight="600" lineHeight="normal">
            {subtitle}
          </Text>
        </Flex>
        <CardWrapperStyles>
          <Package
            type="ASIC"
            typeDescription="Koparka typu Antminer"
            price="90"
            features={[
              "0,32 zł za kWh",
              "Wymiary Riga: nie dotyczy",
              "Jednorazowa opłata instalacyjna:&nbsp;99&nbsp;PLN*",
            ]}
            btnText="Na start"
            btnLink="/kontakt"
          />
          <Package
            focus
            type="Single rig"
            typeDescription="Koparka kryptowalut do 7 kart GPU"
            price="140"
            features={[
              "0,32 zł za kWh",
              "Wymiary Riga: 70&nbsp;cm&nbsp;x&nbsp;50&nbsp;cm&nbsp;x&nbsp;40&nbsp;cm",
              "Jednorazowa opłata instalacyjna:&nbsp;249&nbsp;PLN*",
            ]}
            btnText="Najpopularniejszy"
            btnLink="/kontakt"
          />
          <Package
            type="Double rig"
            typeDescription="Koparka kryptowalut do 13 kart GPU"
            price="180"
            features={[
              "0,32 zł za kWh",
              "Wymiary Riga: 70&nbsp;cm&nbsp;x&nbsp;50&nbsp;cm&nbsp;x&nbsp;40&nbsp;cm",
              "Jednorazowa opłata instalacyjna:&nbsp;249&nbsp;PLN*",
            ]}
            btnText="Dla inwestorów"
            btnLink="/kontakt"
          />
        </CardWrapperStyles>
      </Wrapper>
    </Container>
  )
}

export default PackagesSection
