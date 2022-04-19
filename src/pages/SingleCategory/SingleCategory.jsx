import React from "react";
import { useParams } from "react-router-dom";

import CategoryItem from "../../components/CategoryItem/CategoryItem.jsx";
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
            <CategoryItem category={category} isPortfolio={false} />
          ))}
      </Container>
    </div>
  );
};

export default SingleCategory;
