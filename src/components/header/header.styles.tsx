import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const OptionsContainer = styled.span`
  display: flex;
  justify-content: space-evenly;
`;

export const HomePageLink = styled(Link)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.lightPrimary};
  font-family: "Source Code Pro", monospace;
  font-size: larger;
  border: solid 1px;
  padding: 5px;
  margin-right: 15px;
`;

/* Animation effect for blinking cursor in logo/homepage link*/
const blink = (props: any) => keyframes`
  from, to {
    color: transparent;
  }
  50% {
    color: ${(() => {
      return `${props.theme.colors.lightPrimary}`;
    })()};
  }
`;

export const BlinkingCursor = styled.span`
  animation: 1s ${blink} step-end infinite;
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  color: ${(props) => props.theme.colors.lightPrimary};
  transition: all ease-in-out 0.25s;

  &:hover {
    color: ${(props) => props.theme.colors.mainBrand};
  }
`;

export const Spacer = styled.span`
  padding-left: 15px;
  padding-right: 15px;
  color: ${(props) => props.theme.colors.lightPrimary};
`;
