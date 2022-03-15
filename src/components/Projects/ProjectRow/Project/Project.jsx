import React from "react";

import { Col } from "react-bootstrap";

import "./Project.css";

const Project = ({ project }) => {
  return (
    <Col md="4" className="text-center">
      <img width="150px" src={project.img} />
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
    </Col>
  );
};
export default Project;
