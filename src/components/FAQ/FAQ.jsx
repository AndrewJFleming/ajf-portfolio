import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Portrait from "../../assets/images/portrait.png";
import FAQItem from "./FAQItem/FAQItem";
import { faqItems } from "../../data.js";
import "./FAQ.css";

const FAQ = () => {
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
                key={item.id}
              />
            ))}
          </Col>
          <Col md="4" className="text-center faq-image-col">
            <img width="100%" src={Portrait} alt="faq side portrait" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FAQ;
