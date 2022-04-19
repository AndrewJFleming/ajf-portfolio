import React from "react";

import { Row, Col } from "react-bootstrap";
import Project from "./Project/Project";

const ProjectRow = ({
  rowTitle,
  rowType,
  rowDesc,
  rowProjects,
  includeDivider,
}) => {
  return (
    <React.Fragment>
      <Row id={rowType} className="pt-4 pb-2">
        <Col className="text-center">
          <h3>{rowTitle}</h3>
          <p>{rowDesc}</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {rowProjects
          .filter((p) => p.isFeatured)
          .map((p) => (
            <Project key={p.id} project={p} />
          ))}
      </Row>
      {includeDivider && <hr />}
    </React.Fragment>
  );
};
export default ProjectRow;
