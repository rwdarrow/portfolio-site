import { BrowserRouter, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./global.styles";

import { routes } from "./routes";

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
    <div style={{ verticalAlign: "top" }}>
      <GlobalStyle />
      <Header />
      <HomePage />
      <About />
      <BrowserRouter>
        <Switch>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
