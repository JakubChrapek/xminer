import styled from "styled-components"

export const Checkmark = styled.span`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: ${({ focus }) =>
    focus ? "var(--light-aqua)" : "rgba(224, 224, 224, 0.48)"};
  margin-right: 16px;
  min-width: 32px;
  position: relative;

  &::after,
  &::before {
    content: "";
    position: absolute;
    background-color: ${({ focus }) =>
      focus ? "var(--primary)" : "var(--headers-color)"};
    border-radius: 6px;
    left: 50%;
    top: 50%;
    height: 2px;
  }
  &::after {
    width: 5px;
    transform: translate(-5px, 1px) rotate(45deg);
  }

  &::before {
    width: 10px;
    transform: translate(-3px, -1px) rotate(135deg);
  }
`
