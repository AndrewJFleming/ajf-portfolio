import React from "react";

import { Row, Col } from "react-bootstrap";
import Project from "./Project/Project";

import "./ProjectRow.css";

const ProjectRow = ({ rowTitle, rowDesc, rowProjects, includeDivider }) => {
  return (
    <React.Fragment>
      <Row className="pt-5">
        <Col className="text-center">
          <h3>{rowTitle}</h3>
          <p>{rowDesc}</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {rowProjects.map((p) => (
          <Project key={p.id} project={p} />
        ))}
      </Row>
      {includeDivider && <hr />}
    </React.Fragment>
  );
};
export default ProjectRow;
