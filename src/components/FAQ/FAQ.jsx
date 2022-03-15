import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Portrait from "../../images/portrait.png";
import { faqItems } from "../../data.js";

import "./FAQ.css";
import FAQItem from "./FAQItem/FAQItem";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="faq-content-wrapper">
      <Container className="py-5">
        <Row className="p-3">
          <Col md="8">
            {faqItems.map((item) => (
              <FAQItem
                question={item.question}
                answer={item.answer}
                answerList={item?.list}
                defaultSetting={item.isDefaultOpen}
              />
            ))}
          </Col>
          <Col md="4" className="text-center">
            <img width="100%" src={Portrait} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FAQ;
