import React from "react";
import { Link } from "react-router-dom";

import { Col } from "react-bootstrap";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <Col md="4" className="text-center project-item-col">
      <Link to={`/projects/${project.slug}`}>
        <img src={project.img} alt={`${project.title} project list thumb`} />
      </Link>
      <Link to={`/projects/${project.slug}`}>
        <h3 className="pt-2">{project.title}</h3>
      </Link>
      <p>{project.brief}</p>
    </Col>
  );
};
export default Project;
