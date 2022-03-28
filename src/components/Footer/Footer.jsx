import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container>
        <div className="footer-top-wrapper">
          <ul className="footer-top-list">
            <li className="footer-top-list-item">
              <Link to="/">Home</Link>
            </li>
            <li className="footer-top-list-item">
              <Link to="/about">About</Link>
            </li>
            <li className="footer-top-list-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-middle-wrapper">
          <p>
            <span>Copyright © 2022</span> · Andrew J Fleming
          </p>
        </div>
        <div className="footer-bottom-wrapper">
          <ul className="footer-bottom-list">
            <li className="footer--bottom-list-item">
              <a href="https://github.com/AndrewJFleming/AndrewJFleming">
                GitHub Profile
              </a>
            </li>
            <li className="footer--bottom-list-item">
              <a href="https://www.linkedin.com/in/andrew-j-fleming-web-dev/">
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
export default Footer;
