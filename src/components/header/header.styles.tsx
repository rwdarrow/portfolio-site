import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { palette } from "../../global.styles";

const gradientKeyframes = keyframes`
  0% { background-position: 0% 0%; }
  100% { background-position: 100% 0%; }
`;

const gradient = css`
  background: ${palette.mainBrand};
  background: linear-gradient(
    90deg,
    ${palette.lightAccent},
    ${palette.mainBrand},
    ${palette.darkAccent},
    ${palette.lightAccent},
    ${palette.mainBrand}
  );
  background-size: 200%;
`;

const gradientAnimation = css`
  background-size: 400% 100%;
  transform: rotateZ(360deg);
  animation: ${gradientKeyframes} 1s linear infinite;
`;

export const Header = styled.span`
  position: fixed;
  width: 100vw;
  background: ${palette.lightPrimary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  z-index: 1;
`;

export const LogoBorder = styled.div`
  ${gradient}
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;

  &:hover {
    @media (hover: hover) and (pointer: fine) {
      ${gradientAnimation}
    }
  }
`;

export const LogoBackground = styled.div`
  background: ${palette.lightPrimary};
`;

export const Logo = styled.div`
  ${gradient}
  cursor: pointer;
  font-family: "Source Code Pro", monospace;
  font-size: larger;
  padding: 0.12rem;
  margin-right: 0.34em;
  display: inline;
  position: relative;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  border: none;

  &:focus {
    outline-width: 0 !important;
  }

  &:hover {
    @media (hover: hover) and (pointer: fine) {
      ${gradientAnimation}
    }
  }
`;

// export const Logo = styled(Link)`
//   ${gradient}
//   cursor: pointer;
//   font-family: "Source Code Pro", monospace;
//   font-size: larger;
//   padding: 0.12rem;
//   margin-right: 0.34em;
//   display: inline;
//   position: relative;
//   background-clip: text;
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   box-decoration-break: clone;
//   -webkit-box-decoration-break: clone;
//   border: none;

//   &:focus {
//     outline-width: 0 !important;
//   }

//   &:hover {
//     @media (hover: hover) and (pointer: fine) {
//       ${gradientAnimation}
//     }
//   }
// `;

/* Animation for blinking cursor in logo/homepage link*/
const blink = () => keyframes`
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

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavbarContent = styled(motion.div)`
  @media screen and (max-width: 768px) {
    position: absolute;
    overflow: hidden;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    z-index: 1;
    background: ${palette.mainBrand};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px;
  }
`;

export const OptionLink = styled.button`
  background: transparent;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  color: ${palette.mainBrand};
  transition: all ease-in-out 0.25s;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    color: ${palette.lightPrimary};
    padding: 0.25rem;
  }

  &:hover {
    @media (hover: hover) and (pointer: fine) {
      color: ${palette.darkAccent};
    }
  }
`;

export const Spacer = styled.span`
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  color: ${palette.mainBrand};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

interface NavMenuButtonProps {
  open: boolean;
}

export const NavMenuButton = styled.div<NavMenuButtonProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  padding: 0;
  margin-left: 1rem;
  margin-right: 0.5rem;
  border: none;
  background: transparent;
  transition: all 0.25s linear;
  z-index: 2;
  padding: 20px 0 20px 20px;

  &:focus {
    outline: none;
  }

  &:hover {
    @media (hover: hover) and (pointer: fine) {
      transform: scale(1.2, 1.2);
    }
  }

  & > div {
    width: 1rem;
    height: 0.1rem;
    margin-bottom: 0.2rem;
    background: ${palette.mainBrand};
    transition: all 0.5s ease-in-out;
    position: relative;
    transform-origin: 0.05rem;

    @media screen and (max-width: 768px) {
      background: ${(props) =>
        props.open ? palette.lightPrimary : palette.mainBrand};
    }

    &:first-child {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.open ? "0" : "1")};
      transform: ${(props) =>
        props.open ? "translateX(-20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
