import React from "react"
import Container from "../../../Container/Container"
import Flex from "../../../Flex/Flex"
import Text from "../../../Text/Text"
import Wrapper from "../../../Wrapper/Wrapper"

const MinerRigsSection = () => {
  return (
    <Container>
      <Wrapper>
        <Flex width="100%" alignItems="center" direction="column">
          <Text as="h2">Maszyny Xminer</Text>
          <Text as="h3">Przykładowe koparki</Text>
        </Flex>
      </Wrapper>
    </Container>
  )
}

export default MinerRigsSection
