import styled, { createGlobalStyle, keyframes } from "styled-components";

import { palette } from "../../global.styles";

export const HomePageStyle = createGlobalStyle`
  body {
    background: ${palette.darkPrimary};
    overflow-x: hidden;
  }
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
    ${palette.darkAccent}
  );
  background-size: 100%;
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
