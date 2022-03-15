import React from "react";

import { Col } from "react-bootstrap";

import "./Technology.css";

const Technology = ({ technology, techIndex }) => {
  return (
    <Col md="4" className="pt-5 text-center">
      {/* <i className={`${technology.icon} tech-icon pb-4`}></i> */}
      <img src={technology.img} height="200px" className="pb-4" />
      <h3>{technology.title}</h3>
      <p>{technology.desc}</p>
    </Col>
  );
};
export default Technology;
