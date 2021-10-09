import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from '../src/about/About';
import Home from '../src/home/Home';
import Projects from '../src/projects/Projects';
import Contact from '../src/contact/Contact';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


function App() {
  return (
    <Router>
      <div className="app">
      <div className="header">
        <h1 className="main_title">Kristen Ingelman</h1>
      {/*<div className="header_icons">
          <a target="_blank" href="https://www.linkedin.com/in/kristen-ingelman/">
              <LinkedInIcon />
          </a>
          <a target="_blank" href="https://github.com/kristenIngelman98">
              <GitHubIcon />
          </a>
    </div> */}
          <nav className="navigation_menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
  </div>

    <div className="header_icons">
          <a target="_blank" href="https://www.linkedin.com/in/kristen-ingelman/">
              <LinkedInIcon />
          </a>
          <a target="_blank" href="https://github.com/kristenIngelman98">
              <GitHubIcon />
          </a>
    </div>

      </div>

      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
