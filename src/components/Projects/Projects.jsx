import React, { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
import { projectRows } from "../../data.js";
import ProjectRow from "./ProjectRow/ProjectRow.jsx";
import "./Projects.css";

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
    <div className="projects-wrapper pb-5">
      <Container>
        {processedRows.map((r) => (
          <ProjectRow
            rowTitle={r.title}
            rowDesc={r.desc}
            rowProjects={r.projects}
            includeDivider={r.hasDivider}
          />
        ))}
      </Container>
    </div>
  );
};
export default Projects;
