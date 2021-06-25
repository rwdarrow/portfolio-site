import styled, { createGlobalStyle, keyframes } from "styled-components";

import { palette } from "../../global.styles";

export const HomePageStyle = createGlobalStyle`
  body {
    background: ${palette.lightPrimary};
    overflow-x: hidden;
  }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`;

export const BreakerBorder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30vh;
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
  animation: ${gradientAnimation} 5s linear infinite;
`;

export const Breaker = styled.div`
  background: ${palette.darkPrimary};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 98%;
`;
