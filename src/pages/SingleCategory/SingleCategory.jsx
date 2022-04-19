import React from "react";
import { useParams } from "react-router-dom";

import PortfolioProjectRow from "../../components/PortfolioProjectRow/PortfolioProjectRow.jsx";
import { projectRows } from "../../data.js";
import { Container } from "react-bootstrap";

const SingleCategory = () => {
  const { categorySlug } = useParams();
  return (
    <div>
      <Container>
        {projectRows
          .filter((productRow) => productRow.type === categorySlug)
          .map((category) => (
            <PortfolioProjectRow category={category} isSingleCategory={true} />
          ))}
      </Container>
    </div>
  );
};

export default SingleCategory;
