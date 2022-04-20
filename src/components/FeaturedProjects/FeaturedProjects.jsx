import React from "react";

import { Container } from "react-bootstrap";
import { projectRows } from "../../data.js";
import ProjectRow from "../ProjectRow/ProjectRow.jsx";

const FeaturedProjects = () => {
  return (
    <div className="pt-2 pb-5">
      <Container>
        {projectRows.map((projectRow) => (
          <ProjectRow
            projectRow={projectRow}
            parentComponent="FeaturedProjects"
          />
        ))}
      </Container>
    </div>
  );
};
export default FeaturedProjects;
