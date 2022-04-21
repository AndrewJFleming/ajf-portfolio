import React from "react";
import { Link } from "react-router-dom";

import { Col } from "react-bootstrap";
import "./Project.css";

const Project = ({ project, parentComponent }) => {
  return (
    <Col
      xs={parentComponent === "Portfolio" ? "6" : "12"}
      sm={parentComponent === "Portfolio" ? "4" : "6"}
      md={parentComponent === "Portfolio" ? "3" : "4"}
      className={`text-center project-item-col ${
        parentComponent === "Portfolio" ? "portfolio-page-project-col" : ""
      }`}
    >
      <Link to={`/projects/${project.slug}`}>
        <img src={project.img} alt={`${project.title} project list thumb`} />
      </Link>
      <br />
      {parentComponent === "Portfolio" ? (
        <Link
          className="portfolio-project-title"
          to={`/projects/${project.slug}`}
        >
          {project.title}
        </Link>
      ) : (
        <Link className="serif-link-title" to={`/projects/${project.slug}`}>
          {project.title}
        </Link>
      )}
      <div className="external-links-wrapper">
        {project.gitHub && <a href={project.gitHub}>GitHub</a>}
        {project.gitHub && project.demo && <span> / </span>}
        {project.demo && <a href={project.demo}>Website</a>}
      </div>
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
