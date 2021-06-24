import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./default-theme";
import { GlobalStyle } from "./global.styles";

import * as routes from "./routes";

import Header from "./components/header/header.component";

import HomePage from "./pages/home/home.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import Education from "./pages/education/education.component";
import Projects from "./pages/projects/projects.component";
import Contact from "./pages/contact/contact.component";
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
          <Route exact path={routes.skills} component={Skills} />
          <Route exact path={routes.experience} component={Experience} />
          <Route exact path={routes.education} component={Education} />
          <Route exact path={routes.projects} component={Projects} />
          <Route exact path={routes.contact} component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
