import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contactMe-wrapper">
      <Container>
        <Row className="p-3">
          <Col md="8" className="text-center">
            <h2>Contact me today</h2>
          </Col>
          <Col md="4" className="text-center">
            <button>Get in touch</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactMe;
