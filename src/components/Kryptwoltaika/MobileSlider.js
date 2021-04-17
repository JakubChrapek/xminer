import React, {useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import Image from 'gatsby-image';
import styled from 'styled-components';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 680 : -680,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 680 : -680,
      opacity: 0
    };
  }
};

const StyledImage = styled(motion.img)`
  position: absolute;
  left: -28px;
  max-width: calc(100% + 56px);
`

const Wrapper = styled.div`
  position: relative;
  min-height: 54vw;
  margin-top: 24px;
`

const Bar = styled(motion.span)`
  height: 6px;
  width: 100%;
  background-color: var(--headers-color);
  border-radius: 6px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 6px;
    border-radius: 6px;
    background-color: var(--primary);
    transform-origin: left center;
    transform: scaleX(${({currentPage, pagesLength}) => `${(currentPage % pagesLength) / (pagesLength - 1)}`});
    transition: transform .2s .1s cubic-bezier(0.215, 0.610, 0.355, 1);
  }
`

const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  button {
    border: 0;
    background-color: transparent;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &:active,
    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline: none;
      box-shadow: 0 0 0 2px var(--primary);
    }
  }
`

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const MobileSlider = ({items}) => {  
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, items.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
    <Wrapper>
      <AnimatePresence initial={false} custom={direction}>
        <StyledImage
          // as={Image}
          key={`${page}-${imageIndex}`}
          fluid={items[imageIndex].fluid}
          src={items[imageIndex].fluid.src}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 40 },
            opacity: { duration: 0.15 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
    </Wrapper>
    <ProgressBarWrapper>
    <motion.button onClick={() => paginate(-1)} style={{marginRight: '35px'}}>
      <FiChevronLeft size="32px" color="var(--headers-color)" />
    </motion.button>
    <Bar currentPage={page} pagesLength={items.length} />
    <motion.button onClick={() => paginate(1)} style={{marginLeft: '35px'}}>
      <FiChevronRight size="32px" color="var(--headers-color)" />
    </motion.button>
    </ProgressBarWrapper>
    </>
  )
}

export default MobileSlider
