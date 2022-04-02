import React from "react";
import { HashLink } from "react-router-hash-link";

import "./AboutIndex.css";

const AboutIndex = () => {
  return (
    <div className="about-page-index">
      <h5>About Page Index:</h5>
      <ul>
        <li>
          <HashLink to="/about/#intro">Introduction</HashLink>
        </li>
        <li>
          <HashLink to="/about/#highlightedExp">
            Highlighted Professional Experience
          </HashLink>
        </li>
        <ul>
          <li>
            <HashLink to="/about/#poi">Portraits of Iowa</HashLink>
          </li>
          <li>
            <HashLink to="/about/#artistPortfolio">Artist Portfolios</HashLink>
          </li>
          <li>
            <HashLink to="/about/#mernProjects">MERN Stack Projects</HashLink>
          </li>
        </ul>
        <li>
          <HashLink to="/about/#explore">Exploring My Projects</HashLink>
        </li>
        <li>
          <HashLink to="/about/#education">Education</HashLink>
        </li>
      </ul>
    </div>
  );
};
export default AboutIndex;
