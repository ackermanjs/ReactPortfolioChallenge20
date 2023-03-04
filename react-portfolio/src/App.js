import React from "react";
// First we import our Hello component from our components folder.
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HeroSection from "./HeroSection";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
import React from "react";
import HeroSection from "./PrimaryNavBar";

function PrimaryNavBar() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
