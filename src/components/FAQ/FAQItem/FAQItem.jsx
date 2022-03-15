import React, { useState } from "react";

import "./FAQItem.css";

const FAQItem = ({ question, answer, answerList, defaultSetting }) => {
  const [expanded, setExpanded] = useState(defaultSetting);

  return (
    <React.Fragment>
      <div
        className="faq-q-wrapper p-3 mb-1"
        onClick={() => setExpanded(!expanded)}
      >
        <h6 className="sans-serif">
          {expanded ? (
            <i class="fas fa-caret-down caret" />
          ) : (
            <i class="fas fa-caret-right caret" />
          )}
          &nbsp; <span className="faq-q">{question}</span>
        </h6>
      </div>
      {expanded && (
        <div className="faq-a-wrapper ">
          <p className="faq-a">{answer}</p>
          {answerList && (
            <ul className="answer-list">
              {answerList.map((listItem) => (
                <li>{listItem}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </React.Fragment>
  );
};
export default FAQItem;
