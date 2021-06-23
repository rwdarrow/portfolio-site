import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Lato', sans-serif;
    background: ${(props) => props.theme.colors.darkPrimary};
    padding: 30px 40px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media screen and (max-width: 800px) {
      padding: 15px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.lightPrimary};
  }

  a {
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
