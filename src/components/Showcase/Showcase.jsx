import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import ShowcaseImage from "../../images/showcase-rock.png";

import "./Showcase.css";

const Showcase = () => {
  return (
    <div className="showcase-wrapper">
      <div className="showcase-col-left">
        <img className="showcase-image" src={ShowcaseImage} />
      </div>
      <div className="p-4 showcase-content-wrapper showcase-col-right">
        <div className="showcase-content">
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
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Showcase;
