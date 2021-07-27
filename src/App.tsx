import { BrowserRouter, Switch, Route } from "react-router-dom";

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
      <>
        <GlobalStyle />
        <Header />
        <HomePage />
        <About />
        {/* <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={routes.home.route} component={HomePage} />
          <Route exact path={routes.about.route} component={About} />
          <Route exact path={routes.skills.route} component={Skills} />
          <Route exact path={routes.experience.route} component={Experience} />
          <Route exact path={routes.education.route} component={Education} />
          <Route exact path={routes.projects.route} component={Projects} />
          <Route exact path={routes.contact.route} component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter> */}
      </>
  );
};

export default App;
