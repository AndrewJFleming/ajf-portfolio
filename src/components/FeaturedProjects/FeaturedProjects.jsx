import React from "react";

import { Container } from "react-bootstrap";
import { projectRows } from "../../data.js";
import FeaturedProjectRow from "./FeaturedProjectRow/FeaturedProjectRow.jsx";

const Projects = () => {
  //Exclude the <hr/> element in the final ProjectRow component of the processedRows array.
  let processedRows = [];
  for (let i = 0; i < projectRows.length; i++) {
    if (i < projectRows.length - 1) {
      projectRows[i].hasDivider = true;
    } else {
      projectRows[i].hasDivider = false;
    }
    processedRows.push(projectRows[i]);
  }

  return (
    <div className="projects-wrapper pt-2 pb-5">
      <Container>
        {processedRows.map((r) => (
          <FeaturedProjectRow
            rowTitle={r.title}
            rowType={r.type}
            rowDesc={r.desc}
            rowProjects={r.projects}
            includeDivider={r.hasDivider}
            key={r.id}
          />
        ))}
      </Container>
    </div>
  );
};
export default Projects;
