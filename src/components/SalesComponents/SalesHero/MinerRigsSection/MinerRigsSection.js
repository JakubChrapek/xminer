import React from "react"
import styled from "styled-components"
import Container from "../../../Container/Container"
import Flex from "../../../Flex/Flex"
import Text from "../../../Text/Text"
import Wrapper from "../../../Wrapper/Wrapper"

const MinerRigsSection = () => {
  return (
    <Container>
      <Wrapper direction="column">
        <Flex width="100%" alignItems="center" direction="column">
          <Text
            as="h2"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
          >
            Maszyny Xminer
          </Text>
          <Text as="h3" fontSize="48px" lineHeight="normal" fontWeight="600">
            Przykładowe koparki
          </Text>
        </Flex>
        <Flex>Tutaj będą koparki, prawdopodobnie slider</Flex>
      </Wrapper>
    </Container>
  )
}

export default MinerRigsSection
