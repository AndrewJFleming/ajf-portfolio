import React from "react";

import { projectRows } from "../../../data.js";
import { Container } from "react-bootstrap";
import ProjectRow from "../../../components/ProjectRow/ProjectRow.jsx";

const Portfolio = () => {
  return (
    <Container>
      <h2>All Projects</h2>
      {projectRows?.map((projectRow) => (
        <ProjectRow projectRow={projectRow} parentComponent="Portfolio" />
      ))}
    </Container>
  );
};

export default Portfolio;
