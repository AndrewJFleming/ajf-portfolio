import React from "react";

import PortfolioProjectRow from "../../../components/PortfolioProjectRow/PortfolioProjectRow.jsx";
import { projectRows } from "../../../data.js";
import { Container } from "react-bootstrap";

const Portfolio = () => {
  return (
    <Container className="py-5">
      <h2>All Projects</h2>
      {projectRows?.map((category) => (
        <PortfolioProjectRow category={category} isPortfolio={false} />
      ))}
    </Container>
  );
};

export default Portfolio;
