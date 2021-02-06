import { motion } from "framer-motion"
import styled from "styled-components"
import Container from "../Container/Container"
import { StyledFlex } from "../Flex/Flex"
import { WrapperStyles } from "../Wrapper/Wrapper"

export const ConfiguratorWrapperStyles = styled(WrapperStyles)`
  margin: 0;
  padding: 126px 204px 220px 102px;
  width: 100%;

  @media only screen and (max-width: 1423px) {
    padding: 120px 130px 200px 80px;
  }
  @media only screen and (max-width: 1002px) {
    padding: 80px 30px 180px;
  }

  .top-line {
    background-color: var(--light-aqua);
    width: calc(100% - 7px);
    height: 1px;
    margin: 36px 0 0 7px;
    opacity: ${({ variant }) => (variant === "light" ? "0.8" : "0.2")};
    @media only screen and (max-width: 1002px) {
      width: calc(100% + 60px);
      position: relative;
      margin: 40px 0 0;
      left: -30px;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: 286px 1fr;
    width: 100%;
    position: relative;
    @media only screen and (max-width: 1002px) {
      grid-template-columns: 1fr;
      margin-top: -10px;
    }
  }
`

export const ConfiguratorFlexStyles = styled(StyledFlex)`
  width: 100%;
`
