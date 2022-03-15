import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <Container>
        <Row>Footer row (top)</Row>
        <Row>
          <a>Footer row (bottom)</a>
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
