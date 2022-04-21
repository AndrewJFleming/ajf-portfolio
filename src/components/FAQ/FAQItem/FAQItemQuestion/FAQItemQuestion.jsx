import React from "react";

import "./FAQItemQuestion.css";

const FAQItemQuestion = ({ question, expanded, setExpanded }) => {
  return (
    <div
      role="button"
      className="faq-q-wrapper"
      onClick={() => setExpanded(!expanded)}
    >
      <h6 className="sans-serif">
        {expanded ? (
          <i className="fas fa-caret-down caret" />
        ) : (
          <i className="fas fa-caret-right caret" />
        )}
        &nbsp; <span className="faq-q">{question}</span>
      </h6>
    </div>
  );
};
export default FAQItemQuestion;
