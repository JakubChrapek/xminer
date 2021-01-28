import React, {useEffect} from 'react'
import {gsap} from 'gsap'
import styled from 'styled-components'

export const containerTransition = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      // delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
}

export const articlesWrapperTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      duration: 0.4,
      when: "afterChildren",
      delay: 0,
    },
  },
}

export const itemTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.05 } },
}

export const fadeInUp = {
  initial: { opacity: 0, y: 2 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export const staggerItemFade = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  exit: { opacity: 0 },
}

export const textFadeInUp = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.4 } },
}

export const transition = { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }


const AnimationWrapper = styled.div`
  height: ${({height}) => height ? `${height}px` : "80px"};
  position: relative;
  overflow: hidden;
  span {
    position: absolute;
  }
`

export const LineAnimationWrapper = ({children, height}) => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".line span", 1.6, {
      y: height ? height : 80,
      ease: "power4.out",
      skewY: 4,
      stagger: {
        amount: 0.3
      }})
  },[])

  return (
    <>
      {children.map(child => <AnimationWrapper height={height} className="line"><span>{child}</span></AnimationWrapper>)}
    </>
  )
}