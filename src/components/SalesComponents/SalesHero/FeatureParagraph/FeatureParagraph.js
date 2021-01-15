import React from "react"
import styled from "styled-components"
import Flex from "../../../Flex/Flex"
import Text from "../../../Text/Text"

const FeatureStyles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ maxwidth }) => (maxwidth ? maxwidth : "708px")};
  margin: ${({ margin }) => (margin ? margin : "")};

  h3 {
    display: inline;
  }
`

const ImgStyles = styled.img``

const ImgWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  padding: 9px;
  position: relative;
  background-color: ${({ iconBg }) => (iconBg ? iconBg : "")};
  border-radius: 50%;
  margin-right: 28px;
`

const FeatureParagraph = ({
  icon,
  iconAlt,
  iconBg,
  title,
  content,
  margin,
  maxwidth,
}) => {
  return (
    <FeatureStyles margin={margin} maxwidth={maxwidth}>
      <Flex alignItems="center" margin="0 0 26px">
        <ImgWrapper iconBg={iconBg}>
          <ImgStyles src={icon} alt={iconAlt} />
        </ImgWrapper>
        <Text
          color="var(--headers-color)"
          as="h3"
          fontSize="22px"
          lineHeight="normal"
          fontWeight="600"
        >
          {title}
        </Text>
      </Flex>
      <Text
        color="var(--body-text)"
        margin="0 0 0 2px"
        fontSize="18px"
        lineHeight="1.67em"
      >
        {content}
      </Text>
    </FeatureStyles>
  )
}

export default FeatureParagraph
