import React from 'react'
import { HashRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import TopNav from "./components/TopNav/TopNav";

function App() {
  return (
    <div className="app-content-wrapper">
    <div className="app-content">

      <HashRouter>
        <TopNav />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
    </div>
  );
}

export default App;
