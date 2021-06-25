import { createGlobalStyle } from "styled-components";

export const palette = {
  lightPrimary: "#F4FAFF",
  lightAccent: "#3F88C5",
  mainBrand: "#FA824C",
  darkAccent: "#f9bf20",
  darkPrimary: "#1f1f1f",
};

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    font-size: 3vmin;
    background: ${palette.lightPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${palette.lightPrimary};
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
