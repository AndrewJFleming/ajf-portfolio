import React from "react";
import { Link } from "react-router-dom";

import ShowcaseImage from "../../assets/images/showcase-rock.png";

import "./Showcase.css";

const Showcase = () => {
  return (
    <div className="showcase-wrapper">
      <div className="showcase-image-wrapper">
        <img className="showcase-image" src={ShowcaseImage} />
      </div>
      <div className="p-4 showcase-info-wrapper">
        <div className="showcase-info">
          <div>
            <h5 style={{ color: "rgba(0, 0, 0, 0.75)" }}>
              Seattle-based Freelancer
            </h5>
            <h2>ANDREW FLEMING</h2>
            <h2 style={{ color: "#fdfff5" }}>FRONTEND DEVELOPER</h2>
          </div>
          <p>
            I’m a freelance web developer from Seattle, Washington, who is
            passionate about building modern, responsive websites. I build MERN
            stack web apps with complete create, read, update and delete
            functionality.
          </p>
          <div>
            <Link to="/about">
              <button>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Showcase;
