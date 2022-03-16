import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container>
        <div className="footer-top-wrapper">
          <p>
            <span>Copyright © 2022</span> · Andrew J Fleming
          </p>
        </div>
        <div className="footer-bottom-wrapper">
          <ul className="footer-list">
            <li className="footer-list-item">
              <Link>Home</Link>
            </li>
            <li className="footer-list-item">
              <Link>Portfolio</Link>
            </li>
            <li className="footer-list-item">
              <Link>About</Link>
            </li>
            <li className="footer-list-item">
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
