import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lightPrimary: string;
      lightAccent: string;
      mainBrand: string;
      darkAccent: string;
      darkPrimary: string;
    }
  }
}