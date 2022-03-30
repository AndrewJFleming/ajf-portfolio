import React from "react";

import { Col } from "react-bootstrap";

const Technology = ({ technology, techIndex }) => {
  return (
    <Col md="4" className="pt-5 text-center">
      <img
        src={technology.img}
        height="200px"
        alt={`${technology.title} plant svg graphic`}
        className="pb-4"
      />
      <h3>{technology.title}</h3>
      <p>{technology.desc}</p>
    </Col>
  );
};
export default Technology;
