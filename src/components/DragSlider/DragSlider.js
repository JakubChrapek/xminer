import React, { useRef, useEffect, useState } from "react"

import styled from "styled-components"
import { motion, useMotionValue } from "framer-motion"

// ! Fix slider reset on final slide

const Slider = styled(motion.div)`
  cursor: grab;
  display: flex;
`

Slider.defaultProps = {
  display: "flex",
  justifyContent: "space-between",
}

export const DragSlider = ({
  children,
  bounceStiffness = 60, // Affects the stiffness of the bounce spring. Higher values will create more sudden movement.
  bounceDamping = 10, // affects the damping of the bounce spring. If set to 0, spring will oscillate indefinitely.
  margin,
  leftAnchor,
}) => {
  const ref = useRef(null)
  const x = useMotionValue(0)

  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0)
  const [sliderConstraints, setSliderConstraints] = useState(0)

  useEffect(() => {
    const calcSliderChildrenWidth = () => {
      setSliderChildrenWidth(
        Array.from(ref.current.childNodes).reduce(
          (acc, node) => acc + node.clientWidth,
          0
        )
      )
    }

    calcSliderChildrenWidth()

    const calcSliderWidth = () => {
      setSliderWidth(ref?.current?.clientWidth)
    }

    calcSliderWidth()
    window.addEventListener("resize", calcSliderWidth)

    const calcSliderConstraints = () => {
      setSliderConstraints(sliderChildrenWidth - sliderWidth)
    }

    calcSliderConstraints()
    window.addEventListener("resize", calcSliderConstraints)
  }, [ref, sliderChildrenWidth, sliderWidth])

  const SliderWrap = ({ children, margin, leftAnchor }) => {
    return (
      <div
        style={{
          overflow: "hidden",
          maxWidth: "calc(100% + 60px)",
          paddingLeft: "30px",
          alignSelf: "center",
          margin: margin,
        }}
      >
        <Slider
          ref={ref}
          drag="x"
          initial={{ x: 0 }}
          style={{ x }}
          dragConstraints={{
            left: -sliderConstraints - (leftAnchor || 75),
            right: 0,
          }}
          dragTransition={{ bounceStiffness, bounceDamping }}
        >
          {children}
        </Slider>
      </div>
    )
  }

  return (
    <SliderWrap leftAnchor={leftAnchor} margin={margin}>
      {children}
    </SliderWrap>
  )
}
