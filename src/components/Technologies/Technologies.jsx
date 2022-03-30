import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Technology from "./Technology/Technology";
import { technologies } from "../../data.js";
import "./Technologies.css";

const Technologies = () => {
  return (
    <div className="techs-wrapper py-5">
      <Container>
        <Row>
          <Col className="text-center">
            <h3>MERN stack with a focus on Frontend Development</h3>
            <p>
              As a React developer, I’m focused on frontend development.
              However, having learned the full MERN stack, I also build RESTful
              APIs.
            </p>
          </Col>
        </Row>
        <Row>
          {technologies.map((tech) => (
            <Technology key={tech.id} technology={tech} />
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Technologies;
