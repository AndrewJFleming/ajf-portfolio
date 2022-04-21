import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import TopNav from "./components/TopNav/TopNav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import SingleProject from "./pages/SingleProject/SingleProject";
import Portfolio from "./pages/About/Portfolio/Portfolio";
import SingleCategory from "./pages/SingleCategory/SingleCategory";

function App() {
  return (
    <div className="app-content-wrapper">
      <div className="app-content">
        <TopNav />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/portfolio" element={<Portfolio />}></Route>
          <Route
            path="/categories/:categorySlug"
            element={<SingleCategory />}
          ></Route>
          <Route
            path="/projects/:projectSlug"
            element={<SingleProject />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
