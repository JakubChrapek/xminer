import React from "react"
import styled from "styled-components"
import useWindowSize from "../../../../../utils/UseWindowSize"
import Button from "../../../../Button/Button"
import ButtonLink from "../../../../ButtonLink/ButtonLink"
import { ContainerStyles } from "../../../../Container/Container"
import Flex from "../../../../Flex/Flex"
import Text from "../../../../Text/Text"
import { WrapperStyles } from "../../../../Wrapper/Wrapper"

const CtaContainerStyles = styled(ContainerStyles)`
  @media only screen and (max-width: 640px) {
    margin-top: 0;
  }
`

const CtaWrapperStyles = styled(WrapperStyles)`
  @media only screen and (max-width: 640px) {
    margin: 100px 30px 110px;
  }
`

const CtaSalesSection = () => {
  const width = useWindowSize()
  return (
    <ContainerStyles bg="linear-gradient(135deg, #29abe2, rgba(255, 255, 255, 0)), linear-gradient(to bottom, var(--primary), var(--primary))">
      <CtaWrapperStyles margin="109px 40px 84px">
        <Flex width="100%" direction="column" alignItems="center">
          <Text
            color="var(--faded-aqua)"
            fontSize="10px"
            letterSpacing="1px"
            textTransform="uppercase"
          >
            Mamy więcej
          </Text>
          <Text
            color="var(--faded-aqua)"
            fontSize={width > 640 ? "48px" : "24px"}
            fontWeight="500"
            lineHeight="normal"
            margin={width > 640 ? "9px 0 24px" : "20px 0 50px"}
            textAlign={width < 640 && "center"}
          >
            Hosting, serwis, kolokacja
          </Text>
          <ButtonLink
            type="tertiary"
            whileTap={{ scale: 0.95 }}
            to="/uslugi-dodatkowe"
          >
            Zobacz naszą ofertę
          </ButtonLink>
        </Flex>
      </CtaWrapperStyles>
    </ContainerStyles>
  )
}

export default CtaSalesSection
