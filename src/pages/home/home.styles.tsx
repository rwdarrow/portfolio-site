import styled, { createGlobalStyle, css, keyframes } from "styled-components";
import { motion } from "framer-motion";

import { palette } from "../../global.styles";
import { ArrowThinDown } from "@styled-icons/zondicons";

import withGradient from "../../components/with-gradient/with-gradient.component";

export const HomePageStyle = createGlobalStyle`
  body {
    background: ${palette.lightPrimary};
    overflow-x: hidden;
    color: ${palette.darkPrimary};
  }
`;

const gradient = css`
  background: ${palette.mainBrand};
  background: linear-gradient(
    90deg,
    ${palette.lightAccent},
    ${palette.mainBrand},
    ${palette.darkAccent}
  );
  background-size: 100%;
`;

export const Border = styled.div`
  ${gradient}
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 15px;
`;

export const Content = styled.div`
  margin: 0 0.5rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArrowContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23%;

  @media screen and (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const arrowAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(40%);
  }
`;

export const GradientArrowThinDown = styled(withGradient(ArrowThinDown))`
  animation: ${arrowAnimation} 3s ease-in-out infinite;
  animation-delay: 14s;
  transform-origin: top;
`;

export const Arrow = styled.div`
  background: ${palette.mainBrand};
  background: linear-gradient(
    180deg,
    ${palette.lightAccent},
    ${palette.mainBrand},
    ${palette.darkAccent}
  );

  background-size: 100%;
  height: 5rem;
  width: 1rem;

  & > div {
    &:first-child {
      width: 5rem;
      height: 5rem;
    }

    &:nth-child(2) {
    }
  }
`;
