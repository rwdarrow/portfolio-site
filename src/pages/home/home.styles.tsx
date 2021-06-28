import styled, { createGlobalStyle, keyframes } from "styled-components";

import { palette } from "../../global.styles";

export const HomePageStyle = createGlobalStyle`
  body {
    background: ${palette.darkPrimary};
    overflow-x: hidden;
  }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`;

export const BreakerBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70vh;
  z-index: -1;
  background: ${palette.mainBrand};
  background: linear-gradient(
    90deg,
    ${palette.lightAccent},
    ${palette.mainBrand},
    ${palette.darkAccent},
    ${palette.lightAccent},
    ${palette.mainBrand}
  );
  background-size: 400% 100%;
  transform: rotateZ(360deg);
  animation: ${gradientAnimation} 5s linear infinite;
`;

export const Breaker = styled.div`
  background: ${palette.lightPrimary};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 99%;
`;

export const BreakerContent = styled.div`
  margin: 0 0.5rem;
  padding: 1rem;
`;

export const TypedText = styled.span`
  display: flex;

  & > * {
    margin: 0;
  }

  & > h1 {
    font-size: 4rem;
  }

  & > h2 {
    font-size: 3rem;
  }

  & > h3 {
    font-size: 2rem;
  }

  & > h4 {
    font-size: 1rem;
  }
`;

/* Animation for blinking cursor in breaker headline*/
const blink = () => keyframes`
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const BlinkingCursor = styled.h1`
  animation: 1s ${blink} step-end infinite;
`;
