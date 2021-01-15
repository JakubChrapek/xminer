import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Message } from "../../../ContactUsSection/ContactUsForm"
import { fadeInUp } from "../../../Styles/Animations"

const ImgWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 36px 51px;
  width: 209px;
  background-color: var(--white);
  border-radius: 15px;
  transition: box-shadow 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);

  &.active {
    box-shadow: 0 0 0 5px var(--primary);
  }

  &:first-of-type {
    margin-right: 50px;
  }
  .gatsby-image-wrapper {
    width: 100% !important;
    height: 100% !important;

    img,
    picture {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`

const Grid = styled(motion.div)`
  display: flex;
`

export const Step1 = ({ vendors, activeVendor, setActiveVendor }) => {
  const VendorGrid = () => (
    <Grid>
      {vendors.map((vendor, i) => (
        <ImgWrapper
          whileHover={{
            cursor: "pointer",
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveVendor(i)}
          className={activeVendor === i ? "active" : ""}
        >
          <Img fluid={vendor.fluid} alt={vendor.alt} />
        </ImgWrapper>
      ))}
    </Grid>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, delay: 0.15 },
      }}
      exit={{
        opacity: 0,
        y: -16,
        transition: { duration: 0.4, delay: 0.15 },
      }}
      key="producent"
    >
      <VendorGrid />
    </motion.div>
  )
}

const ModelGridStyles = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-gap: 32px;
  span {
    padding: 64px 44px;
    text-transform: uppercase;
    color: var(--headers-color);
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
    text-align: center;
    background-color: var(--white);
    border-radius: 15px;
    &.active {
      box-shadow: 0 0 0 5px var(--primary);
    }
  }
`

export const Step2 = ({ models, activeModel, setActiveModel }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.15 },
    }}
    exit={{
      opacity: 0,
      y: -16,
      transition: { duration: 0.4, delay: 0.15 },
    }}
    key="model-karty"
  >
    <ModelGridStyles>
      {models.map((model, i) => (
        <motion.span
          key={model.name}
          whileHover={{
            cursor: "pointer",
            backgroundColor: "var(--light-aqua)",
            color: "var(--primary)",
          }}
          whileTap={{ scale: 0.98 }}
          transition={{
            type: "spring",
            stiffness: 100,
            default: { duration: 0.2 },
          }}
          onClick={() => setActiveModel(i)}
          className={activeModel === i ? "active" : ""}
        >
          {model.name}
        </motion.span>
      ))}
    </ModelGridStyles>
  </motion.div>
)

const GraphicsGrid = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(121px, 1fr));
  grid-gap: 14px 10px;
  width: 100%;
  list-style-type: none;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background-color: var(--white);
    color: var(--headers-color);
    padding: 20px 17px;
    font-size: 20px;
    line-height: 30px;

    &.accent {
      background-color: var(--light-aqua);
      color: var(--primary);
    }

    &.active {
      box-shadow: 0 0 0 5px var(--primary);
      color: var(--primary);
    }
  }
`

export const Step3 = ({ activeCard, setActiveCard }) => (
  <GraphicsGrid
    initial={{ opacity: 0, y: 16 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.15 },
    }}
    exit={{
      opacity: 0,
      y: -16,
      transition: { duration: 0.4, delay: 0.15 },
    }}
    key="moc"
  >
    {[...Array(12).keys()].map(i => (
      <motion.li
        key={`graphic-cards-number-${i}`}
        whileHover={{
          cursor: "pointer",
          backgroundColor: "var(--light-aqua)",
          color: "var(--primary)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: "spring",
          stiffness: 100,
          default: { duration: 0.2 },
        }}
        onClick={() => setActiveCard(i)}
        className={
          activeCard === i ? "active" : [5, 7, 11].includes(i) ? "accent" : ""
        }
      >
        {i + 1}
      </motion.li>
    ))}
  </GraphicsGrid>
)

const RocketIcon = () => (
  <svg
    width="105"
    height="108"
    viewBox="0 0 105 108"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M97.0014 39.1718C97.1694 39.0135 97.3079 38.8209 97.4063 38.6022C106.196 19.0519 104.967 2.42645 104.911 1.72892L104.911 1.71823C104.836 0.848406 104.162 0.159746 103.312 0.0863916C103.288 0.0844854 103.169 0.0757756 102.961 0.0653868C100.409 -0.0896211 85.1105 -0.612081 67.3311 7.78123C67.12 7.88029 66.9336 8.02023 66.78 8.19021C54.6705 14.0244 41.5714 23.9759 30.8992 40.9061L17.1982 39.9698C16.4353 39.8927 15.7301 40.3769 15.4518 41.1049L4.8389 68.9012C4.55364 69.6473 4.7864 70.4955 5.40942 70.9814C5.72093 71.2252 6.0954 71.3473 6.46802 71.3473C6.83716 71.3473 7.2065 71.229 7.51801 70.9888L16.3269 64.2191L20.938 65.1638L27.8876 72.286L25.9836 75.7921C23.6684 74.6238 20.9841 74.3367 18.3648 75.0165C14.8598 75.9293 11.9935 78.3791 10.5026 81.7416L0.157509 105.068C-0.145184 105.749 -0.00347642 106.551 0.512701 107.078C0.846975 107.422 1.29486 107.603 1.74993 107.603C1.99499 107.603 2.2417 107.55 2.47446 107.442L25.2351 96.8381C28.5142 95.312 30.9046 92.3744 31.7953 88.7824C32.4822 86.012 32.1607 83.1669 30.9241 80.7407L34.171 78.7271L41.4141 86.1501L42.3348 90.8699L35.7291 99.8956C35.2601 100.538 35.2619 101.42 35.736 102.059C36.0738 102.514 36.5935 102.767 37.1289 102.767C37.3424 102.767 37.5578 102.726 37.7675 102.647L64.8906 91.77C65.601 91.4853 66.0489 90.7606 65.9983 89.9807L65.0843 75.9332C81.5989 64.9985 91.3082 51.5787 97.0014 39.1718ZM71.2013 10.0867C85.1997 4.01231 97.3114 3.55012 101.481 3.6103C101.52 6.13009 101.4 11.4713 100.108 18.3368C99.1933 23.1856 97.6925 28.8 95.2487 34.7306L71.2013 10.0867ZM67.7888 11.6646L93.7082 38.2269C87.4197 51.5964 75.3102 67.747 52.021 79.3342C49.2613 80.7047 46.4014 81.9855 43.4541 83.1696L37.4886 77.056L51.6801 67.8741C52.0901 67.6075 52.3699 67.1828 52.4622 66.7051C52.4847 66.5901 52.4964 66.4721 52.4964 66.3523V55.5924C52.4966 54.6025 51.7126 53.7991 50.7467 53.7991H38.956C38.4924 53.7991 38.0559 53.9873 37.7334 54.31C37.6103 54.4323 37.5037 54.5741 37.4185 54.7324L37.2549 55.0368L29.6557 69.0302L23.8414 63.0696C25.2159 59.4768 26.7237 56.0103 28.3536 52.6929C39.2549 30.5591 54.1607 18.363 67.7888 11.6646ZM22.6278 81.9715L24.2773 78.934C23.3118 78.4763 22.2539 78.2412 21.1717 78.2412C20.5277 78.2412 19.8752 78.3238 19.2259 78.4924C16.7568 79.1342 14.7374 80.8595 13.6893 83.2231L5.27417 102.199L23.7878 93.5743C26.0941 92.4982 27.7774 90.4305 28.4039 87.9001C28.8467 86.1103 28.6838 84.283 27.9665 82.7013L25.0179 84.4104C24.3354 84.8068 23.4761 84.6884 22.9198 84.1164C22.4904 83.6776 22.3225 83.0529 22.446 82.4683C22.4815 82.2975 22.5418 82.13 22.6278 81.9715ZM26.4981 48.5705C27.2456 47.1362 28.0161 45.7307 28.8086 44.356L18.2429 43.6351L10.3388 64.337L14.8517 60.8688C15.2506 60.5641 15.7582 60.4457 16.2446 60.5443L20.6983 61.4568C22.4837 56.8216 24.4273 52.5348 26.4981 48.5705ZM31.3226 73.3363L28.8927 77.8111L48.9961 65.343V57.3886H39.9877L31.6513 72.9007C31.5631 73.0643 31.4518 73.2107 31.3226 73.3363ZM45.028 86.3901L45.9183 90.9527C46.0164 91.4531 45.9009 91.9731 45.6033 92.3802L42.2192 97.0052L62.4197 88.9046L61.7144 78.0783C60.2909 78.9402 58.8337 79.7767 57.345 80.5867C53.5486 82.6564 49.4508 84.6008 45.028 86.3901ZM77.2813 28.4039C71.3964 22.3728 61.8231 22.3728 55.9382 28.4039C50.0533 34.435 50.0533 44.2463 55.9382 50.2775C58.8798 53.2939 62.7453 54.8004 66.6089 54.8004C70.4744 54.8004 74.338 53.2922 77.2813 50.2775C83.1661 44.2463 83.1661 34.4348 77.2813 28.4039ZM74.807 47.7415C70.2872 52.3737 62.9325 52.3737 58.4126 47.7415C53.8928 43.1093 53.8928 35.5718 58.4126 30.9396C60.6718 28.6244 63.6413 27.4659 66.6091 27.4659C69.577 27.4659 72.5465 28.6244 74.8072 30.9396C79.3269 35.5718 79.3269 43.1093 74.807 47.7415ZM63.1289 42.908C65.0486 44.8753 68.1703 44.8772 70.0882 42.908C70.7707 42.2069 71.88 42.2069 72.5624 42.908C73.2466 43.6092 73.2466 44.7427 72.5624 45.4439C70.9229 47.1261 68.7671 47.9673 66.6094 47.9673C64.4537 47.9673 62.296 47.1261 60.6546 45.4439C57.3717 42.0795 57.3717 36.6041 60.6546 33.2397C63.9373 29.8754 69.2814 29.8754 72.5624 33.2397C73.2466 33.9409 73.2466 35.0744 72.5624 35.7756C71.8802 36.4767 70.7707 36.4767 70.0882 35.7756C68.1684 33.8083 65.0467 33.81 63.1289 35.7756C61.211 37.7431 61.211 40.9407 63.1289 42.908Z"
    />
  </svg>
)

const LastStyles = styled(motion.div)`
  position: relative;
  display: flex;
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const NameWrapper = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  margin-right: 34px;
  position: relative;
  label {
    position: absolute;
  }

  input#privacy {
    /* display: none; */
    opacity: 0;
    width: 0;
    height: 0;

    &:focus + label:after {
      box-shadow: 0 0 0 2px var(--nav-dark-bluse), 0 0 0 4px var(--primary);
    }

    &:checked {
      + label:before {
        opacity: 1;
      }
      + label:after {
        border-color: var(--primary);
      }
    }
  }

  label {
    left: -9999px;
    opacity: 0;
    display: none;

    &.privacy {
      position: relative;
      left: unset;
      opacity: 1;
      display: inline;
      color: var(--text-privacy);
      margin-left: 26px;
      align-items: center;
      letter-spacing: 0.25px;
      margin-top: 24px;
      font-size: 12px;
      position: relative;
      &:hover {
        &:after {
          border-color: var(--primary);
          transform: translateY(-50%) scale(1.1);
        }
      }

      &:active {
        &:after {
          transform: translateY(-50%) scale(0.9);
        }
      }

      &:after,
      &:before {
        content: "";
        position: absolute;
        transition: opacity 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19),
          border 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53),
          transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        left: -26px;
        top: 50%;
      }

      &:after {
        width: 16px;
        height: 16px;
        transform: translateY(-50%);
        background-color: transparent;
        border: 2px solid #b2b3b5;
        border-radius: 3px;
      }

      &:before {
        content: "✓";
        transform: translate(-50%, -50%);
        left: -15px;
        top: calc(50% - 4px);
        font-size: 22px;
        opacity: 0;
        color: var(--primary);
      }

      a {
        font-weight: 500;
        color: #f0f0f0;
        text-decoration: none;
        position: relative;
        padding: 6px 10px 6px 2px;

        &:focus {
          outline: none;
          box-shadow: 0 0 0 1px var(--nav-dark-bluse), 0 0 0 3px var(--primary);
          border-radius: 4px;
        }

        &:after {
          content: "";
          position: absolute;
          left: 2px;
          bottom: 0px;
          background-color: var(--primary);
          height: 2px;
          width: calc(100% - 12px);
          transform: scaleX(0);
          transform-origin: left center;
          transition: transform 0.2s cubic-bezier(0.55, 0.055, 0.675, 0.19);
        }
        &:hover:after {
          transform: scaleX(1);
        }
      }
    }
  }

  div {
    left: 16px;
    bottom: -24px;
    &.privacy {
      left: 26px;
      bottom: -20px;
    }
  }

  input {
    border-radius: 16px;
    width: 100%;
    background-color: rgba(242, 242, 242, 0.24);
    border: rgba(242, 242, 242, 0.24);
    padding: 8px 44px 8px 16px;
    transition: box-shadow 0.15s cubic-bezier(0.04, 0.62, 0.23, 0.98),
      color 0.15s cubic-bezier(0.04, 0.62, 0.23, 0.98);
    font-size: 18px;
    line-height: 1.76em;
    color: var(--text-white);
    font-family: "Poppins";
    font-weight: 300;
    &::placeholder {
      color: var(--text-privacy);
      font-family: "Poppins";
      font-weight: 300;
      opacity: 1;
      letter-spacing: 0;
      font-size: 18px;
      line-height: 1.76em;
    }
    @media only screen and (max-width: 740px) {
      padding: 16px 44px 16px 16px;
      font-size: 16px;
      &::placeholder {
        font-size: 16px;
      }
    }

    :hover {
      outline: none;
      box-shadow: inset 0 0 0 1px var(--primary);
      color: var(--primary);
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 0 0 2px var(--primary);
      color: var(--primary);

      ~ svg {
        stroke: var(--primary);
      }
    }
    &:-webkit-autofill,
    &:-webkit-autofill {
      -webkit-text-fill-color: var(--text-white);
      -webkit-box-shadow: inset 0 0 0px 1000px #465067;
      background-color: #465067;

      &:hover {
        -webkit-box-shadow: inset 0 0 0 1px var(--primary),
          inset 0 0 0 1000px #465067;
      }
      &:focus {
        -webkit-box-shadow: inset 0 0 0 2px var(--primary),
          inset 0 0 0 1000px #465067;
      }
    }
  }
`

const EmailWrapper = styled(NameWrapper)`
  margin-right: 0;
  flex: 5;
`

const MessageStyles = styled(Message)`
  bottom: -30px;
  left: 16px;
`

export const Step4 = () => (
  <LastStyles
    initial={{ opacity: 0, y: 16 }}
    animate={{
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.3 },
    }}
    exit={{
      opacity: 0,
      y: -16,
      transition: { duration: 0.4, delay: 0.3 },
    }}
    key="kontakt"
  >
    <NameWrapper>
      <label htmlFor="configuratorName">Imię</label>
      <input
        type="text"
        name="configuratorName"
        id="configuratorName"
        placeholder="Imię"
      />
    </NameWrapper>
    <EmailWrapper>
      <label htmlFor="configuratorEmail">Email</label>
      <input
        type="email"
        name="configuratorEmail"
        id="configuratorEmail"
        placeholder="Email"
      />
      <AnimatePresence exitBeforeEnter>
        <MessageStyles
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          EMAIL ERROR
        </MessageStyles>
      </AnimatePresence>
    </EmailWrapper>
    <RocketIcon />
  </LastStyles>
)
