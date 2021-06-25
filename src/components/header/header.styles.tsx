import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import { palette } from "../../global.styles";

export const Header = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  padding: 30px 40px;

  @media screen and (max-width: 800px) {
    padding: 15px;
  }
`;

export const OptionsContainer = styled.span`
  display: flex;
  justify-content: space-evenly;
`;

export const BreakerBackground = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 30vh;
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`;

export const LogoBorder = styled.div`
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoBackground = styled.div`
  margin: 4px;
  background: ${palette.lightPrimary};
`;

export const Logo = styled(Link)`
  cursor: pointer;
  font-family: "Source Code Pro", monospace;
  font-size: larger;
  padding: 5px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  background: ${palette.mainBrand};
  background: linear-gradient(
    90deg,
    ${palette.lightAccent},
    ${palette.mainBrand},
    ${palette.darkAccent},
    ${palette.lightAccent},
    ${palette.mainBrand}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: repeat;
  background-size: 400% 100%;
  animation: ${gradientAnimation} 5s linear infinite;
`;

/* Animation for blinking cursor in logo/homepage link*/
const blink = (props: any) => keyframes`
  from, to {
    background: ${palette.lightPrimary};
  }
  50% {
    background: transparent;
  }
`;

export const BlinkingCursor = styled.span`
  animation: 1s ${blink} step-end infinite;
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  color: ${palette.mainBrand};
  transition: all ease-in-out 0.25s;

  &:hover {
    color: ${palette.darkAccent};
  }
`;

export const Spacer = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  color: ${palette.mainBrand};
`;
