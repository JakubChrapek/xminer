import { motion } from "framer-motion"
import styled from "styled-components"

export const StepsStyles = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  padding-top: 9px;
  border-right: 1px solid
    ${({ variant }) =>
      variant === "light" ? "var(--light-aqua)" : "rgba(205, 239, 241, 0.2)"};
  opacity: ${({ variant }) => variant === "light" && "0.8"};

  li {
    display: flex;
    align-items: center;
    padding: 29px 38px 29px 0;
    position: relative;
    justify-content: space-between;
    p {
      color: ${({ variant }) =>
        variant === "light" ? "var(--nav-dark-bluse)" : "var(--white)"};
    }
    &:after {
      content: "";
      position: absolute;
      right: -7px;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--light-aqua);
      border-radius: 50%;
      width: 14px;
      height: 14px;
      transition: background-color 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }
    &.active:after {
      background-color: var(--primary);
    }
  }
  @media only screen and (max-width: 1002px) {
    flex-direction: row;
    justify-content: space-between;
    border-right: none;

    li {
      padding: 0;
      &:after {
        left: 0;
        right: unset;
        width: 20px;
        height: 20px;
      }
      &:last-of-type {
        right: 14px;
        left: unset;
      }
    }
  }
`

export const ImgWrapper = styled(motion.span)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;
  margin-left: 20px;
  background-color: var(--light-aqua);
  border-radius: 50%;
  svg {
    fill: var(--primary);
    width: 37px;
  }
`

export const ActiveStepStyles = styled(motion.div)`
  padding: 38px 0 0 55px;
  display: flex;
  height: 100%;
  flex-direction: column;

  > div:first-of-type {
    padding-bottom: 42px;
    border-bottom: ${({ variant }) =>
      variant === "light"
        ? "1px solid var(--light-aqua)"
        : "1px solid rgba(205, 239, 241, 0.2)"};
    opacity: ${({ variant }) => variant === "light" && "0.8"};
  }
  > div:last-of-type {
    padding-top: 33px;
    height: 100%;
    flex: 1;
    justify-content: space-between;
    min-height: 309px;
  }

  @media only screen and (max-width: 1002px) {
    padding: 30px 0 0;
    > div:first-of-type {
      padding-bottom: 32px;
      border-bottom: none;
    }
    > div:last-of-type {
      padding-top: 23px;
      min-height: unset;
    }
  }
`
