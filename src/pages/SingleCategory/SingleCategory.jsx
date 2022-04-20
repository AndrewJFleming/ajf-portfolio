import React from "react";
import { useParams } from "react-router-dom";

import { projectRows } from "../../data.js";
import { Container } from "react-bootstrap";
import ProjectRow from "../../components/ProjectRow/ProjectRow.jsx";

const SingleCategory = () => {
  const { categorySlug } = useParams();
  return (
    <div>
      <Container>
        {projectRows
          .filter((productRow) => productRow.type === categorySlug)
          .map((projectRow) => (
            <ProjectRow
              projectRow={projectRow}
              parentComponent="SingleCategory"
            />
          ))}
      </Container>
    </div>
  );
};

export default SingleCategory;
