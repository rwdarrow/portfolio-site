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
    font-size: 2.35vw;

    @media screen and (max-width: 768px) {
      font-size: 20px;
    }

    @media screen and (min-width: 1600px) {
      font-size: 40px;
    }
  }

  body {
    font-family: 'Lato', sans-serif;  
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
