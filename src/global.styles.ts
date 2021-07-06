import { createGlobalStyle } from "styled-components";

export const palette = {
  lightPrimary: "#F4FAFF",
  lightAccent: "#3F88C5",
  mainBrand: "#FA824C",
  darkAccent: "#f9bf20",
  darkPrimary: "#1f1f1f",
};

export const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 2.05vw;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    /* @media screen and (aspect-ratio: 16 / 9) {
      font-size: 37px;
    } */
  }

  body {
    font-family: 'Lato', sans-serif; 
    background: ${palette.lightPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
