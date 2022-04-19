import React from "react";
import { Link } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import FeaturedProject from "./FeaturedProject/FeaturedProject";

const ProjectRow = ({
  rowTitle,
  rowType,
  rowDesc,
  rowSlug,
  rowProjects,
  includeDivider,
}) => {
  return (
    <React.Fragment>
      <Row id={rowType} className="pt-4 pb-2">
        <Col className="text-center">
          <Link to={`/categories/${rowSlug}`}>
            <h3>{rowTitle}</h3>
          </Link>
          <p>{rowDesc}</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {rowProjects
          .filter((p) => p.isFeatured)
          .map((p) => (
            <FeaturedProject key={p.id} project={p} />
          ))}
      </Row>
      {includeDivider && <hr />}
    </React.Fragment>
  );
};
export default ProjectRow;
