import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import Container from "../../../Container/Container"
import { StyledFlex } from "../../../Flex/Flex"
import Text from "../../../Text/Text"
import { WrapperStyles } from "../../../Wrapper/Wrapper"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"
import * as Yup from "yup"
import { Formik, Form, useField, useFormikContext } from "formik"

import Button from "../../../Button/Button"
import { Step1, Step2, Step3, Step4 } from "./Steps"
import { staggerContainer, textFadeInUp } from "../../../Styles/Animations"
import { graphql, useStaticQuery } from "gatsby"
import useWindowSize from "../../../../utils/UseWindowSize"
import ButtonLink from "../../../ButtonLink/ButtonLink"
import { useGlobalDispatchContext } from "../../../../utils/cursorContext"

const RocketStyles = styled(motion.svg)`
  fill: var(--primary);
  width: 80px;
  height: 80px;
  position: absolute;
`

const RocketIcon = ({ setReset, handleReset }) => (
  <RocketStyles
    initial={{ opacity: 0, x: -120, y: 260 }}
    animate={{ opacity: [0, 1, 0], x: [-120, 120, 360], y: [500, 100, -300] }}
    exit={{ opacity: 0, x: 320, y: -60 }}
    transition={{ duration: 2.6, ease: [0.6, 0.01, -0.05, 0.9] }}
    onAnimationComplete={() => setTimeout(() => handleReset(), 2000)}
    width="36"
    height="37"
    viewBox="0 0 36 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.7983 0.0760025C34.9172 0.0227014 29.6753 -0.153862 23.5844 2.72156C23.512 2.75551 23.4482 2.80348 23.3955 2.86175C19.2438 4.86199 14.7528 8.2738 11.0938 14.0782L6.39602 13.7572C6.13446 13.7307 5.89266 13.8967 5.79725 14.1463L2.15855 23.6765C2.06074 23.9323 2.14055 24.2231 2.35415 24.3897C2.46096 24.4733 2.58934 24.5151 2.7171 24.5151C2.84366 24.5151 2.97029 24.4746 3.0771 24.3922L6.09727 22.0712L7.67771 22.395L10.0611 24.8376L9.40832 26.0396C8.61452 25.639 7.69411 25.5405 6.79601 25.7736C5.59431 26.0866 4.61156 26.9265 4.10039 28.0794L0.553515 36.0769C0.449734 36.3105 0.49832 36.5854 0.675295 36.7661C0.789903 36.8842 0.943464 36.9463 1.09949 36.9463C1.18351 36.9463 1.26809 36.9278 1.3479 36.8909L9.15152 33.2553C10.2758 32.7321 11.0954 31.7249 11.4007 30.4933C11.6362 29.5436 11.526 28.5683 11.1022 27.7365L12.2155 27.0461L14.6986 29.5908L15.0143 31.2092L12.7495 34.3037C12.5887 34.5238 12.5893 34.8263 12.7519 35.0452C12.8677 35.2014 13.0458 35.2881 13.2294 35.2881C13.3026 35.2881 13.3764 35.274 13.4484 35.2469L22.7477 31.5178C22.9913 31.4201 23.1448 31.1717 23.1274 30.9043L22.8141 26.0879C28.4762 22.3389 31.8051 17.7378 33.7571 13.484C33.6743 13.562 33.5706 13.6157 33.4567 13.6368C33.4213 13.6429 33.3859 13.646 33.3505 13.646C33.1928 13.646 33.0398 13.5821 32.9264 13.4659L32.628 13.1601C30.4588 17.7718 26.2695 23.3486 18.1891 27.3263C17.2882 27.769 16.3566 28.1839 15.3981 28.569L13.3527 26.4728L18.2184 23.3248C18.3486 23.2401 18.4405 23.1089 18.4785 22.9598C18.4914 22.9094 18.4982 22.857 18.4982 22.8035V19.1144C18.4983 18.775 18.2295 18.4995 17.8983 18.4995H13.8558C13.7342 18.4995 13.618 18.5373 13.5206 18.6046C13.4422 18.6584 13.3759 18.7314 13.3287 18.8191L13.2507 18.9642L10.6673 23.7213L8.67356 21.6774C9.11674 20.5189 9.60036 19.3988 10.1212 18.3234C13.8672 10.6057 19.0272 6.37004 23.7413 4.05297L30.8877 1.69575C32.9375 1.32191 34.5167 1.2803 35.293 1.2915C35.3064 2.15333 35.2653 3.97779 34.8255 6.32343C35.2674 3.97323 35.3078 2.14977 35.2938 1.28958C34.5352 1.27654 33.0035 1.31037 31.0198 1.65219L35.7983 0.0760025ZM31.0198 1.65219C29.2553 1.95622 27.1332 2.50391 24.8792 3.47901L24.9113 3.51198C27.1046 2.56025 29.1628 2.01035 30.8877 1.69575L31.0198 1.65219ZM8.25758 28.1586L8.82331 27.1169C8.49224 26.9599 8.12946 26.8792 7.75836 26.8792C7.53758 26.8792 7.31385 26.9076 7.09125 26.9653C6.24469 27.1854 5.55233 27.7769 5.19297 28.5873L2.30779 35.0932L8.65533 32.1363C9.44606 31.7673 10.0232 31.0584 10.238 30.1908C10.3898 29.5772 10.334 28.9507 10.088 28.4084L9.07706 28.9944C8.84306 29.1303 8.54846 29.0897 8.3577 28.8936C8.2047 28.7372 8.14855 28.512 8.20074 28.305C8.21326 28.2547 8.23214 28.2055 8.25758 28.1586ZM9.46494 16.9372C9.75845 16.3651 10.0625 15.806 10.3767 15.261L6.75419 15.0138L4.04423 22.1116L5.59151 20.9225C5.72827 20.818 5.90229 20.7775 6.06907 20.8113L7.59623 21.1241C8.1738 19.6246 8.7997 18.2315 9.46494 16.9372ZM11.2392 25.197L10.4055 26.7322L17.2981 22.4574V19.7297H14.2096L11.3514 25.0482C11.3213 25.1041 11.2833 25.1541 11.2392 25.197ZM15.9376 29.6731L16.2429 31.2375C16.2765 31.4091 16.2369 31.5874 16.1349 31.727L14.9746 33.3127L21.9005 30.5353L21.6587 26.8235C21.1317 27.1426 20.5912 27.4515 20.0382 27.7498C18.771 28.4346 17.4066 29.0788 15.9376 29.6731ZM26.9959 9.79207C24.9782 7.72426 21.696 7.72426 19.6783 9.79207C17.6606 11.8599 17.6606 15.2238 19.6783 17.2916C20.6868 18.3258 22.0121 18.8423 23.3368 18.8423C24.6621 18.8423 25.9868 18.3252 26.9959 17.2916C29.0136 15.2238 29.0136 11.8598 26.9959 9.79207ZM26.1476 16.4221C24.5979 18.0103 22.0763 18.0103 20.5267 16.4221C18.977 14.8339 18.977 12.2497 20.5267 10.6615C21.3012 9.86766 22.3193 9.47047 23.3369 9.47047C24.3544 9.47047 25.3726 9.86766 26.1477 10.6615C27.6973 12.2497 27.6973 14.8339 26.1476 16.4221ZM22.1437 14.7644C22.8019 15.4389 23.8722 15.4396 24.5297 14.7644C24.7637 14.524 25.144 14.524 25.378 14.7644C25.6126 15.0048 25.6126 15.3935 25.378 15.6339C24.8159 16.2106 24.0768 16.499 23.337 16.499C22.5979 16.499 21.8581 16.2106 21.2953 15.6339C20.1698 14.4804 20.1698 12.6031 21.2953 11.4496C22.4208 10.2961 24.2531 10.2961 25.378 11.4496C25.6126 11.69 25.6126 12.0786 25.378 12.319C25.1441 12.5594 24.7637 12.5594 24.5297 12.319C23.8715 11.6445 22.8012 11.6451 22.1437 12.319C21.4861 12.9936 21.4861 14.0899 22.1437 14.7644Z"
    />
  </RocketStyles>
)

const SearchIcon = () => (
  <svg
    width="37"
    height="37"
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.2907 22.4081L35.676 32.0265C36.2073 32.5706 36.5 33.2943 36.5 34.0644C36.5 34.8345 36.2073 35.5583 35.6758 36.1025C35.1447 36.6469 34.4385 36.9468 33.6875 36.9468C32.9365 36.9468 32.2303 36.6469 31.6989 36.1023L24.909 29.1438L24.9079 29.1426L22.3137 26.484C20.0107 28.0508 17.3438 28.8762 14.5625 28.8762C6.80844 28.8762 0.5 22.4111 0.5 14.4645C0.5 6.51784 6.80844 0.0527344 14.5625 0.0527344C22.3166 0.0527344 28.625 6.51784 28.625 14.4645C28.625 17.3148 27.8196 20.0479 26.2907 22.4081ZM21.9829 24.9655L21.983 24.9654C23.0695 24.1572 24.0203 23.1827 24.809 22.0692C26.3855 19.8449 27.2188 17.2153 27.2188 14.4645C27.2188 7.3125 21.5412 1.49391 14.5625 1.49391C7.58384 1.49391 1.90625 7.3125 1.90625 14.4645C1.90625 21.6164 7.58384 27.435 14.5625 27.435C17.2467 27.435 19.8125 26.5811 21.9829 24.9655ZM25.4464 23.581C24.8511 24.3268 24.1859 25.0085 23.4582 25.6186L25.453 27.663C26.169 27.0414 26.8346 26.3592 27.4412 25.6254L25.4464 23.581ZM33.6875 35.5056C34.0628 35.5056 34.4159 35.3557 34.6816 35.0833C34.9474 34.811 35.0938 34.4494 35.0938 34.0644C35.0938 33.6795 34.9474 33.3178 34.6818 33.0459L28.4382 26.6472C27.8272 27.377 27.162 28.0586 26.45 28.6848L32.6934 35.0833C32.9591 35.3557 33.3122 35.5056 33.6875 35.5056ZM21.5938 14.4646C21.5938 14.0669 21.9088 13.7441 22.2969 13.7441C22.685 13.7441 23 14.0669 23 14.4646C23 14.8623 22.685 15.1851 22.2969 15.1851C21.9088 15.1851 21.5938 14.8623 21.5938 14.4646ZM14.5625 2.93506C8.35918 2.93506 3.3125 8.10703 3.3125 14.4644C3.3125 20.8217 8.35918 25.9937 14.5625 25.9937C20.7658 25.9937 25.8125 20.8217 25.8125 14.4644C25.8125 8.10703 20.7658 2.93506 14.5625 2.93506ZM14.5625 24.5525C9.13466 24.5525 4.71875 20.027 4.71875 14.4644C4.71875 8.90176 9.13466 4.37622 14.5625 4.37622C19.9903 4.37622 24.4062 8.90176 24.4062 14.4644C24.4062 20.027 19.9903 24.5525 14.5625 24.5525ZM19.3933 7.37809C20.7824 8.37526 21.8366 9.75598 22.4421 11.3709C22.5814 11.7424 22.4004 12.1592 22.0379 12.302C21.955 12.3346 21.8697 12.3501 21.7859 12.3501C21.5033 12.3501 21.2368 12.1743 21.1294 11.8878C20.0912 9.11879 17.4523 7.25848 14.5625 7.25848C14.1742 7.25848 13.8594 6.93582 13.8594 6.53793C13.8594 6.14004 14.1742 5.81738 14.5625 5.81738C16.3007 5.81738 17.9712 6.35707 19.3933 7.37809Z"
    />
  </svg>
)

const TapIcon = () => (
  <svg
    width="27"
    height="37"
    viewBox="0 0 27 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.75 0.821313C12.75 0.397071 13.086 0.0527344 13.5 0.0527344C13.914 0.0527344 14.25 0.397071 14.25 0.821313V3.89548C14.25 4.31973 13.914 4.66406 13.5 4.66406C13.086 4.66406 12.75 4.31973 12.75 3.89556V0.821313ZM22.5 12.3506H25.5C25.914 12.3506 26.2501 12.6949 26.2501 13.1191C26.2501 13.5434 25.914 13.8877 25.5 13.8877H22.5C22.086 13.8877 21.75 13.5434 21.75 13.1192C21.75 12.6949 22.086 12.3506 22.5 12.3506ZM4.50004 12.3506H1.50002C1.08602 12.3506 0.75 12.6949 0.75 13.1192C0.75 13.5434 1.08602 13.8877 1.50002 13.8877H4.50004C4.91404 13.8877 5.25006 13.5434 5.25006 13.1191C5.25006 12.6949 4.91404 12.3506 4.50004 12.3506ZM21.4546 3.88014C21.7471 3.58032 22.2226 3.58032 22.5151 3.88014C22.8076 4.17995 22.8076 4.66737 22.5151 4.96719L20.3942 7.14122C20.2486 7.29041 20.0567 7.36572 19.8646 7.36572C19.6726 7.36572 19.4807 7.29034 19.3336 7.14122C19.0411 6.8414 19.0411 6.35399 19.3336 6.05417L21.4546 3.88014ZM7.66656 6.05417L5.54552 3.88014C5.25302 3.58032 4.7775 3.58032 4.485 3.88014C4.1925 4.17995 4.1925 4.66737 4.485 4.96719L6.60449 7.14122C6.75151 7.29034 6.94347 7.36572 7.13549 7.36572C7.32751 7.36572 7.51947 7.29041 7.66649 7.14122C7.95906 6.8414 7.95906 6.35399 7.66656 6.05417ZM16.9995 21.5893C18.501 20.5655 20.523 20.9206 21.603 22.3979C22.2525 23.2849 22.1925 24.5208 21.4619 25.3401L15.3915 32.1284C15.3215 32.2063 15.2495 32.282 15.1756 32.3552C15.5049 32.4363 15.75 32.7404 15.75 33.1027V36.1779C15.75 36.6023 15.414 36.9468 15 36.9468C14.5861 36.9468 14.25 36.6023 14.25 36.178V33.8716H5.25004V36.178C5.25004 36.6023 4.91402 36.9468 4.50002 36.9468C4.08602 36.9468 3.75 36.6023 3.75 36.178V33.1028C3.75 32.6784 4.08602 32.334 4.50002 32.334H4.76173C3.2307 31.0647 2.25 29.1244 2.25 26.9542V20.8053C2.25 19.5341 3.25947 18.4995 4.5 18.4995C4.7925 18.4995 5.0715 18.558 5.32954 18.6609C5.58899 17.6832 6.46502 16.9623 7.50002 16.9623C7.79251 16.9623 8.07151 17.0207 8.32949 17.1237C8.58894 16.146 9.46496 15.4251 10.5 15.4251C10.7625 15.4251 11.016 15.4712 11.25 15.5557V13.1193C11.25 11.848 12.2595 10.8135 13.5 10.8135C14.7405 10.8135 15.75 11.848 15.75 13.1193V22.4425L16.9995 21.5893ZM14.2845 31.0877C13.5888 31.8671 12.6035 32.3185 11.5747 32.334H8.9345C6.06959 32.2979 3.74997 29.8986 3.74997 26.9542V20.8053C3.74997 20.3811 4.086 20.0367 4.5 20.0367C4.914 20.0367 5.25002 20.3811 5.25002 20.8053V21.574C5.25002 21.9982 5.58604 22.3426 6.00004 22.3426C6.41404 22.3426 6.74999 21.9982 6.74999 21.574V19.2682C6.74999 18.8439 7.08602 18.4995 7.50002 18.4995C7.91401 18.4995 8.25004 18.8439 8.25004 19.2682V21.574C8.25004 21.9982 8.58606 22.3426 9.00006 22.3426C9.41406 22.3426 9.75008 21.9982 9.75008 21.574V17.731C9.75008 17.3067 10.0861 16.9624 10.5001 16.9624C10.9141 16.9624 11.25 17.3066 11.25 17.7309V21.5739C11.25 21.9982 11.586 22.3425 12 22.3425C12.414 22.3425 12.75 21.9982 12.75 21.5739V13.1193C12.75 12.695 13.0861 12.3507 13.5001 12.3507C13.9141 12.3507 14.2501 12.695 14.2501 13.1193V23.8797C14.2501 24.1641 14.4046 24.4224 14.6476 24.5561C14.8905 24.6898 15.1875 24.6745 15.417 24.5177L17.8321 22.8667C18.6705 22.2964 19.7986 22.4932 20.403 23.3187C20.619 23.6138 20.5995 24.0274 20.3549 24.2994L14.2845 31.0877ZM8.25 13.1191C8.25 10.1522 10.605 7.73877 13.5 7.73877C16.395 7.73877 18.75 10.1522 18.75 13.119C18.75 13.5433 18.414 13.8876 18 13.8876C17.586 13.8876 17.25 13.5433 17.25 13.119C17.25 11.0007 15.567 9.27596 13.5 9.27596C11.433 9.27596 9.75005 11.0007 9.75005 13.1191C9.75005 13.5433 9.41402 13.8877 9.00002 13.8877C8.58602 13.8877 8.25 13.5433 8.25 13.1191Z"
    />
  </svg>
)

const BookIcon = () => (
  <svg
    width="37"
    height="37"
    viewBox="0 0 37 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15.3359 27.219C15.3359 29.0069 16.7553 30.4614 18.5 30.4614C20.2447 30.4614 21.6641 29.0069 21.6641 27.219C21.6641 25.4311 20.2447 23.9766 18.5 23.9766C16.7553 23.9766 15.3359 25.4311 15.3359 27.219ZM18.5 26.1382C19.0816 26.1382 19.5547 26.623 19.5547 27.219C19.5547 27.815 19.0816 28.2998 18.5 28.2998C17.9184 28.2998 17.4453 27.815 17.4453 27.219C17.4453 26.623 17.9184 26.1382 18.5 26.1382Z" />
    <path d="M1.55469 30.4611H9.36613L11.3342 33.9545C11.474 34.2028 11.7044 34.3839 11.9746 34.4581C12.2446 34.5323 12.5326 34.4934 12.7749 34.3501L13.8406 33.7195C14.4337 33.3685 15.3359 33.8202 15.3359 34.5674V35.8654C15.3359 36.4623 15.8081 36.9463 16.3906 36.9463H20.6093C21.1918 36.9463 21.664 36.4623 21.664 35.8654V34.6046C21.664 33.8266 22.5473 33.3574 23.2198 33.7554L24.2249 34.3501C24.729 34.6485 25.3745 34.4714 25.6657 33.9545L27.6339 30.4611H35.4453C36.0278 30.4611 36.5 29.9772 36.5 29.3802V1.1336C36.5 0.536674 36.0278 0.0527344 35.4453 0.0527344H22.7188C20.9955 0.0527344 19.4629 0.904313 18.5 2.21821C17.5371 0.904313 16.0045 0.0527344 14.2812 0.0527344H1.55469C0.972219 0.0527344 0.5 0.536674 0.5 1.1336V29.3802C0.5 29.9772 0.972219 30.4611 1.55469 30.4611ZM19.5547 5.45706C19.5547 3.6691 20.9741 2.21447 22.7188 2.21447H34.3906V28.2994H26.9375C26.8565 28.2994 26.778 28.3096 26.7022 28.3273L26.2839 28.0798C25.6459 27.7023 25.6696 26.7206 26.3144 26.3391L27.3892 25.7032C27.8933 25.4049 28.0665 24.7436 27.7753 24.2267L25.6659 20.4825C25.3749 19.9659 24.7295 19.7883 24.2251 20.0869L23.2265 20.6777C22.5532 21.0762 21.6641 20.6158 21.6641 19.8399V18.5716C21.6641 17.9746 21.1919 17.4907 20.6094 17.4907H19.5548V5.45706H19.5547ZM19.5547 19.6524V19.8399C19.5547 22.2944 22.2138 23.7732 24.2812 22.5499L24.3664 22.4994L25.4211 24.3715L25.2597 24.467C23.2209 25.6732 23.1741 28.7359 25.2292 29.9519L25.4211 30.0654L24.3664 31.9375L24.2746 31.8832C22.2159 30.6651 19.5547 32.14 19.5547 34.6046V34.7846H17.4453V34.5674C17.4453 32.1834 14.8088 30.6504 12.7859 31.8474L12.6335 31.9376L11.5789 30.0655L11.83 29.9169C13.8909 28.6975 13.7084 25.6315 11.6803 24.4315L11.5789 24.3716L12.6336 22.4994L12.76 22.5742C14.812 23.7884 17.4453 22.2496 17.4453 19.8399V19.6524H19.5547ZM2.60938 2.21447H14.2812C16.0259 2.21447 17.4453 3.6691 17.4453 5.45706V17.4907H16.3906C15.8082 17.4907 15.3359 17.9746 15.3359 18.5716V19.8399C15.3359 20.5856 14.4693 21.0896 13.8148 20.7022L12.7749 20.0869C12.2708 19.7886 11.6254 19.9654 11.3342 20.4825L9.2248 24.2267C8.9337 24.7433 9.10646 25.4048 9.61081 25.7032L10.6256 26.3036C11.2733 26.6868 11.3977 27.6764 10.7753 28.0448L10.2978 28.3273C10.222 28.3096 10.1435 28.2994 10.0625 28.2994H2.60938V2.21447Z" />
    <path d="M5.77344 8.77197H14.2812C14.8637 8.77197 15.3359 8.28806 15.3359 7.69116C15.3359 7.09427 14.8637 6.61035 14.2812 6.61035H5.77344C5.19097 6.61035 4.71875 7.09427 4.71875 7.69116C4.71875 8.28806 5.19097 8.77197 5.77344 8.77197Z" />
    <path d="M15.3359 12.0146C15.3359 11.4176 14.8637 10.9336 14.2812 10.9336H5.77344C5.19097 10.9336 4.71875 11.4176 4.71875 12.0146C4.71875 12.6117 5.19097 13.0957 5.77344 13.0957H14.2812C14.8637 13.0957 15.3359 12.6117 15.3359 12.0146Z" />
    <path d="M22.7188 13.0957H31.2266C31.809 13.0957 32.2812 12.6117 32.2812 12.0146C32.2812 11.4176 31.809 10.9336 31.2266 10.9336H22.7188C22.1363 10.9336 21.6641 11.4176 21.6641 12.0146C21.6641 12.6117 22.1363 13.0957 22.7188 13.0957Z" />
    <path d="M22.7188 8.77197H31.2266C31.809 8.77197 32.2812 8.28806 32.2812 7.69116C32.2812 7.09427 31.809 6.61035 31.2266 6.61035H22.7188C22.1363 6.61035 21.6641 7.09427 21.6641 7.69116C21.6641 8.28806 22.1363 8.77197 22.7188 8.77197Z" />
  </svg>
)

const RoocketIconSmall = () => (
  <svg
    width="105"
    height="108"
    viewBox="0 0 105 108"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M97.0014 39.1718C97.1694 39.0135 97.3079 38.8209 97.4063 38.6022C106.196 19.0519 104.967 2.42645 104.911 1.72892L104.911 1.71823C104.836 0.848406 104.162 0.159746 103.312 0.0863916C103.288 0.0844854 103.169 0.0757756 102.961 0.0653868C100.409 -0.0896211 85.1105 -0.612081 67.3311 7.78123C67.12 7.88029 66.9336 8.02023 66.78 8.19021C54.6705 14.0244 41.5714 23.9759 30.8992 40.9061L17.1982 39.9698C16.4353 39.8927 15.7301 40.3769 15.4518 41.1049L4.8389 68.9012C4.55364 69.6473 4.7864 70.4955 5.40942 70.9814C5.72093 71.2252 6.0954 71.3473 6.46802 71.3473C6.83716 71.3473 7.2065 71.229 7.51801 70.9888L16.3269 64.2191L20.938 65.1638L27.8876 72.286L25.9836 75.7921C23.6684 74.6238 20.9841 74.3367 18.3648 75.0165C14.8598 75.9293 11.9935 78.3791 10.5026 81.7416L0.157509 105.068C-0.145184 105.749 -0.00347642 106.551 0.512701 107.078C0.846975 107.422 1.29486 107.603 1.74993 107.603C1.99499 107.603 2.2417 107.55 2.47446 107.442L25.2351 96.8381C28.5142 95.312 30.9046 92.3744 31.7953 88.7824C32.4822 86.012 32.1607 83.1669 30.9241 80.7407L34.171 78.7271L41.4141 86.1501L42.3348 90.8699L35.7291 99.8956C35.2601 100.538 35.2619 101.42 35.736 102.059C36.0738 102.514 36.5935 102.767 37.1289 102.767C37.3424 102.767 37.5578 102.726 37.7675 102.647L64.8906 91.77C65.601 91.4853 66.0489 90.7606 65.9983 89.9807L65.0843 75.9332C81.5989 64.9985 91.3082 51.5787 97.0014 39.1718ZM71.2013 10.0867C85.1997 4.01231 97.3114 3.55012 101.481 3.6103C101.52 6.13009 101.4 11.4713 100.108 18.3368C99.1933 23.1856 97.6925 28.8 95.2487 34.7306L71.2013 10.0867ZM67.7888 11.6646L93.7082 38.2269C87.4197 51.5964 75.3102 67.747 52.021 79.3342C49.2613 80.7047 46.4014 81.9855 43.4541 83.1696L37.4886 77.056L51.6801 67.8741C52.0901 67.6075 52.3699 67.1828 52.4622 66.7051C52.4847 66.5901 52.4964 66.4721 52.4964 66.3523V55.5924C52.4966 54.6025 51.7126 53.7991 50.7467 53.7991H38.956C38.4924 53.7991 38.0559 53.9873 37.7334 54.31C37.6103 54.4323 37.5037 54.5741 37.4185 54.7324L37.2549 55.0368L29.6557 69.0302L23.8414 63.0696C25.2159 59.4768 26.7237 56.0103 28.3536 52.6929C39.2549 30.5591 54.1607 18.363 67.7888 11.6646ZM22.6278 81.9715L24.2773 78.934C23.3118 78.4763 22.2539 78.2412 21.1717 78.2412C20.5277 78.2412 19.8752 78.3238 19.2259 78.4924C16.7568 79.1342 14.7374 80.8595 13.6893 83.2231L5.27417 102.199L23.7878 93.5743C26.0941 92.4982 27.7774 90.4305 28.4039 87.9001C28.8467 86.1103 28.6838 84.283 27.9665 82.7013L25.0179 84.4104C24.3354 84.8068 23.4761 84.6884 22.9198 84.1164C22.4904 83.6776 22.3225 83.0529 22.446 82.4683C22.4815 82.2975 22.5418 82.13 22.6278 81.9715ZM26.4981 48.5705C27.2456 47.1362 28.0161 45.7307 28.8086 44.356L18.2429 43.6351L10.3388 64.337L14.8517 60.8688C15.2506 60.5641 15.7582 60.4457 16.2446 60.5443L20.6983 61.4568C22.4837 56.8216 24.4273 52.5348 26.4981 48.5705ZM31.3226 73.3363L28.8927 77.8111L48.9961 65.343V57.3886H39.9877L31.6513 72.9007C31.5631 73.0643 31.4518 73.2107 31.3226 73.3363ZM45.028 86.3901L45.9183 90.9527C46.0164 91.4531 45.9009 91.9731 45.6033 92.3802L42.2192 97.0052L62.4197 88.9046L61.7144 78.0783C60.2909 78.9402 58.8337 79.7767 57.345 80.5867C53.5486 82.6564 49.4508 84.6008 45.028 86.3901ZM77.2813 28.4039C71.3964 22.3728 61.8231 22.3728 55.9382 28.4039C50.0533 34.435 50.0533 44.2463 55.9382 50.2775C58.8798 53.2939 62.7453 54.8004 66.6089 54.8004C70.4744 54.8004 74.338 53.2922 77.2813 50.2775C83.1661 44.2463 83.1661 34.4348 77.2813 28.4039ZM74.807 47.7415C70.2872 52.3737 62.9325 52.3737 58.4126 47.7415C53.8928 43.1093 53.8928 35.5718 58.4126 30.9396C60.6718 28.6244 63.6413 27.4659 66.6091 27.4659C69.577 27.4659 72.5465 28.6244 74.8072 30.9396C79.3269 35.5718 79.3269 43.1093 74.807 47.7415ZM63.1289 42.908C65.0486 44.8753 68.1703 44.8772 70.0882 42.908C70.7707 42.2069 71.88 42.2069 72.5624 42.908C73.2466 43.6092 73.2466 44.7427 72.5624 45.4439C70.9229 47.1261 68.7671 47.9673 66.6094 47.9673C64.4537 47.9673 62.296 47.1261 60.6546 45.4439C57.3717 42.0795 57.3717 36.6041 60.6546 33.2397C63.9373 29.8754 69.2814 29.8754 72.5624 33.2397C73.2466 33.9409 73.2466 35.0744 72.5624 35.7756C71.8802 36.4767 70.7707 36.4767 70.0882 35.7756C68.1684 33.8083 65.0467 33.81 63.1289 35.7756C61.211 37.7431 61.211 40.9407 63.1289 42.908Z"
    />
  </svg>
)

const ConfiguratorWrapperStyles = styled(WrapperStyles)`
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
    opacity: 0.2;
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

const ConfiguratorFlexStyles = styled(StyledFlex)`
  width: 100%;
`

const StepsStyles = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  padding-top: 9px;
  border-right: 1px solid rgba(205, 239, 241, 0.2);

  li {
    display: flex;
    align-items: center;
    padding: 29px 38px 29px 0;
    position: relative;
    justify-content: space-between;
    p {
      color: var(--white);
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

const ImgWrapper = styled(motion.span)`
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

const StepsColumn = ({ items, activeStep, setActiveStep }) => {
  const width = useWindowSize()
  return (
    <StepsStyles>
      {items.map((item, i) => (
        <li className={activeStep === i ? "active" : ""}>
          {width > 1002 && (
            <>
              <div>
                <Text fontSize="18px" fontWeight="bold">
                  {item.stepTitle}
                </Text>{" "}
                <Text margin="12px 0 0" fontSize="13px" fontWeight="300">
                  {item.stepSubtitle}
                </Text>
              </div>
              <ImgWrapper>{item.stepIcon}</ImgWrapper>
            </>
          )}
        </li>
      ))}
    </StepsStyles>
  )
}

const ActiveStepStyles = styled(motion.div)`
  padding: 38px 0 0 55px;
  display: flex;
  height: 100%;
  flex-direction: column;

  > div:first-of-type {
    padding-bottom: 42px;
    border-bottom: 1px solid rgba(205, 239, 241, 0.2);
  }
  > div:last-of-type {
    padding-top: 33px;
    height: 100%;
    flex: 1;
    justify-content: space-between;
    /* min-height: 312px; */
  }

  @media only screen and (max-width: 1002px) {
    padding: 30px 0 0;
    > div:first-of-type {
      padding-bottom: 32px;
      border-bottom: none;
    }
    > div:last-of-type {
      padding-top: 23px;
      /* min-height: 551px; */
    }
  }
  @media only screen and (max-width: 640px) {
    > div:last-of-type {
      /* min-height: 520px; */
      /* max-height: calc(100% - 160px); */
    }
  }
  @media only screen and (max-height: 640px) {
    > div:last-of-type {
      /* min-height: 544px; */
      /* max-height: calc(100% - 160px); */
    }
  }
`

const ActiveStep = ({ steps, activeStep, setActiveStep }) => {
  const width = useWindowSize()
  const [success, setSuccess] = useState(false)
  const [reset, setReset] = useState(false)
  const formRef = useRef()
  const dispatch = useGlobalDispatchContext()

  const handleSubmit = (e, props) => {
    e.preventDefault()
    dispatch({
      type: "TOGGLE_CURSOR",
      cursorShow: false,
    })
    props.setSubmitting(true)
    setTimeout(() => {
      props.setSubmitting(false)
      setSuccess(true)
      props.resetForm()
    }, 1000)
  }

  const handleReset = () => {
    setActiveStep(0)
    setSuccess(false)
    setReset(false)
  }

  return (
    <Formik
      initialValues={{
        configuratorName: "",
        configuratorEmail: "",
        acceptedTerms: false,
        vendor: "",
        model: "",
        number: "",
      }}
      validationSchema={Yup.object({
        configuratorName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Wymagane"),
        vendor: Yup.string()
          .oneOf(["amd", "nvidia"], "Nieprawidłowy producent kart")
          .required("Wymagane"),
        model: Yup.string().required("Wymagane"),
        number: Yup.string()
          .min(1)
          .max(12, "Wybierz liczbę kart z przedziału 1-12")
          .required("Wymagane"),
        configuratorEmail: Yup.string()
          .email("Nieprawidłowy adres email`")
          .required("Wymagane"),
        acceptedTerms: Yup.boolean()
          .required("Wymagane")
          .oneOf(
            [true],
            "Musisz zaakceptować politykę prywatności Xminer, aby wysłać zamówienie"
          ),
      })}
      onSubmit={async (e, values, { setSubmitting }) => {
        // await new Promise(r => setTimeout(r, 500))
        e.preventDefault()
        setSubmitting(true)
        setTimeout(() => {
          setSubmitting(false)
        }, 2500)
      }}
    >
      {props => (
        <AnimateSharedLayout>
          <motion.form layout ref={formRef} onReset={handleReset}>
            <ActiveStepStyles layout>
              <StyledFlex layout key="flex-1" direction="column">
                <AnimatePresence exitBeforeEnter>
                  <Text
                    margin="25px 0 0"
                    fontSize="10px"
                    textTransform="uppercase"
                    fontWeight="400"
                    letterSpacing="1px"
                    color="var(--white)"
                    variants={textFadeInUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={`step-${activeStep + 1}`}
                  >
                    Krok <motion.span>{activeStep + 1}</motion.span>/
                    {steps.length}
                  </Text>
                  <Text
                    margin="19px 0 0"
                    fontSize={width > 640 ? "24px" : "18"}
                    lineHeight="1.25em"
                    fontWeight={width > 1002 ? "600" : "500"}
                    color="var(--white)"
                    variants={textFadeInUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={`firstline-${activeStep + 1}`}
                    dangerously={steps[activeStep].firstLine}
                  />
                  <Text
                    margin="7px 0 0"
                    fontSize="13px"
                    lineHeight="normal"
                    fontWeight="300"
                    color="var(--white)"
                    variants={textFadeInUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    key={`helperText-${activeStep + 1}`}
                    dangerously={steps[activeStep].helperText}
                  />
                </AnimatePresence>
              </StyledFlex>
              <StyledFlex layout key="flex-2" direction="column">
                <AnimatePresence exitBeforeEnter>
                  {!success && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={`content-${activeStep}`}
                      layout
                    >
                      {steps[activeStep].content}
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={reset && { opacity: 0 }}
                    key={`content-success-rocket`}
                    layout
                  >
                    {success && !reset && (
                      <RocketIcon
                        setReset={setReset}
                        handleReset={handleReset}
                      />
                    )}
                    {success && !reset && (
                      <Text
                        variants={textFadeInUp}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        color="var(--white)"
                      >
                        Dziękujemy za wysłanie wiadomości. Skontaktujemy się
                        z&nbsp;Tobą możliwie szybko!
                      </Text>
                    )}
                  </motion.div>
                </AnimatePresence>

                <StyledFlex
                  margin="54px 0 0"
                  width="100%"
                  key="flex-buttons"
                  layout
                  justifyContent={width > 1002 ? "flex-end" : "center"}
                  alignItems={width <= 1002 ? "center" : ""}
                  direction={width <= 1002 ? "column" : ""}
                >
                  <AnimatePresence>
                    {activeStep > 0 && (
                      <Button
                        outlinebg="var(--nav-dark-bluse)"
                        type="onlyOutline"
                        width="176px"
                        layout={true}
                        margin={width > 1002 ? "0 12px 0 0" : "24px 0 0"}
                        onClick={e => {
                          e.preventDefault()
                          setActiveStep(activeStep - 1)
                          dispatch({
                            type: "TOGGLE_CURSOR",
                            cursorShow: false,
                          })
                        }}
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1, transition: { duration: 0.4 } }}
                        exit={{ opacity: 0, transition: { duration: 0.4 } }}
                        key="back"
                        whileTap={{ scale: 0.98 }}
                        disabled={props.isSubmitting || reset || success}
                        cursor="pointer"
                      >
                        &larr; &nbsp;&nbsp;Wróć
                      </Button>
                    )}
                    <Button
                      width="176px"
                      // border="1px solid transparent"
                      order={width <= 1002 && "-1"}
                      margin={width > 1002 ? "0 0 0 12px" : "0"}
                      layout={true}
                      type={activeStep < steps.length - 1 ? "button" : "submit"}
                      whileTap={{ scale: 0.98 }}
                      loading={
                        activeStep === steps.length - 1
                          ? props.isSubmitting
                          : undefined
                      }
                      onClick={
                        activeStep < steps.length - 1
                          ? () => {
                              setActiveStep(activeStep + 1)
                              props.setSubmitting(true)
                              setTimeout(() => {
                                props.setSubmitting(false)
                              }, 50)
                              dispatch({
                                type: "TOGGLE_CURSOR",
                                cursorShow: false,
                              })
                            }
                          : e => {
                              handleSubmit(e, props)
                            }
                      }
                      disabled={
                        (activeStep === steps.length - 1 && !props.isValid) ||
                        props.isSubmitting ||
                        reset ||
                        success
                      }
                    >
                      {activeStep < steps.length - 1 ? "Dalej" : "Wyślij"}
                    </Button>
                  </AnimatePresence>
                </StyledFlex>
              </StyledFlex>
            </ActiveStepStyles>
          </motion.form>
        </AnimateSharedLayout>
      )}
    </Formik>
  )
}

const Configurator = ({ vendors }) => {
  const [activeVendor, setActiveVendor] = useState(0)
  const [activeModel, setActiveModel] = useState(0)
  const [activeCard, setActiveCard] = useState(7)
  const [activeStep, setActiveStep] = useState(0)

  const models = {
    amd: [
      { name: "RX 5700" },
      { name: "RX 6700" },
      { name: "RX 6800" },
      { name: "RX 6900" },
    ],
    nvidia: [
      { name: "RTX 3060ti" },
      { name: "RTX 3070" },
      { name: "RTX 3080" },
      { name: "RTX 3090" },
    ],
  }
  const steps = [
    {
      stepTitle: "Producent kart",
      stepSubtitle: "Przeglądaj i wybierz",
      stepIcon: <SearchIcon />,
      firstLine: "Wybierz producenta karty",
      helperText: "Tekst pomocniczy na temat karty",
      content: (
        <Step1
          vendors={vendors}
          activeVendor={activeVendor}
          setActiveVendor={setActiveVendor}
        />
      ),
    },
    {
      stepTitle: "Model kart",
      stepSubtitle: "Przeglądaj i wybierz",
      stepIcon: <TapIcon />,
      firstLine: "Wybierz model karty graficznej",
      helperText: "Tutaj pomocniczy tekst do wyboru",
      content: (
        <Step2
          models={models}
          activeModel={activeModel}
          setActiveModel={setActiveModel}
        />
      ),
    },
    {
      stepTitle: "Liczba kart",
      stepSubtitle: "Wybierz liczbę kart",
      stepIcon: <BookIcon />,
      firstLine: "Wybierz liczbę kart w&nbsp;Twojej koparce",
      helperText:
        "Sprawdzone przez nas i&nbsp;sugerowane liczby to&nbsp;6,&nbsp;8,&nbsp;12",
      content: <Step3 activeCard={activeCard} setActiveCard={setActiveCard} />,
    },
    {
      stepTitle: "Gotowe",
      stepSubtitle: "Potwierdzenie",
      stepIcon: <RoocketIconSmall />,
      firstLine: "Potwierdź konfigurację",
      helperText:
        "Wprowadź dane kontaktowe, odezwiemy się możliwie najszybciej!",
      content: <Step4 />,
    },
  ]
  return (
    <div className="grid">
      <StepsColumn
        items={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <ActiveStep
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </div>
  )
}

const MinerRigsSection = () => {
  const dispatch = useGlobalDispatchContext()
  const data = useStaticQuery(graphql`
    query minerConfiguratorQuery {
      datoCmsPageSale {
        amdLogoImg {
          alt
          fluid(maxWidth: 220) {
            ...GatsbyDatoCmsFluid
          }
        }
        nvidiaLogoImg {
          alt
          fluid(maxWidth: 220) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  `)
  const {
    datoCmsPageSale: { amdLogoImg, nvidiaLogoImg },
  } = data
  const width = useWindowSize()
  return (
    <Container bg="var(--nav-dark-bluse)">
      <ConfiguratorWrapperStyles direction="column">
        <ConfiguratorFlexStyles
          width="100%"
          alignItems="flex-start"
          direction="column"
        >
          <Text
            as="h2"
            fontSize="10px"
            textTransform="uppercase"
            letterSpacing="1px"
            lineHeight="normal"
            color="var(--white)"
          >
            Maszyny Xminer
          </Text>
          <Text
            color="var(--white)"
            as="h3"
            fontSize={width > 640 ? "48px" : "24px"}
            lineHeight="normal"
            fontWeight="600"
          >
            Stwórz koparkę
          </Text>
          <span className="top-line" />
          <Configurator
            vendors={[
              { ...amdLogoImg, name: "amd" },
              { ...nvidiaLogoImg, name: "nvidia" },
            ]}
          />
        </ConfiguratorFlexStyles>
      </ConfiguratorWrapperStyles>
    </Container>
  )
}

export default MinerRigsSection
