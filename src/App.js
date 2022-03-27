import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import TopNav from "./components/TopNav/TopNav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SingleProject from "./pages/SingleProject/SingleProject";

function App() {
  return (
    <div className="app-content-wrapper">
      <div className="app-content">
        <Router>
          <TopNav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/projects/:projectSlug">
              <SingleProject />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
