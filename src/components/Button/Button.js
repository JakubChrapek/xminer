import React from "react"
import styled, { css } from "styled-components"
import { motion } from "framer-motion"
import { useGlobalDispatchContext } from "../../utils/cursorContext"

const ButtonStyles = styled(motion.button)`
  color: ${({ color, loading }) =>
    loading ? "transparent" : color ? color : "var(--white)"};
  background: ${({ bg }) => (bg ? bg : "var(--gradient)")};
  border-radius: ${({ radius }) => (radius ? radius : "10px")};
  border: ${({ border }) => (border ? border : "none")};
  transition: opacity 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98);
  margin: ${({ margin }) => (margin ? margin : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  width: ${({ width }) => (width ? width : "")};
  order: ${({ order }) => (order ? order : "")};
  position: relative;
  background-image: linear-gradient(0deg, #2ec5ce, #29abe2, #2b7097, #2d1f84);
  background-size: auto 200%;
  background-position: 0 100%;
  transition: background-position 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
    box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);
  &:hover {
    background-position: 0 0;
  }

  &:after {
    content: none !important;
  }
  &:focus,
  &:active {
    outline: none;
  }
  &:focus-visible {
    outline: none !important;
    box-shadow: ${({ size }) =>
      size === "small"
        ? "inset 0 0 0 2px var(--faded-aqua) !important"
        : "inset 0 0 0 4px var(--faded-aqua) !important"};
  }

  ${({ type }) =>
    type === "outline" &&
    css`
      position: relative;
      background: ${({ outlinebg }) => (outlinebg ? outlinebg : "transparent")};
      background-clip: padding-box;
      border: solid 1px transparent;
      color: var(--primary) !important;
      border-radius: 8px;

      transition: color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        background-color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        background-position 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);
      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -1px; /* !importanté */
        border-radius: inherit; /* !importanté */
        background-image: linear-gradient(
          0deg,
          #2ec5ce,
          #29abe2,
          #2b7097,
          #2d1f84
        );
        background-size: auto 200%;
        background-position: 0 100%;

        transition: color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
          background-color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
          background-position 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
          box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);
      }
      &:hover:before {
        background-position: 0 0;
      }

      &:focus-visible {
        outline: none !important;
        box-shadow: ${({ size }) =>
          size === "small"
            ? "inset 0 0 0 1px var(--primary) !important"
            : "inset 0 0 0 3px var(--primary) !important"};
      }
    `}

  ${({ type }) =>
    type === "onlyOutline" &&
    css`
      position: relative;
      background: transparent;
      border: solid 1px var(--primary);
      color: var(--primary) !important;
      border-radius: 8px;

      transition: color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        background-color 0.2s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        background-position 0.3s cubic-bezier(0.04, 0.62, 0.23, 0.98),
        box-shadow 0.1s cubic-bezier(0.04, 0.62, 0.23, 0.98);

      &:focus,
      &:active {
        outline: none;
        box-shadow: inset 0 0 0 2px var(--primary) !important;
      }

      &:focus-visible {
        outline: none !important;
        box-shadow: ${({ size }) =>
          size === "small"
            ? "inset 0 0 0 1px var(--primary) !important"
            : "inset 0 0 0 3px var(--primary) !important"};
      }
    `}

  ${({ size }) =>
    size === "small"
      ? css`
          font-size: 15px;
          line-height: 1em;
          letter-spacing: 0.75px;
          font-weight: 600;
          padding: 14px 28px;
          min-width: 114px;
        `
      : css`
          font-size: 20px;
          line-height: 1em;
          font-weight: 500;
          padding: 21px 22px;
        `}
  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`

const LoaderStyles = styled(motion.span)`
  position: absolute;
  left: calc(50% - 12px);
  transform: translate(-50%, -50%);
  width: 18px;
  height: 18px;
  background-color: transparent;
  border-radius: 100%;
  border-top: 3px solid var(--white);
  border-left: 3px solid var(--white);
  border-bottom: 3px solid var(--white);
`

const Button = ({
  children,
  size,
  fill,
  gradient,
  color,
  bg,
  type,
  order,
  initial,
  animate,
  exit,
  whileHover,
  layout,
  whileTap,
  border,
  whileFocus,
  disabled,
  radius,
  width,
  outlinebg,
  margin,
  onClick,
  loading,
}) => {
  const dispatch = useGlobalDispatchContext()

  return (
    <ButtonStyles
      initial={initial}
      animate={animate}
      exit={exit}
      whileHover={whileHover ? whileHover : {}}
      whileTap={whileTap ? whileTap : { scale: 0.98 }}
      margin={margin}
      whileFocus={whileFocus}
      order={order}
      color={color}
      size={size}
      fill={fill}
      border={border}
      outlinebg={outlinebg}
      layout={layout ? true : false}
      gradient={gradient}
      bg={bg}
      type={type}
      width={width}
      disabled={disabled}
      radius={radius}
      onClick={onClick}
      loading={loading}
      onMouseEnter={() => {
        dispatch({ type: "TOGGLE_CURSOR", cursorShow: true })
        dispatch({
          type: "CHANGE_CURSOR_TYPE",
          cursorType:
            type !== "outline" && type !== "onlyOutline" ? "outline" : "full",
        })
      }}
      onMouseLeave={() =>
        dispatch({ type: "TOGGLE_CURSOR", cursorShow: false })
      }
    >
      {children}
      {loading && (
        <LoaderStyles
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </ButtonStyles>
  )
}

export default Button
