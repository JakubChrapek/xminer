import React from "react"
import { motion } from "framer-motion"
import styled, { keyframes } from "styled-components"

const moveCircleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0px);
  }

  12% {
    opacity: 0.2;
  }

  24% {
    opacity: 0.8;
  }

  48% {
    opacity: 1;
  }
  

  84% {
    opacity: 0.7;

  }

  100% {
    transform: translateY(-42px);
    opacity: 0
  }
`

const SvgStyles = styled.svg`
  /* #g1,
  #g2,
  #g3,
  #g4,
  #g5,
  #g6,
  #g7,
  #g8,
  #l1,
  #l2,
  #l3,
  #l4,
  #l5,
  #l6 {
    animation-name: ${moveCircleAnimation};
    animation-duration: 2250ms;
    animation-delay: 0ms;
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }
  #g2 {
    animation-delay: 250ms;
    animation-duration: 1850ms;
  }
  #g3 {
    animation-delay: 350ms;
    animation-duration: 3050ms;
  }
  #g4 {
    animation-delay: 120ms;
    animation-duration: 1550ms;
  }
  #g5 {
    animation-delay: 780ms;
    animation-duration: 2450ms;
  }
  #g6 {
    animation-delay: 610ms;
    animation-duration: 3250ms;
  }

  #g7 {
    animation-delay: 420ms;
    animation-duration: 1150ms;
  }
  #g8 {
    animation-delay: 880ms;
    animation-duration: 1880ms;
  }
  #l1 {
    animation-delay: 280ms;
    animation-duration: 2170ms;
  }
  #l2 {
    animation-delay: 520ms;
    animation-duration: 2950ms;
  }
  #l3 {
    animation-delay: 713ms;
    animation-duration: 2331ms;
  }
  #l4 {
    animation-delay: 1195ms;
    animation-duration: 2650ms;
  }
  #l5 {
    animation-delay: 559ms;
    animation-duration: 3850ms;
  }
  #l6 {
    animation-delay: 113ms;
    animation-duration: 2950ms;
  } */
`

export const HeroIcon = () => (
  <SvgStyles
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 569 506"
  >
    <g id="hero-icon">
      <g id="dots-1">
        <g id="konkretna-nazwa" fill="#2EC5CE">
          <path id="ellipse-57" d="M289 49a3 3 0 100-7 3 3 0 000 7z" />
          <path id="ellipse-54" d="M4 219a3 3 0 100-6 3 3 0 000 6z" />
          <path id="ellipse-62" d="M469 488a3 3 0 100-7 3 3 0 000 7z" />
          <path id="ellipse-63" d="M233 406a3 3 0 100-7 3 3 0 000 7z" />
          <path id="ellipse-64" d="M530 354a3 3 0 100-6 3 3 0 000 6z" />
          <path id="ellipse-65" d="M308 413a3 3 0 100-7 3 3 0 000 7z" />
          <path id="ellipse-66" d="M145 189a3 3 0 100-7 3 3 0 000 7z" />
          <path id="ellipse-68" d="M15 505a3 3 0 100-6 3 3 0 000 6z" />
        </g>
      </g>
      <g id="Asset-1-1">
        <g id="Group">
          <g id="Layer-2">
            <g id="whole-icon">
              <path
                id="Vector"
                fill="#312A91"
                d="M314 256l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_2"
                fill="#312A91"
                d="M314 246l-58-34 58-33 59 33-59 34z"
              />
              <path
                id="Vector_3"
                fill="url(#paint0_linear)"
                d="M314 239l-45-27 45-26 45 26-45 27z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_4"
                fill="url(#paint1_linear)"
                d="M373 212v10l-59 34v-10l59-34z"
              />
              <path
                id="Vector_5"
                fill="#312A91"
                d="M256 212v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_6"
                fill="url(#paint2_linear)"
                d="M256 212v10l58 34v-10l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_7"
                fill="#312A91"
                d="M314 236l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_8"
                fill="#312A91"
                d="M314 226l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_9"
                fill="url(#paint3_linear)"
                d="M314 226l-58-34 58-34 59 34-59 34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_10"
                fill="#42E8E0"
                d="M314 205l-21-13 21-12 22 12-22 13z"
                opacity=".3"
              />
              <path
                id="Vector_11"
                fill="#42E8E0"
                d="M314 188l15 8 7-4-22-12-21 12 7 4 14-8z"
                opacity=".3"
              />
              <path
                id="Vector_12"
                fill="#42E8E0"
                d="M314 188l15 8 7-4-22-12-21 12 7 4 14-8z"
              />
              <path
                id="Vector_13"
                fill="url(#paint4_linear)"
                d="M373 192v10l-59 34v-10l59-34z"
              />
              <path
                id="Vector_14"
                fill="#312A91"
                d="M256 192v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_15"
                fill="url(#paint5_linear)"
                d="M256 192v10l58 34v-10l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_16"
                fill="#42E8E0"
                d="M314 236v10l-58-34v-10l58 34z"
                opacity=".3"
              />
              <path
                id="Vector_17"
                fill="#42E8E0"
                d="M269 209v3l45 27 45-27v-3l-45 27-45-27z"
                opacity=".3"
              />
              <path
                id="Vector_18"
                fill="#42E8E0"
                d="M314 236v3l-45-27v-3l45 27z"
                opacity=".3"
              />
              <path
                id="Vector_19"
                fill="#5CFFF3"
                d="M256 202v10l58 34 59-34v-10l-59 34-58-34z"
                opacity=".5"
              />
              <path
                id="Vector_20"
                fill="url(#paint6_linear)"
                d="M257 192l58-33-1-1-58 34 58 34 1-1-58-33z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_21"
                fill="#42E8E0"
                d="M256 202v10l1 1v-11h-1z"
                opacity=".5"
              />
              <path
                id="Vector_22"
                fill="#42E8E0"
                d="M373 202v10l-1 1v-11h1z"
                opacity=".5"
              />
              <path
                id="Vector_23"
                fill="#42E8E0"
                d="M314 236l-1-1v10l1 1 2-1v-10l-2 1z"
                opacity=".5"
              />
              <path
                id="Vector_24"
                fill="#312A91"
                d="M314 217l-58-33 58-34 59 34-59 33z"
              />
              <path
                id="Vector_25"
                fill="#312A91"
                d="M314 208l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_26"
                fill="url(#paint7_linear)"
                d="M314 200l-45-26 45-26 45 26-45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_27"
                fill="url(#paint8_linear)"
                d="M373 174v10l-59 33v-9l59-34z"
              />
              <path
                id="Vector_28"
                fill="#312A91"
                d="M256 174v10l58 33v-9l-58-34z"
              />
              <path
                id="Vector_29"
                fill="url(#paint9_linear)"
                d="M256 174v10l58 33v-9l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_30"
                fill="#312A91"
                d="M314 197l-58-34 58-33 59 33-59 34z"
              />
              <path
                id="Vector_31"
                fill="#312A91"
                d="M314 187l-58-33 58-34 59 34-59 33z"
              />
              <path
                id="Vector_32"
                fill="url(#paint10_linear)"
                d="M314 187l-58-33 58-34 59 34-59 33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_33"
                fill="#42E8E0"
                d="M314 166l-21-12 21-13 22 13-22 12z"
                opacity=".3"
              />
              <path
                id="Vector_34"
                fill="#42E8E0"
                d="M314 150l15 8 7-4-22-13-21 13 7 4 14-8z"
                opacity=".3"
              />
              <path
                id="Vector_35"
                fill="#42E8E0"
                d="M314 150l15 8 7-4-22-13-21 13 7 4 14-8z"
              />
              <path
                id="Vector_36"
                fill="url(#paint11_linear)"
                d="M373 154v9l-59 34v-10l59-33z"
              />
              <path
                id="Vector_37"
                fill="#312A91"
                d="M256 154v9l58 34v-10l-58-33z"
              />
              <path
                id="Vector_38"
                fill="url(#paint12_linear)"
                d="M256 154v9l58 34v-10l-58-33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_39"
                fill="#42E8E0"
                d="M314 197v11l-58-34v-11l58 34z"
                opacity=".3"
              />
              <path
                id="Vector_40"
                fill="#42E8E0"
                d="M269 171v3l45 26 45-26v-3l-45 26-45-26z"
                opacity=".3"
              />
              <path
                id="Vector_41"
                fill="#42E8E0"
                d="M314 197v3l-45-26v-3l45 26z"
                opacity=".3"
              />
              <path
                id="Vector_42"
                fill="#5CFFF3"
                d="M256 163v11l58 34 59-34v-11l-59 34-58-34z"
                opacity=".5"
              />
              <path
                id="Vector_43"
                fill="url(#paint13_linear)"
                d="M257 154l58-34h-1l-58 34 58 33h1l-58-33z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_44"
                fill="#42E8E0"
                d="M256 163v11h1v-10l-1-1z"
                opacity=".5"
              />
              <path
                id="Vector_45"
                fill="#42E8E0"
                d="M373 163v11h-1v-10l1-1z"
                opacity=".5"
              />
              <path
                id="Vector_46"
                fill="#42E8E0"
                d="M314 197l-1-1v11l1 1 2-1v-11l-2 1z"
                opacity=".5"
              />
              <path
                id="Vector_47"
                fill="#312A91"
                d="M314 179l-58-34 58-33 59 33-59 34z"
              />
              <path
                id="Vector_48"
                fill="#312A91"
                d="M314 169l-58-33 58-34 59 34-59 33z"
              />
              <path
                id="Vector_49"
                fill="url(#paint14_linear)"
                d="M314 162l-45-26 45-26 45 26-45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_50"
                fill="url(#paint15_linear)"
                d="M373 136v9l-59 34v-10l59-33z"
              />
              <path
                id="Vector_51"
                fill="#312A91"
                d="M256 136v9l58 34v-10l-58-33z"
              />
              <path
                id="Vector_52"
                fill="url(#paint16_linear)"
                d="M256 136v9l58 34v-10l-58-33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_53"
                fill="#312A91"
                d="M314 159l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_54"
                fill="#312A91"
                d="M314 149l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_55"
                fill="url(#paint17_linear)"
                d="M314 149l-58-34 58-34 59 34-59 34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_56"
                fill="#42E8E0"
                d="M314 128l-21-13 21-12 22 12-22 13z"
                opacity=".3"
              />
              <path
                id="Vector_57"
                fill="#42E8E0"
                d="M314 111l15 8 7-4-22-12-21 12 7 4 14-8z"
                opacity=".3"
              />
              <path
                id="Vector_58"
                fill="#42E8E0"
                d="M314 111l15 8 7-4-22-12-21 12 7 4 14-8z"
              />
              <path
                id="Vector_59"
                fill="url(#paint18_linear)"
                d="M373 115v10l-59 34v-10l59-34z"
              />
              <path
                id="Vector_60"
                fill="#312A91"
                d="M256 115v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_61"
                fill="url(#paint19_linear)"
                d="M256 115v10l58 34v-10l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_62"
                fill="#42E8E0"
                d="M314 159v10l-58-33v-11l58 34z"
                opacity=".3"
              />
              <path
                id="Vector_63"
                fill="#42E8E0"
                d="M269 133v3l45 26 45-26v-3l-45 26-45-26z"
                opacity=".3"
              />
              <path
                id="Vector_64"
                fill="#42E8E0"
                d="M314 159v3l-45-26v-3l45 26z"
                opacity=".3"
              />
              <path
                id="Vector_65"
                fill="#5CFFF3"
                d="M256 125v11l58 33 59-33v-11l-59 34-58-34z"
                opacity=".5"
              />
              <path
                id="Vector_66"
                fill="url(#paint20_linear)"
                d="M257 115l58-33-1-1-58 34 58 34h1l-58-34z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_67"
                fill="#42E8E0"
                d="M256 125v11h1v-11h-1z"
                opacity=".5"
              />
              <path
                id="Vector_68"
                fill="#42E8E0"
                d="M373 125v11h-1v-11h1z"
                opacity=".5"
              />
              <path
                id="Vector_69"
                fill="#42E8E0"
                d="M314 159l-1-1v11h3v-11l-2 1z"
                opacity=".5"
              />
              <path
                id="Vector_70"
                fill="#312A91"
                d="M314 141l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_71"
                fill="#312A91"
                d="M314 131l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_72"
                fill="url(#paint21_linear)"
                d="M314 123l-45-26 45-26 45 26-45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_73"
                fill="url(#paint22_linear)"
                d="M373 97v10l-59 34v-10l59-34z"
              />
              <path
                id="Vector_74"
                fill="#312A91"
                d="M256 97v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_75"
                fill="url(#paint23_linear)"
                d="M256 97v10l58 34v-10l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_76"
                fill="#312A91"
                d="M314 120l-58-34 58-33 59 33-59 34z"
              />
              <path
                id="Vector_77"
                fill="#312A91"
                d="M314 111l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_78"
                fill="url(#paint24_linear)"
                d="M314 111l-58-34 58-34 59 34-59 34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_79"
                fill="#42E8E0"
                d="M314 89l-21-12 21-13 22 13-22 12z"
                opacity=".3"
              />
              <path
                id="Vector_80"
                fill="#42E8E0"
                d="M314 73l15 8 7-4-22-13-21 13 7 4 14-8z"
                opacity=".3"
              />
              <path
                id="Vector_81"
                fill="#42E8E0"
                d="M314 73l15 8 7-4-22-13-21 13 7 4 14-8z"
              />
              <path
                id="Vector_82"
                fill="url(#paint25_linear)"
                d="M373 77v9l-59 34v-9l59-34z"
              />
              <path
                id="Vector_83"
                fill="#312A91"
                d="M256 77v9l58 34v-9l-58-34z"
              />
              <path
                id="Vector_84"
                fill="url(#paint26_linear)"
                d="M256 77v9l58 34v-9l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_85"
                fill="#42E8E0"
                d="M314 120v11l-58-34V86l58 34z"
                opacity=".3"
              />
              <path
                id="Vector_86"
                fill="#42E8E0"
                d="M269 94v3l45 26 45-26v-3l-45 26-45-26z"
                opacity=".3"
              />
              <path
                id="Vector_87"
                fill="#42E8E0"
                d="M314 120v3l-45-26v-3l45 26z"
                opacity=".3"
              />
              <path
                id="Vector_88"
                fill="#5CFFF3"
                d="M256 86v11l58 34 59-34V86l-59 34-58-34z"
                opacity=".5"
              />
              <path
                id="Vector_89"
                fill="url(#paint27_linear)"
                d="M257 77l58-34h-1l-58 34 58 34 1-1-58-33z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_90"
                fill="#42E8E0"
                d="M256 86v11l1 1V87l-1-1z"
                opacity=".5"
              />
              <path
                id="Vector_91"
                fill="#42E8E0"
                d="M373 86v11l-1 1V87l1-1z"
                opacity=".5"
              />
              <path
                id="Vector_92"
                fill="#42E8E0"
                d="M314 120l-1-1v11l1 1 2-1v-11l-2 1z"
                opacity=".5"
              />
              <path
                id="Vector_93"
                fill="url(#paint28_linear)"
                d="M336 77l-1-76h-43l1 76 21 12 22-12z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_94"
                fill="#42E8E0"
                d="M297 50a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 012 0z"
                opacity=".3"
              />
              <path
                id="Vector_95"
                fill="#42E8E0"
                d="M304 38a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1z"
                opacity=".2"
              />
              <path
                id="Vector_96"
                fill="#42E8E0"
                d="M335 35a1 1 0 01-1 0 1 1 0 010-1 1 1 0 011 1z"
                opacity=".2"
              />
              <path
                id="Vector_97"
                fill="#42E8E0"
                d="M332 33a1 1 0 100-3 1 1 0 000 3z"
                opacity=".2"
              />
              <path
                id="Vector_98"
                fill="#42E8E0"
                d="M301 36a1 1 0 010 1 1 1 0 01-1-1 1 1 0 011 0z"
                opacity=".2"
              />
              <path
                id="Vector_99"
                fill="#42E8E0"
                d="M300 69a1 1 0 01-1 1 1 1 0 01-1-2 1 1 0 012 1z"
                opacity=".3"
              />
              <path
                id="Vector_100"
                fill="#42E8E0"
                d="M308 57a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 010-1 1 1 0 012 1z"
                opacity=".2"
              />
              <path
                id="Vector_101"
                fill="#42E8E0"
                d="M304 55a1 1 0 010 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 010 1z"
                opacity=".2"
              />
              <path
                id="Vector_102"
                fill="#42E8E0"
                d="M329 31a1 1 0 001 0 1 1 0 001-1 1 1 0 00-2 0 1 1 0 000 1z"
                opacity=".3"
              />
              <path
                id="Vector_103"
                fill="#42E8E0"
                d="M320 22a1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 0 1 1 0 000 1z"
                opacity=".2"
              />
              <path
                id="Vector_104"
                fill="#42E8E0"
                d="M293 26a1 1 0 001 0 1 1 0 001-1 1 1 0 00-1 0 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_105"
                fill="#42E8E0"
                d="M294 22a1 1 0 001 1 1 1 0 002-1 1 1 0 00-3-1 1 1 0 000 1z"
                opacity=".2"
              />
              <path
                id="Vector_106"
                fill="#42E8E0"
                d="M323 20a1 1 0 001 0 1 1 0 000-1 1 1 0 00-1 0v1z"
                opacity=".2"
              />
              <path
                id="Vector_107"
                fill="#42E8E0"
                d="M330 69a1 1 0 01-1 1 1 1 0 111-1z"
                opacity=".2"
              />
              <path
                id="Vector_108"
                fill="#42E8E0"
                d="M331 66a1 1 0 01-2 0 1 1 0 010-3 1 1 0 012 1 1 1 0 010 2z"
                opacity=".2"
              />
              <path
                id="Vector_109"
                fill="#42E8E0"
                d="M329 62a1 1 0 001 2 1 1 0 001-1 1 1 0 00-1-1h-1z"
                opacity=".3"
              />
              <path
                id="Vector_110"
                fill="#42E8E0"
                d="M331 52a1 1 0 000-2 1 1 0 000 2z"
                opacity=".2"
              />
              <path
                id="Vector_111"
                fill="#42E8E0"
                d="M333 50a1 1 0 000 1 1 1 0 001 0 1 1 0 000-1 1 1 0 00-1 0z"
                opacity=".2"
              />
              <path
                id="Vector_112"
                fill="#42E8E0"
                d="M297 31a1 1 0 01-1 1 1 1 0 111-1z"
                opacity=".3"
              />
              <path
                id="Vector_113"
                fill="#42E8E0"
                d="M304 20a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1z"
                opacity=".2"
              />
              <path
                id="Vector_114"
                fill="#42E8E0"
                d="M335 16a1 1 0 01-1 0 1 1 0 01-1 0 1 1 0 011-1 1 1 0 011 1z"
                opacity=".2"
              />
              <path
                id="Vector_115"
                fill="#42E8E0"
                d="M332 14a1 1 0 100-3 1 1 0 000 3z"
                opacity=".2"
              />
              <path
                id="Vector_116"
                fill="#42E8E0"
                d="M301 17a1 1 0 010 1 1 1 0 01-1 0 1 1 0 010-1 1 1 0 011 0z"
                opacity=".2"
              />
              <path
                id="Vector_117"
                fill="#42E8E0"
                d="M300 50a1 1 0 01-1 1 1 1 0 01-1-2 1 1 0 012 1z"
                opacity=".3"
              />
              <path
                id="Vector_118"
                fill="#42E8E0"
                d="M308 38a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 010-1 1 1 0 012 1z"
                opacity=".2"
              />
              <path
                id="Vector_119"
                fill="#42E8E0"
                d="M304 36a1 1 0 010 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 010 1z"
                opacity=".2"
              />
              <path
                id="Vector_120"
                fill="#42E8E0"
                d="M329 12a1 1 0 002 0 1 1 0 000-1h-1a1 1 0 00-1 1z"
                opacity=".3"
              />
              <path
                id="Vector_121"
                fill="#42E8E0"
                d="M320 3a1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_122"
                fill="#42E8E0"
                d="M293 7a1 1 0 001 0 1 1 0 001-1 1 1 0 00-1 0 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_123"
                fill="#42E8E0"
                d="M294 3a1 1 0 003 0 1 1 0 00-2-1 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_124"
                fill="#42E8E0"
                d="M323 1h1V0a1 1 0 00-1 0 1 1 0 000 1z"
                opacity=".2"
              />
              <path
                id="Vector_125"
                fill="#42E8E0"
                d="M330 51a1 1 0 01-1-1 1 1 0 011 0 1 1 0 010 1z"
                opacity=".2"
              />
              <path
                id="Vector_126"
                fill="#42E8E0"
                d="M331 47a1 1 0 01-2-1 1 1 0 012-1 1 1 0 010 2z"
                opacity=".2"
              />
              <path
                id="Vector_127"
                fill="#42E8E0"
                d="M329 44a1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1z"
                opacity=".3"
              />
              <path
                id="Vector_128"
                fill="#42E8E0"
                d="M330 31a1 1 0 101 2 1 1 0 10-1-2z"
                opacity=".2"
              />
              <path
                id="Vector_129"
                fill="#42E8E0"
                d="M333 32a1 1 0 001 0 1 1 0 000-1 1 1 0 00-1 1z"
                opacity=".2"
              />
              <g id="gorne-kropki" fill="#42E8E0">
                <path
                  id="g3"
                  d="M319 63a2 2 0 01-2 2 2 2 0 01-1-2 2 2 0 013 0z"
                  opacity=".9"
                />
                <path
                  id="g6"
                  d="M313 47a1 1 0 002 1 1 1 0 001-2 1 1 0 00-2-1 1 1 0 00-1 1v1z"
                  opacity=".9"
                />
                <path
                  id="g1"
                  d="M309 80a1 1 0 002 1 1 1 0 001-1 1 1 0 00-3-1v1z"
                  opacity=".9"
                />
                <path
                  id="g2"
                  d="M314 72a1 1 0 001 1 1 1 0 001-1 1 1 0 000-1 1 1 0 00-2 0 1 1 0 000 1z"
                  opacity=".9"
                />
                <path
                  id="g7"
                  d="M319 44a2 2 0 01-1 2 2 2 0 01-3-2 2 2 0 012-1 2 2 0 012 1z"
                  opacity=".9"
                />
                <path
                  id="g8"
                  d="M313 28a1 1 0 002 1 1 1 0 001-2 1 1 0 00-2-1 1 1 0 00-1 1v1z"
                  opacity=".9"
                />
                <path
                  id="g4"
                  d="M309 61a1 1 0 002 1 1 1 0 001-1 1 1 0 00-3 0z"
                  opacity=".9"
                />
                <path
                  id="g5"
                  d="M314 53a1 1 0 000 1 1 1 0 002-1 1 1 0 00-1-1 1 1 0 00-1 0 1 1 0 000 1z"
                  opacity=".9"
                />
              </g>
              <path
                id="Vector_130"
                fill="#88FFF3"
                d="M319 179a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_131"
                fill="#88FFF3"
                d="M322 178v-2l-1 1v2l1-1z"
              />
              <path
                id="Vector_132"
                fill="#88FFF3"
                d="M326 175a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_133"
                fill="#88FFF3"
                d="M352 161l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_134"
                fill="#88FFF3"
                d="M319 184a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_135"
                fill="#88FFF3"
                d="M323 182a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_136"
                fill="#88FFF3"
                d="M326 180a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_137"
                fill="#88FFF3"
                d="M352 166l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_138"
                fill="#88FFF3"
                d="M319 189a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_139"
                fill="#88FFF3"
                d="M323 187a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_140"
                fill="#88FFF3"
                d="M326 186a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_141"
                fill="#88FFF3"
                d="M352 171l-25 15v-2l25-15v2z"
              />
              <path
                id="Vector_142"
                fill="#88FFF3"
                d="M319 195a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_143"
                fill="#88FFF3"
                d="M323 193a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_144"
                fill="#88FFF3"
                d="M326 191a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_145"
                fill="#88FFF3"
                d="M352 177l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_146"
                fill="#88FFF3"
                d="M319 200a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path id="Vector_147" fill="#88FFF3" d="M322 199v-1h-1v2l1-1z" />
              <path
                id="Vector_148"
                fill="#88FFF3"
                d="M326 196a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_149"
                fill="#88FFF3"
                d="M352 182l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_150"
                fill="#88FFF3"
                d="M319 206a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_151"
                fill="#88FFF3"
                d="M323 204a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_152"
                fill="#88FFF3"
                d="M326 202a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_153"
                fill="#88FFF3"
                d="M352 188l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_154"
                fill="#88FFF3"
                d="M319 211a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_155"
                fill="#88FFF3"
                d="M323 209a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_156"
                fill="#88FFF3"
                d="M326 207a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_157"
                fill="#88FFF3"
                d="M352 193l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_158"
                fill="#88FFF3"
                d="M319 216a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_159"
                fill="#88FFF3"
                d="M322 215v-1l-1 1v1l1-1z"
              />
              <path
                id="Vector_160"
                fill="#88FFF3"
                d="M326 213a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_161"
                fill="#88FFF3"
                d="M352 198l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_162"
                fill="#88FFF3"
                d="M319 222a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_163"
                fill="#88FFF3"
                d="M323 220a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_164"
                fill="#88FFF3"
                d="M326 218a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_165"
                fill="#88FFF3"
                d="M352 204l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_166"
                fill="#88FFF3"
                d="M319 227a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_167"
                fill="#88FFF3"
                d="M323 225a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_168"
                fill="#88FFF3"
                d="M326 223a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_169"
                fill="#88FFF3"
                d="M352 209l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_170"
                fill="#88FFF3"
                d="M319 232a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path id="Vector_171" fill="#88FFF3" d="M322 232v-2l-1 1v1h1z" />
              <path
                id="Vector_172"
                fill="#88FFF3"
                d="M326 229a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_173"
                fill="#88FFF3"
                d="M352 214l-25 15v-2l25-15v2z"
              />
              <path
                id="Vector_174"
                fill="#88FFF3"
                d="M319 238a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_175"
                fill="#88FFF3"
                d="M323 236a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_176"
                fill="#88FFF3"
                d="M326 234a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_177"
                fill="#88FFF3"
                d="M352 220l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_178"
                fill="#88FFF3"
                d="M369 210l-14 9v-62l14-8v61z"
                opacity=".5"
              />
              <path
                id="Vector_179"
                fill="#88FFF3"
                d="M309 179a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_180"
                fill="#88FFF3"
                d="M306 177a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_181"
                fill="#88FFF3"
                d="M303 175a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_182"
                fill="#88FFF3"
                d="M276 161l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_183"
                fill="#88FFF3"
                d="M309 184a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_184"
                fill="#88FFF3"
                d="M306 182a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_185"
                fill="#88FFF3"
                d="M303 180a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_186"
                fill="#88FFF3"
                d="M276 166l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_187"
                fill="#88FFF3"
                d="M309 189a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_188"
                fill="#88FFF3"
                d="M306 187a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_189"
                fill="#88FFF3"
                d="M303 186a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_190"
                fill="#88FFF3"
                d="M276 171l25 15v-2l-25-15v2z"
              />
              <path
                id="Vector_191"
                fill="#88FFF3"
                d="M309 195a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_192"
                fill="#88FFF3"
                d="M306 193a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_193"
                fill="#88FFF3"
                d="M303 191a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_194"
                fill="#88FFF3"
                d="M276 177l25 14v-2l-25-14v2z"
              />
              <path
                id="Vector_195"
                fill="#88FFF3"
                d="M309 200a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_196"
                fill="#88FFF3"
                d="M306 198a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_197"
                fill="#88FFF3"
                d="M303 196a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_198"
                fill="#88FFF3"
                d="M276 182l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_199"
                fill="#88FFF3"
                d="M311 207v-1l-2-1v1c1 1 1 2 2 1z"
              />
              <path
                id="Vector_200"
                fill="#88FFF3"
                d="M306 204a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_201"
                fill="#88FFF3"
                d="M303 202a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_202"
                fill="#88FFF3"
                d="M276 188l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_203"
                fill="#88FFF3"
                d="M309 211a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_204"
                fill="#88FFF3"
                d="M306 209a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_205"
                fill="#88FFF3"
                d="M303 207a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_206"
                fill="#88FFF3"
                d="M276 193l25 14v-2l-25-14v2z"
              />
              <path
                id="Vector_207"
                fill="#88FFF3"
                d="M309 216a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_208"
                fill="#88FFF3"
                d="M306 214a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_209"
                fill="#88FFF3"
                d="M303 213a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_210"
                fill="#88FFF3"
                d="M276 198l25 15v-3l-25-14v2z"
              />
              <path id="Vector_211" fill="#88FFF3" d="M311 223v-1l-2-1v2h2z" />
              <path
                id="Vector_212"
                fill="#88FFF3"
                d="M306 220a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_213"
                fill="#88FFF3"
                d="M303 218a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_214"
                fill="#88FFF3"
                d="M276 204l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_215"
                fill="#88FFF3"
                d="M309 227a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_216"
                fill="#88FFF3"
                d="M306 225a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_217"
                fill="#88FFF3"
                d="M303 223a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_218"
                fill="#88FFF3"
                d="M276 209l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_219"
                fill="#88FFF3"
                d="M309 232a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_220"
                fill="#88FFF3"
                d="M306 231a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_221"
                fill="#88FFF3"
                d="M303 229a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_222"
                fill="#88FFF3"
                d="M276 214l25 15v-2l-25-15v2z"
              />
              <path
                id="Vector_223"
                fill="#88FFF3"
                d="M311 240v-2l-2-1v2l2 1z"
              />
              <path
                id="Vector_224"
                fill="#88FFF3"
                d="M306 236a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_225"
                fill="#88FFF3"
                d="M303 234a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_226"
                fill="#88FFF3"
                d="M276 220l25 14v-2l-25-14v2z"
              />
              <path
                id="Vector_227"
                fill="#88FFF3"
                d="M259 210l15 9v-62l-15-8v61z"
                opacity=".5"
              />
              <path
                id="Vector_228"
                fill="#FCCC6B"
                d="M316 105v2a2 2 0 01-2 0v-2a2 2 0 012 0z"
              />
              <path
                id="Vector_229"
                fill="#FCCC6B"
                d="M320 103v2a2 2 0 01-2 0 1 1 0 01-1-1 1 1 0 011-1 2 2 0 012 0z"
              />
              <path
                id="Vector_230"
                fill="#FCCC6B"
                d="M323 101v2a2 2 0 01-2 0 1 1 0 010-2 2 2 0 012 0z"
              />
              <path
                id="Vector_231"
                fill="#FCCC6B"
                d="M323 101v2a2 2 0 01-2 0 1 1 0 010-2 2 2 0 012 0z"
              />
              <path
                id="Vector_232"
                fill="#FCCC6B"
                d="M327 99v2a2 2 0 01-2 0v-2a2 2 0 012 0z"
              />
              <path
                id="Vector_233"
                fill="#FCCC6B"
                d="M329 99l2-1-2-1-1 1 1 1z"
              />
              <path
                id="Vector_234"
                fill="#FCCC6B"
                d="M353 84a1 1 0 010 1 3 3 0 01-2 0 1 1 0 010-1 3 3 0 012 0z"
              />
              <path
                id="Vector_235"
                fill="#FCCC6B"
                d="M357 82a1 1 0 010 1 3 3 0 01-2 0 1 1 0 01-1-1 1 1 0 011 0 3 3 0 012 0z"
              />
              <path
                id="Vector_236"
                fill="#FCCC6B"
                d="M360 80a1 1 0 011 0 1 1 0 01-1 1 3 3 0 01-2 0 1 1 0 010-1 3 3 0 012 0z"
              />
              <path
                id="Vector_237"
                fill="#FCCC6B"
                d="M360 80a1 1 0 011 0 1 1 0 01-1 1 3 3 0 01-2 0 1 1 0 010-1 3 3 0 012 0z"
              />
              <path
                id="Vector_238"
                fill="#FCCC6B"
                d="M364 78v1a2 2 0 01-2 0v-1a2 2 0 012 0z"
              />
              <path
                id="Vector_239"
                fill="#FCCC6B"
                d="M367 76v1a2 2 0 01-2 0v-1a2 2 0 012 0z"
              />
              <path
                id="Vector_240"
                fill="#312A91"
                d="M233 302l59-33-59-34-58 34 58 33z"
              />
              <path
                id="Vector_241"
                fill="#312A91"
                d="M233 293l59-34-59-34-58 34 58 34z"
              />
              <path
                id="Vector_242"
                fill="url(#paint29_linear)"
                d="M233 285l45-26-45-26-45 26 45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_243"
                fill="url(#paint30_linear)"
                d="M175 259v10l58 33v-9l-58-34z"
              />
              <path
                id="Vector_244"
                fill="#312A91"
                d="M292 259v10l-59 33v-9l59-34z"
              />
              <path
                id="Vector_245"
                fill="url(#paint31_linear)"
                d="M292 259v10l-59 33v-9l59-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_246"
                fill="#312A91"
                d="M233 282l59-34-59-33-58 33 58 34z"
              />
              <path
                id="Vector_247"
                fill="#312A91"
                d="M233 272l59-33-59-34-58 34 58 33z"
              />
              <path
                id="Vector_248"
                fill="url(#paint32_linear)"
                d="M233 272l59-33-59-34-58 34 58 33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_249"
                fill="#42E8E0"
                d="M233 251l22-12-22-13-21 13 21 12z"
                opacity=".3"
              />
              <path
                id="Vector_250"
                fill="#42E8E0"
                d="M233 235l-14 8-7-4 21-13 22 13-7 4-15-8z"
                opacity=".3"
              />
              <path
                id="Vector_251"
                fill="#42E8E0"
                d="M233 235l-14 8-7-4 21-13 22 13-7 4-15-8z"
              />
              <path
                id="Vector_252"
                fill="url(#paint33_linear)"
                d="M175 239v9l58 34v-10l-58-33z"
              />
              <path
                id="Vector_253"
                fill="#312A91"
                d="M292 239v9l-59 34v-10l59-33z"
              />
              <path
                id="Vector_254"
                fill="url(#paint34_linear)"
                d="M292 239v9l-59 34v-10l59-33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_255"
                fill="#42E8E0"
                d="M233 282v11l59-34v-11l-59 34z"
                opacity=".3"
              />
              <path
                id="Vector_256"
                fill="#42E8E0"
                d="M278 256v3l-45 26-45-26v-3l45 26 45-26z"
                opacity=".3"
              />
              <path
                id="Vector_257"
                fill="#42E8E0"
                d="M233 282v3l45-26v-3l-45 26z"
                opacity=".3"
              />
              <path
                id="Vector_258"
                fill="#5CFFF3"
                d="M292 248v11l-59 34-58-34v-11l58 34 59-34z"
                opacity=".5"
              />
              <path
                id="Vector_259"
                fill="url(#paint35_linear)"
                d="M290 239l-57-34 59 34-59 33 57-33z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_260"
                fill="#42E8E0"
                d="M292 248v11h-1v-10l1-1z"
                opacity=".5"
              />
              <path
                id="Vector_261"
                fill="#42E8E0"
                d="M175 248v11h1v-10l-1-1z"
                opacity=".5"
              />
              <path
                id="Vector_262"
                fill="#42E8E0"
                d="M233 282l2-1v11l-2 1-1-1v-11l1 1z"
                opacity=".5"
              />
              <path
                id="Vector_263"
                fill="#312A91"
                d="M233 264l59-34-59-34-58 34 58 34z"
              />
              <path
                id="Vector_264"
                fill="#312A91"
                d="M233 254l59-33-59-34-58 34 58 33z"
              />
              <path
                id="Vector_265"
                fill="url(#paint36_linear)"
                d="M233 247l45-26-45-27-45 27 45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_266"
                fill="url(#paint37_linear)"
                d="M175 221v9l58 34v-10l-58-33z"
              />
              <path
                id="Vector_267"
                fill="#312A91"
                d="M292 221v9l-59 34v-10l59-33z"
              />
              <path
                id="Vector_268"
                fill="url(#paint38_linear)"
                d="M292 221v9l-59 34v-10l59-33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_269"
                fill="#312A91"
                d="M233 244l59-34-59-34-58 34 58 34z"
              />
              <path
                id="Vector_270"
                fill="#312A91"
                d="M233 234l59-34-59-34-58 34 58 34z"
              />
              <path
                id="Vector_271"
                fill="url(#paint39_linear)"
                d="M233 234l59-34-59-34-58 34 58 34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_272"
                fill="#42E8E0"
                d="M233 213l22-13-22-12-21 12 21 13z"
                opacity=".3"
              />
              <path
                id="Vector_273"
                fill="#42E8E0"
                d="M233 196l-14 8-7-4 21-12 22 12-7 4-15-8z"
                opacity=".3"
              />
              <path
                id="Vector_274"
                fill="#42E8E0"
                d="M233 196l-14 8-7-4 21-12 22 12-7 4-15-8z"
              />
              <path
                id="Vector_275"
                fill="url(#paint40_linear)"
                d="M175 200v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_276"
                fill="#312A91"
                d="M292 200v10l-59 34v-10l59-34z"
              />
              <path
                id="Vector_277"
                fill="url(#paint41_linear)"
                d="M292 200v10l-59 34v-10l59-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_278"
                fill="#42E8E0"
                d="M233 244v10l59-33v-11l-59 34z"
                opacity=".3"
              />
              <path
                id="Vector_279"
                fill="#42E8E0"
                d="M278 218v3l-45 26-45-26v-3l45 26 45-26z"
                opacity=".3"
              />
              <path
                id="Vector_280"
                fill="#42E8E0"
                d="M233 244v3l45-26v-3l-45 26z"
                opacity=".3"
              />
              <path
                id="Vector_281"
                fill="#5CFFF3"
                d="M292 210v11l-59 33-58-33v-11l58 34 59-34z"
                opacity=".5"
              />
              <path
                id="Vector_282"
                fill="url(#paint42_linear)"
                d="M290 200l-57-33v-1l59 34-59 34 57-34z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_283"
                fill="#42E8E0"
                d="M292 210v11h-1v-11h1z"
                opacity=".5"
              />
              <path
                id="Vector_284"
                fill="#42E8E0"
                d="M175 210v11h1v-11h-1z"
                opacity=".5"
              />
              <path
                id="Vector_285"
                fill="#42E8E0"
                d="M233 244l2-1v11h-3v-11l1 1z"
                opacity=".5"
              />
              <path
                id="Vector_286"
                fill="#312A91"
                d="M233 226l59-34-59-34-58 34 58 34z"
              />
              <path
                id="Vector_287"
                fill="#312A91"
                d="M233 216l59-34-59-34-58 34 58 34z"
              />
              <path
                id="Vector_288"
                fill="url(#paint43_linear)"
                d="M233 208l45-26-45-26-45 26 45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_289"
                fill="url(#paint44_linear)"
                d="M175 182v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_290"
                fill="#312A91"
                d="M292 182v10l-59 34v-10l59-34z"
              />
              <path
                id="Vector_291"
                fill="url(#paint45_linear)"
                d="M292 182v10l-59 34v-10l59-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_292"
                fill="#312A91"
                d="M233 205l59-34-59-33-58 33 58 34z"
              />
              <path
                id="Vector_293"
                fill="#312A91"
                d="M233 195l59-33-59-34-58 34 58 33z"
              />
              <path
                id="Vector_294"
                fill="url(#paint46_linear)"
                d="M233 195l59-33-59-34-58 34 58 33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_295"
                fill="#42E8E0"
                d="M233 174l22-12-22-13-21 13 21 12z"
                opacity=".3"
              />
              <path
                id="Vector_296"
                fill="#42E8E0"
                d="M233 158l-14 8-7-4 21-13 22 13-7 4-15-8z"
                opacity=".3"
              />
              <path
                id="Vector_297"
                fill="#42E8E0"
                d="M233 158l-14 8-7-4 21-13 22 13-7 4-15-8z"
              />
              <path
                id="Vector_298"
                fill="url(#paint47_linear)"
                d="M175 162v9l58 34v-10l-58-33z"
              />
              <path
                id="Vector_299"
                fill="#312A91"
                d="M292 162v9l-59 34v-10l59-33z"
              />
              <path
                id="Vector_300"
                fill="url(#paint48_linear)"
                d="M292 162v9l-59 34v-10l59-33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_301"
                fill="#42E8E0"
                d="M233 205v11l59-34v-11l-59 34z"
                opacity=".3"
              />
              <path
                id="Vector_302"
                fill="#42E8E0"
                d="M278 179v3l-45 26-45-26v-3l45 26 45-26z"
                opacity=".3"
              />
              <path
                id="Vector_303"
                fill="#42E8E0"
                d="M233 205v3l45-26v-3l-45 26z"
                opacity=".3"
              />
              <path
                id="Vector_304"
                fill="#5CFFF3"
                d="M292 171v11l-59 34-58-34v-11l58 34 59-34z"
                opacity=".5"
              />
              <path
                id="Vector_305"
                fill="url(#paint49_linear)"
                d="M290 162l-57-34 59 34-59 33 57-33z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_306"
                fill="#42E8E0"
                d="M292 171v11l-1 1v-11l1-1z"
                opacity=".5"
              />
              <path
                id="Vector_307"
                fill="#42E8E0"
                d="M175 171v11l1 1v-11l-1-1z"
                opacity=".5"
              />
              <path
                id="Vector_308"
                fill="#42E8E0"
                d="M233 205l2-1v11l-2 1-1-1v-11l1 1z"
                opacity=".5"
              />
              <path
                id="Vector_309"
                fill="#312A91"
                d="M233 187l59-34-59-33-58 33 58 34z"
              />
              <path
                id="Vector_310"
                fill="#312A91"
                d="M233 177l59-33-59-34-58 34 58 33z"
              />
              <path
                id="Vector_311"
                fill="url(#paint50_linear)"
                d="M233 170l45-26-45-26-45 26 45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_312"
                fill="url(#paint51_linear)"
                d="M175 144v9l58 34v-10l-58-33z"
              />
              <path
                id="Vector_313"
                fill="#312A91"
                d="M292 144v9l-59 34v-10l59-33z"
              />
              <path
                id="Vector_314"
                fill="url(#paint52_linear)"
                d="M292 144v9l-59 34v-10l59-33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_315"
                fill="#312A91"
                d="M233 167l59-34-59-34-58 34 58 34z"
              />
              <path
                id="Vector_316"
                fill="#312A91"
                d="M233 157l59-34-59-33-58 33 58 34z"
              />
              <path
                id="Vector_317"
                fill="url(#paint53_linear)"
                d="M233 157l59-34-59-33-58 33 58 34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_318"
                fill="#42E8E0"
                d="M233 136l22-13-22-12-21 12 21 13z"
                opacity=".3"
              />
              <path
                id="Vector_319"
                fill="#42E8E0"
                d="M233 119l-14 9-7-5 21-12 22 12-7 5-15-9z"
                opacity=".3"
              />
              <path
                id="Vector_320"
                fill="#42E8E0"
                d="M233 119l-14 9-7-5 21-12 22 12-7 5-15-9z"
              />
              <path
                id="Vector_321"
                fill="url(#paint54_linear)"
                d="M175 123v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_322"
                fill="#312A91"
                d="M292 123v10l-59 34v-10l59-34z"
              />
              <path
                id="Vector_323"
                fill="url(#paint55_linear)"
                d="M292 123v10l-59 34v-10l59-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_324"
                fill="#42E8E0"
                d="M233 167v10l59-33v-11l-59 34z"
                opacity=".3"
              />
              <path
                id="Vector_325"
                fill="#42E8E0"
                d="M278 141v3l-45 26-45-26v-3l45 26 45-26z"
                opacity=".3"
              />
              <path
                id="Vector_326"
                fill="#42E8E0"
                d="M233 167v3l45-26v-3l-45 26z"
                opacity=".3"
              />
              <path
                id="Vector_327"
                fill="#5CFFF3"
                d="M292 133v11l-59 33-58-33v-11l58 34 59-34z"
                opacity=".5"
              />
              <path
                id="Vector_328"
                fill="url(#paint56_linear)"
                d="M290 123l-57-33 59 33-59 34 57-34z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_329"
                fill="#42E8E0"
                d="M292 133v11h-1v-11h1z"
                opacity=".5"
              />
              <path
                id="Vector_330"
                fill="#42E8E0"
                d="M175 133v11h1v-11h-1z"
                opacity=".5"
              />
              <path
                id="Vector_331"
                fill="#42E8E0"
                d="M233 167l2-1v11h-3v-11l1 1z"
                opacity=".5"
              />
              <path
                id="Vector_332"
                fill="url(#paint57_linear)"
                d="M212 123l1-75h42v75l-22 13-21-13z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_333"
                fill="#42E8E0"
                d="M250 96a1 1 0 001 1 1 1 0 001-1 1 1 0 00-2 0z"
                opacity=".3"
              />
              <path
                id="Vector_334"
                fill="#42E8E0"
                d="M243 85a1 1 0 001 1 1 1 0 001-1 1 1 0 10-2 0z"
                opacity=".2"
              />
              <path
                id="Vector_335"
                fill="#42E8E0"
                d="M213 81a1 1 0 001 1 1 1 0 000-1 1 1 0 000-1 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_336"
                fill="#42E8E0"
                d="M216 79a1 1 0 100-3 1 1 0 000 3z"
                opacity=".2"
              />
              <path
                id="Vector_337"
                fill="#42E8E0"
                d="M246 83a1 1 0 001 0 1 1 0 001 0 1 1 0 00-1-1 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_338"
                fill="#42E8E0"
                d="M247 115a1 1 0 001 1 1 1 0 001-1 1 1 0 00-2 0z"
                opacity=".3"
              />
              <path
                id="Vector_339"
                fill="#42E8E0"
                d="M240 104a1 1 0 001 1 1 1 0 001-1 1 1 0 000-1 1 1 0 00-2 0v1z"
                opacity=".2"
              />
              <path
                id="Vector_340"
                fill="#42E8E0"
                d="M243 102a1 1 0 002-1 1 1 0 00-1 0 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_341"
                fill="#42E8E0"
                d="M219 77a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1z"
                opacity=".3"
              />
              <path
                id="Vector_342"
                fill="#42E8E0"
                d="M227 69a1 1 0 01-1-1 1 1 0 011 1z"
                opacity=".2"
              />
              <path
                id="Vector_343"
                fill="#42E8E0"
                d="M254 72a1 1 0 01-1 0 1 1 0 111 0z"
                opacity=".2"
              />
              <path
                id="Vector_344"
                fill="#42E8E0"
                d="M253 69a1 1 0 11-2-1 1 1 0 012-1 1 1 0 010 2z"
                opacity=".2"
              />
              <path
                id="Vector_345"
                fill="#42E8E0"
                d="M225 66a1 1 0 01-1 0 1 1 0 011-1 1 1 0 010 1z"
                opacity=".2"
              />
              <path id="Vector_346" fill="#42E8E0" d="M218 116z" opacity=".2" />
              <path
                id="Vector_347"
                fill="#42E8E0"
                d="M216 112a1 1 0 002 0 1 1 0 00-2-2 1 1 0 000 2z"
                opacity=".2"
              />
              <path
                id="Vector_348"
                fill="#42E8E0"
                d="M218 109a1 1 0 010 1 1 1 0 01-1 0 1 1 0 011-1z"
                opacity=".3"
              />
              <path
                id="Vector_349"
                fill="#42E8E0"
                d="M218 97a1 1 0 11-1-1 1 1 0 011 1z"
                opacity=".2"
              />
              <path
                id="Vector_350"
                fill="#42E8E0"
                d="M214 97a1 1 0 010 1 1 1 0 01-1 0 1 1 0 011-1z"
                opacity=".2"
              />
              <path
                id="Vector_351"
                fill="#42E8E0"
                d="M250 78a1 1 0 002 1 1 1 0 000-1 1 1 0 00-2-1v1z"
                opacity=".3"
              />
              <path
                id="Vector_352"
                fill="#42E8E0"
                d="M244 67a1 1 0 100-2 1 1 0 000 2z"
                opacity=".2"
              />
              <path
                id="Vector_353"
                fill="#42E8E0"
                d="M213 62a1 1 0 001 1 1 1 0 000-1 1 1 0 00-1 0z"
                opacity=".2"
              />
              <path
                id="Vector_354"
                fill="#42E8E0"
                d="M216 60a1 1 0 100-3 1 1 0 000 3z"
                opacity=".2"
              />
              <path
                id="Vector_355"
                fill="#42E8E0"
                d="M246 64a1 1 0 001 0 1 1 0 001 0 1 1 0 00-1-1 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_356"
                fill="#42E8E0"
                d="M247 96a1 1 0 102 0 1 1 0 00-2 0z"
                opacity=".3"
              />
              <path
                id="Vector_357"
                fill="#42E8E0"
                d="M241 86a1 1 0 100-2 1 1 0 000 2z"
                opacity=".2"
              />
              <path
                id="Vector_358"
                fill="#42E8E0"
                d="M243 83a1 1 0 001 0 1 1 0 001-1 1 1 0 00-2 1z"
                opacity=".2"
              />
              <path
                id="Vector_359"
                fill="#42E8E0"
                d="M219 58a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1z"
                opacity=".3"
              />
              <path
                id="Vector_360"
                fill="#42E8E0"
                d="M227 50a1 1 0 010 1 1 1 0 01-1-2 1 1 0 011 0 1 1 0 010 1z"
                opacity=".2"
              />
              <path
                id="Vector_361"
                fill="#42E8E0"
                d="M254 53a1 1 0 01-1 1 1 1 0 010-1 1 1 0 011 0z"
                opacity=".2"
              />
              <path
                id="Vector_362"
                fill="#42E8E0"
                d="M253 50a1 1 0 01-1 1 1 1 0 011-3 1 1 0 010 2z"
                opacity=".2"
              />
              <path
                id="Vector_363"
                fill="#42E8E0"
                d="M225 47a1 1 0 010 1h-1a1 1 0 010-1 1 1 0 011 0z"
                opacity=".2"
              />
              <path
                id="Vector_364"
                fill="#42E8E0"
                d="M218 97a1 1 0 101-1 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_365"
                fill="#42E8E0"
                d="M216 93a1 1 0 103-1 1 1 0 00-3 1z"
                opacity=".2"
              />
              <path
                id="Vector_366"
                fill="#42E8E0"
                d="M219 91l-1-1h-1v1h2z"
                opacity=".3"
              />
              <path
                id="Vector_367"
                fill="#42E8E0"
                d="M218 78a1 1 0 11-2 1 1 1 0 012-1z"
                opacity=".2"
              />
              <path
                id="Vector_368"
                fill="#42E8E0"
                d="M214 78a1 1 0 010 1 1 1 0 01-1 0 1 1 0 010-1 1 1 0 011 0z"
                opacity=".2"
              />
              <g id="lewe-kropki" fill="#42E8E0">
                <path
                  id="l1"
                  d="M229 110a2 2 0 103 0 2 2 0 00-3 0z"
                  opacity=".9"
                />
                <path
                  id="l4"
                  d="M234 93a1 1 0 01-2 1 1 1 0 01-1-1 1 1 0 113 0z"
                  opacity=".9"
                />
                <g id="Group_2" opacity=".9">
                  <path
                    id="l2"
                    d="M238 126a1 1 0 01-1 2 1 1 0 01-2-2 1 1 0 011-1 1 1 0 012 1z"
                    opacity=".9"
                  />
                  <path id="l3" d="M234 119z" opacity=".9" />
                </g>
                <path
                  id="l5"
                  d="M229 91a2 2 0 003 1 2 2 0 00-2-3 2 2 0 00-1 2z"
                  opacity=".9"
                />
                <path
                  id="l6"
                  d="M234 74a1 1 0 01-2 1 1 1 0 010-2 1 1 0 012 1z"
                  opacity=".9"
                />
                <g id="Group_3" opacity=".9">
                  <path
                    id="Vector_369"
                    d="M238 108a1 1 0 01-2 1 1 1 0 112-3 1 1 0 010 2z"
                    opacity=".9"
                  />
                  <path
                    id="Vector_370"
                    d="M234 100a1 1 0 01-2 0v-1a1 1 0 011-1 1 1 0 011 2z"
                    opacity=".9"
                  />
                </g>
              </g>
              <path
                id="Vector_371"
                fill="#5CFFF3"
                d="M233 157v145l-58-33V123l58 34z"
                opacity=".5"
              />
              <path
                id="Vector_372"
                fill="#88FFF3"
                d="M228 161a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_373"
                fill="#88FFF3"
                d="M225 159a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_374"
                fill="#88FFF3"
                d="M222 157a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_375"
                fill="#88FFF3"
                d="M195 143l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_376"
                fill="#88FFF3"
                d="M228 167a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_377"
                fill="#88FFF3"
                d="M225 165a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_378"
                fill="#88FFF3"
                d="M222 163a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_379"
                fill="#88FFF3"
                d="M195 149l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_380"
                fill="#88FFF3"
                d="M228 172a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_381"
                fill="#88FFF3"
                d="M225 170a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_382"
                fill="#88FFF3"
                d="M222 168a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_383"
                fill="#88FFF3"
                d="M195 154l25 14v-2l-25-14v2z"
              />
              <path
                id="Vector_384"
                fill="#88FFF3"
                d="M228 177a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_385"
                fill="#88FFF3"
                d="M225 175a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_386"
                fill="#88FFF3"
                d="M222 174a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_387"
                fill="#88FFF3"
                d="M195 159l25 15v-2l-25-15v2z"
              />
              <path
                id="Vector_388"
                fill="#88FFF3"
                d="M228 183a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_389"
                fill="#88FFF3"
                d="M225 181a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_390"
                fill="#88FFF3"
                d="M222 179a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_391"
                fill="#88FFF3"
                d="M195 165l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_392"
                fill="#88FFF3"
                d="M228 188a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_393"
                fill="#88FFF3"
                d="M225 186a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_394"
                fill="#88FFF3"
                d="M222 184a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_395"
                fill="#88FFF3"
                d="M195 170l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_396"
                fill="#88FFF3"
                d="M228 193a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_397"
                fill="#88FFF3"
                d="M225 192a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_398"
                fill="#88FFF3"
                d="M222 190a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_399"
                fill="#88FFF3"
                d="M195 176l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_400"
                fill="#88FFF3"
                d="M228 199a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_401"
                fill="#88FFF3"
                d="M225 197a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_402"
                fill="#88FFF3"
                d="M222 195a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_403"
                fill="#88FFF3"
                d="M195 181l25 14v-2l-25-14v2z"
              />
              <path
                id="Vector_404"
                fill="#88FFF3"
                d="M228 204a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_405"
                fill="#88FFF3"
                d="M225 202a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_406"
                fill="#88FFF3"
                d="M222 200a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_407"
                fill="#88FFF3"
                d="M195 186l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_408"
                fill="#88FFF3"
                d="M228 210a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_409"
                fill="#88FFF3"
                d="M225 208a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_410"
                fill="#88FFF3"
                d="M222 206a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_411"
                fill="#88FFF3"
                d="M195 192l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_412"
                fill="#88FFF3"
                d="M228 215a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_413"
                fill="#88FFF3"
                d="M225 213a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_414"
                fill="#88FFF3"
                d="M222 211a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_415"
                fill="#88FFF3"
                d="M195 197l25 14v-2l-25-14v2z"
              />
              <path
                id="Vector_416"
                fill="#88FFF3"
                d="M228 220a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_417"
                fill="#88FFF3"
                d="M225 218a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_418"
                fill="#88FFF3"
                d="M222 217a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_419"
                fill="#88FFF3"
                d="M195 202l25 15v-2l-25-15v2z"
              />
              <path
                id="Vector_420"
                fill="#88FFF3"
                d="M178 193l15 8v-61l-15-9v62z"
                opacity=".5"
              />
              <path
                id="Vector_421"
                fill="#88FFF3"
                d="M228 225a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_422"
                fill="#88FFF3"
                d="M225 223a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_423"
                fill="#88FFF3"
                d="M222 221a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_424"
                fill="#88FFF3"
                d="M195 207l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_425"
                fill="#88FFF3"
                d="M228 231a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_426"
                fill="#88FFF3"
                d="M225 229a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_427"
                fill="#88FFF3"
                d="M222 227a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_428"
                fill="#88FFF3"
                d="M195 213l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_429"
                fill="#88FFF3"
                d="M228 236a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_430"
                fill="#88FFF3"
                d="M225 234a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_431"
                fill="#88FFF3"
                d="M222 232a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_432"
                fill="#88FFF3"
                d="M195 218l25 14v-2l-25-14v2z"
              />
              <path
                id="Vector_433"
                fill="#88FFF3"
                d="M228 241a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_434"
                fill="#88FFF3"
                d="M225 239a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_435"
                fill="#88FFF3"
                d="M222 238a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_436"
                fill="#88FFF3"
                d="M195 223l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_437"
                fill="#88FFF3"
                d="M228 247a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_438"
                fill="#88FFF3"
                d="M225 245a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_439"
                fill="#88FFF3"
                d="M222 243a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_440"
                fill="#88FFF3"
                d="M195 229l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_441"
                fill="#88FFF3"
                d="M228 252a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_442"
                fill="#88FFF3"
                d="M225 250a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_443"
                fill="#88FFF3"
                d="M222 248a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_444"
                fill="#88FFF3"
                d="M195 234l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_445"
                fill="#88FFF3"
                d="M228 257a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_446"
                fill="#88FFF3"
                d="M225 256a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_447"
                fill="#88FFF3"
                d="M222 254a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_448"
                fill="#88FFF3"
                d="M195 239l25 15v-2l-25-15v2z"
              />
              <path
                id="Vector_449"
                fill="#88FFF3"
                d="M228 263a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_450"
                fill="#88FFF3"
                d="M225 261a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_451"
                fill="#88FFF3"
                d="M222 259a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_452"
                fill="#88FFF3"
                d="M195 245l25 14v-2l-25-14v2z"
              />
              <path
                id="Vector_453"
                fill="#88FFF3"
                d="M228 268a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_454"
                fill="#88FFF3"
                d="M225 266a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_455"
                fill="#88FFF3"
                d="M222 264a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_456"
                fill="#88FFF3"
                d="M195 250l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_457"
                fill="#88FFF3"
                d="M228 274a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_458"
                fill="#88FFF3"
                d="M225 272a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_459"
                fill="#88FFF3"
                d="M222 270a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_460"
                fill="#88FFF3"
                d="M195 256l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_461"
                fill="#88FFF3"
                d="M228 279a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_462"
                fill="#88FFF3"
                d="M225 277a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_463"
                fill="#88FFF3"
                d="M222 275a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_464"
                fill="#88FFF3"
                d="M195 261l25 14v-2l-25-14v2z"
              />
              <path
                id="Vector_465"
                fill="#88FFF3"
                d="M228 284a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_466"
                fill="#88FFF3"
                d="M225 282a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_467"
                fill="#88FFF3"
                d="M222 281a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_468"
                fill="#88FFF3"
                d="M195 266l25 15v-2l-25-15v2z"
              />
              <path
                id="Vector_469"
                fill="#88FFF3"
                d="M178 257l15 8v-61l-15-9v62z"
                opacity=".5"
              />
              <path
                id="Vector_470"
                fill="#FCCC6B"
                d="M231 152v1a2 2 0 002 0 1 1 0 001-1 1 1 0 00-1 0 2 2 0 00-2 0z"
              />
              <path
                id="Vector_471"
                fill="#FCCC6B"
                d="M228 150v1a2 2 0 002 0 1 1 0 000-1 2 2 0 00-2 0z"
              />
              <path
                id="Vector_472"
                fill="#FCCC6B"
                d="M224 148v1a2 2 0 002 0v-1a2 2 0 00-2 0z"
              />
              <path
                id="Vector_473"
                fill="#FCCC6B"
                d="M224 148v1a2 2 0 002 0v-1a2 2 0 00-2 0z"
              />
              <path
                id="Vector_474"
                fill="#FCCC6B"
                d="M221 146a1 1 0 00-1 1 1 1 0 001 0 3 3 0 002 0v-1a2 2 0 00-2 0z"
              />
              <path
                id="Vector_475"
                fill="#FCCC6B"
                d="M217 144a1 1 0 000 1 3 3 0 003 0 1 1 0 000-1 3 3 0 00-3 0z"
              />
              <path
                id="Vector_476"
                fill="#FCCC6B"
                d="M194 130a1 1 0 000 1 1 1 0 000 1 2 2 0 002 0v-2a3 3 0 00-2 0z"
              />
              <path
                id="Vector_477"
                fill="#FCCC6B"
                d="M191 128v2a2 2 0 002 0v-2a2 2 0 00-2 0z"
              />
              <path
                id="Vector_478"
                fill="#FCCC6B"
                d="M187 126v2a2 2 0 002 0v-2a2 2 0 00-2 0z"
              />
              <path
                id="Vector_479"
                fill="#FCCC6B"
                d="M187 126v2a2 2 0 002 0v-2a2 2 0 00-2 0z"
              />
              <path
                id="Vector_480"
                fill="#FCCC6B"
                d="M184 124v2a2 2 0 002 0v-2a2 2 0 00-2 0z"
              />
              <path
                id="Vector_481"
                fill="#FCCC6B"
                d="M180 122v2a2 2 0 003 0 1 1 0 000-1 1 1 0 000-1 2 2 0 00-3 0z"
              />
              <path
                id="Vector_482"
                fill="#312A91"
                d="M395 302l-58-33 58-34 58 34-58 33z"
              />
              <path
                id="Vector_483"
                fill="#312A91"
                d="M395 293l-58-34 58-34 58 34-58 34z"
              />
              <path
                id="Vector_484"
                fill="url(#paint58_linear)"
                d="M395 285l-45-26 45-26 45 26-45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_485"
                fill="url(#paint59_linear)"
                d="M453 259v10l-58 33v-9l58-34z"
              />
              <path
                id="Vector_486"
                fill="#312A91"
                d="M337 259v10l58 33v-9l-58-34z"
              />
              <path
                id="Vector_487"
                fill="url(#paint60_linear)"
                d="M337 259v10l58 33v-9l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_488"
                fill="#312A91"
                d="M395 282l-58-34 58-33 58 33-58 34z"
              />
              <path
                id="Vector_489"
                fill="#312A91"
                d="M395 272l-58-33 58-34 58 34-58 33z"
              />
              <path
                id="Vector_490"
                fill="url(#paint61_linear)"
                d="M395 272l-58-33 58-34 58 34-58 33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_491"
                fill="#42E8E0"
                d="M395 251l-21-12 21-13 22 13-22 12z"
                opacity=".3"
              />
              <path
                id="Vector_492"
                fill="#42E8E0"
                d="M395 235l14 8 8-4-22-13-21 13 7 4 14-8z"
                opacity=".3"
              />
              <path
                id="Vector_493"
                fill="#42E8E0"
                d="M395 235l14 8 8-4-22-13-21 13 7 4 14-8z"
              />
              <path
                id="Vector_494"
                fill="url(#paint62_linear)"
                d="M453 239v9l-58 34v-10l58-33z"
              />
              <path
                id="Vector_495"
                fill="#312A91"
                d="M337 239v9l58 34v-10l-58-33z"
              />
              <path
                id="Vector_496"
                fill="url(#paint63_linear)"
                d="M337 239v9l58 34v-10l-58-33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_497"
                fill="#42E8E0"
                d="M395 282v11l-58-34v-11l58 34z"
                opacity=".3"
              />
              <path
                id="Vector_498"
                fill="#42E8E0"
                d="M350 256v3l45 26 45-26v-3l-45 26-45-26z"
                opacity=".3"
              />
              <path
                id="Vector_499"
                fill="#42E8E0"
                d="M395 282v3l-45-26v-3l45 26z"
                opacity=".3"
              />
              <path
                id="Vector_500"
                fill="#5CFFF3"
                d="M337 248v11l58 34 58-34v-11l-58 34-58-34z"
                opacity=".5"
              />
              <path
                id="Vector_501"
                fill="url(#paint64_linear)"
                d="M338 239l58-34h-1l-58 34 58 33h1l-58-33z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_502"
                fill="#42E8E0"
                d="M337 248v11h1v-10l-1-1z"
                opacity=".5"
              />
              <path
                id="Vector_503"
                fill="#42E8E0"
                d="M453 248v11-11z"
                opacity=".5"
              />
              <path
                id="Vector_504"
                fill="#42E8E0"
                d="M395 282l-1-1v11l1 1 2-1v-11l-2 1z"
                opacity=".5"
              />
              <path
                id="Vector_505"
                fill="#312A91"
                d="M395 264l-58-34 58-34 58 34-58 34z"
              />
              <path
                id="Vector_506"
                fill="#312A91"
                d="M395 254l-58-33 58-34 58 34-58 33z"
              />
              <path
                id="Vector_507"
                fill="url(#paint65_linear)"
                d="M395 247l-45-26 45-27 45 27-45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_508"
                fill="url(#paint66_linear)"
                d="M453 221v9l-58 34v-10l58-33z"
              />
              <path
                id="Vector_509"
                fill="#312A91"
                d="M337 221v9l58 34v-10l-58-33z"
              />
              <path
                id="Vector_510"
                fill="url(#paint67_linear)"
                d="M337 221v9l58 34v-10l-58-33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_511"
                fill="#312A91"
                d="M395 244l-58-34 58-34 58 34-58 34z"
              />
              <path
                id="Vector_512"
                fill="#312A91"
                d="M395 234l-58-34 58-34 58 34-58 34z"
              />
              <path
                id="Vector_513"
                fill="url(#paint68_linear)"
                d="M395 234l-58-34 58-34 58 34-58 34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_514"
                fill="#42E8E0"
                d="M395 213l-21-13 21-12 22 12-22 13z"
                opacity=".3"
              />
              <path
                id="Vector_515"
                fill="#42E8E0"
                d="M395 196l14 8 8-4-22-12-21 12 7 4 14-8z"
                opacity=".3"
              />
              <path
                id="Vector_516"
                fill="#42E8E0"
                d="M395 196l14 8 8-4-22-12-21 12 7 4 14-8z"
              />
              <path
                id="Vector_517"
                fill="url(#paint69_linear)"
                d="M453 200v10l-58 34v-10l58-34z"
              />
              <path
                id="Vector_518"
                fill="#312A91"
                d="M337 200v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_519"
                fill="url(#paint70_linear)"
                d="M337 200v10l58 34v-10l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_520"
                fill="#42E8E0"
                d="M395 244v10l-58-33v-11l58 34z"
                opacity=".3"
              />
              <path
                id="Vector_521"
                fill="#42E8E0"
                d="M350 218v3l45 26 45-26v-3l-45 26-45-26z"
                opacity=".3"
              />
              <path
                id="Vector_522"
                fill="#42E8E0"
                d="M395 244v3l-45-26v-3l45 26z"
                opacity=".3"
              />
              <path
                id="Vector_523"
                fill="#5CFFF3"
                d="M337 210v11l58 33 58-33v-11l-58 34-58-34z"
                opacity=".5"
              />
              <path
                id="Vector_524"
                fill="url(#paint71_linear)"
                d="M338 200l58-33-1-1-58 34 58 34h1l-58-34z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_525"
                fill="#42E8E0"
                d="M337 210v11h1v-11h-1z"
                opacity=".5"
              />
              <path
                id="Vector_526"
                fill="#42E8E0"
                d="M453 210v11-11z"
                opacity=".5"
              />
              <path
                id="Vector_527"
                fill="#42E8E0"
                d="M395 244l-1-1v11h3v-11l-2 1z"
                opacity=".5"
              />
              <path
                id="Vector_528"
                fill="#312A91"
                d="M395 226l-58-34 58-34 58 34-58 34z"
              />
              <path
                id="Vector_529"
                fill="#312A91"
                d="M395 216l-58-34 58-34 58 34-58 34z"
              />
              <path
                id="Vector_530"
                fill="url(#paint72_linear)"
                d="M395 208l-45-26 45-26 45 26-45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_531"
                fill="url(#paint73_linear)"
                d="M453 182v10l-58 34v-10l58-34z"
              />
              <path
                id="Vector_532"
                fill="#312A91"
                d="M337 182v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_533"
                fill="url(#paint74_linear)"
                d="M337 182v10l58 34v-10l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_534"
                fill="#312A91"
                d="M395 205l-58-34 58-33 58 33-58 34z"
              />
              <path
                id="Vector_535"
                fill="#312A91"
                d="M395 195l-58-33 58-34 58 34-58 33z"
              />
              <path
                id="Vector_536"
                fill="url(#paint75_linear)"
                d="M395 195l-58-33 58-34 58 34-58 33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_537"
                fill="#42E8E0"
                d="M395 174l-21-12 21-13 22 13-22 12z"
                opacity=".3"
              />
              <path
                id="Vector_538"
                fill="#42E8E0"
                d="M395 158l14 8 8-4-22-13-21 13 7 4 14-8z"
                opacity=".3"
              />
              <path
                id="Vector_539"
                fill="#42E8E0"
                d="M395 158l14 8 8-4-22-13-21 13 7 4 14-8z"
              />
              <path
                id="Vector_540"
                fill="url(#paint76_linear)"
                d="M453 162v9l-58 34v-10l58-33z"
              />
              <path
                id="Vector_541"
                fill="#312A91"
                d="M337 162v9l58 34v-10l-58-33z"
              />
              <path
                id="Vector_542"
                fill="url(#paint77_linear)"
                d="M337 162v9l58 34v-10l-58-33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_543"
                fill="#42E8E0"
                d="M395 205v11l-58-34v-11l58 34z"
                opacity=".3"
              />
              <path
                id="Vector_544"
                fill="#42E8E0"
                d="M350 179v3l45 26 45-26v-3l-45 26-45-26z"
                opacity=".3"
              />
              <path
                id="Vector_545"
                fill="#42E8E0"
                d="M395 205v3l-45-26v-3l45 26z"
                opacity=".3"
              />
              <path
                id="Vector_546"
                fill="#5CFFF3"
                d="M337 171v11l58 34 58-34v-11l-58 34-58-34z"
                opacity=".5"
              />
              <path
                id="Vector_547"
                fill="url(#paint78_linear)"
                d="M338 162l58-34h-1l-58 34 58 33h1l-58-33z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_548"
                fill="#42E8E0"
                d="M337 171v11l1 1v-11l-1-1z"
                opacity=".5"
              />
              <path
                id="Vector_549"
                fill="#42E8E0"
                d="M453 171v12-12z"
                opacity=".5"
              />
              <path
                id="Vector_550"
                fill="#42E8E0"
                d="M395 205l-1-1v11l1 1 2-1v-11l-2 1z"
                opacity=".5"
              />
              <path
                id="Vector_551"
                fill="#312A91"
                d="M395 187l-58-34 58-33 58 33-58 34z"
              />
              <path
                id="Vector_552"
                fill="#312A91"
                d="M395 177l-58-33 58-34 58 34-58 33z"
              />
              <path
                id="Vector_553"
                fill="url(#paint79_linear)"
                d="M395 170l-45-26 45-26 45 26-45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_554"
                fill="url(#paint80_linear)"
                d="M453 144v9l-58 34v-10l58-33z"
              />
              <path
                id="Vector_555"
                fill="#312A91"
                d="M337 144v9l58 34v-10l-58-33z"
              />
              <path
                id="Vector_556"
                fill="url(#paint81_linear)"
                d="M337 144v9l58 34v-10l-58-33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_557"
                fill="#312A91"
                d="M395 167l-58-34 58-34 58 34-58 34z"
              />
              <path
                id="Vector_558"
                fill="#312A91"
                d="M395 157l-58-34 58-33 58 33-58 34z"
              />
              <path
                id="Vector_559"
                fill="url(#paint82_linear)"
                d="M395 157l-58-34 58-33 58 33-58 34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_560"
                fill="#42E8E0"
                d="M395 136l-21-13 21-12 22 12-22 13z"
                opacity=".3"
              />
              <path
                id="Vector_561"
                fill="#42E8E0"
                d="M395 119l14 9 8-5-22-12-21 12 7 5 14-9z"
                opacity=".3"
              />
              <path
                id="Vector_562"
                fill="#42E8E0"
                d="M395 119l14 9 8-5-22-12-21 12 7 5 14-9z"
              />
              <path
                id="Vector_563"
                fill="url(#paint83_linear)"
                d="M453 123v10l-58 34v-10l58-34z"
              />
              <path
                id="Vector_564"
                fill="#312A91"
                d="M337 123v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_565"
                fill="url(#paint84_linear)"
                d="M337 123v10l58 34v-10l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_566"
                fill="#42E8E0"
                d="M395 167v10l-58-33v-11l58 34z"
                opacity=".3"
              />
              <path
                id="Vector_567"
                fill="#42E8E0"
                d="M350 141v3l45 26 45-26v-3l-45 26-45-26z"
                opacity=".3"
              />
              <path
                id="Vector_568"
                fill="#42E8E0"
                d="M395 167v3l-45-26v-3l45 26z"
                opacity=".3"
              />
              <path
                id="Vector_569"
                fill="#5CFFF3"
                d="M337 133v11l58 33 58-33v-11l-58 34-58-34z"
                opacity=".5"
              />
              <path
                id="Vector_570"
                fill="url(#paint85_linear)"
                d="M338 123l58-33h-1l-58 33 58 34h1l-58-34z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_571"
                fill="#42E8E0"
                d="M337 133v11h1v-11h-1z"
                opacity=".5"
              />
              <path
                id="Vector_572"
                fill="#42E8E0"
                d="M453 133v11-11z"
                opacity=".5"
              />
              <path
                id="Vector_573"
                fill="#42E8E0"
                d="M395 167l-1-1v11h3v-11l-2 1z"
                opacity=".5"
              />
              <path
                id="Vector_574"
                fill="url(#paint86_linear)"
                d="M417 123l-1-75h-43l1 75 21 13 22-13z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_575"
                fill="#42E8E0"
                d="M378 96a1 1 0 010 1 1 1 0 01-2 0 1 1 0 011-1 1 1 0 011 0z"
                opacity=".3"
              />
              <path
                id="Vector_576"
                fill="#42E8E0"
                d="M385 85a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 112 0z"
                opacity=".2"
              />
              <path
                id="Vector_577"
                fill="#42E8E0"
                d="M416 81a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1z"
                opacity=".2"
              />
              <path
                id="Vector_578"
                fill="#42E8E0"
                d="M412 79a1 1 0 100-3 1 1 0 000 3z"
                opacity=".2"
              />
              <path
                id="Vector_579"
                fill="#42E8E0"
                d="M382 83a1 1 0 01-1 0 1 1 0 011 0z"
                opacity=".2"
              />
              <path
                id="Vector_580"
                fill="#42E8E0"
                d="M381 115a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 012 0z"
                opacity=".3"
              />
              <path
                id="Vector_581"
                fill="#42E8E0"
                d="M388 104a1 1 0 01-1 0 1 1 0 010-1 1 1 0 011 1z"
                opacity=".2"
              />
              <path
                id="Vector_582"
                fill="#42E8E0"
                d="M385 102a1 1 0 01-1 0 1 1 0 010-1 1 1 0 011 0v1z"
                opacity=".2"
              />
              <path
                id="Vector_583"
                fill="#42E8E0"
                d="M410 77a1 1 0 101-1 1 1 0 00-1 1z"
                opacity=".3"
              />
              <path
                id="Vector_584"
                fill="#42E8E0"
                d="M401 69a1 1 0 001 0 1 1 0 001 0 1 1 0 000-1 1 1 0 00-2 1z"
                opacity=".2"
              />
              <path
                id="Vector_585"
                fill="#42E8E0"
                d="M374 72a1 1 0 001 0 1 1 0 001 0h-1a1 1 0 000-1 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_586"
                fill="#42E8E0"
                d="M375 69a1 1 0 002 1 1 1 0 001-1 1 1 0 00-1-2 1 1 0 00-1 0 1 1 0 00-1 2z"
                opacity=".2"
              />
              <path
                id="Vector_587"
                fill="#42E8E0"
                d="M403 66a1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1v1h-1z"
                opacity=".2"
              />
              <path
                id="Vector_588"
                fill="#42E8E0"
                d="M411 116a1 1 0 01-1 0 1 1 0 111 0z"
                opacity=".2"
              />
              <path
                id="Vector_589"
                fill="#42E8E0"
                d="M412 112a1 1 0 11-1-2 1 1 0 011 2z"
                opacity=".2"
              />
              <path
                id="Vector_590"
                fill="#42E8E0"
                d="M410 109a1 1 0 000 1 1 1 0 001 0 1 1 0 000-1 1 1 0 00-1 0z"
                opacity=".3"
              />
              <path
                id="Vector_591"
                fill="#42E8E0"
                d="M411 97a1 1 0 000 1 1 1 0 002-1 1 1 0 00-1 0 1 1 0 00-1 0z"
                opacity=".2"
              />
              <path
                id="Vector_592"
                fill="#42E8E0"
                d="M414 97a1 1 0 000 1 1 1 0 001 0 1 1 0 000-1 1 1 0 00-1 0z"
                opacity=".2"
              />
              <path
                id="Vector_593"
                fill="#42E8E0"
                d="M378 78a1 1 0 010 1 1 1 0 01-2-1 1 1 0 012-1 1 1 0 010 1z"
                opacity=".3"
              />
              <path
                id="Vector_594"
                fill="#42E8E0"
                d="M385 66a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 112 0z"
                opacity=".2"
              />
              <path
                id="Vector_595"
                fill="#42E8E0"
                d="M416 62a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011 0 1 1 0 011 0z"
                opacity=".2"
              />
              <path
                id="Vector_596"
                fill="#42E8E0"
                d="M412 60a1 1 0 100-3 1 1 0 000 3z"
                opacity=".2"
              />
              <path
                id="Vector_597"
                fill="#42E8E0"
                d="M382 64a1 1 0 01-1 1 1 1 0 010-1 1 1 0 011 0z"
                opacity=".2"
              />
              <path
                id="Vector_598"
                fill="#42E8E0"
                d="M381 96a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 012 0z"
                opacity=".3"
              />
              <path
                id="Vector_599"
                fill="#42E8E0"
                d="M387 86a1 1 0 100-2 1 1 0 000 2z"
                opacity=".2"
              />
              <path
                id="Vector_600"
                fill="#42E8E0"
                d="M385 83a1 1 0 01-1 0 1 1 0 011-1 1 1 0 010 1z"
                opacity=".2"
              />
              <path
                id="Vector_601"
                fill="#42E8E0"
                d="M410 58a1 1 0 001 1 1 1 0 001-1 1 1 0 00-2-1 1 1 0 000 1z"
                opacity=".3"
              />
              <path
                id="Vector_602"
                fill="#42E8E0"
                d="M401 50a1 1 0 001 0 1 1 0 001-1 1 1 0 00-1 0 1 1 0 00-1 0v1z"
                opacity=".2"
              />
              <path
                id="Vector_603"
                fill="#42E8E0"
                d="M374 53a1 1 0 001 1 1 1 0 000-1 1 1 0 000-1 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_604"
                fill="#42E8E0"
                d="M375 50a1 1 0 002-1 1 1 0 00-1-1 1 1 0 00-1 2z"
                opacity=".2"
              />
              <path
                id="Vector_605"
                fill="#42E8E0"
                d="M403 47a1 1 0 001 1 1 1 0 001-1 1 1 0 00-1 0h-1z"
                opacity=".2"
              />
              <path
                id="Vector_606"
                fill="#42E8E0"
                d="M411 97a1 1 0 11-1-1 1 1 0 011 1z"
                opacity=".2"
              />
              <path
                id="Vector_607"
                fill="#42E8E0"
                d="M412 93a1 1 0 01-2 0 1 1 0 012-1 1 1 0 010 1z"
                opacity=".2"
              />
              <path
                id="Vector_608"
                fill="#42E8E0"
                d="M410 90a1 1 0 000 1 1 1 0 001 0 1 1 0 10-1-1z"
                opacity=".3"
              />
              <path
                id="Vector_609"
                fill="#42E8E0"
                d="M411 78a1 1 0 000 1 1 1 0 001 0 1 1 0 000-1 1 1 0 00-1 0z"
                opacity=".2"
              />
              <path
                id="Vector_610"
                fill="#42E8E0"
                d="M414 78a1 1 0 000 1 1 1 0 001 0 1 1 0 000-1 1 1 0 00-1 0z"
                opacity=".2"
              />
              <g id="prawe-kropki" fill="#42E8E0">
                <path
                  id="p3"
                  d="M400 110a2 2 0 01-2 1 2 2 0 01-2-1 2 2 0 011-2 2 2 0 013 2z"
                  opacity=".9"
                />
                <path
                  id="p6"
                  d="M394 93a1 1 0 003 0 1 1 0 10-3 0z"
                  opacity=".9"
                />
                <path
                  id="p1"
                  d="M390 126a1 1 0 001 2 1 1 0 002-1 1 1 0 00-1-2 1 1 0 00-2 1z"
                  opacity=".9"
                />
                <path
                  id="p2"
                  d="M394 119a1 1 0 002 0 1 1 0 001-1 1 1 0 10-3 1z"
                  opacity=".9"
                />
                <path
                  id="p7"
                  d="M400 91a2 2 0 01-1 1 2 2 0 01-3-1 2 2 0 012-2 2 2 0 012 2z"
                  opacity=".9"
                />
                <path
                  id="p8"
                  d="M394 74a1 1 0 003 0 1 1 0 10-3 0z"
                  opacity=".9"
                />
                <path
                  id="p4"
                  d="M390 108a1 1 0 002 1 1 1 0 001-2 1 1 0 00-2-1 1 1 0 00-1 2z"
                  opacity=".9"
                />
                <path
                  id="p5"
                  d="M394 100a1 1 0 001 0 1 1 0 10-1 0z"
                  opacity=".9"
                />
              </g>
              <path
                id="Vector_611"
                fill="#5CFFF3"
                d="M395 157v145l58-33V123l-58 34z"
                opacity=".5"
              />
              <path
                id="Vector_612"
                fill="#88FFF3"
                d="M400 161a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_613"
                fill="#88FFF3"
                d="M404 159a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_614"
                fill="#88FFF3"
                d="M407 157a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_615"
                fill="#88FFF3"
                d="M433 143l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_616"
                fill="#88FFF3"
                d="M400 167a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path id="Vector_617" fill="#88FFF3" d="M403 166v-2l-1 1v1h1z" />
              <path
                id="Vector_618"
                fill="#88FFF3"
                d="M407 163a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_619"
                fill="#88FFF3"
                d="M433 149l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_620"
                fill="#88FFF3"
                d="M400 172a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_621"
                fill="#88FFF3"
                d="M404 170a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_622"
                fill="#88FFF3"
                d="M407 168a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_623"
                fill="#88FFF3"
                d="M433 154l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_624"
                fill="#88FFF3"
                d="M400 177a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_625"
                fill="#88FFF3"
                d="M404 175a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_626"
                fill="#88FFF3"
                d="M407 174a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_627"
                fill="#88FFF3"
                d="M433 159l-25 15v-2l25-15v2z"
              />
              <path
                id="Vector_628"
                fill="#88FFF3"
                d="M400 183a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_629"
                fill="#88FFF3"
                d="M403 182v-2l-1 1v2l1-1z"
              />
              <path
                id="Vector_630"
                fill="#88FFF3"
                d="M407 179a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_631"
                fill="#88FFF3"
                d="M433 165l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_632"
                fill="#88FFF3"
                d="M400 188a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_633"
                fill="#88FFF3"
                d="M404 186a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_634"
                fill="#88FFF3"
                d="M407 184a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_635"
                fill="#88FFF3"
                d="M433 170l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_636"
                fill="#88FFF3"
                d="M400 193a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_637"
                fill="#88FFF3"
                d="M404 192a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_638"
                fill="#88FFF3"
                d="M407 190a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_639"
                fill="#88FFF3"
                d="M433 176l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_640"
                fill="#88FFF3"
                d="M400 199a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_641"
                fill="#88FFF3"
                d="M403 198v-2l-1 1v2l1-1z"
              />
              <path
                id="Vector_642"
                fill="#88FFF3"
                d="M407 195a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_643"
                fill="#88FFF3"
                d="M433 181l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_644"
                fill="#88FFF3"
                d="M400 204a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_645"
                fill="#88FFF3"
                d="M404 202a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_646"
                fill="#88FFF3"
                d="M407 200a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_647"
                fill="#88FFF3"
                d="M433 186l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_648"
                fill="#88FFF3"
                d="M400 210a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_649"
                fill="#88FFF3"
                d="M404 208a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_650"
                fill="#88FFF3"
                d="M407 206a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_651"
                fill="#88FFF3"
                d="M433 192l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_652"
                fill="#88FFF3"
                d="M400 215a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_653"
                fill="#88FFF3"
                d="M404 213a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_654"
                fill="#88FFF3"
                d="M407 211a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_655"
                fill="#88FFF3"
                d="M433 197l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_656"
                fill="#88FFF3"
                d="M400 220a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_657"
                fill="#88FFF3"
                d="M403 219v-1l-1 1v1l1-1z"
              />
              <path
                id="Vector_658"
                fill="#88FFF3"
                d="M407 217a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_659"
                fill="#88FFF3"
                d="M433 202l-25 15v-2l25-15v2z"
              />
              <path
                id="Vector_660"
                fill="#88FFF3"
                d="M450 193l-14 8v-61l14-9v62z"
                opacity=".5"
              />
              <path
                id="Vector_661"
                fill="#88FFF3"
                d="M400 225a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_662"
                fill="#88FFF3"
                d="M404 223a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_663"
                fill="#88FFF3"
                d="M407 221a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_664"
                fill="#88FFF3"
                d="M433 207l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_665"
                fill="#88FFF3"
                d="M400 231a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_666"
                fill="#88FFF3"
                d="M404 229a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_667"
                fill="#88FFF3"
                d="M407 227a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_668"
                fill="#88FFF3"
                d="M433 213l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_669"
                fill="#88FFF3"
                d="M400 236a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_670"
                fill="#88FFF3"
                d="M404 234a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_671"
                fill="#88FFF3"
                d="M407 232a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_672"
                fill="#88FFF3"
                d="M433 218l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_673"
                fill="#88FFF3"
                d="M400 241a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_674"
                fill="#88FFF3"
                d="M404 239a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_675"
                fill="#88FFF3"
                d="M407 238a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_676"
                fill="#88FFF3"
                d="M433 223l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_677"
                fill="#88FFF3"
                d="M400 247a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path id="Vector_678" fill="#88FFF3" d="M404 244v-1h-1v2l1-1z" />
              <path
                id="Vector_679"
                fill="#88FFF3"
                d="M407 243a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_680"
                fill="#88FFF3"
                d="M433 229l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_681"
                fill="#88FFF3"
                d="M400 252a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_682"
                fill="#88FFF3"
                d="M404 250a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_683"
                fill="#88FFF3"
                d="M407 248a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_684"
                fill="#88FFF3"
                d="M433 234l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_685"
                fill="#88FFF3"
                d="M400 257a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_686"
                fill="#88FFF3"
                d="M404 256a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_687"
                fill="#88FFF3"
                d="M407 254a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_688"
                fill="#88FFF3"
                d="M433 239l-25 15v-2l25-15v2z"
              />
              <path
                id="Vector_689"
                fill="#88FFF3"
                d="M400 263a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_690"
                fill="#88FFF3"
                d="M403 262v-2l-1 1v2l1-1z"
              />
              <path
                id="Vector_691"
                fill="#88FFF3"
                d="M407 259a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_692"
                fill="#88FFF3"
                d="M433 245l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_693"
                fill="#88FFF3"
                d="M400 268a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_694"
                fill="#88FFF3"
                d="M404 266a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_695"
                fill="#88FFF3"
                d="M407 264a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_696"
                fill="#88FFF3"
                d="M433 250l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_697"
                fill="#88FFF3"
                d="M400 274a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_698"
                fill="#88FFF3"
                d="M404 272a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_699"
                fill="#88FFF3"
                d="M407 270a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_700"
                fill="#88FFF3"
                d="M433 256l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_701"
                fill="#88FFF3"
                d="M400 279a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_702"
                fill="#88FFF3"
                d="M403 278v-2l-1 1v2l1-1z"
              />
              <path
                id="Vector_703"
                fill="#88FFF3"
                d="M407 275a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_704"
                fill="#88FFF3"
                d="M433 261l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_705"
                fill="#88FFF3"
                d="M400 284a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_706"
                fill="#88FFF3"
                d="M404 282a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_707"
                fill="#88FFF3"
                d="M407 281a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_708"
                fill="#88FFF3"
                d="M433 266l-25 15v-2l25-15v2z"
              />
              <path
                id="Vector_709"
                fill="#88FFF3"
                d="M450 257l-14 8v-61l14-9v62z"
                opacity=".5"
              />
              <path
                id="Vector_710"
                fill="#FCCC6B"
                d="M397 152v1a2 2 0 01-2 0v-1a2 2 0 012 0z"
              />
              <path
                id="Vector_711"
                fill="#FCCC6B"
                d="M401 150v1a2 2 0 01-2 0v-1a2 2 0 012 0z"
              />
              <path
                id="Vector_712"
                fill="#FCCC6B"
                d="M404 148v1a2 2 0 01-2 0v-1a2 2 0 012 0z"
              />
              <path
                id="Vector_713"
                fill="#FCCC6B"
                d="M404 148v1a2 2 0 01-2 0v-1a2 2 0 012 0z"
              />
              <path
                id="Vector_714"
                fill="#FCCC6B"
                d="M408 146v1a3 3 0 01-3 0 1 1 0 010-1 2 2 0 013 0z"
              />
              <path
                id="Vector_715"
                fill="#FCCC6B"
                d="M411 144a1 1 0 010 1 3 3 0 01-2 0 1 1 0 01-1 0 1 1 0 011-1 3 3 0 012 0z"
              />
              <path
                id="Vector_716"
                fill="#FCCC6B"
                d="M434 130v2a2 2 0 01-2 0 1 1 0 010-2 3 3 0 012 0z"
              />
              <path
                id="Vector_717"
                fill="#FCCC6B"
                d="M438 128v2a2 2 0 01-2 0 1 1 0 01-1-1 1 1 0 011-1 2 2 0 012 0z"
              />
              <path
                id="Vector_718"
                fill="#FCCC6B"
                d="M441 126v2a2 2 0 01-2 0v-2a2 2 0 012 0z"
              />
              <path
                id="Vector_719"
                fill="#FCCC6B"
                d="M441 126v2a2 2 0 01-2 0v-2a2 2 0 012 0z"
              />
              <path
                id="Vector_720"
                fill="#FCCC6B"
                d="M445 124a1 1 0 010 1 1 1 0 010 1 2 2 0 01-2 0v-2a2 2 0 012 0z"
              />
              <path
                id="Vector_721"
                fill="#FCCC6B"
                d="M448 122a1 1 0 011 1 1 1 0 01-1 1 2 2 0 01-2 0v-2a2 2 0 012 0z"
              />
              <path
                id="Vector_722"
                fill="#312A91"
                d="M314 345l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_723"
                fill="#312A91"
                d="M314 335l-58-34 58-33 59 33-59 34z"
              />
              <path
                id="Vector_724"
                fill="url(#paint87_linear)"
                d="M314 327l-45-26 45-26 45 26-45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_725"
                fill="url(#paint88_linear)"
                d="M373 301v10l-59 34v-10l59-34z"
              />
              <path
                id="Vector_726"
                fill="#312A91"
                d="M256 301v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_727"
                fill="url(#paint89_linear)"
                d="M256 301v10l58 34v-10l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_728"
                fill="#312A91"
                d="M314 324l-58-33 58-34 59 34-59 33z"
              />
              <path
                id="Vector_729"
                fill="#312A91"
                d="M314 315l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_730"
                fill="url(#paint90_linear)"
                d="M314 315l-58-34 58-34 59 34-59 34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_731"
                fill="#42E8E0"
                d="M314 293l-21-12 21-13 22 13-22 12z"
                opacity=".3"
              />
              <path
                id="Vector_732"
                fill="#42E8E0"
                d="M314 277l15 8 7-4-22-13-21 13 7 4 14-8z"
                opacity=".3"
              />
              <path
                id="Vector_733"
                fill="#42E8E0"
                d="M314 277l15 8 7-4-22-13-21 13 7 4 14-8z"
              />
              <path
                id="Vector_734"
                fill="url(#paint91_linear)"
                d="M373 281v10l-59 33v-9l59-34z"
              />
              <path
                id="Vector_735"
                fill="#312A91"
                d="M256 281v10l58 33v-9l-58-34z"
              />
              <path
                id="Vector_736"
                fill="url(#paint92_linear)"
                d="M256 281v10l58 33v-9l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_737"
                fill="#42E8E0"
                d="M314 324v11l-58-34v-10l58 33z"
                opacity=".3"
              />
              <path
                id="Vector_738"
                fill="#42E8E0"
                d="M269 298v3l45 26 45-26v-3l-45 26-45-26z"
                opacity=".3"
              />
              <path
                id="Vector_739"
                fill="#42E8E0"
                d="M314 324v3l-45-26v-3l45 26z"
                opacity=".3"
              />
              <path
                id="Vector_740"
                fill="#5CFFF3"
                d="M256 291v10l58 34 59-34v-10l-59 33-58-33z"
                opacity=".5"
              />
              <path
                id="Vector_741"
                fill="url(#paint93_linear)"
                d="M257 281l58-33-1-1-58 34 58 34 1-1-58-33z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_742"
                fill="#42E8E0"
                d="M256 291v10l1 1v-11h-1z"
                opacity=".5"
              />
              <path
                id="Vector_743"
                fill="#42E8E0"
                d="M373 291v10l-1 1v-11h1z"
                opacity=".5"
              />
              <path
                id="Vector_744"
                fill="#42E8E0"
                d="M314 324h-1v10l1 1 2-1v-10h-2z"
                opacity=".5"
              />
              <path
                id="Vector_745"
                fill="#312A91"
                d="M314 306l-58-33 58-34 59 34-59 33z"
              />
              <path
                id="Vector_746"
                fill="#312A91"
                d="M314 297l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_747"
                fill="url(#paint94_linear)"
                d="M314 289l-45-26 45-26 45 26-45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_748"
                fill="url(#paint95_linear)"
                d="M373 263v10l-59 33v-9l59-34z"
              />
              <path
                id="Vector_749"
                fill="#312A91"
                d="M256 263v10l58 33v-9l-58-34z"
              />
              <path
                id="Vector_750"
                fill="url(#paint96_linear)"
                d="M256 263v10l58 33v-9l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_751"
                fill="#312A91"
                d="M314 286l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_752"
                fill="#312A91"
                d="M314 276l-58-34 58-33 59 33-59 34z"
              />
              <path
                id="Vector_753"
                fill="url(#paint97_linear)"
                d="M314 276l-58-34 58-33 59 33-59 34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_754"
                fill="#42E8E0"
                d="M314 255l-21-13 21-12 22 12-22 13z"
                opacity=".3"
              />
              <path
                id="Vector_755"
                fill="#42E8E0"
                d="M314 238l15 9 7-5-22-12-21 12 7 5 14-9z"
                opacity=".3"
              />
              <path
                id="Vector_756"
                fill="#42E8E0"
                d="M314 238l15 9 7-5-22-12-21 12 7 5 14-9z"
              />
              <path
                id="Vector_757"
                fill="url(#paint98_linear)"
                d="M373 242v10l-59 34v-10l59-34z"
              />
              <path
                id="Vector_758"
                fill="#312A91"
                d="M256 242v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_759"
                fill="url(#paint99_linear)"
                d="M256 242v10l58 34v-10l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_760"
                fill="#42E8E0"
                d="M314 286v11l-58-34v-11l58 34z"
                opacity=".3"
              />
              <path
                id="Vector_761"
                fill="#42E8E0"
                d="M269 260v3l45 26 45-26v-3l-45 26-45-26z"
                opacity=".3"
              />
              <path
                id="Vector_762"
                fill="#42E8E0"
                d="M314 286v3l-45-26v-3l45 26z"
                opacity=".3"
              />
              <path
                id="Vector_763"
                fill="#5CFFF3"
                d="M256 252v11l58 34 59-34v-11l-59 34-58-34z"
                opacity=".5"
              />
              <path
                id="Vector_764"
                fill="url(#paint100_linear)"
                d="M257 242l58-33h-1l-58 33 58 34h1l-58-34z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_765"
                fill="#42E8E0"
                d="M256 252v11h1v-10l-1-1z"
                opacity=".5"
              />
              <path
                id="Vector_766"
                fill="#42E8E0"
                d="M373 252v11h-1v-10l1-1z"
                opacity=".5"
              />
              <path
                id="Vector_767"
                fill="#42E8E0"
                d="M314 286l-1-1v11l1 1 2-1v-11l-2 1z"
                opacity=".5"
              />
              <path
                id="Vector_768"
                fill="#312A91"
                d="M314 268l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_769"
                fill="#312A91"
                d="M314 258l-58-34 58-33 59 33-59 34z"
              />
              <path
                id="Vector_770"
                fill="url(#paint101_linear)"
                d="M314 251l-45-27 45-26 45 26-45 27z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_771"
                fill="url(#paint102_linear)"
                d="M373 224v10l-59 34v-10l59-34z"
              />
              <path
                id="Vector_772"
                fill="#312A91"
                d="M256 224v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_773"
                fill="url(#paint103_linear)"
                d="M256 224v10l58 34v-10l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_774"
                fill="#312A91"
                d="M314 248l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_775"
                fill="#312A91"
                d="M314 238l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_776"
                fill="url(#paint104_linear)"
                d="M314 238l-58-34 58-34 59 34-59 34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_777"
                fill="#42E8E0"
                d="M314 217l-21-13 21-12 22 12-22 13z"
                opacity=".3"
              />
              <path
                id="Vector_778"
                fill="#42E8E0"
                d="M314 200l15 8 7-4-22-12-21 12 7 4 14-8z"
                opacity=".3"
              />
              <path
                id="Vector_779"
                fill="#42E8E0"
                d="M314 200l15 8 7-4-22-12-21 12 7 4 14-8z"
              />
              <path
                id="Vector_780"
                fill="url(#paint105_linear)"
                d="M373 204v10l-59 34v-10l59-34z"
              />
              <path
                id="Vector_781"
                fill="#312A91"
                d="M256 204v10l58 34v-10l-58-34z"
              />
              <path
                id="Vector_782"
                fill="url(#paint106_linear)"
                d="M256 204v10l58 34v-10l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_783"
                fill="#42E8E0"
                d="M314 248v10l-58-34v-10l58 34z"
                opacity=".3"
              />
              <path
                id="Vector_784"
                fill="#42E8E0"
                d="M269 221v3l45 27 45-27v-3l-45 27-45-27z"
                opacity=".3"
              />
              <path
                id="Vector_785"
                fill="#42E8E0"
                d="M314 248v3l-45-27v-3l45 27z"
                opacity=".3"
              />
              <path
                id="Vector_786"
                fill="#5CFFF3"
                d="M256 214v10l58 34 59-34v-10l-59 34-58-34z"
                opacity=".5"
              />
              <path
                id="Vector_787"
                fill="url(#paint107_linear)"
                d="M257 204l58-33-1-1-58 34 58 34 1-1-58-33z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_788"
                fill="#42E8E0"
                d="M256 214v10l1 1v-11h-1z"
                opacity=".5"
              />
              <path
                id="Vector_789"
                fill="#42E8E0"
                d="M373 214v10l-1 1v-11h1z"
                opacity=".5"
              />
              <path
                id="Vector_790"
                fill="#42E8E0"
                d="M314 248l-1-1v10l1 1 2-1v-10l-2 1z"
                opacity=".5"
              />
              <path
                id="Vector_791"
                fill="#312A91"
                d="M314 229l-58-33 58-34 59 34-59 33z"
              />
              <path
                id="Vector_792"
                fill="#312A91"
                d="M314 220l-58-34 58-34 59 34-59 34z"
              />
              <path
                id="Vector_793"
                fill="url(#paint108_linear)"
                d="M314 212l-45-26 45-26 45 26-45 26z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_794"
                fill="url(#paint109_linear)"
                d="M373 186v10l-59 33v-9l59-34z"
              />
              <path
                id="Vector_795"
                fill="#312A91"
                d="M256 186v10l58 33v-9l-58-34z"
              />
              <path
                id="Vector_796"
                fill="url(#paint110_linear)"
                d="M256 186v10l58 33v-9l-58-34z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_797"
                fill="#312A91"
                d="M314 209l-58-34 58-33 59 33-59 34z"
              />
              <path
                id="Vector_798"
                fill="#312A91"
                d="M314 199l-58-33 58-34 59 34-59 33z"
              />
              <path
                id="Vector_799"
                fill="url(#paint111_linear)"
                d="M314 199l-58-33 58-34 59 34-59 33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_800"
                fill="#42E8E0"
                d="M314 178l-21-12 21-13 22 13-22 12z"
                opacity=".3"
              />
              <path
                id="Vector_801"
                fill="#42E8E0"
                d="M314 162l15 8 7-4-22-13-21 13 7 4 14-8z"
                opacity=".3"
              />
              <path
                id="Vector_802"
                fill="#42E8E0"
                d="M314 162l15 8 7-4-22-13-21 13 7 4 14-8z"
              />
              <path
                id="Vector_803"
                fill="url(#paint112_linear)"
                d="M373 166v9l-59 34v-10l59-33z"
              />
              <path
                id="Vector_804"
                fill="#312A91"
                d="M256 166v9l58 34v-10l-58-33z"
              />
              <path
                id="Vector_805"
                fill="url(#paint113_linear)"
                d="M256 166v9l58 34v-10l-58-33z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_806"
                fill="#42E8E0"
                d="M314 209v11l-58-34v-11l58 34z"
                opacity=".3"
              />
              <path
                id="Vector_807"
                fill="#42E8E0"
                d="M269 183v3l45 26 45-26v-3l-45 26-45-26z"
                opacity=".3"
              />
              <path
                id="Vector_808"
                fill="#42E8E0"
                d="M314 209v3l-45-26v-3l45 26z"
                opacity=".3"
              />
              <path
                id="Vector_809"
                fill="#5CFFF3"
                d="M256 175v11l58 34 59-34v-11l-59 34-58-34z"
                opacity=".5"
              />
              <path
                id="Vector_810"
                fill="url(#paint114_linear)"
                d="M257 166l58-34h-1l-58 34 58 33h1l-58-33z"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_811"
                fill="#42E8E0"
                d="M256 175v11l1 1v-11l-1-1z"
                opacity=".5"
              />
              <path
                id="Vector_812"
                fill="#42E8E0"
                d="M373 175v11l-1 1v-11l1-1z"
                opacity=".5"
              />
              <path
                id="Vector_813"
                fill="#42E8E0"
                d="M314 209l-1-1v11l1 1 2-1v-11l-2 1z"
                opacity=".5"
              />
              <path
                id="Vector_814"
                fill="url(#paint115_linear)"
                d="M336 166l-1-76h-43l1 76 21 12 22-12z"
                opacity=".7"
                style={{ mixBlendMode: "lighten" }}
              />
              <path
                id="Vector_815"
                fill="#42E8E0"
                d="M297 139a1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 011 1z"
                opacity=".3"
              />
              <path
                id="Vector_816"
                fill="#42E8E0"
                d="M304 127a1 1 0 01-1 1 1 1 0 010-2 1 1 0 011 1z"
                opacity=".2"
              />
              <path
                id="Vector_817"
                fill="#42E8E0"
                d="M335 123a1 1 0 01-1 1 1 1 0 01-1 0 1 1 0 112-1z"
                opacity=".2"
              />
              <path
                id="Vector_818"
                fill="#42E8E0"
                d="M333 120a1 1 0 11-3-1 1 1 0 013 1z"
                opacity=".2"
              />
              <path
                id="Vector_819"
                fill="#42E8E0"
                d="M301 125a1 1 0 01-1 1 1 1 0 111-1z"
                opacity=".2"
              />
              <path
                id="Vector_820"
                fill="#42E8E0"
                d="M300 158a1 1 0 01-1 1 1 1 0 111-2 1 1 0 010 1z"
                opacity=".3"
              />
              <path
                id="Vector_821"
                fill="#42E8E0"
                d="M308 146a1 1 0 01-1 1 1 1 0 01-2-1 1 1 0 011-1 1 1 0 012 1z"
                opacity=".2"
              />
              <path
                id="Vector_822"
                fill="#42E8E0"
                d="M304 144a1 1 0 010 1 1 1 0 01-1-1 1 1 0 111 0z"
                opacity=".2"
              />
              <path
                id="Vector_823"
                fill="#42E8E0"
                d="M329 119a1 1 0 001 1 1 1 0 001-1 1 1 0 10-2 0z"
                opacity=".3"
              />
              <path
                id="Vector_824"
                fill="#42E8E0"
                d="M320 111a1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_825"
                fill="#42E8E0"
                d="M293 114a1 1 0 001 0h1a1 1 0 00-1 0h-1z"
                opacity=".2"
              />
              <path
                id="Vector_826"
                fill="#42E8E0"
                d="M294 111a1 1 0 001 1 1 1 0 001 0 1 1 0 10-2-1z"
                opacity=".2"
              />
              <path
                id="Vector_827"
                fill="#42E8E0"
                d="M323 108a1 1 0 000 1 1 1 0 001-1h-1z"
                opacity=".2"
              />
              <path
                id="Vector_828"
                fill="#42E8E0"
                d="M330 158a1 1 0 110-1 1 1 0 010 1z"
                opacity=".2"
              />
              <path
                id="Vector_829"
                fill="#42E8E0"
                d="M331 155a1 1 0 01-2 0 1 1 0 010-3 1 1 0 012 1 1 1 0 010 2z"
                opacity=".2"
              />
              <path
                id="Vector_830"
                fill="#42E8E0"
                d="M329 151a1 1 0 001 2 1 1 0 001-1 1 1 0 00-1-1h-1z"
                opacity=".3"
              />
              <path
                id="Vector_831"
                fill="#42E8E0"
                d="M330 139a1 1 0 001 1 1 1 0 00-1-1z"
                opacity=".2"
              />
              <path
                id="Vector_832"
                fill="#42E8E0"
                d="M333 139a1 1 0 000 1h1a1 1 0 000-1 1 1 0 00-1 0z"
                opacity=".2"
              />
              <path
                id="Vector_833"
                fill="#42E8E0"
                d="M297 120a1 1 0 01-1 1 1 1 0 111-1z"
                opacity=".3"
              />
              <path
                id="Vector_834"
                fill="#42E8E0"
                d="M304 108a1 1 0 01-1 1 1 1 0 010-2 1 1 0 011 1z"
                opacity=".2"
              />
              <path
                id="Vector_835"
                fill="#42E8E0"
                d="M335 105a1 1 0 01-2 0v-1a1 1 0 011 0l1 1z"
                opacity=".2"
              />
              <path
                id="Vector_836"
                fill="#42E8E0"
                d="M332 102a1 1 0 100-2 1 1 0 000 2z"
                opacity=".2"
              />
              <path
                id="Vector_837"
                fill="#42E8E0"
                d="M301 106a1 1 0 010 1 1 1 0 01-1-1 1 1 0 011 0z"
                opacity=".2"
              />
              <path
                id="Vector_838"
                fill="#42E8E0"
                d="M300 139a1 1 0 11-2 0 1 1 0 012 0z"
                opacity=".3"
              />
              <path
                id="Vector_839"
                fill="#42E8E0"
                d="M308 127a1 1 0 01-1 1 1 1 0 01-2-1 1 1 0 011-1 1 1 0 011 0l1 1z"
                opacity=".2"
              />
              <path
                id="Vector_840"
                fill="#42E8E0"
                d="M304 125a1 1 0 010 1 1 1 0 01-1-1 1 1 0 011-1 1 1 0 010 1z"
                opacity=".2"
              />
              <path
                id="Vector_841"
                fill="#42E8E0"
                d="M329 101a1 1 0 001 0 1 1 0 001 0 1 1 0 000-1 1 1 0 00-1-1 1 1 0 00-1 2z"
                opacity=".3"
              />
              <path
                id="Vector_842"
                fill="#42E8E0"
                d="M320 92a1 1 0 002 1 1 1 0 000-1 1 1 0 00-1-1 1 1 0 00-1 0 1 1 0 000 1z"
                opacity=".2"
              />
              <path
                id="Vector_843"
                fill="#42E8E0"
                d="M293 95a1 1 0 001 1 1 1 0 001-1 1 1 0 00-1 0 1 1 0 00-1 0z"
                opacity=".2"
              />
              <path
                id="Vector_844"
                fill="#42E8E0"
                d="M294 92a1 1 0 002 1 1 1 0 001-1 1 1 0 00-2-1 1 1 0 00-1 1z"
                opacity=".2"
              />
              <path
                id="Vector_845"
                fill="#42E8E0"
                d="M323 90h1a1 1 0 000-1 1 1 0 00-1 0 1 1 0 000 1z"
                opacity=".2"
              />
              <path
                id="Vector_846"
                fill="#42E8E0"
                d="M330 139a1 1 0 01-1 0 1 1 0 011-1 1 1 0 010 1z"
                opacity=".2"
              />
              <path
                id="Vector_847"
                fill="#42E8E0"
                d="M331 136a1 1 0 01-1-1 1 1 0 01-1-1 1 1 0 012 1v1z"
                opacity=".2"
              />
              <path
                id="Vector_848"
                fill="#42E8E0"
                d="M329 132a1 1 0 001 2 1 1 0 001-1l-1-1a1 1 0 00-1 0z"
                opacity=".3"
              />
              <path
                id="Vector_849"
                fill="#42E8E0"
                d="M331 122a1 1 0 10-1-2 1 1 0 001 2z"
                opacity=".2"
              />
              <path
                id="Vector_850"
                fill="#42E8E0"
                d="M333 120a1 1 0 101 1 1 1 0 00-1-1z"
                opacity=".2"
              />
              <g id="dolne-kropki" fill="#42E8E0">
                <path
                  id="d3"
                  d="M319 152a2 2 0 01-3 1 2 2 0 012-2l1 1z"
                  opacity=".9"
                />
                <path
                  id="d6"
                  d="M313 135a1 1 0 002 2 1 1 0 001-2 1 1 0 00-1-1h-1a1 1 0 00-1 1z"
                  opacity=".9"
                />
                <path
                  id="d1"
                  d="M309 169a1 1 0 002 1 1 1 0 00-1-3 1 1 0 00-1 1v1z"
                  opacity=".9"
                />
                <path
                  id="d2"
                  d="M314 161a1 1 0 000 1 1 1 0 001-1 1 1 0 001-1 1 1 0 00-2 0 1 1 0 000 1z"
                  opacity=".9"
                />
                <path
                  id="d7"
                  d="M319 133a2 2 0 01-2 2 2 2 0 111-3l1 1z"
                  opacity=".9"
                />
                <path
                  id="d8"
                  d="M313 117a1 1 0 002 1 1 1 0 001-3 1 1 0 00-2 0 1 1 0 00-1 2z"
                  opacity=".9"
                />
                <path
                  id="d4"
                  d="M309 150a1 1 0 002 1 1 1 0 00-1-3 1 1 0 00-1 1v1z"
                  opacity=".9"
                />
                <path
                  id="d5"
                  d="M314 142a1 1 0 000 1 1 1 0 001-1 1 1 0 10-1 0z"
                  opacity=".9"
                />
              </g>
              <path
                id="Vector_851"
                fill="#5CFFF3"
                d="M314 199v146l59-34V166l-59 33z"
                opacity=".5"
              />
              <path
                id="Vector_852"
                fill="#5CFFF3"
                d="M314 199v146l-58-34V166l58 33z"
                opacity=".5"
              />
              <path
                id="Vector_853"
                fill="#88FFF3"
                d="M319 204a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_854"
                fill="#88FFF3"
                d="M323 202a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_855"
                fill="#88FFF3"
                d="M326 200a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_856"
                fill="#88FFF3"
                d="M352 186l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_857"
                fill="#88FFF3"
                d="M319 209a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_858"
                fill="#88FFF3"
                d="M323 207a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_859"
                fill="#88FFF3"
                d="M326 205a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_860"
                fill="#88FFF3"
                d="M352 191l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_861"
                fill="#88FFF3"
                d="M319 214a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_862"
                fill="#88FFF3"
                d="M323 212a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_863"
                fill="#88FFF3"
                d="M326 211a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_864"
                fill="#88FFF3"
                d="M352 196l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_865"
                fill="#88FFF3"
                d="M319 220a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_866"
                fill="#88FFF3"
                d="M322 219v-2l-1 1v2l1-1z"
              />
              <path
                id="Vector_867"
                fill="#88FFF3"
                d="M326 216a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_868"
                fill="#88FFF3"
                d="M352 202l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_869"
                fill="#88FFF3"
                d="M319 225a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_870"
                fill="#88FFF3"
                d="M323 223a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_871"
                fill="#88FFF3"
                d="M326 221a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_872"
                fill="#88FFF3"
                d="M352 207l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_873"
                fill="#88FFF3"
                d="M319 230a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_874"
                fill="#88FFF3"
                d="M323 229a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_875"
                fill="#88FFF3"
                d="M326 227a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_876"
                fill="#88FFF3"
                d="M352 212l-25 15v-2l25-15v2z"
              />
              <path
                id="Vector_877"
                fill="#88FFF3"
                d="M319 236a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_878"
                fill="#88FFF3"
                d="M322 235v-2l-1 1v2l1-1z"
              />
              <path
                id="Vector_879"
                fill="#88FFF3"
                d="M326 232a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_880"
                fill="#88FFF3"
                d="M352 218l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_881"
                fill="#88FFF3"
                d="M319 241a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_882"
                fill="#88FFF3"
                d="M323 239a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_883"
                fill="#88FFF3"
                d="M326 237a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_884"
                fill="#88FFF3"
                d="M352 223l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_885"
                fill="#88FFF3"
                d="M319 247a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_886"
                fill="#88FFF3"
                d="M323 245a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_887"
                fill="#88FFF3"
                d="M326 243a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_888"
                fill="#88FFF3"
                d="M352 229l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_889"
                fill="#88FFF3"
                d="M319 252a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_890"
                fill="#88FFF3"
                d="M322 251v-2l-1 1v2l1-1z"
              />
              <path
                id="Vector_891"
                fill="#88FFF3"
                d="M326 248a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_892"
                fill="#88FFF3"
                d="M352 234l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_893"
                fill="#88FFF3"
                d="M319 257a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_894"
                fill="#88FFF3"
                d="M323 255a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_895"
                fill="#88FFF3"
                d="M326 254a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_896"
                fill="#88FFF3"
                d="M352 239l-25 15v-2l25-15v2z"
              />
              <path
                id="Vector_897"
                fill="#88FFF3"
                d="M319 263a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_898"
                fill="#88FFF3"
                d="M323 261a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_899"
                fill="#88FFF3"
                d="M326 259a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_900"
                fill="#88FFF3"
                d="M352 245l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_901"
                fill="#88FFF3"
                d="M369 235l-14 8v-61l14-8v61z"
                opacity=".5"
              />
              <path
                id="Vector_902"
                fill="#88FFF3"
                d="M319 267a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_903"
                fill="#88FFF3"
                d="M323 266a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_904"
                fill="#88FFF3"
                d="M326 264a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_905"
                fill="#88FFF3"
                d="M352 250l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_906"
                fill="#88FFF3"
                d="M319 273a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_907"
                fill="#88FFF3"
                d="M323 271a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_908"
                fill="#88FFF3"
                d="M326 269a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_909"
                fill="#88FFF3"
                d="M352 255l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_910"
                fill="#88FFF3"
                d="M319 278a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_911"
                fill="#88FFF3"
                d="M322 277v-1l-1 1v1l1-1z"
              />
              <path
                id="Vector_912"
                fill="#88FFF3"
                d="M326 274a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_913"
                fill="#88FFF3"
                d="M352 260l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_914"
                fill="#88FFF3"
                d="M319 284a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_915"
                fill="#88FFF3"
                d="M323 282a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_916"
                fill="#88FFF3"
                d="M326 280a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_917"
                fill="#88FFF3"
                d="M352 266l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_918"
                fill="#88FFF3"
                d="M319 289a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_919"
                fill="#88FFF3"
                d="M323 287a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_920"
                fill="#88FFF3"
                d="M326 285a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_921"
                fill="#88FFF3"
                d="M352 271l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_922"
                fill="#88FFF3"
                d="M319 294a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_923"
                fill="#88FFF3"
                d="M323 292a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_924"
                fill="#88FFF3"
                d="M326 291a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_925"
                fill="#88FFF3"
                d="M352 276l-25 15v-2l25-15v2z"
              />
              <path
                id="Vector_926"
                fill="#88FFF3"
                d="M319 300a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_927"
                fill="#88FFF3"
                d="M323 298a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_928"
                fill="#88FFF3"
                d="M326 296a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_929"
                fill="#88FFF3"
                d="M352 282l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_930"
                fill="#88FFF3"
                d="M319 305a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_931"
                fill="#88FFF3"
                d="M323 303a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_932"
                fill="#88FFF3"
                d="M326 301a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_933"
                fill="#88FFF3"
                d="M352 287l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_934"
                fill="#88FFF3"
                d="M319 311a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_935"
                fill="#88FFF3"
                d="M323 309a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_936"
                fill="#88FFF3"
                d="M326 307a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_937"
                fill="#88FFF3"
                d="M352 293l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_938"
                fill="#88FFF3"
                d="M319 316a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_939"
                fill="#88FFF3"
                d="M322 315v-2l-1 1v2l1-1z"
              />
              <path
                id="Vector_940"
                fill="#88FFF3"
                d="M326 312a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_941"
                fill="#88FFF3"
                d="M352 298l-25 14v-2l25-14v2z"
              />
              <path
                id="Vector_942"
                fill="#88FFF3"
                d="M319 321a2 2 0 01-1 2l-1-1a2 2 0 011-1h1z"
              />
              <path
                id="Vector_943"
                fill="#88FFF3"
                d="M323 319a2 2 0 01-1 2h-1a2 2 0 011-2h1z"
              />
              <path
                id="Vector_944"
                fill="#88FFF3"
                d="M326 318a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_945"
                fill="#88FFF3"
                d="M352 303l-25 15v-3l25-14v2z"
              />
              <path
                id="Vector_946"
                fill="#88FFF3"
                d="M319 327a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_947"
                fill="#88FFF3"
                d="M323 325a2 2 0 01-1 1h-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_948"
                fill="#88FFF3"
                d="M326 323a2 2 0 01-1 2l-1-1a2 2 0 011-2l1 1z"
              />
              <path
                id="Vector_949"
                fill="#88FFF3"
                d="M352 309l-25 14v-2l25-15v3z"
              />
              <path
                id="Vector_950"
                fill="#88FFF3"
                d="M369 299l-14 8v-61l14-8v61z"
                opacity=".5"
              />
              <path
                id="Vector_951"
                fill="#88FFF3"
                d="M309 204a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_952"
                fill="#88FFF3"
                d="M306 202a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_953"
                fill="#88FFF3"
                d="M303 200a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_954"
                fill="#88FFF3"
                d="M276 186l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_955"
                fill="#88FFF3"
                d="M309 209a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_956"
                fill="#88FFF3"
                d="M306 207a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_957"
                fill="#88FFF3"
                d="M303 205a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_958"
                fill="#88FFF3"
                d="M276 191l25 14v-2l-25-14v2z"
              />
              <path
                id="Vector_959"
                fill="#88FFF3"
                d="M309 214a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_960"
                fill="#88FFF3"
                d="M306 212a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_961"
                fill="#88FFF3"
                d="M303 211a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_962"
                fill="#88FFF3"
                d="M276 196l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_963"
                fill="#88FFF3"
                d="M309 220a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_964"
                fill="#88FFF3"
                d="M306 218a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_965"
                fill="#88FFF3"
                d="M303 216a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_966"
                fill="#88FFF3"
                d="M276 202l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_967"
                fill="#88FFF3"
                d="M311 227v-2l-2-1v2l2 1z"
              />
              <path
                id="Vector_968"
                fill="#88FFF3"
                d="M306 223a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_969"
                fill="#88FFF3"
                d="M303 221a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_970"
                fill="#88FFF3"
                d="M276 207l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_971"
                fill="#88FFF3"
                d="M309 230a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_972"
                fill="#88FFF3"
                d="M306 229a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_973"
                fill="#88FFF3"
                d="M303 227a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_974"
                fill="#88FFF3"
                d="M276 212l25 15v-2l-25-15v2z"
              />
              <path
                id="Vector_975"
                fill="#88FFF3"
                d="M309 236a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_976"
                fill="#88FFF3"
                d="M306 234a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_977"
                fill="#88FFF3"
                d="M303 232a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_978"
                fill="#88FFF3"
                d="M276 218l25 14v-2l-25-14v2z"
              />
              <path id="Vector_979" fill="#88FFF3" d="M311 243v-2h-2v1l2 1z" />
              <path
                id="Vector_980"
                fill="#88FFF3"
                d="M306 239a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_981"
                fill="#88FFF3"
                d="M303 237a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_982"
                fill="#88FFF3"
                d="M276 223l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_983"
                fill="#88FFF3"
                d="M309 247a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_984"
                fill="#88FFF3"
                d="M306 245a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_985"
                fill="#88FFF3"
                d="M303 243a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_986"
                fill="#88FFF3"
                d="M276 229l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_987"
                fill="#88FFF3"
                d="M309 252a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_988"
                fill="#88FFF3"
                d="M306 250a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_989"
                fill="#88FFF3"
                d="M303 248a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_990"
                fill="#88FFF3"
                d="M276 234l25 14v-2l-25-14v2z"
              />
              <path id="Vector_991" fill="#88FFF3" d="M311 259v-2h-2v1l2 1z" />
              <path
                id="Vector_992"
                fill="#88FFF3"
                d="M306 255a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_993"
                fill="#88FFF3"
                d="M303 254a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_994"
                fill="#88FFF3"
                d="M276 239l25 15v-2l-25-15v2z"
              />
              <path
                id="Vector_995"
                fill="#88FFF3"
                d="M309 263a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_996"
                fill="#88FFF3"
                d="M306 261a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_997"
                fill="#88FFF3"
                d="M303 259a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_998"
                fill="#88FFF3"
                d="M276 245l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_999"
                fill="#88FFF3"
                d="M259 235l15 8v-61l-15-8v61z"
                opacity=".5"
              />
              <path
                id="Vector_1000"
                fill="#88FFF3"
                d="M311 269v-1l-2-1v1l2 1z"
              />
              <path
                id="Vector_1001"
                fill="#88FFF3"
                d="M306 266a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1002"
                fill="#88FFF3"
                d="M303 264a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1003"
                fill="#88FFF3"
                d="M276 250l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_1004"
                fill="#88FFF3"
                d="M309 273a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1005"
                fill="#88FFF3"
                d="M306 271a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1006"
                fill="#88FFF3"
                d="M303 269a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_1007"
                fill="#88FFF3"
                d="M276 255l25 14v-2l-25-14v2z"
              />
              <path
                id="Vector_1008"
                fill="#88FFF3"
                d="M309 278a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_1009"
                fill="#88FFF3"
                d="M306 276a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_1010"
                fill="#88FFF3"
                d="M303 274a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_1011"
                fill="#88FFF3"
                d="M276 260l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_1012"
                fill="#88FFF3"
                d="M309 284a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1013"
                fill="#88FFF3"
                d="M306 282a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1014"
                fill="#88FFF3"
                d="M303 280a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1015"
                fill="#88FFF3"
                d="M276 266l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_1016"
                fill="#88FFF3"
                d="M309 289a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1017"
                fill="#88FFF3"
                d="M306 287a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_1018"
                fill="#88FFF3"
                d="M303 285a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_1019"
                fill="#88FFF3"
                d="M276 271l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_1020"
                fill="#88FFF3"
                d="M309 294a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_1021"
                fill="#88FFF3"
                d="M306 292a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_1022"
                fill="#88FFF3"
                d="M303 291a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1023"
                fill="#88FFF3"
                d="M276 276l25 15v-2l-25-15v2z"
              />
              <path
                id="Vector_1024"
                fill="#88FFF3"
                d="M309 300a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1025"
                fill="#88FFF3"
                d="M306 298a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1026"
                fill="#88FFF3"
                d="M303 296a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1027"
                fill="#88FFF3"
                d="M276 282l25 14v-2l-25-14v2z"
              />
              <path
                id="Vector_1028"
                fill="#88FFF3"
                d="M311 307v-2l-2-1v2l2 1z"
              />
              <path
                id="Vector_1029"
                fill="#88FFF3"
                d="M306 303a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_1030"
                fill="#88FFF3"
                d="M303 301a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_1031"
                fill="#88FFF3"
                d="M276 287l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_1032"
                fill="#88FFF3"
                d="M309 311a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1033"
                fill="#88FFF3"
                d="M306 309a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1034"
                fill="#88FFF3"
                d="M303 307a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1035"
                fill="#88FFF3"
                d="M276 293l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_1036"
                fill="#88FFF3"
                d="M309 316a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1037"
                fill="#88FFF3"
                d="M306 314a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1038"
                fill="#88FFF3"
                d="M303 312a2 2 0 001 2l1-1a2 2 0 00-1-1h-1z"
              />
              <path
                id="Vector_1039"
                fill="#88FFF3"
                d="M276 298l25 14v-2l-25-14v2z"
              />
              <path id="Vector_1040" fill="#88FFF3" d="M311 323v-2h-2v1l2 1z" />
              <path
                id="Vector_1041"
                fill="#88FFF3"
                d="M306 319a2 2 0 001 2h1a2 2 0 00-1-2h-1z"
              />
              <path
                id="Vector_1042"
                fill="#88FFF3"
                d="M303 318a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1043"
                fill="#88FFF3"
                d="M276 303l25 15v-3l-25-14v2z"
              />
              <path
                id="Vector_1044"
                fill="#88FFF3"
                d="M309 327a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1045"
                fill="#88FFF3"
                d="M306 325a2 2 0 001 1h1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1046"
                fill="#88FFF3"
                d="M303 323a2 2 0 001 2l1-1a2 2 0 00-1-2l-1 1z"
              />
              <path
                id="Vector_1047"
                fill="#88FFF3"
                d="M276 309l25 14v-2l-25-15v3z"
              />
              <path
                id="Vector_1048"
                fill="#88FFF3"
                d="M259 299l15 8v-61l-15-8v61z"
                opacity=".5"
              />
              <path
                id="Vector_1049"
                fill="#FCCC6B"
                d="M315 196l2-1-2-1-1 1 1 1z"
              />
              <path
                id="Vector_1050"
                fill="#FCCC6B"
                d="M319 194l1-1-1-1-2 1 2 1z"
              />
              <path
                id="Vector_1051"
                fill="#FCCC6B"
                d="M322 192l2-1-2-1-1 1 1 1z"
              />
              <path
                id="Vector_1052"
                fill="#FCCC6B"
                d="M322 192l2-1-2-1-1 1 1 1z"
              />
              <path
                id="Vector_1053"
                fill="#FCCC6B"
                d="M326 190l1-1-1-1-2 1 2 1z"
              />
              <path
                id="Vector_1054"
                fill="#FCCC6B"
                d="M329 188l2-1-2-1-1 1 1 1z"
              />
              <path
                id="Vector_1055"
                fill="#FCCC6B"
                d="M352 174l2-1-2-1-1 1 1 1z"
              />
              <path
                id="Vector_1056"
                fill="#FCCC6B"
                d="M356 172l1-1-1-1-2 1 2 1z"
              />
              <path
                id="Vector_1057"
                fill="#FCCC6B"
                d="M359 170l2-1-2-1-1 1 1 1z"
              />
              <path
                id="Vector_1058"
                fill="#FCCC6B"
                d="M359 170l2-1-2-1-1 1 1 1z"
              />
              <path
                id="Vector_1059"
                fill="#FCCC6B"
                d="M363 168l1-1-1-1-2 1 2 1z"
              />
              <path
                id="Vector_1060"
                fill="#FCCC6B"
                d="M366 166l2-1-2-1-1 1 1 1z"
              />
              <path
                id="Vector_1061"
                fill="#0B0244"
                d="M94 229l-30-18c-3-1-2-3 0-5l29-17a10 10 0 019 0l30 17c3 2 3 4 0 6l-29 16a10 10 0 01-9 1z"
                opacity=".3"
              />
              <path
                id="Vector_1062"
                fill="#312A91"
                d="M163 202v-7h-18l-21-13c-3-1-8-1-12 1l-20 12H74v7a3 3 0 002 3l37 22c3 1 8 1 11-1l36-21 3-3z"
              />
              <path
                id="Vector_1063"
                fill="url(#paint116_linear)"
                d="M163 202v-7h-18l-21-13c-3-1-8-1-12 1l-20 12H74v7a3 3 0 002 3l37 22c3 1 8 1 11-1l36-21 3-3z"
                opacity=".5"
              />
              <path
                id="Vector_1064"
                fill="url(#paint117_linear)"
                d="M124 182l-6-1v47l6-2 36-21c2-1 3-2 3-4v-7h-18l-21-12z"
              />
              <path
                id="Vector_1065"
                fill="#312A91"
                d="M113 219l-37-21c-3-2-3-5 1-7l35-21c4-2 9-2 12 0l37 22c3 1 3 4-1 6l-36 21c-3 2-8 2-11 0z"
              />
              <path
                id="Vector_1066"
                fill="url(#paint118_linear)"
                d="M113 219l-37-21c-3-2-3-5 1-7l35-21c4-2 9-2 12 0l37 22c3 1 3 4-1 6l-36 21c-3 2-8 2-11 0z"
                opacity=".5"
              />
              <path
                id="Vector_1067"
                fill="#5CFFF3"
                d="M114 214l-30-17c-2-1-2-4 1-5l29-17a10 10 0 019 0l30 17c2 1 2 4-1 5l-29 17a10 10 0 01-9 0z"
              />
              <path
                id="Vector_1068"
                fill="#42E8E0"
                d="M85 194l29-17a10 10 0 019 0l30 17 1 2a2 2 0 00-1-4l-30-17a10 10 0 00-9 0l-29 17c-2 1-3 3-2 4l2-2z"
              />
              <path
                id="Vector_1069"
                fill="url(#paint119_linear)"
                d="M115 219l-38-21c-3-2-3-5 1-7l36-21 5-1-7 1-35 21c-4 2-4 5-1 7l37 21 6 1-4-1z"
                opacity=".5"
              />
              <path
                id="Vector_1070"
                fill="url(#paint120_linear)"
                d="M160 201l-36 21c-3 2-8 2-11 0l-37-21a3 3 0 01-2-3v1a3 3 0 002 3l37 22c3 2 8 1 11-1l36-20 3-4v-2c0 2-1 3-3 4z"
                opacity=".5"
              />
              <path
                id="Vector_1071"
                fill="#FCCC6B"
                d="M154 199v1a2 2 0 01-2 0v-1a2 2 0 012 0z"
              />
              <path
                id="Vector_1072"
                fill="#FCCC6B"
                d="M156 198v1a2 2 0 01-1 0l-1-1h1a2 2 0 011 0z"
              />
              <path
                id="Vector_1073"
                fill="#FCCC6B"
                d="M158 196v1a2 2 0 01-1 0v-1a2 2 0 011 0z"
              />
              <path
                id="Vector_1074"
                fill="#0B0244"
                d="M528 308l-30-17c-3-1-2-4 0-5l29-17a10 10 0 019 0l30 17c3 1 2 4 0 5l-29 17a10 10 0 01-9 0z"
                opacity=".3"
              />
              <path
                id="Vector_1075"
                fill="#312A91"
                d="M563 269v-7h-18l-22-12c-3-2-8-2-11 0l-20 12h-19v8a3 3 0 002 3l38 21c3 2 8 2 11 0l36-21c2-1 3-2 3-4z"
              />
              <path
                id="Vector_1076"
                fill="url(#paint121_linear)"
                d="M563 269v-7h-18l-22-12c-3-2-8-2-11 0l-20 12h-19v8a3 3 0 002 3l38 21c3 2 8 2 11 0l36-21c2-1 3-2 3-4z"
                opacity=".5"
              />
              <path
                id="Vector_1077"
                fill="url(#paint122_linear)"
                d="M523 250l-5-1v47l6-2 36-21c2-1 3-2 3-4v-7h-18l-22-12z"
              />
              <path
                id="Vector_1078"
                fill="#312A91"
                d="M513 287l-38-22c-3-1-2-4 1-6l36-21c3-2 8-2 11 0l38 21c3 2 2 5-1 7l-36 21c-3 1-8 2-11 0z"
              />
              <path
                id="Vector_1079"
                fill="url(#paint123_linear)"
                d="M513 287l-38-22c-3-1-2-4 1-6l36-21c3-2 8-2 11 0l38 21c3 2 2 5-1 7l-36 21c-3 1-8 2-11 0z"
                opacity=".5"
              />
              <path
                id="Vector_1080"
                fill="#5CFFF3"
                d="M514 282l-30-17c-3-2-2-4 0-6l29-16a10 10 0 019-1l30 18c3 1 2 4 0 5l-29 17a10 10 0 01-9 0z"
              />
              <path
                id="Vector_1081"
                fill="#42E8E0"
                d="M484 262l29-17a10 10 0 019 0l30 17 2 1a2 2 0 00-2-3l-30-18a10 10 0 00-9 1l-29 16-2 4 2-1z"
              />
              <path
                id="Vector_1082"
                fill="url(#paint124_linear)"
                d="M514 287l-37-22c-3-1-4-4 0-6l36-21 6-2-7 2-36 21c-3 2-4 5-1 6l38 22 5 1-4-1z"
                opacity=".5"
              />
              <path
                id="Vector_1083"
                fill="url(#paint125_linear)"
                d="M560 269l-36 21c-3 2-8 2-11 0l-38-22a3 3 0 01-2-3v2a3 3 0 002 3l38 22c3 1 8 1 11-1l36-21 3-3v-2l-3 4z"
                opacity=".5"
              />
              <path
                id="Vector_1084"
                fill="#FCCC6B"
                d="M553 267h1l-1 1a2 2 0 01-1 0v-1a2 2 0 011 0z"
              />
              <path
                id="Vector_1085"
                fill="#FCCC6B"
                d="M556 265v1a2 2 0 01-2 0v-1a2 2 0 012 0z"
              />
              <path
                id="Vector_1086"
                fill="#FCCC6B"
                d="M558 264v1a2 2 0 01-1 0v-1a2 2 0 011 0z"
              />
              <path
                id="Vector_1087"
                fill="#0B0244"
                d="M244 412l-31-18c-2-1-2-3 1-5l29-17a10 10 0 019 0l30 17c2 2 2 4-1 6l-29 16a10 10 0 01-8 1z"
                opacity=".3"
              />
              <path
                id="Vector_1088"
                fill="#312A91"
                d="M297 361v-7h-18l-22-12c-3-2-7-1-11 0l-20 12h-18v8a3 3 0 002 3l37 21c3 2 8 2 11 0l36-21c2-1 3-2 3-4z"
              />
              <path
                id="Vector_1089"
                fill="url(#paint126_linear)"
                d="M297 361v-7h-18l-22-12c-3-2-7-1-11 0l-20 12h-18v8a3 3 0 002 3l37 21c3 2 8 2 11 0l36-21c2-1 3-2 3-4z"
                opacity=".5"
              />
              <path
                id="Vector_1090"
                fill="url(#paint127_linear)"
                d="M257 342l-5-1v47l6-2 36-21c2-1 3-2 3-4v-7h-18l-22-12z"
              />
              <path
                id="Vector_1091"
                fill="#312A91"
                d="M247 379l-38-22c-2-1-2-4 1-6l36-21c3-2 8-2 11 0l38 21c3 2 2 5-1 7l-36 21c-3 2-8 2-11 0z"
              />
              <path
                id="Vector_1092"
                fill="url(#paint128_linear)"
                d="M247 379l-38-22c-2-1-2-4 1-6l36-21c3-2 8-2 11 0l38 21c3 2 2 5-1 7l-36 21c-3 2-8 2-11 0z"
                opacity=".5"
              />
              <path
                id="Vector_1093"
                fill="#5CFFF3"
                d="M248 374l-30-17c-2-2-2-4 0-5l29-17a10 10 0 019-1l31 18c2 1 2 4-1 5l-29 17a10 10 0 01-9 0z"
              />
              <path
                id="Vector_1094"
                fill="#42E8E0"
                d="M218 354l29-17a10 10 0 019 0l31 17 1 1a2 2 0 00-1-3l-31-18a10 10 0 00-9 1l-29 17c-2 1-2 2-1 4l1-2z"
              />
              <path
                id="Vector_1095"
                fill="url(#paint129_linear)"
                d="M248 379l-37-22c-3-1-4-4 1-6l35-21 6-1c-2-1-5 0-7 1l-36 21c-3 2-3 5 0 6l37 22 5 1-4-1z"
                opacity=".5"
              />
              <path
                id="Vector_1096"
                fill="url(#paint130_linear)"
                d="M294 361l-36 21c-3 2-8 2-11 0l-37-22a3 3 0 01-2-3v2a3 3 0 002 3l37 22c3 1 8 1 11-1l36-21 3-3v-2l-3 4z"
                opacity=".5"
              />
              <path
                id="Vector_1097"
                fill="#FCCC6B"
                d="M288 359v1a2 2 0 01-2 0v-1a2 2 0 012 0z"
              />
              <path
                id="Vector_1098"
                fill="#FCCC6B"
                d="M290 358a2 2 0 01-2 0 2 2 0 012 0z"
              />
              <path
                id="Vector_1099"
                fill="#FCCC6B"
                d="M292 356v1a2 2 0 01-1 0v-1a2 2 0 011 0z"
              />
              <path
                id="Vector_1100"
                fill="#88FFF3"
                d="M215 402L18 289a1 1 0 010-1l60-36v-24a9 9 0 014-8l12-8a1 1 0 011 0v1l-13 8a8 8 0 00-3 7v24l-60 36 196 113v-18a9 9 0 014-7l8-5a1 1 0 011 1 1 1 0 01-1 0l-8 5a8 8 0 00-3 6v19a1 1 0 01-1 0z"
              />
              <path
                id="Vector_1101"
                fill="#88FFF3"
                d="M335 427h-1l-43-25a1 1 0 01-1 0v-19a4 4 0 00-2-4l-12-6a1 1 0 010-1l13 6a5 5 0 012 5v19l44 24 218-125v-11a5 5 0 00-2-3l-9-7a1 1 0 010-1v1l10 6a6 6 0 012 4v12L335 427z"
              />
              <path
                id="Vector_1102"
                fill="#312A91"
                d="M563 269v-7h-18l-22-12c-3-2-8-2-11 0l-20 12h-19v8a3 3 0 002 3l38 21c3 2 8 2 11 0l36-21c2-1 3-2 3-4z"
              />
              <path
                id="Vector_1103"
                fill="url(#paint131_linear)"
                d="M563 269v-7h-18l-22-12c-3-2-8-2-11 0l-20 12h-19v8a3 3 0 002 3l38 21c3 2 8 2 11 0l36-21c2-1 3-2 3-4z"
                opacity=".5"
              />
              <path
                id="Vector_1104"
                fill="url(#paint132_linear)"
                d="M523 250l-5-1v47l6-2 36-21c2-1 3-2 3-4v-7h-18l-22-12z"
              />
              <path
                id="Vector_1105"
                fill="#312A91"
                d="M513 287l-38-22c-3-1-2-4 1-6l36-21c3-2 8-2 11 0l38 21c3 2 2 5-1 7l-36 21c-3 1-8 2-11 0z"
              />
              <path
                id="Vector_1106"
                fill="url(#paint133_linear)"
                d="M513 287l-38-22c-3-1-2-4 1-6l36-21c3-2 8-2 11 0l38 21c3 2 2 5-1 7l-36 21c-3 1-8 2-11 0z"
                opacity=".5"
              />
              <path
                id="Vector_1107"
                fill="#5CFFF3"
                d="M514 282l-30-17c-3-2-2-4 0-6l29-16a10 10 0 019-1l30 18c3 1 2 4 0 5l-29 17a10 10 0 01-9 0z"
              />
              <path
                id="Vector_1108"
                fill="#42E8E0"
                d="M484 262l29-17a10 10 0 019 0l30 17 2 1a2 2 0 00-2-3l-30-18a10 10 0 00-9 1l-29 16-2 4 2-1z"
              />
              <path
                id="Vector_1109"
                fill="url(#paint134_linear)"
                d="M514 287l-37-22c-3-1-4-4 0-6l36-21 6-2-7 2-36 21c-3 2-4 5-1 6l38 22 5 1-4-1z"
                opacity=".5"
              />
              <path
                id="Vector_1110"
                fill="url(#paint135_linear)"
                d="M560 269l-36 21c-3 2-8 2-11 0l-38-22a3 3 0 01-2-3v2a3 3 0 002 3l38 22c3 1 8 1 11-1l36-21 3-3v-2l-3 4z"
                opacity=".5"
              />
              <path
                id="Vector_1111"
                fill="#FCCC6B"
                d="M553 267h1l-1 1a2 2 0 01-1 0v-1a2 2 0 011 0z"
              />
              <path
                id="Vector_1112"
                fill="#FCCC6B"
                d="M556 265v1a2 2 0 01-2 0v-1a2 2 0 012 0z"
              />
              <path
                id="Vector_1113"
                fill="#FCCC6B"
                d="M558 264v1a2 2 0 01-1 0v-1a2 2 0 011 0z"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="391.4"
        x2="271.4"
        y1="254.9"
        y2="189.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="294.9"
        x2="378.2"
        y1="234.2"
        y2="234.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="320.4"
        x2="244.4"
        y1="254.3"
        y2="211.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="-138860"
        x2="-143873"
        y1="10377.2"
        y2="4756.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint4_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="6663.8"
        y2="6663.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint5_linear"
        x1="-71039.4"
        x2="-73371.2"
        y1="7100.7"
        y2="5338"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint6_linear"
        x1="-70931.1"
        x2="-74205.9"
        y1="9394.3"
        y2="8748.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint7_linear"
        x1="-104731"
        x2="-109896"
        y1="8003.8"
        y2="3113.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint8_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="6097.9"
        y2="6097.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint9_linear"
        x1="-70644.3"
        x2="-73230"
        y1="6708"
        y2="4737.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint10_linear"
        x1="-138860"
        x2="-143874"
        y1="8534.1"
        y2="2913.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint11_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="5462.2"
        y2="5462.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint12_linear"
        x1="-71039.4"
        x2="-73371.2"
        y1="5899.1"
        y2="4136.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint13_linear"
        x1="-70931.1"
        x2="-74206"
        y1="7551.1"
        y2="6905.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint14_linear"
        x1="-104731"
        x2="-109896"
        y1="6570.8"
        y2="1681"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint15_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="4896.7"
        y2="4896.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint16_linear"
        x1="-70644.3"
        x2="-73229.4"
        y1="5504.6"
        y2="3534"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint17_linear"
        x1="-138860"
        x2="-143874"
        y1="6688.9"
        y2="1068"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint18_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="4260.6"
        y2="4260.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint19_linear"
        x1="-71039.4"
        x2="-73371.2"
        y1="4697.5"
        y2="2934.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint20_linear"
        x1="-70931.1"
        x2="-74206"
        y1="5705.8"
        y2="5059.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint21_linear"
        x1="-104731"
        x2="-109896"
        y1="5137.9"
        y2="248"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint22_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="3695.5"
        y2="3695.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint23_linear"
        x1="-70644.3"
        x2="-73230"
        y1="4304.8"
        y2="2334.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint24_linear"
        x1="-138860"
        x2="-143874"
        y1="4843.6"
        y2="-777.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint25_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="3059"
        y2="3059"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint26_linear"
        x1="-71039.4"
        x2="-73371.2"
        y1="3495.9"
        y2="1733.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint27_linear"
        x1="-70931.1"
        x2="-74205.9"
        y1="3859.9"
        y2="3214.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint28_linear"
        x1="314"
        x2="314"
        y1="89.3"
        y2="17.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint29_linear"
        x1="130136"
        x2="135302"
        y1="11174.1"
        y2="6283.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint30_linear"
        x1="87462.2"
        x2="84070.7"
        y1="8755.9"
        y2="8755.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint31_linear"
        x1="86388.6"
        x2="88974.3"
        y1="9364"
        y2="7393.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint32_linear"
        x1="172310"
        x2="177323"
        y1="12612.8"
        y2="6992.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint33_linear"
        x1="87462.2"
        x2="84070.7"
        y1="8117.8"
        y2="8117.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint34_linear"
        x1="86783.7"
        x2="89115.5"
        y1="8555.1"
        y2="6792.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint35_linear"
        x1="86884.1"
        x2="90158.9"
        y1="11629.1"
        y2="10983.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint36_linear"
        x1="130136"
        x2="135300"
        y1="9738.2"
        y2="4847.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint37_linear"
        x1="87462.2"
        x2="84070.7"
        y1="7554.3"
        y2="7554.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint38_linear"
        x1="86388.6"
        x2="88974.3"
        y1="8162.4"
        y2="6191.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint39_linear"
        x1="172310"
        x2="177323"
        y1="10767.6"
        y2="5147.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint40_linear"
        x1="87462.2"
        x2="84070.7"
        y1="6916.2"
        y2="6916.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint41_linear"
        x1="86783.7"
        x2="89115.5"
        y1="7353.5"
        y2="5590.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint42_linear"
        x1="86884.1"
        x2="90158.9"
        y1="9783.8"
        y2="9138.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint43_linear"
        x1="130136"
        x2="135302"
        y1="8307.5"
        y2="3417.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint44_linear"
        x1="87462.2"
        x2="84070.7"
        y1="6352.7"
        y2="6352.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint45_linear"
        x1="86388.6"
        x2="88974.3"
        y1="6960.8"
        y2="4990.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint46_linear"
        x1="172310"
        x2="177323"
        y1="8922.4"
        y2="3301.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint47_linear"
        x1="87462.2"
        x2="84070.7"
        y1="5714.6"
        y2="5714.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint48_linear"
        x1="86783.7"
        x2="89115.5"
        y1="6151.9"
        y2="4389.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint49_linear"
        x1="86884.1"
        x2="90158.9"
        y1="7938.6"
        y2="7293.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint50_linear"
        x1="130136"
        x2="135302"
        y1="6874.1"
        y2="1983.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint51_linear"
        x1="87462.2"
        x2="84070.7"
        y1="5151.1"
        y2="5151.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint52_linear"
        x1="86388.6"
        x2="88974.3"
        y1="5759.1"
        y2="3788.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint53_linear"
        x1="172310"
        x2="177322"
        y1="7075.6"
        y2="1455.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint54_linear"
        x1="87462.2"
        x2="84070.7"
        y1="4513"
        y2="4513"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint55_linear"
        x1="86783.7"
        x2="89115.5"
        y1="4950.3"
        y2="3187.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint56_linear"
        x1="86884.1"
        x2="90158.9"
        y1="6092.1"
        y2="5446.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint57_linear"
        x1="63964.2"
        x2="63964.2"
        y1="8375.4"
        y2="3979.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint58_linear"
        x1="-99579"
        x2="-104745"
        y1="11174.1"
        y2="6282.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint59_linear"
        x1="-68230"
        x2="-64839.1"
        y1="8755.9"
        y2="8755.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint60_linear"
        x1="-67268.4"
        x2="-69854.1"
        y1="9364"
        y2="7393.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint61_linear"
        x1="-132189"
        x2="-137204"
        y1="12612.8"
        y2="6991.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint62_linear"
        x1="-68230"
        x2="-64839.1"
        y1="8117.8"
        y2="8117.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint63_linear"
        x1="-67663.5"
        x2="-69995.3"
        y1="8555.1"
        y2="6792.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint64_linear"
        x1="-67516.3"
        x2="-70791.1"
        y1="11629.1"
        y2="10983.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint65_linear"
        x1="-99579"
        x2="-104743"
        y1="9738.2"
        y2="4846.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint66_linear"
        x1="-68230"
        x2="-64839.1"
        y1="7554.3"
        y2="7554.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint67_linear"
        x1="-67268.4"
        x2="-69854.1"
        y1="8162.4"
        y2="6191.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint68_linear"
        x1="-132189"
        x2="-137204"
        y1="10767.6"
        y2="5146.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint69_linear"
        x1="-68230"
        x2="-64839.1"
        y1="6916.2"
        y2="6916.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint70_linear"
        x1="-67663.5"
        x2="-69995.3"
        y1="7353.5"
        y2="5590.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint71_linear"
        x1="-67516.3"
        x2="-70791.2"
        y1="9783.8"
        y2="9138.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint72_linear"
        x1="-99579"
        x2="-104745"
        y1="8307.5"
        y2="3416.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint73_linear"
        x1="-68230"
        x2="-64839.1"
        y1="6352.7"
        y2="6352.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint74_linear"
        x1="-67268.4"
        x2="-69854.1"
        y1="6960.8"
        y2="4990.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint75_linear"
        x1="-132189"
        x2="-137204"
        y1="8922.4"
        y2="3301.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint76_linear"
        x1="-68230"
        x2="-64839.1"
        y1="5714.6"
        y2="5714.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint77_linear"
        x1="-67663.5"
        x2="-69995.3"
        y1="6151.9"
        y2="4389.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint78_linear"
        x1="-67516.3"
        x2="-70791.2"
        y1="7938.6"
        y2="7293.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint79_linear"
        x1="-99579"
        x2="-104745"
        y1="6874.1"
        y2="1983"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint80_linear"
        x1="-68230"
        x2="-64839.1"
        y1="5151.1"
        y2="5151.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint81_linear"
        x1="-67268.4"
        x2="-69854.1"
        y1="5759.2"
        y2="3788.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint82_linear"
        x1="-132189"
        x2="-137203"
        y1="7075.6"
        y2="1454.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint83_linear"
        x1="-68230"
        x2="-64839.1"
        y1="4513"
        y2="4513"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint84_linear"
        x1="-67663.5"
        x2="-69995.3"
        y1="4950.3"
        y2="3187.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint85_linear"
        x1="-67516.3"
        x2="-70791.1"
        y1="6092.1"
        y2="5446.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint86_linear"
        x1="-50140.6"
        x2="-50140.6"
        y1="8375.4"
        y2="3979.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint87_linear"
        x1="-104731"
        x2="-109896"
        y1="12750.2"
        y2="7859.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint88_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="10076.8"
        y2="10076.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint89_linear"
        x1="-70644.3"
        x2="-73230"
        y1="10688.1"
        y2="8717.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint90_linear"
        x1="-138860"
        x2="-143874"
        y1="14646.3"
        y2="9025.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint91_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="9442"
        y2="9442"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint92_linear"
        x1="-71039.4"
        x2="-73371.2"
        y1="9879.3"
        y2="8116.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint93_linear"
        x1="-70931.1"
        x2="-74205.9"
        y1="13662.6"
        y2="13017.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint94_linear"
        x1="-104731"
        x2="-109896"
        y1="11317.3"
        y2="6426.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint95_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="8878.4"
        y2="8878.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint96_linear"
        x1="-70644.3"
        x2="-73230"
        y1="9486.5"
        y2="7516.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint97_linear"
        x1="-138860"
        x2="-143874"
        y1="12801.1"
        y2="7180.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint98_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="8240.4"
        y2="8240.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint99_linear"
        x1="-71039.4"
        x2="-73371.2"
        y1="8677.7"
        y2="6915"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint100_linear"
        x1="-70931.1"
        x2="-74205.9"
        y1="11817.3"
        y2="11171.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint101_linear"
        x1="-104731"
        x2="-109897"
        y1="9887"
        y2="4996.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint102_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="7676.8"
        y2="7676.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint103_linear"
        x1="-70644.3"
        x2="-73230"
        y1="8284.9"
        y2="6314.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint104_linear"
        x1="-138860"
        x2="-143874"
        y1="10955.8"
        y2="5334.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint105_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="7038.8"
        y2="7038.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint106_linear"
        x1="-71039.4"
        x2="-73371.2"
        y1="7476.1"
        y2="5713.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint107_linear"
        x1="-70931.1"
        x2="-74205.9"
        y1="9972.1"
        y2="9326.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint108_linear"
        x1="-104731"
        x2="-109896"
        y1="8451.4"
        y2="3561"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint109_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="6475.2"
        y2="6475.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint110_linear"
        x1="-70644.3"
        x2="-73230"
        y1="7083.3"
        y2="5112.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint111_linear"
        x1="-138860"
        x2="-143874"
        y1="9110.6"
        y2="3489.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint112_linear"
        x1="-71605.1"
        x2="-68214.2"
        y1="5837.2"
        y2="5837.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint113_linear"
        x1="-71039.4"
        x2="-73371.2"
        y1="6274.5"
        y2="4511.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1560" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".3" stop-color="#1F3372" />
        <stop offset=".4" stop-color="#22447C" />
        <stop offset=".6" stop-color="#2B7097" />
        <stop offset=".8" stop-color="#39B7C2" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint114_linear"
        x1="-70931.1"
        x2="-74205.9"
        y1="8126.8"
        y2="7481.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#180D5B" />
        <stop offset=".1" stop-color="#1A1660" />
        <stop offset=".3" stop-color="#1E2D6E" />
        <stop offset=".4" stop-color="#255385" />
        <stop offset=".7" stop-color="#2F87A5" />
        <stop offset=".9" stop-color="#3CCACE" />
        <stop offset="1" stop-color="#42E8E0" />
      </linearGradient>
      <linearGradient
        id="paint115_linear"
        x1="-52692.1"
        x2="-52692.1"
        y1="11014.9"
        y2="6618.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint116_linear"
        x1="2326.4"
        x2="7885.3"
        y1="6832.4"
        y2="6832.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint117_linear"
        x1="3248.3"
        x2="4637.5"
        y1="6834.6"
        y2="6834.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint118_linear"
        x1="3555.3"
        x2="9113.2"
        y1="7166.9"
        y2="7166.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint119_linear"
        x1="1850.3"
        x2="3297.7"
        y1="7169.1"
        y2="7169.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint120_linear"
        x1="4309.2"
        x2="5537.1"
        y1="4461.8"
        y2="1884.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint121_linear"
        x1="27619.3"
        x2="33174.6"
        y1="9107.1"
        y2="9107.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint122_linear"
        x1="16098.2"
        x2="17487.9"
        y1="9115.7"
        y2="9115.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint123_linear"
        x1="28853.2"
        x2="34410.6"
        y1="9670.3"
        y2="9670.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint124_linear"
        x1="14955.8"
        x2="16403.1"
        y1="9674.2"
        y2="9674.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint125_linear"
        x1="29601.7"
        x2="30828.1"
        y1="5836.6"
        y2="3260.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint126_linear"
        x1="10792.1"
        x2="16348.3"
        y1="12192.3"
        y2="12192.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint127_linear"
        x1="7549.3"
        x2="8938.4"
        y1="12193.5"
        y2="12193.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint128_linear"
        x1="12022.5"
        x2="17579.4"
        y1="13069.8"
        y2="13069.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint129_linear"
        x1="6237.5"
        x2="7684.9"
        y1="13087.6"
        y2="13087.6"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint130_linear"
        x1="12769.1"
        x2="13996.9"
        y1="7711.5"
        y2="5135.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint131_linear"
        x1="27619.3"
        x2="33174.6"
        y1="9107.1"
        y2="9107.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint132_linear"
        x1="16098.2"
        x2="17487.9"
        y1="9115.7"
        y2="9115.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#2B237C" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint133_linear"
        x1="28853.2"
        x2="34410.6"
        y1="9670.3"
        y2="9670.3"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint134_linear"
        x1="14955.8"
        x2="16403.1"
        y1="9674.2"
        y2="9674.2"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
      <linearGradient
        id="paint135_linear"
        x1="29601.7"
        x2="30828.1"
        y1="5836.6"
        y2="3260.7"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#42E8E0" />
        <stop offset=".1" stop-color="#3CCACE" />
        <stop offset=".3" stop-color="#2F87A5" />
        <stop offset=".6" stop-color="#255385" />
        <stop offset=".8" stop-color="#1E2D6E" />
        <stop offset=".9" stop-color="#1A1660" />
        <stop offset="1" stop-color="#180D5B" />
      </linearGradient>
    </defs>
  </SvgStyles>
)
