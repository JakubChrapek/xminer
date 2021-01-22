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
  bounceStiffness = 80, // Affects the stiffness of the bounce spring. Higher values will create more sudden movement.
  bounceDamping = 25, // affects the damping of the bounce spring. If set to 0, spring will oscillate indefinitely.
  margin,
  leftAnchor,
  padding,
  bg,
  initial,
  radius,
  width,
}) => {
  const ref = useRef(null)
  const x = useMotionValue(0)

  const [sliderWidth, setSliderWidth] = useState(0)
  const [sliderChildrenWidth, setSliderChildrenWidth] = useState(0)
  const [sliderConstraints, setSliderConstraints] = useState(0)
  const calcSliderChildrenWidth = () => {
    setSliderChildrenWidth(
      Array.from(ref.current.childNodes).reduce(
        (acc, node) => acc + node.clientWidth,
        0
      )
    )
  }
  const calcSliderWidth = () => {
    setSliderWidth(ref?.current?.clientWidth)
  }

  const calcSliderConstraints = () => {
    setSliderConstraints(sliderChildrenWidth - sliderWidth)
  }

  useEffect(() => {
    calcSliderChildrenWidth()
    calcSliderWidth()
    calcSliderConstraints()
    let timeoutId = null
    const resizeListener = () => {
      clearTimeout(timeoutId)

      timeoutId = setTimeout(() => {
        calcSliderChildrenWidth()
        calcSliderWidth()
        calcSliderConstraints()
      }, 100)
    }

    window.addEventListener("resize", resizeListener)

    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [ref, sliderChildrenWidth, sliderWidth])

  const SliderWrap = ({ children, margin, padding, leftAnchor }) => {
    return (
      <motion.div
        layout
        style={{
          overflow: "hidden",
          maxWidth: width ? "100%" : "calc(100% + 60px)",
          paddingLeft: "30px",
          alignself: "center",
          margin: margin,
          padding: padding,
          width: width ? width : "calc(100% + 60px)",
          backgroundColor: bg,
          borderRadius: radius,
          alignSelf: "center",
        }}
      >
        <Slider
          ref={ref}
          drag="x"
          // initial={initial ? { x: 0 } : { x: 30 }}
          initial={{ x: 30 }}
          style={{ x }}
          dragConstraints={{
            left: -sliderConstraints - (leftAnchor || 75) - 30,
            // right: initial ? 0 : 30,
            right: 30,
          }}
          dragTransition={{ bounceStiffness, bounceDamping }}
        >
          {children}
        </Slider>
      </motion.div>
    )
  }

  return (
    <SliderWrap leftAnchor={leftAnchor} margin={margin} padding={padding}>
      {children}
    </SliderWrap>
  )
}
