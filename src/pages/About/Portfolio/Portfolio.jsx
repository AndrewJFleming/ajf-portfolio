import React from "react";

import CategoryItem from "../../../components/CategoryItem/CategoryItem.jsx";
import { projectRows } from "../../../data.js";
import { Container } from "react-bootstrap";

const Portfolio = () => {
  return (
    <Container className="py-5">
      <h2>All Projects</h2>
      {projectRows?.map((category) => (
        <CategoryItem category={category} isPortfolio={true} />
      ))}
    </Container>
  );
};

export default Portfolio;
