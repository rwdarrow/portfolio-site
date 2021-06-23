import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./default-theme";
import { GlobalStyle } from "./global.styles";

import * as routes from "./routes";

import Header from "./components/header/header.component";

import HomePage from "./pages/home/home.component";
import About from "./pages/about/about.component";
import NotFound from "./pages/not-found/not-found.component";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route exact path={routes.about} component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
