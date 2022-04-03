import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      <Container>
        <Row className="mt-5 pb-5">
          <Col className="contact-details-col" sm="12" md="4" lg="3">
            <h2 className="pb-2">Contact</h2>
            <ul className="contact-items">
              <div className="mb-0 pb-0">
                <p>
                  Andrew J Fleming
                  <br />
                  Seattle, WA 98109
                </p>
              </div>
              <li>
                <div className="contact-icon-wrapper">
                  <i className="far fa-envelope contact-icon"></i>
                </div>
                <a href="mailto: aflemi1@gmail.com">aflemi1@gmail.com</a>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <i className="fas fa-phone contact-icon"></i>
                </div>
                <a href="tel:+2064718342">(206) 471-8342</a>
              </li>
              <li>
                <div className="contact-icon-wrapper">
                  <i className="fab fa-linkedin contact-icon"></i>
                </div>
                <a href="https://www.linkedin.com/in/andrew-j-fleming-web-dev/">
                  LinkedIn Profile
                </a>
              </li>
            </ul>
            <h5 className="pb-2">Other Links</h5>
            <ul className="contact-items">
              <li>
                <div className="contact-icon-wrapper">
                  <i className="fab fa-github"></i>
                </div>
                <a href="https://github.com/AndrewJFleming">GitHub Profile</a>
              </li>
            </ul>
          </Col>
          <Col className="contact-image-col" md="8" lg="9">
            <img
              width="100%"
              src="https://gist.githubusercontent.com/AndrewJFleming/c742db49a4fada9802f2dc4a2734ae01/raw/e24a14e725a589d6ec9069a26c1858632d13194a/illust-8.svg"
              alt="Andrew J Fleming contact page svg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
