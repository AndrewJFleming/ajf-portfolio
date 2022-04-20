import React from "react";
import { Link } from "react-router-dom";

import { Col } from "react-bootstrap";
import "./Project.css";

const Project = ({ project, parentComponent }) => {
  return (
    <Col
      md={parentComponent === "Portfolio" ? "3" : "4"}
      className={`text-center project-item-col ${
        parentComponent === "Portfolio" ? "portfolio-page-project" : ""
      }`}
    >
      <Link to={`/projects/${project.slug}`}>
        <img src={project.img} alt={`${project.title} project list thumb`} />
      </Link>
      <Link to={`/projects/${project.slug}`}>
        {parentComponent === "Portfolio" ? (
          <p>{project.title}</p>
        ) : (
          <h3>{project.title}</h3>
        )}
      </Link>
      {parentComponent !== "Portfolio" && (
        <p
          className="brief-description"
          dangerouslySetInnerHTML={{ __html: project.brief }}
        ></p>
      )}
    </Col>
  );
};
export default Project;
