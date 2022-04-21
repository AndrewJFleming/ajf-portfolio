import React from "react";
import { Link } from "react-router-dom";

import { Row } from "react-bootstrap";
import Project from "./Project/Project";
import "./ProjectRow.css";

const ProjectRow = ({ projectRow, parentComponent }) => {
  return (
    <React.Fragment>
      <Row
        id={projectRow.type}
        className="featured-projects-row-header-wrapper"
      >
        <div
          className={`${
            parentComponent !== "Portfolio" ? "text-center w-100" : ""
          }`}
        >
          {parentComponent === "Portfolio" ? (
            <Link to={`/categories/${projectRow.type}`}>
              <h4 className="project-row-header">{projectRow.title}</h4>
            </Link>
          ) : (
            <React.Fragment>
              <Link to={`/categories/${projectRow.type}`}>
                <h4>{projectRow.title}</h4>
              </Link>
              <h6 className="project-row-header">{projectRow.desc}</h6>
            </React.Fragment>
          )}
        </div>
      </Row>
      <Row
        className={`featured-projects-wrapper ${
          parentComponent !== "FeaturedProjects" ? "justify-content-start" : ""
        }`}
      >
        {parentComponent === "FeaturedProjects"
          ? projectRow.projects
              .filter((p) => p.isFeatured)
              .map((p) => <Project key={p.id} project={p} />)
          : projectRow.projects.map((p) => (
              <Project
                key={p.id}
                project={p}
                parentComponent={parentComponent}
              />
            ))}
      </Row>
    </React.Fragment>
  );
};
export default ProjectRow;
