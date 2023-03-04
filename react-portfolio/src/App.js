import { BrowserRouter as Router, Route } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <TopNavBar />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
