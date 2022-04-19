import React from "react";
import { Link } from "react-router-dom";

import PortfolioProject from "./PortfolioProject/PortfolioProject";
import { Row } from "react-bootstrap";
import "./PortfolioProjectRow.css";

const PortfolioProjectRow = ({ category, isSingleCategory }) => {
  return (
    <div className="portfolio-category-wrapper">
      {isSingleCategory ? (
        <React.Fragment>
          <h4>{category.title}</h4>
          <h6 className="project-row-header">{category.desc}</h6>
        </React.Fragment>
      ) : (
        <Link to={`/categories/${category.type}`}>
          <h4 className="project-row-header">{category.title}</h4>
        </Link>
      )}
      <Row>
        {category.projects.map((project) => (
          <PortfolioProject project={project} />
        ))}
      </Row>
    </div>
  );
};

export default PortfolioProjectRow;
