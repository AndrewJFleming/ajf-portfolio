import React from "react";
import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import "./CategoryItem.css";

const CategoryItem = ({ category, isPortfolio }) => {
  return (
    <div className="portfolio-category-wrapper">
      {isPortfolio ? (
        <Link to={`/categories/${category.type}`}>
          <h4 className="project-row-header">{category.title}</h4>
        </Link>
      ) : (
        <React.Fragment>
          <h4>{category.title}</h4>
          <h6 className="project-row-header">{category.desc}</h6>
        </React.Fragment>
      )}
      <Row>
        {category.projects.map((project) => (
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
        ))}
      </Row>
    </div>
  );
};

export default CategoryItem;
