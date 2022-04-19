import React from "react";
import { Link } from "react-router-dom";

import { Col } from "react-bootstrap";

const PortfolioProject = ({ project }) => {
  return (
    <Col md="3" lg="3" className="portfolio-item">
      <div className="portfolio-item-image-wrapper">
        <Link to={`/projects/${project.slug}`}>
          <img src={project.img} alt={project.title} />
        </Link>
      </div>
      <Link to={`/projects/${project.slug}`}>
        <p className="portfolio-item-title">{project.title}</p>
      </Link>
    </Col>
  );
};

export default PortfolioProject;
